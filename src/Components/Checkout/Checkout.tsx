import { NavLink } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import styles from "./Checkout.module.css"
import { Steps } from 'antd';
import { useState } from "react";
import { StyledLabel, StyledInput, StyledMethod, PlaceOrder } from "./styled-component";
import { InfoCircleOutlined } from "@ant-design/icons";
const items = [
    {
        title: 'Summary',
    },
    {
        title: 'Checkout',
    },
    {
        title: 'Payment',
    },
    {
        title: 'Shipping',
    },
];




export const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        country: 'USA', // Default country value
        postcode: '',
        town: '',
        note: '',
        cardName: '',
        cardNumber: '',
        cardCVV: '',
        cardExpiryMonth: '01',
        cardExpiryYear: '2023',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const years = [];
    for (let year = 2000; year <= 2023; year++) {
        years.push(year);
    }

    return (
        <div>
            <Header />
            <div className="Checkout-page">
                <div className="books-navigation pt-3 px-5 d-flex gap-2">
                    <NavLink className={styles.homelink} to="/home" >Home / </NavLink>
                    <NavLink className={styles.bookslink} to="/home/checkout">Checkout</NavLink>
                </div>
                <div className="steps-section">
                    <Steps className={styles.steps} current={1} labelPlacement="vertical" items={items} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="buyerinfo-payment d-flex p-5">
                        <div className="buyerinfo-section w-50 px-5">
                            <h1 className={styles.headings} >Buyer Info</h1>
                            <div className={styles.buyerinfofirst}>
                                <div>
                                    <StyledLabel htmlFor="firstName">First Name:</StyledLabel> <br />
                                    <StyledInput
                                        required
                                        type="text"
                                        placeholder="Richard"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <StyledLabel htmlFor="lastName">Last Name:</StyledLabel> <br />
                                    <StyledInput
                                        required
                                        type="text"
                                        placeholder="Khan"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <StyledLabel htmlFor="email">Email:</StyledLabel> <br />
                                    <StyledInput
                                        required
                                        type="email"
                                        placeholder="richardkhan@mail.com"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <StyledLabel htmlFor="phoneNumber">Phone Number:</StyledLabel> <br />
                                    <StyledInput
                                        required
                                        type="tel"
                                        placeholder="85125136235236"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="adress-input mt-3 mb-3 " >
                                <StyledLabel htmlFor="address">Address:</StyledLabel> <br />
                                <StyledInput
                                    required
                                    type="text"
                                    placeholder="Corner Grove St. Franklin Avenue"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="state-postcode d-flex gap-3 justify-content-between">
                                <div className="state-section w-50">
                                    <StyledLabel htmlFor="country">State:</StyledLabel> <br />
                                    <select
                                        className={styles.customselect}
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                    >
                                        <option value="England">England</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                        <option value="UK">UK</option>
                                    </select>
                                </div>
                                <div className="postcode-section w-50" >
                                    <StyledLabel htmlFor="postcode">Postcode/ZIP:</StyledLabel> <br />
                                    <StyledInput
                                        required
                                        type="text"
                                        placeholder="1241255"
                                        id="postcode"
                                        name="postcode"
                                        value={formData.postcode}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="town-section mt-3 mb-3 w-50">
                                <StyledLabel htmlFor="town">Town/City:</StyledLabel> <br />
                                <StyledInput
                                    required
                                    type="text"
                                    placeholder="London"
                                    id="town"
                                    name="town"
                                    value={formData.town}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="note-section" >
                                <StyledLabel htmlFor="note">Note:</StyledLabel> <br />
                                <textarea className={styles.textarea}
                                    style={{ resize: "none" }}
                                    rows={4}
                                    id="note"
                                    name="note"
                                    value={formData.note}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>
                        <div className="payment-section w-50 px-5">
                            <h1 className={styles.headings} >Payment</h1>
                            <div className="payment-methods d-flex gap-3 ">
                                <StyledMethod className="method-one">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                                        <path d="M38.2503 16.6856L34.3149 12.75L11.2335 35.8314V25.8507H5.66699V45.3333H25.1496V39.7668H15.169L38.2503 16.6856Z" fill="#11142D" />
                                        <path d="M40.0675 22.6667V28.2332H52.8314L29.75 51.3146L33.6856 55.25L56.7668 32.1687V44.9326H62.3333V22.6667H40.0675Z" fill="#11142D" />
                                    </svg>
                                    <p >Bank Transfer</p>
                                </StyledMethod>
                                <StyledMethod className="method-one-active" style={{ backgroundColor: " #F0F0F0" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                                        <path d="M57.375 10.625H10.625C8.93425 10.625 7.31274 11.2967 6.11719 12.4922C4.92165 13.6877 4.25 15.3092 4.25 17V51C4.25 52.6908 4.92165 54.3123 6.11719 55.5078C7.31274 56.7034 8.93425 57.375 10.625 57.375H57.375C59.0658 57.375 60.6873 56.7034 61.8828 55.5078C63.0784 54.3123 63.75 52.6908 63.75 51V17C63.75 15.3092 63.0784 13.6877 61.8828 12.4922C60.6873 11.2967 59.0658 10.625 57.375 10.625ZM8.5 23.375H59.5V29.75H8.5V23.375ZM10.625 14.875H57.375C57.9386 14.875 58.4791 15.0989 58.8776 15.4974C59.2761 15.8959 59.5 16.4364 59.5 17V19.125H8.5V17C8.5 16.4364 8.72388 15.8959 9.1224 15.4974C9.52091 15.0989 10.0614 14.875 10.625 14.875ZM57.375 53.125H10.625C10.0614 53.125 9.52091 52.9011 9.1224 52.5026C8.72388 52.1041 8.5 51.5636 8.5 51V34H59.5V51C59.5 51.5636 59.2761 52.1041 58.8776 52.5026C58.4791 52.9011 57.9386 53.125 57.375 53.125ZM21.25 46.75C21.25 47.3136 21.0261 47.8541 20.6276 48.2526C20.2291 48.6511 19.6886 48.875 19.125 48.875H14.875C14.3114 48.875 13.7709 48.6511 13.3724 48.2526C12.9739 47.8541 12.75 47.3136 12.75 46.75C12.75 46.1864 12.9739 45.6459 13.3724 45.2474C13.7709 44.8489 14.3114 44.625 14.875 44.625H19.125C19.6886 44.625 20.2291 44.8489 20.6276 45.2474C21.0261 45.6459 21.25 46.1864 21.25 46.75ZM31.875 46.75C31.875 47.3136 31.6511 47.8541 31.2526 48.2526C30.8541 48.6511 30.3136 48.875 29.75 48.875H25.5C24.9364 48.875 24.3959 48.6511 23.9974 48.2526C23.5989 47.8541 23.375 47.3136 23.375 46.75C23.375 46.1864 23.5989 45.6459 23.9974 45.2474C24.3959 44.8489 24.9364 44.625 25.5 44.625H29.75C30.3136 44.625 30.8541 44.8489 31.2526 45.2474C31.6511 45.6459 31.875 46.1864 31.875 46.75Z" fill="#6C5DD3" />
                                    </svg>
                                    <p>Credit Card</p>
                                </StyledMethod>
                                <StyledMethod className="method-one ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                                        <path d="M60.365 20.9097C58.2598 18.2897 54.9048 16.5548 51.1381 16.0734C49.9442 8.79583 43.5615 5 37.4259 5H15.3106L5 52.125H18.7246L16.2719 63H33.8443L37.3566 48.5H42.9223C47.7023 48.5 52.0544 47.0838 55.5078 44.4043C59.0882 41.6264 61.5276 37.6107 62.5626 32.7906C63.8418 26.8235 62.0736 23.0362 60.365 20.9097ZM10.6306 47.5938L18.9584 9.53125H37.4259C41.2078 9.53125 45.3373 11.5675 46.4906 15.9883H26.8748L19.7466 47.5938H10.6306ZM46.6423 20.5195C46.5857 20.9822 46.5133 21.4225 46.4249 21.8381C44.8158 29.3358 39.8963 32.9805 31.3854 32.9805H27.6882L30.4986 20.5195H46.6423ZM58.1312 31.8402C56.5248 39.3214 50.6969 43.9688 42.9222 43.9688H33.7911L30.2788 58.4688H21.9396L26.6662 37.5117H31.3854C36.5119 37.5117 40.7685 36.3152 44.0372 33.9555C47.5096 31.4486 49.8038 27.6916 50.8567 22.7854C50.9991 22.1169 51.1077 21.4067 51.1849 20.6628C53.536 21.0832 55.5654 22.1714 56.8319 23.7476C58.4213 25.7257 58.8584 28.4487 58.1312 31.8402Z" fill="#11142D" />
                                    </svg>
                                    <p>Paypal</p>
                                </StyledMethod>
                            </div>
                            <div className="nameoncard mt-3 mb-3" >
                                <StyledLabel htmlFor="cardName">Name on Card:</StyledLabel> <br />
                                <StyledInput
                                    required
                                    type="text"
                                    placeholder="Richard Khan"
                                    id="cardName"
                                    name="cardName"
                                    value={formData.cardName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="cardnumbercvv d-flex gap-3">
                                <div className="cardnumber w-75" >
                                    <StyledLabel htmlFor="cardNumber">Card Number:</StyledLabel> <br />
                                    <StyledInput
                                        required
                                        type="text"
                                        placeholder="0000 - 0000 - 0000 - 0000"
                                        id="cardNumber"
                                        name="cardNumber"
                                        value={formData.cardNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="cardcvv w-25">
                                    <div className="cardcvvheading d-flex align-items-center gap-5">
                                        <StyledLabel htmlFor="cardCVV">CVV: </StyledLabel>
                                        <i className="cvv-icon"> <InfoCircleOutlined /></i>
                                    </div>
                                    <StyledInput
                                        required
                                        type="text"
                                        placeholder="Khan"
                                        id="cardCVV"
                                        name="cardCVV"
                                        value={formData.cardCVV}
                                        onChange={handleChange}
                                    />

                                </div>
                            </div>
                            <div className="card-month-year d-flex gap-3">
                                <div className="card-month w-50">
                                    <StyledLabel htmlFor="cardExpiryMonth">MONTH:</StyledLabel> <br />
                                    <select
                                        className={styles.customselect}
                                        id="cardExpiryMonth"
                                        name="cardExpiryMonth"
                                        value={formData.cardExpiryMonth}
                                        onChange={handleChange}
                                    >
                                        <option value="01">January</option>
                                        <option value="02">February</option>
                                        <option value="03">March</option>
                                        <option value="04">April</option>
                                        <option value="05">May</option>
                                        <option value="06">June</option>
                                        <option value="07">July</option>
                                        <option value="08">August</option>
                                        <option value="09">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>
                                <div className="card-year w-50">
                                    <StyledLabel htmlFor="cardExpiryYear">YEAR:</StyledLabel> <br />
                                    <select
                                        className={styles.customselect}
                                        id="cardExpiryYear"
                                        name="cardExpiryYear"
                                        value={formData.cardExpiryYear}
                                        onChange={handleChange}
                                    >
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="placeorderbutton" >
                                <PlaceOrder type="submit">Place Order</PlaceOrder>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="hero-second p-5 d-flex gap-5 justify-content-around mt-5" style={{ backgroundColor: "#F0EEFF" }}>
                    <div className="quick-delivery d-flex gap-3 align-items-start">
                        <div className={styles.quickdeliveryleft}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <g clip-path="url(#clip0_25_3)">
                                    <path d="M28.3947 11.5811C28.2395 11.2542 27.9099 11.0457 27.5479 11.0457H18.145L23.8363 1.41444C24.0075 1.12463 24.0102 0.765125 23.8434 0.472813C23.6765 0.1805 23.3657 -0.000124935 23.029 6.48369e-08L14.9957 0.000875065C14.6623 0.00100006 14.354 0.178 14.186 0.465938L3.64231 18.5399C3.47312 18.8299 3.47193 19.1881 3.63912 19.4792C3.80631 19.7703 4.11637 19.9498 4.45206 19.9498H13.795L11.0738 30.8351C10.9673 31.2609 11.1707 31.7038 11.5632 31.9006C11.6971 31.9676 11.8407 32 11.9829 32C12.2576 32 12.5269 31.8793 12.7097 31.655L28.2744 12.5758C28.5032 12.2953 28.55 11.9081 28.3947 11.5811Z" fill="#6C5DD3" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_25_3">
                                        <rect width="32" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.quickdeliveryright}>
                            <h4 className="fw-bold fs-5 m-0">Quick Delivery</h4>
                            <p className={styles.quickdeliveryp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                    </div>
                    <div className="quick-delivery d-flex gap-3 align-items-start">
                        <div className={styles.quickdeliveryleft}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 0L29.3333 5.86609V15.9629C29.3333 21.0436 24.8889 25.9448 16 30.6667C7.1111 25.9448 2.66666 21.0436 2.66666 15.9629V5.86609L16 0ZM19.0572 11.07L14.6667 15.4152L12.9428 13.7098L11.0572 15.5763L14.6667 19.1494L20.9428 12.9366L19.0572 11.07Z" fill="#6C5DD3" />
                            </svg>
                        </div>
                        <div className={styles.quickdeliveryright}>
                            <h4 className="fw-bold fs-5 m-0">Secure Payment</h4>
                            <p className={styles.quickdeliveryp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                    </div>
                    <div className="quick-delivery d-flex gap-3 align-items-start">
                        <div className={styles.quickdeliveryleft}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M29.845 17.099L27.356 25.824C26.989 27.105 25.804 28 24.473 28H11C10.447 28 10 27.552 10 27V13C10 12.785 10.069 12.575 10.198 12.403L15.59 5.163C16.188 4.414 17.05 4 17.974 4C19.643 4 21 5.357 21 7.026V12H26.002C27.267 12 28.429 12.579 29.19 13.589C29.954 14.601 30.192 15.88 29.845 17.099Z" fill="#6C5DD3" />
                                <path d="M7 12H3C2.447 12 2 12.448 2 13V27C2 27.552 2.447 28 3 28H7C7.553 28 8 27.552 8 27V13C8 12.448 7.553 12 7 12ZM5 25.5C4.172 25.5 3.5 24.828 3.5 24C3.5 23.172 4.172 22.5 5 22.5C5.828 22.5 6.5 23.172 6.5 24C6.5 24.828 5.828 25.5 5 25.5Z" fill="#6C5DD3" />
                            </svg>
                        </div>
                        <div className={styles.quickdeliveryright}>
                            <h4 className="fw-bold fs-5 m-0">Best Quality</h4>
                            <p className={styles.quickdeliveryp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                    </div>
                    <div className="quick-delivery d-flex gap-3 align-items-start">
                        <div className={styles.quickdeliveryleft}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21.3901 11.6C21.6648 11.3192 21.856 10.9676 21.9426 10.5845C22.0291 10.2013 22.0074 9.80161 21.8801 9.43002C21.7605 9.05733 21.5387 8.72569 21.2399 8.47288C20.9412 8.22006 20.5774 8.05622 20.1901 8.00002L15.9001 7.34002C15.88 7.33422 15.8616 7.32403 15.846 7.31019C15.8304 7.29635 15.8182 7.27921 15.8101 7.26002L13.9301 3.26002C13.7652 2.88546 13.495 2.56692 13.1523 2.34321C12.8096 2.11949 12.4093 2.00025 12.0001 2.00002C11.5956 1.99835 11.1992 2.11353 10.8586 2.33173C10.518 2.54993 10.2476 2.86186 10.0801 3.23002L8.20006 7.23002C8.1898 7.24952 8.17562 7.26669 8.15841 7.28046C8.1412 7.29423 8.12134 7.30429 8.10006 7.31002L3.82006 8.00002C3.43215 8.05781 3.06788 8.22206 2.76776 8.47452C2.46764 8.72698 2.24342 9.05774 2.12006 9.43002C1.99736 9.8029 1.97908 10.2023 2.06723 10.5848C2.15537 10.9673 2.34656 11.3184 2.62006 11.6L5.78006 14.85C5.78916 14.8705 5.79386 14.8926 5.79386 14.915C5.79386 14.9374 5.78916 14.9596 5.78006 14.98L5.04006 19.52C4.97127 19.9154 5.01611 20.3222 5.16938 20.6931C5.32266 21.064 5.57806 21.3838 5.90589 21.6152C6.23373 21.8467 6.62054 21.9804 7.02135 22.0007C7.42215 22.021 7.82049 21.9272 8.17006 21.73L11.9001 19.66C11.9186 19.6504 11.9392 19.6453 11.9601 19.6453C11.9809 19.6453 12.0015 19.6504 12.0201 19.66L15.7501 21.73C16.1001 21.9229 16.4973 22.0134 16.8964 21.9913C17.2954 21.9691 17.6802 21.835 18.0067 21.6045C18.3331 21.374 18.5882 21.0563 18.7426 20.6877C18.8971 20.319 18.9447 19.9144 18.8801 19.52L18.1901 15C18.1795 14.9818 18.174 14.9611 18.174 14.94C18.174 14.919 18.1795 14.8983 18.1901 14.88L21.3901 11.6Z" fill="#6C5DD3" />
                            </svg>
                        </div>
                        <div className={styles.quickdeliveryright}>
                            <h4 className="fw-bold fs-5 m-0">Return Guarantee</h4>
                            <p className={styles.quickdeliveryp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}
