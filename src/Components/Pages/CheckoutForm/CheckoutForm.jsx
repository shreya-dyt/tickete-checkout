import "./CheckoutForm.scss";

//shared files
import Header from "../../../Shared/Layout/Header/Header";
import {
    confirmandpay, EnterDetails, SubDetails, coverImageSubtext, TicketsOverview,
    paxType, price, fee, discountApplied, Price, PromoCodeText, Total, payInCurr,
    FreeCancelText, subCancelText, AdditionalInformation, AdditionalInfoSubText,
    selectMode, selectModeSubText, CreditCard, klarna, totalPrice, totalPriceSubText, TnC, activityProvider, confirmPayText, FrequentlyQ, questionOne, answerOne, questionTwo, answerTwo, TicketPromise, OfficialticketsSub, Officialtickets, OfficialticketsSub1, Officialtickets1, Officialtickets2, OfficialticketsSub2, Officialtickets3, OfficialticketsSub3, dropdown
} from "../../../Constant/Strings/strings";
import InputField from "../../../Shared/UIComponents/InputField/InputField";

import { useState } from "react";

//components used as svg
import { ReactComponent as Calendar } from "../../../Constant/Svg/Calendar.svg"
import { ReactComponent as Clock } from "../../../Constant/Svg/Clock.svg"
import { ReactComponent as Varient } from "../../../Constant/Svg/Varient.svg"
import { ReactComponent as PromoCode } from "../../../Constant/Svg/PromoCode.svg"
import { ReactComponent as MasterFlag } from "../../../Constant/Svg/MasterFlag.svg"
import { ReactComponent as MasterCard } from "../../../Constant/Svg/MasterCard.svg"
import { ReactComponent as Klarna } from "../../../Constant/Svg/Klarna.svg"
import { ReactComponent as Shield } from "../../../Constant/Svg/Shield.svg"
import { ReactComponent as ChatIcon } from "../../../Constant/Svg/ChatIcon.svg"
import { ReactComponent as Minus } from "../../../Constant/Svg/Minus.svg"
import { ReactComponent as Plus } from "../../../Constant/Svg/Plus.svg"
import { ReactComponent as Tick } from "../../../Constant/Svg/Tick.svg"
import { ReactComponent as CalendarGrey } from "../../../Constant/Svg/CalendarGrey.svg"
import { ReactComponent as ShieldBlue } from "../../../Constant/Svg/ShieldBlue.svg"
import { ReactComponent as VisaLogo } from "../../../Constant/Svg/VisaLogo.svg"

import Footer from "../../../Shared/Layout/Footer/Footer";




