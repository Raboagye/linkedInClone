import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import "./Signup.css"
import { login } from "../../Redux/userSlice";

const Signup = ({goBack}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")

    const dispatch = useDispatch()


    const register = (e) => {
        e.preventDefault()
        if(!name) {
            return (
                alert("Please Enter your full name")
            )
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            }).then(()=> {
                console.log(userAuth)
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    photoUrl: profilePic,
                    displayName: name
                }))
                
            }).catch((error) => {
                return(
                    alert(error.message)
                )
            })
        })

    }

    return (
        <div className="signUp">
            <div className="signUp__container">
                <h2>Make the most of your professional life</h2>
                <div className="signUp__details">
                    <form className="signUp__content">
                        <div className="signUp__inputs">
                            <input value={name} type="text" placeholder="Full Name (required if Registering)" onChange={(e) => setName(e.target.value)}/>
                            <input value={profilePic} type="text" placeholder="Profile Pic URL (Optional)" onChange={(e) => setProfilePic(e.target.value)} />
                            <input value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            <input value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="signUp__info">
                            <p>By clicking Agree & Join, you agree to the LinkedIn <span className="user__agreement">User Agreement,</span> <span className="privacy__policy">Privacy Policy,</span> and <span className="cookie__policy">Cookie Policy.</span></p>
                        </div>
                        <button className="agree__join" onClick={register}>Agree & Join</button>
                    </form>
                    <div className="or">
                        <div className="or__hrr">
                            <hr />
                            <p>or</p>
                            <hr />
                        </div>
                        <div className="google__buttonn">
                            <button className="or__googlee">
                                <img className="button__logo" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
                                Sing in with Google
                            </button>
                        </div>
                    </div>
                    <p className="already__here">Already on LinkedIn? <span className="sign__in" onClick={goBack}>Sign in</span></p>
                </div>

            </div>


        </div>
     );
}
 
export default Signup;