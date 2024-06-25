import { MdOutlineDashboard } from "react-icons/md";

import { MdDashboard } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";


import { BsChatSquareQuote } from "react-icons/bs";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { AiOutlinePropertySafety } from "react-icons/ai";
import { AiFillPropertySafety } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { MdOutlineBugReport } from "react-icons/md";
import { MdBugReport } from "react-icons/md";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export const Icons = {
    Home: {
        default: <MdOutlineDashboard size={20} />,
        active: <MdDashboard size={20} />
    },
    users:{
        default: <FaRegUser size={20} />,
        active: <FaUser size={20} />
    },
    maintaenance: {
        default: <BsChatSquareQuote size={20} />,
        active: <BsChatSquareQuoteFill size={20} />
    },
    properties: {
        default: <AiOutlinePropertySafety size={20} />,
        active: <AiFillPropertySafety size={20} />
    },
    bookings: {
        default: <FaRegBookmark size={24} />,
        active: <FaBookmark size={24} />
    },
    verification:{
        default: <MdOutlineVerified size={20} />,
        active: <RiVerifiedBadgeFill size={20} />
    },
    history:{
        default: <MdOutlineWorkHistory size={20} />,
        active: <MdWorkHistory size={20} />
    },
    Reports:{
        default: <MdOutlineBugReport size={20} />,
        active: <MdBugReport size={20} />
    },
    Setting:{
        default: <FaRegBookmark size={20} />,
        active: <FaBookmark size={20} />
    },
    eye:{
        default:<IoEyeOffOutline/>,
        active:<IoEyeOutline/>
    },
    arrow:{
        default:<IoIosArrowDroprightCircle size={20}/>,
    },
    close:{
        default:<IoCloseCircleSharp size={30}/>,
        active:<FaArrowAltCircleLeft size={20}/>
    }

}