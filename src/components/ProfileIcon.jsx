import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/M_Logo.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
    return (
        <div className="flex gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05] ">
                <TbGridDots/>
            </span>
            <span className="flex h-10 w-10 relative justify-center items-center">
                <img className="absolute" src={ProfileRing} alt="" />
                <span className="h-8 w-8 rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={Profile} alt="" />
                </span>
            </span>
        </div>
    );
};

export default ProfileIcon;
