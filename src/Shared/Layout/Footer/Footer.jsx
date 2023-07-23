import "./Footer.scss";
import { ReactComponent as Instagram } from "../../../Constant/Svg/Instagram.svg"
import { ReactComponent as Facebook } from "../../../Constant/Svg/Facebook.svg"
import { ReactComponent as Twitter } from "../../../Constant/Svg/Twitter.svg"

import { Tickete, footerTab1, footerTab2, footerTab3, footerTab4 } from "../../../Constant/Strings/strings";

const Footer = () => {
    return (
        <div className='footer-cont'>
            <div className="title">{Tickete}</div>
            <div className="footer-sub">
                <div className="links">
                    <a href="">{footerTab1}</a>
                    <a href="">{footerTab2}</a>
                    <a href="">{footerTab3}</a>
                    <a href="">{footerTab4}</a>
                </div>
                <div className="social-icons">
                    <div><Instagram /></div>
                    <div><Facebook /></div>
                    <div><Twitter /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer