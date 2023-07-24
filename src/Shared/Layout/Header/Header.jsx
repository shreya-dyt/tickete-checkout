import "./Header.scss";

import { Tickete } from "../../../Constant/Strings/strings";
import { ReactComponent as HelpQuestion } from "../../../Constant/Svg/HelpQuestion.svg"
import { ReactComponent as BackArrow } from "../../../Constant/Svg/BackArrow.svg"

const Header = () => {
    return (
        <div className="header-container">
            <div className="tickete-title">{Tickete}</div>
            <div className="help-section">
                <HelpQuestion /><span style={{ fontSize: "1.8rem", marginLeft: ".8rem" }}>Help</span>
            </div>
            {window.innerWidth < 400 ?
                <div className="back-arrow">
                    <BackArrow />
                </div>
                :
                null
            }
        </div>
    )
}

export default Header