import "./ProfileApp.css";
import ProfileDescription from "./components/ProfileDescription";
import ProfileImage from "./components/ProfileImage";

export default function ProfileApp() {
    return (
        <div className="container profile-app-container">
            <div className="row align-items-center">
                <div className="col-md-7">
                    <ProfileDescription />
                </div>
                <div className="col-md-5">
                    <ProfileImage />
                </div>
            </div>
        </div>
    );
}