const CheckoutForm = () => {
    const [show, setShow] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);
    const [showFive, setShowFive] = useState(false);
    const [showSix, setShowSix] = useState(false);
    const [showSeven, setShowSeven] = useState(false);
    const [showEight, setShowEight] = useState(false);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        // Do something with the selected value
        console.log(selectedValue);
    };

    return (
        <>
            <Header />
            <div className="checkout-form-container">
                {window.innerWidth < 400 && <div className="phone-pay-text">{confirmandpay}</div>}
                <div className="checkout-form-body-container">

                    {/* left side */}
                    <div className="form-body-details">
                        <div className="confirm-text">{confirmandpay}</div>
                        <div className="entering-details-container">
                            <div className="enter-details-txt">{EnterDetails}</div>
                            <div className="subdetails-text">{SubDetails}</div>
                        </div>
                        <div className="input-fields-container">
                            <div className="input-fields-container-sec">
                                <InputField
                                    htmlFor="fullname" name="fullname"
                                    type="text"
                                    placeholder="Tickete Inc"
                                    label="Full Name"
                                />

                                <InputField
                                    htmlFor="phonenum" name="phonenum"
                                    type="number"
                                    placeholder="+85 2345345678"
                                    label="Phone number"
                                    Icon={<MasterFlag />}
                                />
                            </div>
                            <div className="input-fields-container-sec-2">
                                <InputField
                                    htmlFor="fullname" name="fullname"
                                    type="text"
                                    placeholder="hi@tickete.com"
                                    label="Full Name"
                                />

                                <InputField
                                    htmlFor="fullname" name="fullname"
                                    type="text"
                                    placeholder="hi@tickete.com"
                                    label="Full Name"
                                />
                            </div>
                        </div>
                        <div className="additional-info-container">
                            <div className="additional-info-title">{AdditionalInformation}</div>
                            <div className="additional-subtext">{AdditionalInfoSubText}</div>
                            <div className="additional-input-fields">
                                <InputField
                                    type="text"
                                    placeholder="<custom input>"
                                    label="Full Name"
                                />
                                <div className="dropdown-container">
                                    <label htmlFor="dropdown">{dropdown}</label>
                                    <select id="dropdown" onChange={handleChange} className="dropdown-options">
                                        <option value="option1" className="options">dropdown</option>
                                        <option value="option2" className="options">Option 2</option>
                                        <option value="option3" className="options">Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Select your mode of payment */}
                        <div className="mode-payment-section">
                            <div className="mode-payment-title">{selectMode}</div>
                            <div className="mode-payment-sub-title">{selectModeSubText}</div>
                            <div className="select-mode-section">
                                <label className="master-card container" htmlFor="card"><MasterCard /><span style={{ marginLeft: "1rem" }}>{CreditCard}</span>
                                    <input type="radio" className="input-field-card" id="card" name="card" checked="checked" />
                                    <span class="checkmark"></span>
                                </label>
                                <div className="mode-selection-one">
                                    <div className="input-fields-container-sec">
                                        <InputField
                                            htmlFor="fullname" name="fullname"
                                            type="text"
                                            placeholder="Name on Card"
                                            label="Full Name"
                                        />

                                        <InputField
                                            htmlFor="phonenum" name="phonenum"
                                            type="number"
                                            placeholder="1234 1234 1234 1234"
                                            label="Card Number"
                                            Icon={<VisaLogo />}
                                        />
                                    </div>
                                    <div className="input-fields-container-sec-2" >
                                        <InputField
                                            htmlFor="fullname" name="fullname"
                                            type="text"
                                            placeholder="06/26"
                                            label="Expiry Date"
                                        />

                                        <InputField
                                            htmlFor="fullname" name="fullname"
                                            type="text"
                                            placeholder="***"
                                            label="CVV/CVC"
                                        />
                                    </div>

                                </div>
                                <label className="master-card container" htmlFor="card-two" style={{ marginRight: "1rem" }}><Klarna /><span style={{ marginLeft: "1rem" }}>{klarna}</span>
                                    <input type="radio" className="input-field-card" id="card-two" name="card" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>

                        {/* total price section */}
                        <div className="total-price-section">
                            <div className="total-price-tilte">{totalPrice}</div>
                            <div className="total-price-subtitle"><a href="">{payInCurr}</a></div>
                            <div className="total-price-trips">
                                <input type="radio" id="total-price" checked="checked" />
                                <label htmlFor="total-price" >{totalPriceSubText}</label>
                            </div>
                            <div className="confirm-paytext">{confirmPayText} <a href="">{TnC}</a>& the <a href="">{activityProvider}</a> </div>
                            <button className="pay-btn" type="button">Confirm and pay <span style={{ marginLeft: "1rem" }}> <Shield /></span></button>
                        </div>
                    </div>

                    {/*right side */}
                    <div className="form-checkout-details">
                        {window.innerWidth > 400 ?
                            <img src="../../../Assests/Images/coverImage1.png" alt="cover-img" className="cover-image" />
                            :
                            <img src="../../../Assests/Images/coverImage2.png" alt="cover-img" className="cover-image" />
                        }
                        <div className="sub-text-details">{coverImageSubtext}</div>
                        <div className="payment-user-details">
                            <div><Varient /><span>varient name</span></div>
                            <div><Calendar /><span>date</span></div>
                            <div><Clock /><span>time</span></div>
                        </div>
                        <div className="tickets-overview-section">
                            <div className="ticket-overview-text">{TicketsOverview}</div>
                            <div className="ticket-overview-details">
                                <div className="details">{paxType}<span>{price}</span></div>
                                <div className="details">{paxType}<span>{price}</span></div>
                                <div className="details">{fee}<span>{price}</span></div>
                                <div className="details discount-applied">{discountApplied}<span>{Price}</span></div>
                                <div className="promo-code-section">
                                    <PromoCode /><a href="" className="promo-code">{PromoCodeText}</a>
                                </div>
                                <div className="total-amount-section">
                                    <div className="total-text-title">{Total}<span>{price}</span></div>
                                    <div className="pay-in-currency"><a href="">{payInCurr}</a></div>
                                </div>
                                <div className="free-cancellation-section">
                                    <div className="free-cancellation-title">{FreeCancelText}</div>
                                    <div className="sub-addtional-text">{subCancelText}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="questions-sections">
                    <div className="questions-part-left-side">
                        <div className="questions-asked-title">{FrequentlyQ}</div>
                        <div className="questions-part">
                            <div className="questions">{questionOne}</div>
                            {show ?
                                <div className="minus-add-icon" onClick={() => setShow(false)}><Minus /></div>
                                :
                                <div className="minus-add-icon" onClick={() => setShow(true)}><Plus /></div>
                            }
                        </div>
                        {show &&
                            <div className="answers-part">{answerOne}</div>
                        }
                        <hr />

                        <div className="questions-part">
                            <div className="questions">{questionTwo}</div>
                            {showTwo ?
                                <div className="minus-add-icon" onClick={() => setShowTwo(false)}><Minus /></div>
                                :
                                <div className="minus-add-icon" onClick={() => setShowTwo(true)}><Plus /></div>
                            }
                        </div>
                        {showTwo &&
                            <div className="answers-part">{answerTwo}</div>
                        }
                        <hr />

                        <div className="questions-part">
                            <div className="questions">{questionOne}</div>
                            {showThree ?
                                <div className="minus-add-icon" onClick={() => setShowThree(false)}><Minus /></div>
                                :
                                <div className="minus-add-icon" onClick={() => setShowThree(true)}><Plus /></div>
                            }
                        </div>
                        {showThree &&
                            <div className="answers-part">{answerOne}</div>
                        }
                        <hr />

                        <div className="questions-part">
                            <div className="questions">{questionTwo}</div>
                            {showFour ?
                                <div className="minus-add-icon" onClick={() => setShowFour(false)}><Minus /></div>
                                :
                                <div className="minus-add-icon" onClick={() => setShowFour(true)}><Plus /></div>
                            }
                        </div>
                        {showFour &&
                            <div className="answers-part">{answerTwo}</div>
                        }
                        <hr />

                        <div className="questions-part">
                            <div className="questions">{questionOne}</div>
                            {showFive ?
                                <div className="minus-add-icon" onClick={() => setShowFive(false)}><Minus /></div>
                                :
                                <div className="minus-add-icon" onClick={() => setShowFive(true)}><Plus /></div>
                            }
                        </div>
                        {showFive &&
                            <div className="answers-part">{answerOne}</div>
                        }
                        <hr />

                        <div className="questions-part">
                            <div className="questions">{questionTwo}</div>
                            {showSix ?
                                <div className="minus-add-icon" onClick={() => setShowSix(false)}><Minus /></div>
                                :
                                <div className="minus-add-icon" onClick={() => setShowSix(true)}><Plus /></div>
                            }
                        </div>
                        {showSix &&
                            <div className="answers-part">{answerTwo}</div>
                        }
                        <hr />

                        <div className="questions-part">
                            <div className="questions">{questionOne}</div>
                            {showSeven ?
                                <div className="minus-add-icon" onClick={() => setShowSeven(false)}><Minus /></div>
                                :
                                <div className="minus-add-icon" onClick={() => setShowSeven(true)}><Plus /></div>
                            }
                        </div>
                        {showSeven &&
                            <div className="answers-part">{answerOne}</div>
                        }
                        <hr />

                        <div className="questions-part">
                            <div className="questions">{questionTwo}</div>
                            {showEight ?
                                <div className="minus-add-icon" onClick={() => setShowEight(false)}><Minus /></div>
                                :
                                <div className="minus-add-icon" onClick={() => setShowEight(true)}><Plus /></div>
                            }
                        </div>
                        {showEight &&
                            <div className="answers-part">{answerTwo}</div>
                        }
                        {window.innerWidth < 400 && <hr />}


                    </div>
                    <div className="questions-part-right-side">
                        <div>
                            <div className="need-help-text">Need help?</div>
                            <div className="sub-text">We're here to help, 24*7</div>
                            <button type="button" className="chat-btn">Chat with us</button>
                        </div>
                        <div><ChatIcon /></div>
                    </div>
                </div>

                <div className="ticket-promise-section">
                    <div className="promise-title">{TicketPromise}</div>
                    <div className="ticket-container">
                        <div className="promise-container">
                            <div><Tick /></div>
                            <div>

                                <div className="official-tickets">{Officialtickets}</div>
                                <div className="sub-tickets">{OfficialticketsSub}</div>
                            </div>
                        </div>
                        <div className="promise-container">
                            <div><ChatIcon /></div>
                            <div>

                                <div className="official-tickets">{Officialtickets1}</div>
                                <div className="sub-tickets">{OfficialticketsSub1}</div>
                            </div>
                        </div>
                        <div className="promise-container">
                            <div><CalendarGrey /></div>
                            <div>

                                <div className="official-tickets">{Officialtickets2}</div>
                                <div className="sub-tickets">{OfficialticketsSub2}</div>
                            </div>
                        </div>
                        <div className="promise-container">
                            <div><ShieldBlue /></div>
                            <div>

                                <div className="official-tickets">{Officialtickets3}</div>
                                <div className="sub-tickets">{OfficialticketsSub3}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </>
    )
}

export default CheckoutForm