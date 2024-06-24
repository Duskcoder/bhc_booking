import { MdOutlineDashboard } from "react-icons/md";

import { MdDashboard } from "react-icons/md";


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

export const Icons = {
    Home: {
        default: <MdOutlineDashboard size={25} />,
        active: <MdDashboard size={25} />
    },
    maintaenance: {
        default: <BsChatSquareQuote size={25} />,
        active: <BsChatSquareQuoteFill size={25} />
    },
    properties: {
        default: <AiOutlinePropertySafety size={25} />,
        active: <AiFillPropertySafety size={25} />
    },
    bookings: {
        default: <FaRegBookmark size={24} />,
        active: <FaBookmark size={24} />
    },
    verification:{
        default: <MdOutlineVerified size={25} />,
        active: <RiVerifiedBadgeFill size={25} />
    },
    history:{
        default: <MdOutlineWorkHistory size={25} />,
        active: <MdWorkHistory size={25} />
    },
    Reports:{
        default: <MdOutlineBugReport size={25} />,
        active: <MdBugReport size={25} />
    },
    Setting:{
        default: <FaRegBookmark size={25} />,
        active: <FaBookmark size={25} />
    }

}