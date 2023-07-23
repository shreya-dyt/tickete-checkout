import "./Header.scss";

import { Tickete } from "../../../Constant/Strings/strings";
import { ReactComponent as HelpQuestion } from "../../../Constant/Svg/HelpQuestion.svg"

const Header = () => {
    return (
        <div className="header-container">
            <div className="tickete-title">{Tickete}</div>
            <div className="help-section">
                <HelpQuestion /><span style={{ fontSize: "1.8rem", marginLeft: ".8rem" }}>Help</span>
            </div>
        </div>
    )
}

export default Header