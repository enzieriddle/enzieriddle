import "./ProfileImage.css";
import profileImg from "./profile-img.png";

export default function ProfileImage() {
    return(
    <div className="container mx-auto d-block">
        <div className="profile-image mx-auto d-block">
            <img className="mx-auto d-block" src={profileImg} alt="Enzie Riddle sitting on stairs" />
        </div>
    </div>
    
    );
}