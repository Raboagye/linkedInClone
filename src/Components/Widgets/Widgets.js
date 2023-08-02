import Feed from "./Feed/Feed";
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import EastIcon from '@mui/icons-material/East';

const Widgets = () => {
    return ( 
        <div className="widget">
            <div className="widget__feed">
                <div className="text">
                    <h4>Add to your feed</h4>
                    <InfoIcon className="infoIcon" />
                </div>
                <Feed name="ANZ OILFIELD SERVICES" description="Company - Oil and Gas" url="https://media.licdn.com/dms/image/C4D0BAQHkG9J1s6J9Gw/company-logo_200_200/0/1651649810133?e=1683763200&v=beta&t=y9AbFej11UdZDP2Thh7-pXuss3mbxzU1R7MOuCvvXbk"/>
                <Feed name="Elon Musk" description="Chief Executive Officer - Twitter" url="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?resize=1200:*"/>
                <Feed name="Richard Aboagye" description="Frontend Developer" url="https://media.licdn.com/dms/image/C4E03AQEThFMmZhNe2Q/profile-displayphoto-shrink_400_400/0/1653119386282?e=1680739200&v=beta&t=k6f1m2X7nL28eON9PFTRJk0AGQAijgac-nPxeOt3RGQ"/>
                <div className="recommendation">
                    <h4>View all recommendations</h4>
                    <EastIcon className="eastIcon" />
                </div>
            </div>
            
        </div>
     );
}
 
export default Widgets;