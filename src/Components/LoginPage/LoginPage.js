import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { login } from "../../Redux/userSlice";
import "./LoginPage.css"
import Signup from "./Signup";


const LoginPage = () => {

    const [authSignIn, setAuthSignIn] = useState("")
    const [authPassword, setAuthPassword] = useState("")
    const dispatch = useDispatch()

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(authSignIn, authPassword).then((authUser) => {
            console.log(authUser)
            dispatch(login({
                email: authUser.user.email,
                uid: authUser.user.uid,
                photoUrl: authUser.user.photoURL,
                displayName: authUser.user.displayName
            }))
        }).catch(error => alert(error.message))
    }

    const [signUp, setSignUp] = useState(!true)

    const SigningUp = () => {
        setSignUp(!signUp)
    }

    const Login = () => {
        setSignUp(!signUp)
    }


    useEffect(() => {
        window.localStorage.setItem("statme", signUp)
        setSignUp(signUp)

    }, [signUp])


    useEffect(() => {
        const data = window.localStorage.getItem("statme")
        if (data) {
            setSignUp(data)
        }

    },[])

   
    return ( 
        <div className="loginPage__container">
                <img className="loginPage__image" src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png" alt="LinkedIn sign up logo" />
            {!signUp ? <Signup goBack={Login} /> : (
                <div className="loginPage__details">
                    <div className="loginpage__details__content">
                        <h2>Welcome to your Professional Community</h2>
                        <div className="Loginpage__form">
                            <form>
                                <div className="inputs">
                                    <input value={authSignIn} type="email" placeholder="Email" onChange={(e) => setAuthSignIn(e.target.value)} />
                                    <input value={authPassword} type="password" placeholder="Password" onChange={(e) => setAuthPassword(e.target.value)} />
                                </div>
                                <h4>Forgot Password?</h4>
                                <button className="buttom__submit" type="submit" onClick={signIn}>Sign in</button>
                            </form>
                            <div className="or">
                                <div className="or__hr">
                                    <hr />
                                    <p>or</p>
                                    <hr />
                                </div>
                                <div className="google__button">
                                    <button className="or__google">
                                        <img className="button__logo" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
                                        Sing in with Google
                                    </button>
                                </div>
                                <div className="join__now">
                                    <button className="or__join" onClick={SigningUp}>New to LinkedIn? Join now</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            )}
            

        </div>
     );
}
 
export default LoginPage;