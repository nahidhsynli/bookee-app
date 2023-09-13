import { NavLink } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import styles from "./BookDetail.module.css"
import { useState } from 'react';
import { Rate, Divider, Button, InputNumber, Pagination, Progress, Dropdown, Space, message, MenuProps } from 'antd';
import { LikeOutlined, HeartOutlined, MessageOutlined, MinusOutlined, PlusOutlined, SortAscendingOutlined, DownOutlined } from "@ant-design/icons";

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


export const BookReview = () => {
    const [rating, setrating] = useState(4);
    const [value, setValue] = useState(1);

    const increment = () => {
        if (value !== 10) {
            setValue(value + 1);
        }
    };
    const decrement = () => {
        if (value !== 1) {
            setValue(value - 1);
        }
    };

    const onClick: MenuProps['onClick'] = ({ key }) => {
        message.info(`Click on item ${key}`);
    };

    const items: MenuProps['items'] = [
        {
            label: 'Newest',
            key: '1',
        },
        {
            label: 'Oldest',
            key: '2',
        },
        {
            label: 'Popular',
            key: '3',
        },
    ];

    return (
        <div>
            <Header />
            <div className="bookdetail">
                <div className="books-navigation pt-3 px-5 d-flex gap-2">
                    <NavLink className={styles.homelink} to="/home" >Home / </NavLink>
                    <NavLink className={styles.homelink} to="/home/books">Books /</NavLink>
                    <NavLink className={styles.bookslink} to="/home/books/detail">Thunder Stunt</NavLink>
                </div>
                <div className="detailhero p-5 d-flex gap-5 ">
                    <div className="detailhero-left">
                        <div className={styles.bookdetailempty}></div>
                    </div>
                    <div className="detailhero-right">
                        <h1>Thunder Stunt</h1>
                        <div className="rating-reviews-section d-flex align-items-center gap-5 ">
                            <div className="rating-reviews-section-left d-flex align-items-end gap-3 ">
                                <div className="rating-section">
                                    <span>
                                        <Rate tooltips={desc} onChange={setrating} value={rating} />
                                        {rating ? <span className="ant-rate-text">{[rating]}.0 </span> : '.0'}
                                    </span>
                                </div>
                                <div className="review-like-section d-flex gap-3">
                                    <div className="rewiev-section">
                                        <MessageOutlined /> <span> 235 Reviews</span>
                                    </div>
                                    <div className="like-section">
                                        <LikeOutlined /> <span> 456k Like</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rating-reviews-section-right d-flex gap-2">
                                <NavLink className={styles.facebookbutton} to="/facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                                        <path d="M8.9709 10.0201L9.46872 6.83493H6.35612V4.76796C6.35612 3.89655 6.79093 3.04715 8.18496 3.04715H9.6V0.335305C9.6 0.335305 8.31589 0.120117 7.08815 0.120117C4.52483 0.120117 2.84933 1.64568 2.84933 4.40737V6.83493H0V10.0201H2.84933V17.7201H6.35612V10.0201H8.9709Z" fill="white" />
                                    </svg>
                                    Facebook
                                </NavLink>
                                <NavLink className={styles.twitterbutton} to="/twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                        <path d="M15.7908 4.00932C15.802 4.17987 15.802 4.35046 15.802 4.52101C15.802 9.72301 12.1726 15.7169 5.53908 15.7169C3.49542 15.7169 1.59696 15.0712 0 13.9505C0.290366 13.987 0.569525 13.9992 0.871063 13.9992C2.55733 13.9992 4.10963 13.3779 5.34923 12.318C3.76344 12.2814 2.43451 11.1484 1.97663 9.58902C2.2 9.62555 2.42333 9.64992 2.65788 9.64992C2.98172 9.64992 3.3056 9.60117 3.60711 9.51593C1.95432 9.15042 0.714691 7.56669 0.714691 5.654V5.60528C1.19488 5.89767 1.7533 6.08041 2.34513 6.10475C1.37356 5.39813 0.737034 4.19206 0.737034 2.82758C0.737034 2.09663 0.915681 1.42658 1.22839 0.841809C3.00403 3.22962 5.67308 4.78898 8.66594 4.95957C8.61011 4.66718 8.5766 4.36265 8.5766 4.05807C8.5766 1.88952 10.1847 0.123047 12.1837 0.123047C13.2223 0.123047 14.1603 0.598172 14.8192 1.36568C15.6344 1.19513 16.4162 0.866185 17.1086 0.415434C16.8405 1.32916 16.271 2.09667 15.5228 2.58395C16.2487 2.49871 16.9522 2.27937 17.5999 1.97483C17.1086 2.7545 16.4944 3.44888 15.7908 4.00932Z" fill="white" />
                                    </svg>
                                    Twitter
                                </NavLink>
                                <NavLink className={styles.whatsappbutton} to="/whatsapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.9999 2.39999C6.6983 2.39999 2.3999 6.69839 2.3999 12C2.3999 14.1024 3.0767 16.0488 4.2263 17.6304L2.9063 21.1008L6.7151 20.016C8.2295 21.0168 10.0463 21.6 11.9999 21.6C17.3015 21.6 21.5999 17.3016 21.5999 12C21.5999 6.69839 17.3015 2.39999 11.9999 2.39999ZM17.1023 15.9768L16.0799 16.9992C15.0047 18.0744 12.1535 16.8912 9.6263 14.364C7.0967 11.8344 5.9663 8.98319 6.9887 7.90799L8.0111 6.88559C8.3879 6.50879 9.0335 6.50879 9.4631 6.88559L10.9703 8.39279C11.5079 8.93039 11.2919 9.84479 10.5935 10.0584C10.1087 10.2216 9.7871 10.7592 9.9479 11.244C10.2167 12.372 11.6687 13.7712 12.7463 14.04C13.2287 14.148 13.7687 13.8792 13.9295 13.3944C14.1431 12.696 15.0599 12.48 15.5975 13.0176L17.1023 14.5248C17.4791 14.9016 17.4791 15.5472 17.1023 15.9768Z" fill="white" />
                                    </svg>
                                    Whatsapp
                                </NavLink>
                                <NavLink className={styles.emailbutton} to="/email">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5ZM4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.2318 7.35981C5.58537 6.93553 6.21593 6.87821 6.64021 7.23177L11.3598 11.1648C11.7307 11.4738 12.2693 11.4738 12.6402 11.1648L17.3598 7.23177C17.7841 6.87821 18.4147 6.93553 18.7682 7.35981C19.1218 7.78409 19.0645 8.41465 18.6402 8.76822L13.9205 12.7012C12.808 13.6284 11.192 13.6284 10.0794 12.7012L5.35984 8.76822C4.93556 8.41465 4.87824 7.78409 5.2318 7.35981Z" fill="white" />
                                    </svg>
                                    Email
                                </NavLink>
                            </div>
                        </div>
                        <p className="mt-3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
                        <div className="written-by-buttons d-flex justify-content-between">
                            <div className="writtenby-section d-flex justify-content-between w-50">
                                <div className="written-by">
                                    <p className={styles.writtenbyheader} >Written by</p>
                                    <p className={styles.writtenbytext}>James Sullivan</p>
                                </div>
                                <div className="written-by">
                                    <p className={styles.writtenbyheader}>Publisher</p>
                                    <p className={styles.writtenbytext}>Printarea Studios</p>
                                </div>
                                <div className="written-by">
                                    <p className={styles.writtenbyheader}>Year</p>
                                    <p className={styles.writtenbytext}>2019</p>
                                </div>
                            </div>
                            <div className="writtenby-right d-flex gap-4">
                                <NavLink className={styles.freeshipping} to="/home/books/freeshipping">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_49_41)">
                                            <path d="M21.2959 8.6858C21.1795 8.44064 20.9322 8.28427 20.6607 8.28427H13.6086L17.877 1.06083C18.0055 0.843469 18.0075 0.573844 17.8823 0.354609C17.7572 0.135375 17.5241 -9.37014e-05 17.2716 4.86277e-08L11.2466 0.000656299C10.9965 0.000750049 10.7653 0.1335 10.6394 0.349453L2.73155 13.905C2.60466 14.1224 2.60377 14.3911 2.72916 14.6094C2.85455 14.8277 3.08709 14.9624 3.33886 14.9624H10.3461L8.30517 23.1263C8.22529 23.4457 8.37787 23.7779 8.67225 23.9255C8.77265 23.9757 8.88032 24 8.98696 24C9.19303 24 9.39496 23.9094 9.53212 23.7413L21.2056 9.43186C21.3772 9.22148 21.4123 8.93105 21.2959 8.6858Z" fill="#6C5DD3" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_49_41">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    FREE SHIPPING
                                </NavLink>
                                <NavLink className={styles.instocks} to="/home/books/instocks">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 0L22 4.39956V11.9722C22 15.7827 18.6667 19.4586 12 23C5.33333 19.4586 2 15.7827 2 11.9722V4.39956L12 0ZM14.2929 8.30252L11 11.5614L9.70711 10.2823L8.29289 11.6823L11 14.362L15.7071 9.70245L14.2929 8.30252Z" fill="#3EB760" />
                                    </svg>
                                    IN STOCKS
                                </NavLink>
                            </div>
                        </div>
                        <Divider />
                        <div className="price-addtocard d-flex justify-content-between align-items-center ">
                            <div className="price-section d-flex gap-2 align-items-lg-center">
                                <p className={styles.ratingnumber} >$84.78</p>
                                <p className={styles.reviewnumber} >$90.00</p>
                                <p className={styles.discountper} >2%</p>
                            </div>
                            <div className="addtocard-section d-flex align-items-center gap-3">
                                <div className="counter-section">
                                    <Button
                                        style={{ backgroundColor: "#fff", borderColor: "#6C5DD3", textAlign: "center", }}
                                        onClick={decrement}
                                    >
                                        <MinusOutlined style={{ fontSize: "15px", color: "#6C5DD3" }} />
                                    </Button>
                                    <InputNumber
                                        readOnly
                                        min={1}
                                        max={10}
                                        value={value}
                                        style={{ maxWidth: "50px", border: "0px", textAlign: "center" }}
                                    />
                                    <Button
                                        style={{ backgroundColor: "#fff", borderLeftColor: "#fff", borderColor: "#6C5DD3", textAlign: "center" }}
                                        onClick={increment}
                                    >
                                        <PlusOutlined style={{ color: "#6C5DD3", fontSize: "15px" }} />
                                    </Button>
                                </div>
                                <div className="button-section d-flex align-items-center ">
                                    <button className={styles.listaddtocardbutton} type="submit"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20C17.551 20 18 20.448 18 21C18 21.552 17.551 22 17 22C16.448 22 16 21.552 16 21C16 20.448 16.448 20 17 20ZM11 20C11.551 20 12 20.448 12 21C12 21.552 11.551 22 11 22C10.448 22 10 21.552 10 21C10 20.448 10.448 20 11 20ZM21.889 5.458L17.894 13.447C17.725 13.786 17.378 14 17 14H9C8.447 14 8 14.448 8 15C8 15.552 8.447 16 9 16H19C19.551 16 20 16.448 20 17C20 17.552 19.551 18 19 18C19 18 12.413 18 9 18C7.343 18 6 16.657 6 15C6 13.793 6.71201 12.753 7.73901 12.277L5.25601 4H3C2.448 4 2 3.552 2 3C2 2.448 2.448 2 3 2H6C6.441 2 6.83 2.29 6.957 2.713L7.34403 4H20.988C21.067 3.999 21.147 4.007 21.225 4.026L21.233 4.028C21.326 4.05 21.413 4.085 21.494 4.131C21.644 4.216 21.765 4.335 21.85 4.474C21.936 4.613 21.989 4.774 21.998 4.947C22.003 5.039 21.995 5.133 21.974 5.226L21.972 5.234C21.953 5.313 21.925 5.388 21.889 5.458ZM19.382 6H7.944L9.74402 12H16.382L19.382 6Z" fill="white" />
                                    </svg> Add to card</button>
                                    <HeartOutlined className={styles.listheartanchor} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details-related-section p-5 d-flex gap-5 ">
                    <div className="details-reviews" style={{ width: "70%" }} >
                        <div className="details-reviews-heading d-flex gap-5 align-items-center mb-4">
                            <NavLink style={{ color: "#AAA", fontSize: "30px", textDecoration: "none", fontWeight: "700" }} to="/home/books/detail">Details Product</NavLink>
                            <NavLink style={{ color: "#11142D", fontSize: "30px", textDecoration: "none", fontWeight: "700" }} to="/home/books/review">Customer Reviews</NavLink>
                        </div>
                        <div className="customer-reviews">
                            <div className="rating-information d-flex gap-5 p-4" style={{ borderRadius: "14px", border: "1px solid #F0EEFF" }}>
                                <div className="ratinginfoleft" style={{ width: "42%" }}>
                                    <h5 style={{ color: "#11142D", fontSize: "25px", fontWeight: "700" }} >Rating Information</h5>
                                    <p style={{ color: "#11142D", fontSize: "14px", fontWeight: "400" }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                                </div>
                                <div className="ratinginfomiddle" style={{ width: "33%" }}>
                                    <div className="ratinginfoone gap-2 d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                            <path d="M6.24897 0.452219L4.54019 3.81352L0.717021 4.35428C0.0314143 4.45075 -0.243352 5.27076 0.253844 5.74043L3.01982 8.35534L2.36562 12.0492C2.24786 12.7169 2.97272 13.217 3.57982 12.9048L7 11.1607L10.4202 12.9048C11.0273 13.2145 11.7521 12.7169 11.6344 12.0492L10.9802 8.35534L13.7462 5.74043C14.2434 5.27076 13.9686 4.45075 13.283 4.35428L9.45981 3.81352L7.75103 0.452219C7.44486 -0.146926 6.55776 -0.154542 6.24897 0.452219Z" fill="#FF754C" />
                                        </svg>
                                        <span style={{ margin: "0", padding: "0", color: "#11142D)", fontWeight: "700" }} >5</span>
                                        <Progress className="m-0" strokeColor="#6C5DD3" style={{ fontWeight: "700", fontSize: "16px" }} percent={86} />
                                    </div>
                                    <div className="ratinginfoone gap-2 d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                            <path d="M6.24897 0.452219L4.54019 3.81352L0.717021 4.35428C0.0314143 4.45075 -0.243352 5.27076 0.253844 5.74043L3.01982 8.35534L2.36562 12.0492C2.24786 12.7169 2.97272 13.217 3.57982 12.9048L7 11.1607L10.4202 12.9048C11.0273 13.2145 11.7521 12.7169 11.6344 12.0492L10.9802 8.35534L13.7462 5.74043C14.2434 5.27076 13.9686 4.45075 13.283 4.35428L9.45981 3.81352L7.75103 0.452219C7.44486 -0.146926 6.55776 -0.154542 6.24897 0.452219Z" fill="#FF754C" />
                                        </svg>
                                        <span style={{ margin: "0", padding: "0", color: "#11142D)", fontWeight: "700" }} >4</span>
                                        <Progress className="m-0" strokeColor="#6C5DD3" style={{ fontWeight: "700", fontSize: "16px" }} percent={61} />
                                    </div>
                                    <div className="ratinginfoone gap-2 d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                            <path d="M6.24897 0.452219L4.54019 3.81352L0.717021 4.35428C0.0314143 4.45075 -0.243352 5.27076 0.253844 5.74043L3.01982 8.35534L2.36562 12.0492C2.24786 12.7169 2.97272 13.217 3.57982 12.9048L7 11.1607L10.4202 12.9048C11.0273 13.2145 11.7521 12.7169 11.6344 12.0492L10.9802 8.35534L13.7462 5.74043C14.2434 5.27076 13.9686 4.45075 13.283 4.35428L9.45981 3.81352L7.75103 0.452219C7.44486 -0.146926 6.55776 -0.154542 6.24897 0.452219Z" fill="#FF754C" />
                                        </svg>
                                        <span style={{ margin: "0", padding: "0", color: "#11142D)", fontWeight: "700" }} >3</span>
                                        <Progress className="m-0" strokeColor="#6C5DD3" style={{ fontWeight: "700", fontSize: "16px" }} percent={12} />
                                    </div>
                                    <div className="ratinginfoone gap-2 d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                            <path d="M6.24897 0.452219L4.54019 3.81352L0.717021 4.35428C0.0314143 4.45075 -0.243352 5.27076 0.253844 5.74043L3.01982 8.35534L2.36562 12.0492C2.24786 12.7169 2.97272 13.217 3.57982 12.9048L7 11.1607L10.4202 12.9048C11.0273 13.2145 11.7521 12.7169 11.6344 12.0492L10.9802 8.35534L13.7462 5.74043C14.2434 5.27076 13.9686 4.45075 13.283 4.35428L9.45981 3.81352L7.75103 0.452219C7.44486 -0.146926 6.55776 -0.154542 6.24897 0.452219Z" fill="#FF754C" />
                                        </svg>
                                        <span style={{ margin: "0", padding: "0", color: "#11142D)", fontWeight: "700" }} >2</span>
                                        <Progress className="m-0" strokeColor="#6C5DD3" style={{ fontWeight: "700", fontSize: "16px" }} percent={5} />
                                    </div>
                                    <div className="ratinginfoone gap-2 d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                            <path d="M6.24897 0.452219L4.54019 3.81352L0.717021 4.35428C0.0314143 4.45075 -0.243352 5.27076 0.253844 5.74043L3.01982 8.35534L2.36562 12.0492C2.24786 12.7169 2.97272 13.217 3.57982 12.9048L7 11.1607L10.4202 12.9048C11.0273 13.2145 11.7521 12.7169 11.6344 12.0492L10.9802 8.35534L13.7462 5.74043C14.2434 5.27076 13.9686 4.45075 13.283 4.35428L9.45981 3.81352L7.75103 0.452219C7.44486 -0.146926 6.55776 -0.154542 6.24897 0.452219Z" fill="#FF754C" />
                                        </svg>
                                        <span style={{ margin: "0", padding: "0", color: "#11142D)", fontWeight: "700" }} >1</span>
                                        <Progress className="m-0" strokeColor="#6C5DD3" style={{ fontWeight: "700", fontSize: "16px" }} percent={8} />
                                    </div>
                                </div>
                                <div className="ratinginforight d-flex flex-column gap-0 text-center  justify-content-center w-25 " style={{ width: "20%" }}>
                                    <h1 style={{ color: "#11142D", fontSize: "28px", fontWeight: "700", margin: "0", padding: "0" }}>4.7 <span style={{ color: "#11142D", fontSize: "14px", fontWeight: "400" }}>out of 5</span> </h1>
                                    <Rate style={{ color: "#FF754C", margin: "0", padding: "0" }} tooltips={desc} onChange={setrating} value={rating} />
                                </div>
                            </div>
                            <div className="showing-reviews d-flex align-items-center justify-content-between mt-3 mb-3">
                                <p style={{ margin: "0", padding: "0", color: "#11142D", fontSize: "16px", fontWeight: "700" }}>Showing 4 of 20 reviews</p>
                                <div className="showingreviewsright d-flex gap-2">
                                    <SortAscendingOutlined />
                                    <Dropdown className=" text-black fw-bolder fs-6 " menu={{ items, onClick }}>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                Newest
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="user-reviews d-flex flex-column gap-3">
                                <div className="user-review p-4" style={{ borderRadius: "14px", border: "1px solid #F0EEFF" }}>
                                    <div className="user-info d-flex gap-3 align-items-center">
                                        <div className="userpp">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                <rect width="50" height="50" rx="14" fill="#C4C4C4" />
                                            </svg>
                                        </div>
                                        <div className="username">
                                            <p style={{ color: "#11142D", fontWeight: "600" }} className=" m-0">David Here</p>
                                            <p style={{ color: "#AAA", fontWeight: "400", fontSize: "13px" }} className=" m-0" >Jan 4th,2020</p>
                                        </div>
                                    </div>
                                    <div className="reviewhero-rating mt-3 d-flex align-items-center">
                                        <p className="w-75 m-0" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                                        <div className="reviewhero-rating-right d-flex flex-column justify-content-center align-items-center ">
                                            <p style={{ color: "#FF754C", fontSize: "30px", fontWeight: "700", margin: "0" }} >4.0</p>
                                            <Rate style={{ color: " #FF754C", margin: "0" }} tooltips={desc} onChange={setrating} value={rating} />
                                        </div>
                                    </div>
                                </div>
                                <div className="user-review p-4" style={{ borderRadius: "14px", border: "1px solid #F0EEFF" }}>
                                    <div className="user-info d-flex gap-3 align-items-center">
                                        <div className="userpp">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                <rect width="50" height="50" rx="14" fill="#C4C4C4" />
                                            </svg>
                                        </div>
                                        <div className="username">
                                            <p style={{ color: "#11142D", fontWeight: "600" }} className=" m-0">David Here</p>
                                            <p style={{ color: "#AAA", fontWeight: "400", fontSize: "13px" }} className=" m-0" >Jan 4th,2020</p>
                                        </div>
                                    </div>
                                    <div className="reviewhero-rating mt-3 d-flex align-items-center">
                                        <p className="w-75 m-0" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                                        <div className="reviewhero-rating-right d-flex flex-column justify-content-center align-items-center ">
                                            <p style={{ color: "#FF754C", fontSize: "30px", fontWeight: "700", margin: "0" }} >3.5</p>
                                            <Rate style={{ color: " #FF754C", margin: "0" }} tooltips={desc} onChange={setrating} value={rating - 1} />
                                        </div>
                                    </div>
                                </div>
                                <div className="user-review p-4" style={{ borderRadius: "14px", border: "1px solid #F0EEFF" }}>
                                    <div className="user-info d-flex gap-3 align-items-center">
                                        <div className="userpp">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                <rect width="50" height="50" rx="14" fill="#C4C4C4" />
                                            </svg>
                                        </div>
                                        <div className="username">
                                            <p style={{ color: "#11142D", fontWeight: "600" }} className=" m-0">David Here</p>
                                            <p style={{ color: "#AAA", fontWeight: "400", fontSize: "13px" }} className=" m-0" >Jan 4th,2020</p>
                                        </div>
                                    </div>
                                    <div className="reviewhero-rating mt-3 d-flex align-items-center">
                                        <p className="w-75 m-0" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                                        <div className="reviewhero-rating-right d-flex flex-column justify-content-center align-items-center ">
                                            <p style={{ color: "#FF754C", fontSize: "30px", fontWeight: "700", margin: "0" }} >4.0</p>
                                            <Rate style={{ color: " #FF754C", margin: "0" }} tooltips={desc} onChange={setrating} value={rating} />
                                        </div>
                                    </div>
                                </div>
                                <div className="user-review p-4" style={{ borderRadius: "14px", border: "1px solid #F0EEFF" }}>
                                    <div className="user-info d-flex gap-3 align-items-center">
                                        <div className="userpp">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                <rect width="50" height="50" rx="14" fill="#C4C4C4" />
                                            </svg>
                                        </div>
                                        <div className="username">
                                            <p style={{ color: "#11142D", fontWeight: "600" }} className=" m-0">David Here</p>
                                            <p style={{ color: "#AAA", fontWeight: "400", fontSize: "13px" }} className=" m-0" >Jan 4th,2020</p>
                                        </div>
                                    </div>
                                    <div className="reviewhero-rating mt-3 d-flex align-items-center">
                                        <p className="w-75 m-0" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                                        <div className="reviewhero-rating-right d-flex flex-column justify-content-center align-items-center ">
                                            <p style={{ color: "#FF754C", fontSize: "30px", fontWeight: "700", margin: "0" }} >2.0</p>
                                            <Rate style={{ color: " #FF754C", margin: "0" }} tooltips={desc} onChange={setrating} value={rating - 2} />
                                        </div>
                                    </div>
                                </div>
                                <NavLink to="/home/books/review" className={styles.reviewviewmore}>View More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="related-books-section" style={{ width: "30%" }} >
                        <div className="related-heading mb-4">
                            <NavLink style={{ color: "#11142D", fontSize: "30px", textDecoration: "none", fontWeight: "700" }} to="/home/books/related">Related Books</NavLink>
                        </div>
                        <div className="related-books d-flex flex-column gap-2">
                            <div className="relatedone d-flex gap-3">
                                <div className="related-empty" style={{ width: "110px", height: "148px", background: "#C4C4C4", borderRadius: "14px" }} ></div>
                                <div className="related-hero d-flex flex-column  ">
                                    <p style={{ color: "#11142D", fontSize: "20px", fontWeight: "700", margin: "0" }} >Terrible Madness</p>
                                    <NavLink className={styles.relatedlink} to="/home/books/thriller">THRILLE, DRAMA, HORROR</NavLink>
                                    <div className="related-rating d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21.3899 11.6C21.6646 11.3192 21.8559 10.9676 21.9424 10.5845C22.029 10.2013 22.0073 9.80161 21.8799 9.43002C21.7604 9.05733 21.5386 8.72569 21.2398 8.47288C20.941 8.22006 20.5773 8.05622 20.1899 8.00002L15.8999 7.34002C15.8799 7.33422 15.8615 7.32403 15.8459 7.31019C15.8303 7.29635 15.818 7.27921 15.8099 7.26002L13.9299 3.26002C13.7651 2.88546 13.4949 2.56692 13.1522 2.34321C12.8095 2.11949 12.4092 2.00025 11.9999 2.00002C11.5954 1.99835 11.1991 2.11353 10.8585 2.33173C10.5179 2.54993 10.2475 2.86186 10.0799 3.23002L8.19994 7.23002C8.18968 7.24952 8.1755 7.26669 8.15829 7.28046C8.14108 7.29423 8.12122 7.30429 8.09994 7.31002L3.81994 8.00002C3.43203 8.05781 3.06776 8.22206 2.76764 8.47452C2.46751 8.72698 2.2433 9.05774 2.11994 9.43002C1.99723 9.8029 1.97896 10.2023 2.0671 10.5848C2.15524 10.9673 2.34643 11.3184 2.61994 11.6L5.77994 14.85C5.78903 14.8705 5.79373 14.8926 5.79373 14.915C5.79373 14.9374 5.78903 14.9596 5.77994 14.98L5.03994 19.52C4.97114 19.9154 5.01599 20.3222 5.16926 20.6931C5.32253 21.064 5.57794 21.3838 5.90577 21.6152C6.23361 21.8467 6.62042 21.9804 7.02122 22.0007C7.42203 22.021 7.82037 21.9272 8.16994 21.73L11.8999 19.66C11.9185 19.6504 11.939 19.6453 11.9599 19.6453C11.9808 19.6453 12.0014 19.6504 12.0199 19.66L15.7499 21.73C16.1 21.9229 16.4972 22.0134 16.8963 21.9913C17.2953 21.9691 17.6801 21.835 18.0065 21.6045C18.333 21.374 18.5881 21.0563 18.7425 20.6877C18.897 20.319 18.9446 19.9144 18.8799 19.52L18.1899 15C18.1794 14.9818 18.1739 14.9611 18.1739 14.94C18.1739 14.919 18.1794 14.8983 18.1899 14.88L21.3899 11.6Z" fill="#FF754C" />
                                        </svg>
                                        <p style={{ color: "#FF754C", fontWeight: "700", margin: "0" }} >4.7</p>
                                        <p style={{ color: "#AAA", fontWeight: "600", margin: "0" }}>244 reviews</p>
                                    </div>
                                    <div className="related-price d-flex align-items-center gap-2 " style={{ marginTop: "0px" }}>
                                        <p style={{ color: "#11142D", fontWeight: "700", fontSize: "20px", margin: "0" }} >$45.4</p>
                                        <p style={{ color: "#AAA", fontWeight: "600", fontSize: "16px", margin: "0", textDecorationLine: "line-through" }} >$98.4</p>
                                    </div>
                                    <div className="related-addtocard">
                                        <NavLink className={styles.relatedaddtocard} to="/home/books/addtocard"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20C17.551 20 18 20.448 18 21C18 21.552 17.551 22 17 22C16.448 22 16 21.552 16 21C16 20.448 16.448 20 17 20ZM11 20C11.551 20 12 20.448 12 21C12 21.552 11.551 22 11 22C10.448 22 10 21.552 10 21C10 20.448 10.448 20 11 20ZM21.889 5.458L17.894 13.447C17.725 13.786 17.378 14 17 14H9C8.447 14 8 14.448 8 15C8 15.552 8.447 16 9 16H19C19.551 16 20 16.448 20 17C20 17.552 19.551 18 19 18C19 18 12.413 18 9 18C7.343 18 6 16.657 6 15C6 13.793 6.71201 12.753 7.73901 12.277L5.25601 4H3C2.448 4 2 3.552 2 3C2 2.448 2.448 2 3 2H6C6.441 2 6.83 2.29 6.957 2.713L7.34403 4H20.988C21.067 3.999 21.147 4.007 21.225 4.026L21.233 4.028C21.326 4.05 21.413 4.085 21.494 4.131C21.644 4.216 21.765 4.335 21.85 4.474C21.936 4.613 21.989 4.774 21.998 4.947C22.003 5.039 21.995 5.133 21.974 5.226L21.972 5.234C21.953 5.313 21.925 5.388 21.889 5.458ZM19.382 6H7.944L9.74402 12H16.382L19.382 6Z" fill="#6C5DD3" />
                                        </svg> Add to cart
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="relatedone d-flex gap-3">
                                <div className="related-empty" style={{ width: "110px", height: "148px", background: "#C4C4C4", borderRadius: "14px" }} ></div>
                                <div className="related-hero d-flex flex-column ">
                                    <p style={{ color: "#11142D", fontSize: "20px", fontWeight: "700", margin: "0" }} >Terrible Madness</p>
                                    <NavLink className={styles.relatedlink} to="/home/books/thriller">THRILLE, DRAMA, HORROR</NavLink>
                                    <div className="related-rating d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21.3899 11.6C21.6646 11.3192 21.8559 10.9676 21.9424 10.5845C22.029 10.2013 22.0073 9.80161 21.8799 9.43002C21.7604 9.05733 21.5386 8.72569 21.2398 8.47288C20.941 8.22006 20.5773 8.05622 20.1899 8.00002L15.8999 7.34002C15.8799 7.33422 15.8615 7.32403 15.8459 7.31019C15.8303 7.29635 15.818 7.27921 15.8099 7.26002L13.9299 3.26002C13.7651 2.88546 13.4949 2.56692 13.1522 2.34321C12.8095 2.11949 12.4092 2.00025 11.9999 2.00002C11.5954 1.99835 11.1991 2.11353 10.8585 2.33173C10.5179 2.54993 10.2475 2.86186 10.0799 3.23002L8.19994 7.23002C8.18968 7.24952 8.1755 7.26669 8.15829 7.28046C8.14108 7.29423 8.12122 7.30429 8.09994 7.31002L3.81994 8.00002C3.43203 8.05781 3.06776 8.22206 2.76764 8.47452C2.46751 8.72698 2.2433 9.05774 2.11994 9.43002C1.99723 9.8029 1.97896 10.2023 2.0671 10.5848C2.15524 10.9673 2.34643 11.3184 2.61994 11.6L5.77994 14.85C5.78903 14.8705 5.79373 14.8926 5.79373 14.915C5.79373 14.9374 5.78903 14.9596 5.77994 14.98L5.03994 19.52C4.97114 19.9154 5.01599 20.3222 5.16926 20.6931C5.32253 21.064 5.57794 21.3838 5.90577 21.6152C6.23361 21.8467 6.62042 21.9804 7.02122 22.0007C7.42203 22.021 7.82037 21.9272 8.16994 21.73L11.8999 19.66C11.9185 19.6504 11.939 19.6453 11.9599 19.6453C11.9808 19.6453 12.0014 19.6504 12.0199 19.66L15.7499 21.73C16.1 21.9229 16.4972 22.0134 16.8963 21.9913C17.2953 21.9691 17.6801 21.835 18.0065 21.6045C18.333 21.374 18.5881 21.0563 18.7425 20.6877C18.897 20.319 18.9446 19.9144 18.8799 19.52L18.1899 15C18.1794 14.9818 18.1739 14.9611 18.1739 14.94C18.1739 14.919 18.1794 14.8983 18.1899 14.88L21.3899 11.6Z" fill="#FF754C" />
                                        </svg>
                                        <p style={{ color: "#FF754C", fontWeight: "700", margin: "0" }} >4.7</p>
                                        <p style={{ color: "#AAA", fontWeight: "600", margin: "0" }}>244 reviews</p>
                                    </div>
                                    <div className="related-price d-flex align-items-center gap-2 " style={{ marginTop: "0px" }}>
                                        <p style={{ color: "#11142D", fontWeight: "700", fontSize: "20px", margin: "0" }} >$45.4</p>
                                        <p style={{ color: "#AAA", fontWeight: "600", fontSize: "16px", margin: "0", textDecorationLine: "line-through" }} >$98.4</p>
                                    </div>
                                    <div className="related-addtocard">
                                        <NavLink className={styles.relatedaddtocard} to="/home/books/addtocard"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20C17.551 20 18 20.448 18 21C18 21.552 17.551 22 17 22C16.448 22 16 21.552 16 21C16 20.448 16.448 20 17 20ZM11 20C11.551 20 12 20.448 12 21C12 21.552 11.551 22 11 22C10.448 22 10 21.552 10 21C10 20.448 10.448 20 11 20ZM21.889 5.458L17.894 13.447C17.725 13.786 17.378 14 17 14H9C8.447 14 8 14.448 8 15C8 15.552 8.447 16 9 16H19C19.551 16 20 16.448 20 17C20 17.552 19.551 18 19 18C19 18 12.413 18 9 18C7.343 18 6 16.657 6 15C6 13.793 6.71201 12.753 7.73901 12.277L5.25601 4H3C2.448 4 2 3.552 2 3C2 2.448 2.448 2 3 2H6C6.441 2 6.83 2.29 6.957 2.713L7.34403 4H20.988C21.067 3.999 21.147 4.007 21.225 4.026L21.233 4.028C21.326 4.05 21.413 4.085 21.494 4.131C21.644 4.216 21.765 4.335 21.85 4.474C21.936 4.613 21.989 4.774 21.998 4.947C22.003 5.039 21.995 5.133 21.974 5.226L21.972 5.234C21.953 5.313 21.925 5.388 21.889 5.458ZM19.382 6H7.944L9.74402 12H16.382L19.382 6Z" fill="#6C5DD3" />
                                        </svg> Add to cart
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="relatedone d-flex gap-3">
                                <div className="related-empty" style={{ width: "110px", height: "148px", background: "#C4C4C4", borderRadius: "14px" }} ></div>
                                <div className="related-hero d-flex flex-column ">
                                    <p style={{ color: "#11142D", fontSize: "20px", fontWeight: "700", margin: "0" }} >Terrible Madness</p>
                                    <NavLink className={styles.relatedlink} to="/home/books/thriller">THRILLE, DRAMA, HORROR</NavLink>
                                    <div className="related-rating d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21.3899 11.6C21.6646 11.3192 21.8559 10.9676 21.9424 10.5845C22.029 10.2013 22.0073 9.80161 21.8799 9.43002C21.7604 9.05733 21.5386 8.72569 21.2398 8.47288C20.941 8.22006 20.5773 8.05622 20.1899 8.00002L15.8999 7.34002C15.8799 7.33422 15.8615 7.32403 15.8459 7.31019C15.8303 7.29635 15.818 7.27921 15.8099 7.26002L13.9299 3.26002C13.7651 2.88546 13.4949 2.56692 13.1522 2.34321C12.8095 2.11949 12.4092 2.00025 11.9999 2.00002C11.5954 1.99835 11.1991 2.11353 10.8585 2.33173C10.5179 2.54993 10.2475 2.86186 10.0799 3.23002L8.19994 7.23002C8.18968 7.24952 8.1755 7.26669 8.15829 7.28046C8.14108 7.29423 8.12122 7.30429 8.09994 7.31002L3.81994 8.00002C3.43203 8.05781 3.06776 8.22206 2.76764 8.47452C2.46751 8.72698 2.2433 9.05774 2.11994 9.43002C1.99723 9.8029 1.97896 10.2023 2.0671 10.5848C2.15524 10.9673 2.34643 11.3184 2.61994 11.6L5.77994 14.85C5.78903 14.8705 5.79373 14.8926 5.79373 14.915C5.79373 14.9374 5.78903 14.9596 5.77994 14.98L5.03994 19.52C4.97114 19.9154 5.01599 20.3222 5.16926 20.6931C5.32253 21.064 5.57794 21.3838 5.90577 21.6152C6.23361 21.8467 6.62042 21.9804 7.02122 22.0007C7.42203 22.021 7.82037 21.9272 8.16994 21.73L11.8999 19.66C11.9185 19.6504 11.939 19.6453 11.9599 19.6453C11.9808 19.6453 12.0014 19.6504 12.0199 19.66L15.7499 21.73C16.1 21.9229 16.4972 22.0134 16.8963 21.9913C17.2953 21.9691 17.6801 21.835 18.0065 21.6045C18.333 21.374 18.5881 21.0563 18.7425 20.6877C18.897 20.319 18.9446 19.9144 18.8799 19.52L18.1899 15C18.1794 14.9818 18.1739 14.9611 18.1739 14.94C18.1739 14.919 18.1794 14.8983 18.1899 14.88L21.3899 11.6Z" fill="#FF754C" />
                                        </svg>
                                        <p style={{ color: "#FF754C", fontWeight: "700", margin: "0" }} >4.7</p>
                                        <p style={{ color: "#AAA", fontWeight: "600", margin: "0" }}>244 reviews</p>
                                    </div>
                                    <div className="related-price d-flex align-items-center gap-2 " style={{ marginTop: "0px" }}>
                                        <p style={{ color: "#11142D", fontWeight: "700", fontSize: "20px", margin: "0" }} >$45.4</p>
                                        <p style={{ color: "#AAA", fontWeight: "600", fontSize: "16px", margin: "0", textDecorationLine: "line-through" }} >$98.4</p>
                                    </div>
                                    <div className="related-addtocard">
                                        <NavLink className={styles.relatedaddtocard} to="/home/books/addtocard"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20C17.551 20 18 20.448 18 21C18 21.552 17.551 22 17 22C16.448 22 16 21.552 16 21C16 20.448 16.448 20 17 20ZM11 20C11.551 20 12 20.448 12 21C12 21.552 11.551 22 11 22C10.448 22 10 21.552 10 21C10 20.448 10.448 20 11 20ZM21.889 5.458L17.894 13.447C17.725 13.786 17.378 14 17 14H9C8.447 14 8 14.448 8 15C8 15.552 8.447 16 9 16H19C19.551 16 20 16.448 20 17C20 17.552 19.551 18 19 18C19 18 12.413 18 9 18C7.343 18 6 16.657 6 15C6 13.793 6.71201 12.753 7.73901 12.277L5.25601 4H3C2.448 4 2 3.552 2 3C2 2.448 2.448 2 3 2H6C6.441 2 6.83 2.29 6.957 2.713L7.34403 4H20.988C21.067 3.999 21.147 4.007 21.225 4.026L21.233 4.028C21.326 4.05 21.413 4.085 21.494 4.131C21.644 4.216 21.765 4.335 21.85 4.474C21.936 4.613 21.989 4.774 21.998 4.947C22.003 5.039 21.995 5.133 21.974 5.226L21.972 5.234C21.953 5.313 21.925 5.388 21.889 5.458ZM19.382 6H7.944L9.74402 12H16.382L19.382 6Z" fill="#6C5DD3" />
                                        </svg> Add to cart
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <NavLink className={styles.relatedviewmore} to="/home/books/related">View More</NavLink>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: "#F0EEFF" }} className="hero-second p-5 d-flex gap-5 justify-content-around ">
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
                <div className="books-on-sale">
                    <div className="books-on-sale-heading d-flex p-5 justify-content-between align-items-center">
                        <h1 className={styles.flashsaleh1} >Books on Sale</h1>
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                    <div className="books-on-sale-cards justify-content-center d-flex gap-4 p-5">
                        <div className="books-on-sale-card">
                            <div className={styles.flashcardtop}>
                                <div className={styles.fiftyper}  >50%</div> </div>
                            <div className="books-on-sale-bottom p-2">
                                <h5 className={styles.flashcardh5} >The Missadventure of..</h5>
                                <NavLink className={styles.flashcardlink} to="/advanture"> ADVANTURE,SURVIVAL </NavLink>
                                <div className="rating-price d-flex justify-content-between mt-4">
                                    <div className="book-rating d-flex gap-2 align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21.39 11.6C21.6647 11.3192 21.856 10.9676 21.9425 10.5845C22.029 10.2013 22.0074 9.80161 21.88 9.43002C21.7605 9.05733 21.5387 8.72569 21.2399 8.47288C20.9411 8.22006 20.5774 8.05622 20.19 8.00002L15.9 7.34002C15.88 7.33422 15.8615 7.32403 15.846 7.31019C15.8304 7.29635 15.8181 7.27921 15.81 7.26002L13.93 3.26002C13.7652 2.88546 13.4949 2.56692 13.1523 2.34321C12.8096 2.11949 12.4093 2.00025 12 2.00002C11.5955 1.99835 11.1991 2.11353 10.8585 2.33173C10.5179 2.54993 10.2476 2.86186 10.08 3.23002L8.20002 7.23002C8.18976 7.24952 8.17558 7.26669 8.15837 7.28046C8.14117 7.29423 8.1213 7.30429 8.10002 7.31002L3.82002 8.00002C3.43212 8.05781 3.06785 8.22206 2.76772 8.47452C2.4676 8.72698 2.24338 9.05774 2.12002 9.43002C1.99732 9.8029 1.97905 10.2023 2.06719 10.5848C2.15533 10.9673 2.34652 11.3184 2.62002 11.6L5.78002 14.85C5.78912 14.8705 5.79382 14.8926 5.79382 14.915C5.79382 14.9374 5.78912 14.9596 5.78002 14.98L5.04002 19.52C4.97123 19.9154 5.01607 20.3222 5.16935 20.6931C5.32262 21.064 5.57802 21.3838 5.90586 21.6152C6.23369 21.8467 6.6205 21.9804 7.02131 22.0007C7.42211 22.021 7.82045 21.9272 8.17002 21.73L11.9 19.66C11.9186 19.6504 11.9391 19.6453 11.96 19.6453C11.9809 19.6453 12.0015 19.6504 12.02 19.66L15.75 21.73C16.1 21.9229 16.4973 22.0134 16.8963 21.9913C17.2954 21.9691 17.6801 21.835 18.0066 21.6045C18.3331 21.374 18.5881 21.0563 18.7426 20.6877C18.897 20.319 18.9447 19.9144 18.88 19.52L18.19 15C18.1795 14.9818 18.1739 14.9611 18.1739 14.94C18.1739 14.919 18.1795 14.8983 18.19 14.88L21.39 11.6Z" fill="#FF754C" />
                                        </svg> <span className={styles.bookrating} >4.7</span>
                                    </div>
                                    <div className="book-price d-flex gap-1 align-items-center">
                                        <span className={styles.bookflashprice} >$ 54.78</span>
                                        <span className={styles.booknormalprice}>$70.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="books-on-sale-card">
                            <div className={styles.flashcardtop}>
                                <div className={styles.fiftyper}  >50%</div> </div>
                            <div className="books-on-sale-bottom p-2">
                                <h5 className={styles.flashcardh5} >Battle Drive</h5>
                                <NavLink className={styles.flashcardlink} to="/thriller"> THRILLE,DRAMA,HORROR </NavLink>
                                <div className="rating-price d-flex justify-content-between mt-4">
                                    <div className="book-rating d-flex gap-2 align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21.39 11.6C21.6647 11.3192 21.856 10.9676 21.9425 10.5845C22.029 10.2013 22.0074 9.80161 21.88 9.43002C21.7605 9.05733 21.5387 8.72569 21.2399 8.47288C20.9411 8.22006 20.5774 8.05622 20.19 8.00002L15.9 7.34002C15.88 7.33422 15.8615 7.32403 15.846 7.31019C15.8304 7.29635 15.8181 7.27921 15.81 7.26002L13.93 3.26002C13.7652 2.88546 13.4949 2.56692 13.1523 2.34321C12.8096 2.11949 12.4093 2.00025 12 2.00002C11.5955 1.99835 11.1991 2.11353 10.8585 2.33173C10.5179 2.54993 10.2476 2.86186 10.08 3.23002L8.20002 7.23002C8.18976 7.24952 8.17558 7.26669 8.15837 7.28046C8.14117 7.29423 8.1213 7.30429 8.10002 7.31002L3.82002 8.00002C3.43212 8.05781 3.06785 8.22206 2.76772 8.47452C2.4676 8.72698 2.24338 9.05774 2.12002 9.43002C1.99732 9.8029 1.97905 10.2023 2.06719 10.5848C2.15533 10.9673 2.34652 11.3184 2.62002 11.6L5.78002 14.85C5.78912 14.8705 5.79382 14.8926 5.79382 14.915C5.79382 14.9374 5.78912 14.9596 5.78002 14.98L5.04002 19.52C4.97123 19.9154 5.01607 20.3222 5.16935 20.6931C5.32262 21.064 5.57802 21.3838 5.90586 21.6152C6.23369 21.8467 6.6205 21.9804 7.02131 22.0007C7.42211 22.021 7.82045 21.9272 8.17002 21.73L11.9 19.66C11.9186 19.6504 11.9391 19.6453 11.96 19.6453C11.9809 19.6453 12.0015 19.6504 12.02 19.66L15.75 21.73C16.1 21.9229 16.4973 22.0134 16.8963 21.9913C17.2954 21.9691 17.6801 21.835 18.0066 21.6045C18.3331 21.374 18.5881 21.0563 18.7426 20.6877C18.897 20.319 18.9447 19.9144 18.88 19.52L18.19 15C18.1795 14.9818 18.1739 14.9611 18.1739 14.94C18.1739 14.919 18.1795 14.8983 18.19 14.88L21.39 11.6Z" fill="#FF754C" />
                                        </svg> <span className={styles.bookrating} >4.7</span>
                                    </div>
                                    <div className="book-price d-flex gap-1 align-items-center">
                                        <span className={styles.bookflashprice} >$ 54.78</span>
                                        <span className={styles.booknormalprice}>$70.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="books-on-sale-card">
                            <div className={styles.flashcardtop}>
                                <div className={styles.fiftyper}>50%</div> </div>
                            <div className="books-on-sale-bottom p-2">
                                <h5 className={styles.flashcardh5} >Seconds [PART 1]</h5>
                                <NavLink className={styles.flashcardlink} to="/thriller"> THRILLE,DRAMA,HORROR </NavLink>
                                <div className="rating-price d-flex justify-content-between mt-4">
                                    <div className="book-rating d-flex gap-2 align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21.39 11.6C21.6647 11.3192 21.856 10.9676 21.9425 10.5845C22.029 10.2013 22.0074 9.80161 21.88 9.43002C21.7605 9.05733 21.5387 8.72569 21.2399 8.47288C20.9411 8.22006 20.5774 8.05622 20.19 8.00002L15.9 7.34002C15.88 7.33422 15.8615 7.32403 15.846 7.31019C15.8304 7.29635 15.8181 7.27921 15.81 7.26002L13.93 3.26002C13.7652 2.88546 13.4949 2.56692 13.1523 2.34321C12.8096 2.11949 12.4093 2.00025 12 2.00002C11.5955 1.99835 11.1991 2.11353 10.8585 2.33173C10.5179 2.54993 10.2476 2.86186 10.08 3.23002L8.20002 7.23002C8.18976 7.24952 8.17558 7.26669 8.15837 7.28046C8.14117 7.29423 8.1213 7.30429 8.10002 7.31002L3.82002 8.00002C3.43212 8.05781 3.06785 8.22206 2.76772 8.47452C2.4676 8.72698 2.24338 9.05774 2.12002 9.43002C1.99732 9.8029 1.97905 10.2023 2.06719 10.5848C2.15533 10.9673 2.34652 11.3184 2.62002 11.6L5.78002 14.85C5.78912 14.8705 5.79382 14.8926 5.79382 14.915C5.79382 14.9374 5.78912 14.9596 5.78002 14.98L5.04002 19.52C4.97123 19.9154 5.01607 20.3222 5.16935 20.6931C5.32262 21.064 5.57802 21.3838 5.90586 21.6152C6.23369 21.8467 6.6205 21.9804 7.02131 22.0007C7.42211 22.021 7.82045 21.9272 8.17002 21.73L11.9 19.66C11.9186 19.6504 11.9391 19.6453 11.96 19.6453C11.9809 19.6453 12.0015 19.6504 12.02 19.66L15.75 21.73C16.1 21.9229 16.4973 22.0134 16.8963 21.9913C17.2954 21.9691 17.6801 21.835 18.0066 21.6045C18.3331 21.374 18.5881 21.0563 18.7426 20.6877C18.897 20.319 18.9447 19.9144 18.88 19.52L18.19 15C18.1795 14.9818 18.1739 14.9611 18.1739 14.94C18.1739 14.919 18.1795 14.8983 18.19 14.88L21.39 11.6Z" fill="#FF754C" />
                                        </svg> <span className={styles.bookrating} >4.7</span>
                                    </div>
                                    <div className="book-price d-flex gap-1 align-items-center">
                                        <span className={styles.bookflashprice} >$ 54.78</span>
                                        <span className={styles.booknormalprice}>$70.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="books-on-sale-card">
                            <div className={styles.flashcardtop}>
                                <div className={styles.fiftyper}  >30%</div> </div>
                            <div className="books-on-sale-bottom p-2">
                                <h5 className={styles.flashcardh5} >Terrible Madness</h5>
                                <NavLink className={styles.flashcardlink} to="/advanture"> THRILLE,DRAMA,HORROR</NavLink>
                                <div className="rating-price d-flex justify-content-between mt-4">
                                    <div className="book-rating d-flex gap-2 align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21.39 11.6C21.6647 11.3192 21.856 10.9676 21.9425 10.5845C22.029 10.2013 22.0074 9.80161 21.88 9.43002C21.7605 9.05733 21.5387 8.72569 21.2399 8.47288C20.9411 8.22006 20.5774 8.05622 20.19 8.00002L15.9 7.34002C15.88 7.33422 15.8615 7.32403 15.846 7.31019C15.8304 7.29635 15.8181 7.27921 15.81 7.26002L13.93 3.26002C13.7652 2.88546 13.4949 2.56692 13.1523 2.34321C12.8096 2.11949 12.4093 2.00025 12 2.00002C11.5955 1.99835 11.1991 2.11353 10.8585 2.33173C10.5179 2.54993 10.2476 2.86186 10.08 3.23002L8.20002 7.23002C8.18976 7.24952 8.17558 7.26669 8.15837 7.28046C8.14117 7.29423 8.1213 7.30429 8.10002 7.31002L3.82002 8.00002C3.43212 8.05781 3.06785 8.22206 2.76772 8.47452C2.4676 8.72698 2.24338 9.05774 2.12002 9.43002C1.99732 9.8029 1.97905 10.2023 2.06719 10.5848C2.15533 10.9673 2.34652 11.3184 2.62002 11.6L5.78002 14.85C5.78912 14.8705 5.79382 14.8926 5.79382 14.915C5.79382 14.9374 5.78912 14.9596 5.78002 14.98L5.04002 19.52C4.97123 19.9154 5.01607 20.3222 5.16935 20.6931C5.32262 21.064 5.57802 21.3838 5.90586 21.6152C6.23369 21.8467 6.6205 21.9804 7.02131 22.0007C7.42211 22.021 7.82045 21.9272 8.17002 21.73L11.9 19.66C11.9186 19.6504 11.9391 19.6453 11.96 19.6453C11.9809 19.6453 12.0015 19.6504 12.02 19.66L15.75 21.73C16.1 21.9229 16.4973 22.0134 16.8963 21.9913C17.2954 21.9691 17.6801 21.835 18.0066 21.6045C18.3331 21.374 18.5881 21.0563 18.7426 20.6877C18.897 20.319 18.9447 19.9144 18.88 19.52L18.19 15C18.1795 14.9818 18.1739 14.9611 18.1739 14.94C18.1739 14.919 18.1795 14.8983 18.19 14.88L21.39 11.6Z" fill="#FF754C" />
                                        </svg> <span className={styles.bookrating} >4.7</span>
                                    </div>
                                    <div className="book-price d-flex gap-1 align-items-center">
                                        <span className={styles.bookflashprice} >$ 54.78</span>
                                        <span className={styles.booknormalprice}>$70.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="books-on-sale-card">
                            <div className={styles.flashcardtop}>
                                <div className={styles.fiftyper}  >40%</div> </div>
                            <div className="books-on-sale-bottom p-2">
                                <h5 className={styles.flashcardh5} >Take Out Tango</h5>
                                <NavLink className={styles.flashcardlink} to="/sports"> SPORTS, DRAMA </NavLink>
                                <div className="rating-price d-flex justify-content-between mt-4">
                                    <div className="book-rating d-flex gap-2 align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21.39 11.6C21.6647 11.3192 21.856 10.9676 21.9425 10.5845C22.029 10.2013 22.0074 9.80161 21.88 9.43002C21.7605 9.05733 21.5387 8.72569 21.2399 8.47288C20.9411 8.22006 20.5774 8.05622 20.19 8.00002L15.9 7.34002C15.88 7.33422 15.8615 7.32403 15.846 7.31019C15.8304 7.29635 15.8181 7.27921 15.81 7.26002L13.93 3.26002C13.7652 2.88546 13.4949 2.56692 13.1523 2.34321C12.8096 2.11949 12.4093 2.00025 12 2.00002C11.5955 1.99835 11.1991 2.11353 10.8585 2.33173C10.5179 2.54993 10.2476 2.86186 10.08 3.23002L8.20002 7.23002C8.18976 7.24952 8.17558 7.26669 8.15837 7.28046C8.14117 7.29423 8.1213 7.30429 8.10002 7.31002L3.82002 8.00002C3.43212 8.05781 3.06785 8.22206 2.76772 8.47452C2.4676 8.72698 2.24338 9.05774 2.12002 9.43002C1.99732 9.8029 1.97905 10.2023 2.06719 10.5848C2.15533 10.9673 2.34652 11.3184 2.62002 11.6L5.78002 14.85C5.78912 14.8705 5.79382 14.8926 5.79382 14.915C5.79382 14.9374 5.78912 14.9596 5.78002 14.98L5.04002 19.52C4.97123 19.9154 5.01607 20.3222 5.16935 20.6931C5.32262 21.064 5.57802 21.3838 5.90586 21.6152C6.23369 21.8467 6.6205 21.9804 7.02131 22.0007C7.42211 22.021 7.82045 21.9272 8.17002 21.73L11.9 19.66C11.9186 19.6504 11.9391 19.6453 11.96 19.6453C11.9809 19.6453 12.0015 19.6504 12.02 19.66L15.75 21.73C16.1 21.9229 16.4973 22.0134 16.8963 21.9913C17.2954 21.9691 17.6801 21.835 18.0066 21.6045C18.3331 21.374 18.5881 21.0563 18.7426 20.6877C18.897 20.319 18.9447 19.9144 18.88 19.52L18.19 15C18.1795 14.9818 18.1739 14.9611 18.1739 14.94C18.1739 14.919 18.1795 14.8983 18.19 14.88L21.39 11.6Z" fill="#FF754C" />
                                        </svg> <span className={styles.bookrating} >4.7</span>
                                    </div>
                                    <div className="book-price d-flex gap-1 align-items-center">
                                        <span className={styles.bookflashprice} >$ 54.78</span>
                                        <span className={styles.booknormalprice}>$70.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.highlowsection}>
                    <div className={styles.highlowone}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="193" height="40" viewBox="0 0 193 40" fill="none">
                            <path d="M75.1176 31.5254H69.9062V20.8835H60.1413V31.5254H54.9131V6.86853H60.1413V16.5323H69.9062V6.86853H75.1176V31.5254Z" fill="#AAAAAA" />
                            <path d="M80.7337 7.79612C80.7337 6.12084 81.6669 5.2832 83.5333 5.2832C85.3997 5.2832 86.3329 6.12084 86.3329 7.79612C86.3329 8.5944 86.0968 9.21842 85.6246 9.66815C85.1636 10.1066 84.4665 10.3259 83.5333 10.3259C81.6669 10.3259 80.7337 9.48264 80.7337 7.79612ZM86.0968 31.5254H80.9529V12.6702H86.0968V31.5254Z" fill="#AAAAAA" />
                            <path d="M107.92 12.6702V15.2843L104.969 16.0432C105.509 16.8865 105.779 17.8309 105.779 18.8766C105.779 20.9004 105.07 22.4801 103.654 23.6157C102.248 24.74 100.292 25.3022 97.7844 25.3022L96.8568 25.2516L96.0979 25.1673C95.5695 25.572 95.3052 26.0218 95.3052 26.5165C95.3052 27.2586 96.2497 27.6296 98.1386 27.6296H101.343C103.412 27.6296 104.986 28.0737 106.065 28.9619C107.156 29.8502 107.701 31.1544 107.701 32.8747C107.701 35.0784 106.779 36.7874 104.935 38.0017C103.103 39.216 100.466 39.8231 97.0255 39.8231C94.3945 39.8231 92.3819 39.3621 90.9877 38.4402C89.6048 37.5295 88.9133 36.2477 88.9133 34.5949C88.9133 33.4593 89.2675 32.5093 89.9758 31.7447C90.6842 30.9801 91.7242 30.4348 93.0959 30.1088C92.5674 29.8839 92.1065 29.5185 91.7129 29.0125C91.3194 28.4953 91.1227 27.95 91.1227 27.3766C91.1227 26.657 91.3307 26.0611 91.7467 25.5889C92.1627 25.1054 92.7642 24.6332 93.5513 24.1722C92.5618 23.745 91.7748 23.0591 91.1901 22.1147C90.6167 21.1702 90.33 20.0571 90.33 18.7754C90.33 16.7178 90.999 15.1269 92.337 14.0025C93.6749 12.8782 95.5863 12.316 98.0711 12.316C98.5996 12.316 99.2236 12.3666 99.9432 12.4678C100.674 12.5577 101.141 12.6252 101.343 12.6702H107.92ZM93.3657 34.1901C93.3657 34.8985 93.703 35.455 94.3776 35.8598C95.0635 36.2646 96.0192 36.467 97.2447 36.467C99.0887 36.467 100.533 36.214 101.579 35.708C102.625 35.2021 103.148 34.5106 103.148 33.6336C103.148 32.9253 102.838 32.4362 102.22 32.1663C101.602 31.8965 100.646 31.7616 99.3529 31.7616H96.6882C95.7437 31.7616 94.9511 31.9808 94.3102 32.4193C93.6805 32.869 93.3657 33.4593 93.3657 34.1901ZM95.2378 18.8428C95.2378 19.866 95.4683 20.6755 95.9292 21.2714C96.4015 21.8673 97.1154 22.1653 98.0711 22.1653C99.0381 22.1653 99.7464 21.8673 100.196 21.2714C100.646 20.6755 100.871 19.866 100.871 18.8428C100.871 16.5716 99.9375 15.4361 98.0711 15.4361C96.1822 15.4361 95.2378 16.5716 95.2378 18.8428Z" fill="#AAAAAA" />
                            <path d="M128.445 31.5254H123.301V20.5125C123.301 17.7916 122.29 16.4311 120.266 16.4311C118.827 16.4311 117.787 16.9202 117.146 17.8984C116.505 18.8766 116.184 20.4619 116.184 22.6544V31.5254H111.04V5.2832H116.184V10.6295C116.184 11.0455 116.145 12.0237 116.066 13.564L115.948 15.0819H116.218C117.365 13.238 119.186 12.316 121.682 12.316C123.897 12.316 125.578 12.9119 126.725 14.1037C127.872 15.2955 128.445 17.0045 128.445 19.2307V31.5254Z" fill="#AAAAAA" />
                            <path d="M138.885 31.5254H133.741V5.2832H138.885V31.5254Z" fill="#AAAAAA" />
                            <path d="M148.397 22.0641C148.397 23.9305 148.7 25.3415 149.308 26.2972C149.926 27.2529 150.927 27.7308 152.31 27.7308C153.681 27.7308 154.665 27.2586 155.261 26.3141C155.868 25.3584 156.172 23.9417 156.172 22.0641C156.172 20.1977 155.868 18.7978 155.261 17.8646C154.654 16.9314 153.659 16.4648 152.276 16.4648C150.904 16.4648 149.915 16.9314 149.308 17.8646C148.7 18.7866 148.397 20.1864 148.397 22.0641ZM161.434 22.0641C161.434 25.1335 160.624 27.534 159.005 29.2655C157.386 30.997 155.132 31.8628 152.242 31.8628C150.432 31.8628 148.835 31.4692 147.452 30.6822C146.069 29.8839 145.007 28.7427 144.265 27.2586C143.523 25.7744 143.152 24.0429 143.152 22.0641C143.152 18.9834 143.956 16.5885 145.564 14.8795C147.171 13.1705 149.431 12.316 152.343 12.316C154.154 12.316 155.75 12.7095 157.133 13.4966C158.516 14.2836 159.578 15.4136 160.321 16.8865C161.063 18.3594 161.434 20.0852 161.434 22.0641Z" fill="#AAAAAA" />
                            <path d="M181.183 31.5254L179.732 24.9312L177.776 16.5997H177.658L174.217 31.5254H168.686L163.323 12.6702H168.45L170.625 21.0184C170.974 22.5138 171.328 24.577 171.688 27.208H171.789C171.834 26.3535 172.031 24.9986 172.379 23.1434L172.649 21.7099L174.976 12.6702H180.643L182.852 21.7099C182.897 21.9573 182.965 22.3227 183.055 22.8061C183.156 23.2896 183.252 23.8068 183.342 24.3577C183.432 24.8974 183.51 25.4315 183.578 25.9599C183.656 26.4771 183.701 26.8931 183.713 27.208H183.814C183.915 26.3984 184.095 25.2909 184.353 23.8855C184.612 22.4688 184.798 21.5131 184.91 21.0184L187.17 12.6702H192.213L186.782 31.5254H181.183Z" fill="#AAAAAA" />
                            <path d="M17.9342 35.5107C27.8389 35.5107 35.8684 27.7787 35.8684 18.2408C35.8684 8.70282 27.8389 0.970818 17.9342 0.970818C8.02945 0.970818 3.19677e-07 8.70289 2.0594e-07 18.2408C9.22031e-08 27.7787 8.02938 35.5107 17.9342 35.5107ZM31.2402 18.2408L4.62818 18.2408C4.62818 11.1584 10.5805 5.42758 17.9342 5.42758C25.289 5.42758 31.2402 11.1595 31.2402 18.2408Z" fill="#AAAAAA" />
                        </svg>
                    </div>
                    <div className={styles.highlowone}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="147" height="33" viewBox="0 0 147 33" fill="none">
                            <path d="M20.1048 30.0045C18.9683 30.9074 17.4894 31.608 15.6679 32.1062C13.8465 32.6043 11.6047 32.8534 8.94261 32.8534C6.29607 32.8534 3.47829 32.6121 0.489258 32.1295V1.35184C3.50943 0.869232 6.12483 0.62793 8.33547 0.62793C10.5617 0.62793 12.3831 0.838096 13.7998 1.25843C15.232 1.67876 16.3996 2.24699 17.3026 2.96311C19.0773 4.34865 19.9647 6.14674 19.9647 8.35738C19.9647 10.5524 19.1629 12.3739 17.5594 13.8217C19.4587 14.4133 20.9299 15.5342 21.9729 17.1844C22.9226 18.6633 23.3974 20.3057 23.3974 22.1116C23.3974 23.9019 23.1327 25.4353 22.6034 26.7119C22.0897 27.9885 21.2568 29.086 20.1048 30.0045ZM6.67749 12.9577C7.33134 13.0667 8.14865 13.1211 9.12943 13.1211C10.1102 13.1211 10.9119 12.9966 11.5347 12.7475C12.1729 12.4829 12.6633 12.1559 13.0058 11.7667C13.5663 11.1285 13.8465 10.2411 13.8465 9.10464C13.8465 6.72275 12.4454 5.53181 9.64317 5.53181C8.46001 5.53181 7.47145 5.57851 6.67749 5.67192V12.9577ZM10.1336 17.955C8.82585 17.955 7.67383 18.0406 6.67749 18.2118V27.3891C7.76724 27.6693 8.91148 27.8094 10.1102 27.8094C11.3089 27.8094 12.3598 27.6693 13.2627 27.3891C14.1812 27.0933 14.9518 26.6963 15.5745 26.1982C16.8355 25.1707 17.466 23.863 17.466 22.2751C17.466 19.395 15.0219 17.955 10.1336 17.955Z" fill="#AAAAAA" />
                            <path d="M26.1062 20.1967C26.1062 18.4843 26.3942 16.8497 26.9702 15.2929C27.5618 13.7205 28.4025 12.3505 29.4922 11.1829C31.8741 8.66095 34.9643 7.39995 38.7629 7.39995C42.5459 7.39995 45.5505 8.5909 47.7767 10.9728C49.9095 13.2457 50.9759 16.1958 50.9759 19.8231C50.9759 23.4504 49.8783 26.455 47.6833 28.8369C45.3637 31.3589 42.289 32.6199 38.4593 32.6199C34.5051 32.6199 31.4071 31.3823 29.1653 28.907C27.1259 26.6496 26.1062 23.7462 26.1062 20.1967ZM31.7807 20.0566C31.7807 21.0374 31.9441 21.9871 32.2711 22.9056C32.598 23.8241 33.065 24.6102 33.6722 25.2641C34.9643 26.6808 36.6612 27.3891 38.7629 27.3891C40.7089 27.3891 42.2423 26.6963 43.3632 25.3108C44.4529 23.972 44.9978 22.2284 44.9978 20.08C44.9978 17.9005 44.4374 16.1413 43.3165 14.8025C42.1178 13.3702 40.4753 12.6541 38.3892 12.6541C36.272 12.6541 34.614 13.4169 33.4153 14.9426C32.3256 16.3437 31.7807 18.0484 31.7807 20.0566Z" fill="#AAAAAA" />
                            <path d="M54.0817 20.1967C54.0817 18.4843 54.3697 16.8497 54.9457 15.2929C55.5373 13.7205 56.3779 12.3505 57.4677 11.1829C59.8496 8.66095 62.9398 7.39995 66.7383 7.39995C70.5213 7.39995 73.5259 8.5909 75.7521 10.9728C77.8849 13.2457 78.9513 16.1958 78.9513 19.8231C78.9513 23.4504 77.8538 26.455 75.6587 28.8369C73.3391 31.3589 70.2645 32.6199 66.4348 32.6199C62.4805 32.6199 59.3825 31.3823 57.1408 28.907C55.1014 26.6496 54.0817 23.7462 54.0817 20.1967ZM59.7562 20.0566C59.7562 21.0374 59.9196 21.9871 60.2465 22.9056C60.5735 23.8241 61.0405 24.6102 61.6476 25.2641C62.9398 26.6808 64.6367 27.3891 66.7383 27.3891C68.6843 27.3891 70.2178 26.6963 71.3387 25.3108C72.4284 23.972 72.9733 22.2284 72.9733 20.08C72.9733 17.9005 72.4128 16.1413 71.2919 14.8025C70.0932 13.3702 68.4508 12.6541 66.3647 12.6541C64.2475 12.6541 62.5895 13.4169 61.3908 14.9426C60.301 16.3437 59.7562 18.0484 59.7562 20.0566Z" fill="#AAAAAA" />
                            <path d="M92.0517 32.6199C87.6616 32.6199 84.3534 31.8182 82.1272 30.2147C82.1583 29.7476 82.205 29.2183 82.2673 28.6268L82.4775 26.9454C82.602 25.8401 82.6798 25.1551 82.711 24.8905C82.7421 24.6102 82.7655 24.4623 82.781 24.4468C82.7966 24.4156 82.9212 24.5402 83.1547 24.8204C83.3882 25.0851 83.8319 25.412 84.4857 25.8012C85.1396 26.1904 85.8946 26.5329 86.7508 26.8287C88.6034 27.4669 90.5338 27.7861 92.5421 27.7861C95.2353 27.7861 96.582 26.8909 96.582 25.1006C96.582 24.5246 96.3251 24.0965 95.8113 23.8163C94.8928 23.3492 93.5384 22.999 91.7481 22.7654C89.9734 22.5164 88.5178 22.1583 87.3813 21.6913C86.2449 21.2242 85.3186 20.6638 84.6025 20.0099C83.2792 18.7801 82.6176 17.1688 82.6176 15.1761C82.6176 12.7475 83.5517 10.8405 85.4198 9.45491C87.2724 8.08494 89.8333 7.39995 93.1025 7.39995C96.3407 7.39995 99.104 8.31846 101.392 10.1555C101.283 10.5602 101.167 10.9494 101.042 11.3231C100.684 12.3505 100.419 13.09 100.248 13.5415L99.7111 14.9192C99.68 15.0438 99.6566 15.1061 99.641 15.1061C99.6099 15.1061 99.4854 14.9426 99.2674 14.6157C98.2866 13.4792 96.761 12.732 94.6905 12.3739C94.0522 12.2493 93.3983 12.1871 92.7289 12.1871C89.8956 12.1871 88.4789 13.0433 88.4789 14.7558C88.4789 15.3474 88.7747 15.7988 89.3662 16.1102C90.4716 16.7018 91.9817 17.1377 93.8965 17.4179C95.8269 17.6981 97.2903 18.0795 98.2866 18.5621C99.283 19.0292 100.085 19.5974 100.692 20.2668C101.813 21.4811 102.373 23.0924 102.373 25.1006C102.373 27.2957 101.494 29.0782 99.7345 30.4482C97.8974 31.896 95.3365 32.6199 92.0517 32.6199Z" fill="#AAAAAA" />
                            <path d="M116.011 32.6199C111.621 32.6199 108.312 31.8182 106.086 30.2147C106.117 29.7476 106.164 29.2183 106.226 28.6268L106.436 26.9454C106.561 25.8401 106.639 25.1551 106.67 24.8905C106.701 24.6102 106.724 24.4623 106.74 24.4468C106.756 24.4156 106.88 24.5402 107.114 24.8204C107.347 25.0851 107.791 25.412 108.445 25.8012C109.099 26.1904 109.854 26.5329 110.71 26.8287C112.562 27.4669 114.493 27.7861 116.501 27.7861C119.194 27.7861 120.541 26.8909 120.541 25.1006C120.541 24.5246 120.284 24.0965 119.77 23.8163C118.852 23.3492 117.497 22.999 115.707 22.7654C113.932 22.5164 112.477 22.1583 111.34 21.6913C110.204 21.2242 109.278 20.6638 108.561 20.0099C107.238 18.7801 106.577 17.1688 106.577 15.1761C106.577 12.7475 107.511 10.8405 109.379 9.45491C111.231 8.08494 113.792 7.39995 117.061 7.39995C120.3 7.39995 123.063 8.31846 125.351 10.1555C125.242 10.5602 125.126 10.9494 125.001 11.3231C124.643 12.3505 124.378 13.09 124.207 13.5415L123.67 14.9192C123.639 15.0438 123.616 15.1061 123.6 15.1061C123.569 15.1061 123.444 14.9426 123.226 14.6157C122.246 13.4792 120.72 12.732 118.649 12.3739C118.011 12.2493 117.357 12.1871 116.688 12.1871C113.855 12.1871 112.438 13.0433 112.438 14.7558C112.438 15.3474 112.734 15.7988 113.325 16.1102C114.431 16.7018 115.941 17.1377 117.855 17.4179C119.786 17.6981 121.249 18.0795 122.246 18.5621C123.242 19.0292 124.044 19.5974 124.651 20.2668C125.772 21.4811 126.332 23.0924 126.332 25.1006C126.332 27.2957 125.453 29.0782 123.693 30.4482C121.856 31.896 119.295 32.6199 116.011 32.6199Z" fill="#AAAAAA" />
                            <path d="M142.585 27.1322C144.593 27.1322 145.971 26.6107 146.718 25.5677H146.905L146.975 30.9853C146.212 31.7481 144.796 32.2541 142.725 32.5032C142.165 32.581 141.464 32.6199 140.623 32.6199C139.798 32.6199 138.895 32.4642 137.915 32.1529C136.949 31.8415 136.124 31.3356 135.439 30.635C134.023 29.1872 133.314 26.9221 133.314 23.8396V13.2379H129.788C129.773 12.7864 129.765 12.3272 129.765 11.8602V8.26397C129.765 7.99932 129.773 7.86699 129.788 7.86699H133.314V1.21172H139.036V7.86699H145.457V13.2379H139.036V22.7654C139.036 25.2096 139.713 26.6029 141.067 26.9454C141.503 27.07 142.009 27.1322 142.585 27.1322Z" fill="#AAAAAA" />
                        </svg>
                    </div>
                    <div className={styles.highlowone}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="173" height="54" viewBox="0 0 173 54" fill="none">
                            <path d="M35.91 29.7502C35.91 33.253 35.9722 35.5025 36.0968 36.4989H30.002V12.0962H35.91V14.1979C38.0428 12.4854 40.23 11.6292 42.4718 11.6292C45.1184 11.6292 47.041 12.7734 48.2397 15.0619C49.4384 13.8321 50.4348 13.0225 51.2287 12.6333C52.552 11.9639 53.8753 11.6292 55.1986 11.6292C56.5374 11.6292 57.6738 11.8549 58.6079 12.3064C59.542 12.7579 60.3126 13.3962 60.9198 14.2213C62.1496 15.887 62.7645 18.1755 62.7645 21.0867V30.3807C62.7645 33.0117 62.8035 34.5918 62.8813 35.1211C62.9591 35.6504 63.0603 35.9929 63.1849 36.1486C63.325 36.3043 63.4417 36.4444 63.5352 36.5689L63.4884 36.6623C62.243 36.5534 61.3245 36.4989 60.7329 36.4989H58.9816C58.4055 36.4989 57.6972 36.5222 56.8565 36.5689V23.9356C56.8565 20.2927 56.2961 18.1288 55.1752 17.4438C54.8016 17.2259 54.3579 17.1169 53.8442 17.1169C53.346 17.1169 52.9023 17.1791 52.5131 17.3037C52.1239 17.4127 51.7581 17.5995 51.4156 17.8641C50.8396 18.2845 50.1857 19.1096 49.454 20.3394C49.4696 20.464 49.4774 20.5885 49.4774 20.7131C49.4774 20.8376 49.4774 22.8926 49.4774 26.8779C49.4774 30.8633 49.5708 34.0703 49.7576 36.4989C48.4343 36.4989 47.3056 36.4989 46.3716 36.4989C45.4531 36.4989 44.5735 36.5222 43.7328 36.5689V23.9123C43.7328 21.3747 43.5771 19.7245 43.2658 18.9617C42.97 18.1988 42.6509 17.7007 42.3084 17.4672C41.9659 17.2336 41.5455 17.1169 41.0474 17.1169C38.9924 17.1169 37.2799 18.1054 35.91 20.0826V29.7502Z" fill="#AAAAAA" />
                            <path d="M85.6493 35.0511C83.4387 36.2498 81.4382 36.8492 79.6479 36.8492C77.8576 36.8492 76.3242 36.6857 75.0476 36.3588C73.771 36.0163 72.6891 35.5181 71.8017 34.8643C69.9958 33.541 69.0929 31.6261 69.0929 29.1197C69.0929 26.8779 70.1982 25.0098 72.4088 23.5153C74.8063 21.8962 78.06 21.0867 82.1699 21.0867L83.104 21.11C83.2908 21.1256 83.5009 21.1412 83.7345 21.1567C83.968 21.1567 84.1782 21.1723 84.365 21.2034C84.2404 18.7126 83.1662 17.257 81.1424 16.8367C80.473 16.6965 79.7569 16.6265 78.9941 16.6265C78.2468 16.6265 77.5073 16.6965 76.7756 16.8367C76.0595 16.9612 75.359 17.1324 74.674 17.3504C73.1639 17.833 72.0819 18.3857 71.4281 19.0084L71.358 18.9617L70.6575 13.8009C73.413 12.3531 76.4254 11.6292 79.6946 11.6292C84.7697 11.6292 88.0156 13.4584 89.4323 17.1169C89.8838 18.2845 90.1095 19.6 90.1095 21.0633V29.5167C90.1095 31.3226 90.7478 32.5524 92.0244 33.2063L87.7977 37.0827C86.9103 36.6156 86.1942 35.9384 85.6493 35.0511ZM84.3883 25.4068C83.968 25.3289 83.5321 25.29 83.0806 25.29H82.1465C78.706 25.29 76.5188 26.0528 75.5847 27.5785C75.3045 28.03 75.1644 28.5048 75.1644 29.0029C75.1644 29.5011 75.25 29.9448 75.4212 30.334C75.608 30.7076 75.9116 31.019 76.3319 31.2681C77.1415 31.7351 78.3402 31.9686 79.9281 31.9686C81.5316 31.9686 83.0261 31.5872 84.4117 30.8244C84.3961 30.6531 84.3883 30.4741 84.3883 30.2873V25.4068Z" fill="#AAAAAA" />
                            <path d="M96.2043 5.30086C97.2162 3.6818 98.3761 2.15615 99.6838 0.723906L104.144 4.25003C103.366 5.24637 102.836 5.93136 102.556 6.30499L101.739 7.44923C101.474 7.80729 101.194 8.21205 100.898 8.66352L96.2043 5.30086ZM93.6123 40.1184C95.9163 40.1184 97.0684 38.4059 97.0684 34.981V12.0962H102.743V33.2997C102.743 39.8382 100.882 43.7068 97.1618 44.9055C95.9475 45.2947 94.5697 45.4893 93.0285 45.4893L90.5999 39.3478L90.6466 39.231C91.534 39.8226 92.5225 40.1184 93.6123 40.1184Z" fill="#AAAAAA" />
                            <path d="M108.674 5.1374C109.92 3.19141 111.22 1.47895 112.574 0L117.595 3.94646C116.925 4.77155 116.302 5.58108 115.726 6.37504C115.726 6.37504 115.127 7.22349 113.928 8.92039L108.674 5.1374ZM114.816 33.8835C114.816 35.2223 114.847 36.0941 114.909 36.4989H108.978V12.0962H114.816V33.8835Z" fill="#AAAAAA" />
                            <path d="M127.566 33.5098C127.566 34.8798 127.628 35.8762 127.753 36.4989H121.891V12.0962H127.566V14.1745C129.621 12.4777 131.816 11.6292 134.151 11.6292C136.704 11.6292 138.744 12.501 140.269 14.2446C141.795 15.9726 142.558 18.2533 142.558 21.0867V30.3807C142.558 33.0117 142.597 34.5918 142.674 35.1211C142.752 35.6504 142.853 35.9929 142.978 36.1486C143.118 36.3043 143.235 36.4444 143.328 36.5689L143.282 36.6623C142.021 36.5534 141.102 36.4989 140.526 36.4989H138.891C138.393 36.4989 137.724 36.5222 136.883 36.5689V23.8422C136.883 19.2808 135.498 17.0001 132.727 17.0001C130.672 17.0001 128.951 18.0587 127.566 20.176V33.5098Z" fill="#AAAAAA" />
                            <path d="M148.232 24.496C148.232 22.6746 148.544 20.9855 149.166 19.4287C149.789 17.8719 150.669 16.5097 151.805 15.3421C154.234 12.8668 157.409 11.6292 161.333 11.6292C164.648 11.6292 167.311 12.7267 169.319 14.9218C171.296 17.039 172.285 19.7011 172.285 22.9081C172.285 24.138 172.191 24.9787 172.004 25.4301C170.448 25.866 167.279 26.084 162.5 26.084H154.28C154.685 27.7497 155.627 29.0497 157.106 29.9837C158.585 30.9022 160.507 31.3615 162.874 31.3615C165.349 31.3615 167.474 30.9178 169.249 30.0304C169.716 29.7969 170.066 29.579 170.3 29.3766C170.268 30.0304 170.23 30.6998 170.183 31.3848L169.926 35.0277C168.743 35.8372 166.828 36.3977 164.181 36.709C163.403 36.8025 162.656 36.8492 161.94 36.8492C157.985 36.8492 154.716 35.6971 152.132 33.3931C149.532 31.0735 148.232 28.1078 148.232 24.496ZM166.073 21.5537C165.435 18.2066 163.613 16.5331 160.609 16.5331C158.242 16.5331 156.444 17.5528 155.214 19.5922C154.841 20.2149 154.553 20.8999 154.35 21.6471C154.724 21.6627 155.183 21.6783 155.728 21.6938H157.456C158.032 21.7094 158.585 21.7172 159.114 21.7172H160.445C161.239 21.7172 162.018 21.7094 162.78 21.6938L164.695 21.6238C165.209 21.6082 165.668 21.5849 166.073 21.5537Z" fill="#AAAAAA" />
                            <path d="M6.62716 12.7061C8.8378 11.5073 10.8383 10.908 12.6286 10.908C14.4189 10.908 15.9523 11.0714 17.2289 11.3984C18.5054 11.7409 19.5874 12.239 20.4748 12.8929C22.2807 14.2162 23.1836 16.131 23.1836 18.6374C23.1836 20.8792 22.0783 22.7473 19.8676 24.2419C17.4702 25.8609 14.2165 26.6704 10.1066 26.6704L9.17251 26.6471C8.98569 26.6315 8.77553 26.616 8.54201 26.6004C8.30849 26.6004 8.09833 26.5848 7.91151 26.5537C8.03605 29.0445 9.11024 30.5001 11.1341 30.9205C11.8035 31.0606 12.5196 31.1306 13.2824 31.1306C14.0297 31.1306 14.7692 31.0606 15.5008 30.9205C16.217 30.7959 16.9175 30.6247 17.6025 30.4067C19.1126 29.9241 20.1946 29.3715 20.8484 28.7488L20.9185 28.7955L21.619 33.9562C18.8635 35.404 15.8511 36.1279 12.5819 36.1279C7.50675 36.1279 4.26085 34.2987 2.84417 30.6403C2.3927 29.4727 2.16697 28.1572 2.16697 26.6938V18.2404C2.16697 16.4346 1.52868 15.2047 0.252117 14.5509L4.4788 10.6745C5.36616 11.1415 6.08229 11.8187 6.62716 12.7061ZM7.88816 22.3504C8.30849 22.4282 8.74439 22.4671 9.19586 22.4671H10.1299C13.5704 22.4671 15.7577 21.7043 16.6918 20.1786C16.972 19.7272 17.1121 19.2524 17.1121 18.7542C17.1121 18.256 17.0265 17.8123 16.8553 17.4231C16.6684 17.0495 16.3649 16.7381 15.9445 16.4891C15.135 16.022 13.9363 15.7885 12.3484 15.7885C10.7449 15.7885 9.25035 16.1699 7.86481 16.9327C7.88037 17.104 7.88816 17.283 7.88816 17.4698V22.3504Z" fill="#AAAAAA" />
                            <path d="M7.41288 49.6224C6.3753 48.5848 6.3753 46.9025 7.41288 45.8649L9.68067 43.5971C10.7182 42.5595 12.4005 42.5595 13.4381 43.5971L15.7059 45.8649C16.7434 46.9025 16.7434 48.5848 15.7059 49.6224L13.4381 51.8902C12.4005 52.9279 10.7182 52.9279 9.68067 51.8902L7.41288 49.6224Z" fill="#AAAAAA" />
                        </svg>
                    </div>
                    <div className={styles.highlowone}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="205" height="45" viewBox="0 0 205 45" fill="none">
                            <path d="M11.8327 1.77078C10.9531 0.24673 8.93704 -0.181375 7.62934 0.965944C3.30925 4.75895 0.561523 10.4185 0.561523 16.7544H20.4884L11.8327 1.77078ZM39.1698 8.53483H35.4336C32.6858 8.53483 30.4518 10.9921 30.4518 14.0146V19.4943H0.561523C0.561523 23.8267 2.35183 27.7481 5.25524 30.6849C2.562 31.447 0.561523 34.1098 0.561523 37.3034C0.561523 41.0879 3.34817 44.1531 6.78867 44.1531C10.2292 44.1531 13.0158 41.0879 13.0158 37.3034C13.0158 36.5414 12.8757 35.8308 12.6733 35.1458C14.3547 35.6509 16.145 35.9335 17.9975 35.9335C19.8501 35.9335 21.6482 35.6509 23.3218 35.1458C23.1116 35.8308 22.9793 36.5414 22.9793 37.3034C22.9793 41.0879 25.7659 44.1531 29.2064 44.1531C32.6469 44.1531 35.4336 41.0879 35.4336 37.3034C35.4336 34.1098 33.4331 31.447 30.7398 30.6849C33.6433 27.7481 35.4336 23.8267 35.4336 19.4943V14.0146H39.1698C39.8548 14.0146 40.4153 13.3981 40.4153 12.6446V9.90476C40.4153 9.1513 39.8548 8.53483 39.1698 8.53483ZM6.78867 40.0433C5.4187 40.0433 4.29781 38.8104 4.29781 37.3034C4.29781 35.7965 5.4187 34.5636 6.78867 34.5636C8.15865 34.5636 9.27953 35.7965 9.27953 37.3034C9.27953 38.8104 8.15865 40.0433 6.78867 40.0433ZM31.6973 37.3034C31.6973 38.8104 30.5764 40.0433 29.2064 40.0433C27.8364 40.0433 26.7156 38.8104 26.7156 37.3034C26.7156 35.7965 27.8364 34.5636 29.2064 34.5636C30.5764 34.5636 31.6973 35.7965 31.6973 37.3034Z" fill="#AAAAAA" />
                            <path d="M63.4453 10.197H71.119C74.6157 10.197 77.1511 10.6973 78.7252 11.698C80.3105 12.6874 81.1032 14.2671 81.1032 16.4371C81.1032 17.91 80.7546 19.1187 80.0575 20.0631C79.3717 21.0076 78.4553 21.5754 77.3085 21.7665V21.9352C78.8713 22.2837 79.9957 22.9358 80.6815 23.8915C81.3786 24.8472 81.7272 26.1177 81.7272 27.7031C81.7272 29.9517 80.912 31.7057 79.2817 32.965C77.6627 34.2243 75.459 34.8539 72.6706 34.8539H63.4453V10.197ZM68.6735 19.9619H71.7093C73.1259 19.9619 74.1491 19.7427 74.7787 19.3042C75.4196 18.8657 75.74 18.1405 75.74 17.1286C75.74 16.1841 75.3915 15.5095 74.6944 15.1048C74.0085 14.6887 72.9179 14.4807 71.4225 14.4807H68.6735V19.9619ZM68.6735 24.1108V30.5364H72.0803C73.5195 30.5364 74.582 30.2609 75.2678 29.71C75.9537 29.1591 76.2966 28.3158 76.2966 27.1802C76.2966 25.1339 74.8349 24.1108 71.9116 24.1108H68.6735Z" fill="#AAAAAA" />
                            <path d="M100.852 34.8539H86.6518V10.197H100.852V14.4807H91.88V19.8945H100.228V24.1782H91.88V30.5364H100.852V34.8539Z" fill="#AAAAAA" />
                            <path d="M106.013 10.197H113.687C117.183 10.197 119.719 10.6973 121.293 11.698C122.878 12.6874 123.671 14.2671 123.671 16.4371C123.671 17.91 123.322 19.1187 122.625 20.0631C121.939 21.0076 121.023 21.5754 119.876 21.7665V21.9352C121.439 22.2837 122.563 22.9358 123.249 23.8915C123.946 24.8472 124.295 26.1177 124.295 27.7031C124.295 29.9517 123.48 31.7057 121.849 32.965C120.23 34.2243 118.027 34.8539 115.238 34.8539H106.013V10.197ZM111.241 19.9619H114.277C115.694 19.9619 116.717 19.7427 117.346 19.3042C117.987 18.8657 118.308 18.1405 118.308 17.1286C118.308 16.1841 117.959 15.5095 117.262 15.1048C116.576 14.6887 115.486 14.4807 113.99 14.4807H111.241V19.9619ZM111.241 24.1108V30.5364H114.648C116.087 30.5364 117.15 30.2609 117.836 29.71C118.521 29.1591 118.864 28.3158 118.864 27.1802C118.864 25.1339 117.403 24.1108 114.479 24.1108H111.241Z" fill="#AAAAAA" />
                            <path d="M136.893 20.3498L142.037 10.197H147.67L139.49 25.2576V34.8539H134.296V25.4263L126.116 10.197H131.783L136.893 20.3498Z" fill="#AAAAAA" />
                            <path d="M149.643 32.4422C149.643 31.4977 149.896 30.7838 150.402 30.3003C150.908 29.8168 151.645 29.5751 152.612 29.5751C153.545 29.5751 154.264 29.8224 154.77 30.3172C155.288 30.8119 155.546 31.5202 155.546 32.4422C155.546 33.3304 155.288 34.0331 154.77 34.5503C154.253 35.0563 153.534 35.3093 152.612 35.3093C151.667 35.3093 150.936 35.0619 150.419 34.5672C149.902 34.0612 149.643 33.3529 149.643 32.4422Z" fill="#AAAAAA" />
                            <path d="M171.467 12.4063C168.757 12.4063 166.615 13.3114 165.041 15.1216C163.478 16.9206 162.697 19.3885 162.697 22.5254C162.697 25.7523 163.45 28.2484 164.957 30.0136C166.475 31.7676 168.634 32.6446 171.433 32.6446C173.153 32.6446 175.115 32.3354 177.319 31.717V34.2299C175.61 34.8708 173.502 35.1912 170.995 35.1912C167.363 35.1912 164.558 34.0893 162.579 31.8856C160.611 29.6819 159.628 26.5506 159.628 22.4917C159.628 19.9507 160.1 17.7245 161.044 15.8131C162 13.9017 163.372 12.4288 165.159 11.3944C166.958 10.36 169.072 9.84281 171.501 9.84281C174.087 9.84281 176.347 10.315 178.28 11.2595L177.066 13.7218C175.2 12.8448 173.333 12.4063 171.467 12.4063Z" fill="#AAAAAA" />
                            <path d="M204.101 22.4917C204.101 26.4382 203.1 29.5414 201.099 31.8013C199.109 34.0612 196.337 35.1912 192.784 35.1912C189.153 35.1912 186.348 34.0837 184.369 31.8688C182.401 29.6426 181.417 26.5056 181.417 22.458C181.417 18.4441 182.407 15.3352 184.386 13.1315C186.364 10.9166 189.175 9.80908 192.818 9.80908C196.36 9.80908 199.126 10.9334 201.116 13.1821C203.106 15.4308 204.101 18.534 204.101 22.4917ZM184.453 22.4917C184.453 25.831 185.161 28.3664 186.578 30.0979C188.006 31.8182 190.075 32.6783 192.784 32.6783C195.517 32.6783 197.58 31.8182 198.974 30.0979C200.368 28.3777 201.065 25.8423 201.065 22.4917C201.065 19.1749 200.368 16.662 198.974 14.953C197.591 13.2327 195.539 12.3726 192.818 12.3726C190.086 12.3726 188.006 13.2383 186.578 14.9698C185.161 16.6901 184.453 19.1974 184.453 22.4917Z" fill="#AAAAAA" />
                        </svg>
                    </div>
                    <div className={styles.highlowone}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="170" height="33" viewBox="0 0 170 33" fill="none">
                            <path d="M57.117 16.3529H66.6121L63.88 29.2042C62.3734 29.7214 60.9735 30.07 59.6805 30.2499C58.3988 30.441 57.0383 30.5366 55.5992 30.5366C52.6871 30.5366 50.4384 29.7102 48.8531 28.0574C47.2678 26.4046 46.4751 24.0322 46.4751 20.9403C46.4751 17.927 47.0766 15.2061 48.2797 12.7775C49.4827 10.3377 51.1749 8.46004 53.3561 7.14455C55.5373 5.81782 58.0559 5.15446 60.9117 5.15446C63.3628 5.15446 65.6677 5.71101 67.8264 6.82411L65.8869 11.0573C65.0549 10.6075 64.2229 10.2477 63.3909 9.97791C62.5589 9.70806 61.6538 9.57314 60.6756 9.57314C58.9553 9.57314 57.415 10.0397 56.0545 10.973C54.7053 11.9062 53.6428 13.2385 52.867 14.97C52.1025 16.6903 51.7202 18.5454 51.7202 20.5355C51.7202 22.4694 52.1249 23.8917 52.9345 24.8024C53.7552 25.7019 55.0089 26.1516 56.6954 26.1516C57.5499 26.1516 58.5056 26.0167 59.5625 25.7469L60.6756 20.7042H56.1726L57.117 16.3529Z" fill="#AAAAAA" />
                            <path d="M73.9485 30.1993H68.8721L74.4376 3.95703H79.514L73.9485 30.1993Z" fill="#AAAAAA" />
                            <path d="M92.0786 18.4611C92.0786 16.2461 91.2747 15.1387 89.6669 15.1387C88.8236 15.1387 88.0647 15.4816 87.3901 16.1674C86.7267 16.8533 86.1814 17.8596 85.7541 19.1863C85.3381 20.513 85.1301 21.8791 85.1301 23.2845C85.1301 25.3646 85.9734 26.4046 87.6599 26.4046C88.5032 26.4046 89.2621 26.0617 89.9367 25.3758C90.6113 24.6787 91.1341 23.7174 91.5052 22.4919C91.8875 21.2551 92.0786 19.9115 92.0786 18.4611ZM97.1887 18.4611C97.1887 20.8335 96.7896 22.936 95.9913 24.7687C95.2043 26.6014 94.0631 28.0237 92.5677 29.0356C91.0723 30.0362 89.2958 30.5366 87.2383 30.5366C85.0458 30.5366 83.2918 29.8788 81.9763 28.5634C80.6721 27.2366 80.02 25.477 80.02 23.2845C80.02 20.8897 80.4191 18.7591 81.2174 16.8926C82.0269 15.015 83.1906 13.5646 84.7085 12.5414C86.2264 11.507 88.0028 10.9898 90.0379 10.9898C92.2416 10.9898 93.9844 11.6532 95.2661 12.9799C96.5479 14.3066 97.1887 16.1337 97.1887 18.4611Z" fill="#AAAAAA" />
                            <path d="M113.143 15.6952C112.446 17.6965 111.755 19.4899 111.069 21.0752L107.139 30.1993H101.675L100.815 11.344H105.554L105.621 19.6923L105.554 22.5087L105.436 25.3927H105.503C105.571 25.1678 105.649 24.9373 105.739 24.7012C105.829 24.4539 106.116 23.6837 106.6 22.3907C107.083 21.0977 107.342 20.4287 107.375 20.3837L111.271 11.344H116.803V20.3837C116.803 21.9803 116.747 23.65 116.634 25.3927H116.736L117.208 24.0435C118.029 21.7048 118.563 20.2544 118.81 19.6923L122.503 11.344H127.681L118.742 30.1993H113.177L113.076 21.4294C113.076 19.6866 113.132 17.7752 113.244 15.6952H113.143Z" fill="#AAAAAA" />
                            <path d="M150.112 5.54236L146.722 21.4968C146.081 24.4876 144.855 26.7419 143.045 28.2598C141.235 29.7776 138.88 30.5366 135.979 30.5366C133.595 30.5366 131.717 29.9013 130.346 28.6308C128.985 27.3491 128.305 25.6176 128.305 23.4363C128.305 22.6268 128.389 21.851 128.558 21.1089L131.864 5.54236H137.007L133.736 21.0415C133.544 21.8735 133.449 22.5762 133.449 23.1496C133.449 25.151 134.511 26.1516 136.636 26.1516C138.019 26.1516 139.116 25.7244 139.925 24.8699C140.735 24.0041 141.319 22.7167 141.679 21.0077L144.951 5.54236H150.112Z" fill="#AAAAAA" />
                            <path d="M158.612 17.1456H159.556C161.153 17.1456 162.406 16.7577 163.317 15.9819C164.239 15.2061 164.7 14.1661 164.7 12.8619C164.7 10.838 163.604 9.82612 161.411 9.82612H160.163L158.612 17.1456ZM169.878 12.7269C169.878 15.4366 168.922 17.5672 167.011 19.1188C165.111 20.6592 162.485 21.4294 159.135 21.4294H157.684L155.846 30.1993H150.702L155.913 5.54236H161.614C164.335 5.54236 166.392 6.14388 167.786 7.34694C169.181 8.53874 169.878 10.3321 169.878 12.7269Z" fill="#AAAAAA" />
                            <path d="M27.5966 10.1817H17.0569L20.9477 2.09886C21.313 1.15233 20.2627 0.218262 18.8288 0.218262H5.67705C4.58107 0.218262 3.64949 0.772478 3.50336 1.51351L0.580756 16.4587C0.407226 17.3554 1.43014 18.1525 2.75444 18.1525H13.5955L9.38511 30.2643C9.05631 31.2108 10.1158 32.1013 11.5131 32.1013C12.2803 32.1013 13.011 31.8273 13.4128 31.354L29.4872 12.4235C30.3365 11.4334 29.2862 10.1817 27.5966 10.1817Z" fill="#AAAAAA" />
                        </svg>
                    </div>
                    <div className={styles.highlowone}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="185" height="52" viewBox="0 0 185 52" fill="none">
                            <path d="M84.8517 27.278C84.8517 29.5094 84.4539 31.3819 83.6582 32.8954C82.8711 34.4003 81.7122 35.5031 80.1813 36.2036L84.7479 41.3021H79.5975L76.1207 37.0469H75.8223C72.9163 37.0469 70.6849 36.2036 69.1281 34.5171C67.5714 32.8306 66.793 30.4089 66.793 27.2521C66.793 24.0953 67.5714 21.6866 69.1281 20.026C70.6936 18.3568 72.9336 17.5222 75.8483 17.5222C78.7629 17.5222 80.99 18.3611 82.5295 20.039C84.0776 21.7169 84.8517 24.1299 84.8517 27.278ZM71.0093 27.278C71.0093 29.397 71.4114 30.9927 72.2158 32.0652C73.0201 33.1376 74.2223 33.6738 75.8223 33.6738C79.031 33.6738 80.6354 31.5419 80.6354 27.278C80.6354 23.0055 79.0397 20.8693 75.8483 20.8693C74.2483 20.8693 73.0417 21.4098 72.2288 22.4909C71.4158 23.5634 71.0093 25.1591 71.0093 27.278Z" fill="#AAAAAA" />
                            <path d="M98.746 36.7874L98.2141 34.9322H98.0066C97.5828 35.6069 96.9817 36.1301 96.2033 36.502C95.4249 36.8653 94.5384 37.0469 93.5438 37.0469C91.8399 37.0469 90.5556 36.5928 89.6907 35.6847C88.8258 34.7679 88.3934 33.4533 88.3934 31.7408V22.2833H92.3502V30.7549C92.3502 31.8014 92.5362 32.5884 92.9081 33.116C93.28 33.6349 93.8724 33.8944 94.6854 33.8944C95.7925 33.8944 96.5925 33.5268 97.0855 32.7917C97.5784 32.0479 97.8249 30.8197 97.8249 29.1073V22.2833H101.782V36.7874H98.746Z" fill="#AAAAAA" />
                            <path d="M111.94 24.8261C111.101 24.8261 110.444 25.0942 109.968 25.6304C109.492 26.158 109.22 26.9105 109.151 27.8878H114.703C114.686 26.9105 114.431 26.158 113.938 25.6304C113.445 25.0942 112.779 24.8261 111.94 24.8261ZM112.498 37.0469C110.162 37.0469 108.338 36.4025 107.023 35.1139C105.708 33.8252 105.051 32.0003 105.051 29.6392C105.051 27.2088 105.656 25.3321 106.867 24.0088C108.087 22.6769 109.769 22.0109 111.914 22.0109C113.964 22.0109 115.559 22.5947 116.701 23.7623C117.843 24.9299 118.413 26.5429 118.413 28.6013V30.5213H109.06C109.103 31.6457 109.436 32.5235 110.059 33.1549C110.681 33.7863 111.555 34.102 112.679 34.102C113.553 34.102 114.379 34.0111 115.157 33.8295C115.936 33.6479 116.749 33.3582 117.596 32.9603V36.022C116.904 36.3679 116.165 36.6231 115.378 36.7874C114.591 36.9604 113.631 37.0469 112.498 37.0469Z" fill="#AAAAAA" />
                            <path d="M135.019 36.7874H131.062V28.3159C131.062 27.2694 130.876 26.4867 130.504 25.9677C130.133 25.4402 129.54 25.1764 128.727 25.1764C127.62 25.1764 126.82 25.5483 126.327 26.2921C125.834 27.0272 125.588 28.251 125.588 29.9635V36.7874H121.631V22.2833H124.654L125.185 24.1385H125.406C125.847 23.438 126.453 22.9104 127.222 22.5558C128.001 22.1925 128.883 22.0109 129.869 22.0109C131.555 22.0109 132.835 22.4693 133.709 23.3861C134.582 24.2942 135.019 25.6088 135.019 27.3299V36.7874Z" fill="#AAAAAA" />
                            <path d="M148.304 36.7874L147.538 34.8155H147.435C146.769 35.6544 146.081 36.2382 145.372 36.5669C144.671 36.8869 143.754 37.0469 142.621 37.0469C141.229 37.0469 140.131 36.649 139.326 35.8533C138.531 35.0577 138.133 33.9247 138.133 32.4544C138.133 30.9149 138.669 29.7819 139.741 29.0554C140.823 28.3202 142.449 27.9137 144.619 27.8359L147.136 27.758V27.1224C147.136 25.6521 146.384 24.9169 144.879 24.9169C143.72 24.9169 142.358 25.2672 140.792 25.9677L139.482 23.2953C141.151 22.4217 143.002 21.985 145.035 21.985C146.98 21.985 148.472 22.4088 149.51 23.2563C150.548 24.1039 151.067 25.3926 151.067 27.1224V36.7874H148.304ZM147.136 30.0673L145.605 30.1192C144.455 30.1538 143.599 30.3613 143.037 30.7419C142.474 31.1224 142.193 31.7019 142.193 32.4803C142.193 33.596 142.833 34.1539 144.113 34.1539C145.03 34.1539 145.761 33.8901 146.306 33.3625C146.859 32.8349 147.136 32.1344 147.136 31.2608V30.0673Z" fill="#AAAAAA" />
                            <path d="M154.596 34.9322C154.596 34.2057 154.79 33.6565 155.18 33.2846C155.569 32.9127 156.135 32.7268 156.879 32.7268C157.597 32.7268 158.15 32.9171 158.54 33.2976C158.937 33.6782 159.136 34.223 159.136 34.9322C159.136 35.6155 158.937 36.1561 158.54 36.5539C158.142 36.9431 157.588 37.1377 156.879 37.1377C156.153 37.1377 155.59 36.9474 155.193 36.5669C154.795 36.1777 154.596 35.6328 154.596 34.9322Z" fill="#AAAAAA" />
                            <path d="M162.561 18.5341C162.561 17.2454 163.279 16.6011 164.715 16.6011C166.151 16.6011 166.868 17.2454 166.868 18.5341C166.868 19.1482 166.687 19.6282 166.324 19.9741C165.969 20.3114 165.433 20.4801 164.715 20.4801C163.279 20.4801 162.561 19.8314 162.561 18.5341ZM166.687 36.7874H162.73V22.2833H166.687V36.7874Z" fill="#AAAAAA" />
                            <path d="M174.004 29.5094C174.004 30.9451 174.237 32.0306 174.704 32.7657C175.18 33.5009 175.95 33.8684 177.014 33.8684C178.069 33.8684 178.825 33.5052 179.284 32.7787C179.751 32.0435 179.984 30.9538 179.984 29.5094C179.984 28.0737 179.751 26.997 179.284 26.2791C178.817 25.5612 178.051 25.2023 176.988 25.2023C175.932 25.2023 175.171 25.5612 174.704 26.2791C174.237 26.9883 174.004 28.0651 174.004 29.5094ZM184.032 29.5094C184.032 31.8706 183.409 33.7171 182.164 35.049C180.918 36.3809 179.184 37.0469 176.962 37.0469C175.569 37.0469 174.341 36.7442 173.277 36.1388C172.213 35.5247 171.396 34.6468 170.825 33.5052C170.254 32.3635 169.969 31.0316 169.969 29.5094C169.969 27.1397 170.587 25.2975 171.824 23.9828C173.061 22.6682 174.799 22.0109 177.039 22.0109C178.432 22.0109 179.66 22.3136 180.724 22.919C181.788 23.5245 182.605 24.3937 183.176 25.5267C183.747 26.6596 184.032 27.9872 184.032 29.5094Z" fill="#AAAAAA" />
                            <path d="M50.6357 26.1597C50.6357 40.0997 39.3351 51.4004 25.395 51.4004C11.4549 51.4004 0.154297 40.0997 0.154297 26.1597C0.154297 12.2196 11.4549 0.918945 25.395 0.918945C39.3351 0.918945 50.6357 12.2196 50.6357 26.1597Z" fill="#AAAAAA" />
                            <path d="M37.3512 32.8019C35.8556 32.8019 35.6827 31.1413 33.3747 31.1413C31.0566 31.1413 30.8754 32.8019 29.3849 32.8019C27.9067 32.8019 27.706 31.1413 25.3951 31.1413C23.1084 31.1413 22.8748 32.8019 21.4186 32.8019C19.9162 32.8019 19.7532 31.1413 17.4288 31.1413C15.1044 31.1413 14.9387 32.8019 13.439 32.8019V28.6504C13.439 27.2753 14.5865 26.1596 16.001 26.1596H16.855V18.687H20.271V26.1596H23.6871V18.687H27.1031V26.1596H30.5191V18.687H33.9352V26.1596H34.7892C36.2036 26.1596 37.3512 27.2753 37.3512 28.6504V32.8019ZM37.3512 39.4442H13.439V34.4625C15.7531 34.4625 15.9352 32.8019 17.4288 32.8019C18.9207 32.8019 19.0969 34.4625 21.4186 34.4625C23.7054 34.4625 23.9388 32.8019 25.3951 32.8019C26.8975 32.8019 27.0605 34.4625 29.3849 34.4625C31.6991 34.4625 31.8811 32.8019 33.3747 32.8019C34.8419 32.8019 35.0428 34.4625 37.3512 34.4625V39.4442ZM18.563 17.8567C17.6156 17.8567 16.855 17.1172 16.855 16.1961C16.855 14.5875 18.563 15.0026 18.563 12.875C19.2035 12.875 20.271 14.4058 20.271 15.781C20.271 17.1562 19.5104 17.8567 18.563 17.8567ZM25.3951 17.8567C24.4477 17.8567 23.6871 17.1172 23.6871 16.1961C23.6871 14.5875 25.3951 15.0026 25.3951 12.875C26.0356 12.875 27.1031 14.4058 27.1031 15.781C27.1031 17.1562 26.3425 17.8567 25.3951 17.8567ZM32.2272 17.8567C31.2797 17.8567 30.5191 17.1172 30.5191 16.1961C30.5191 14.5875 32.2272 15.0026 32.2272 12.875C32.8677 12.875 33.9352 14.4058 33.9352 15.781C33.9352 17.1562 33.1746 17.8567 32.2272 17.8567Z" fill="white" />
                        </svg>
                    </div>
                    <div className={styles.highlowone}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="178" height="62" viewBox="0 0 178 62" fill="none">
                            <path d="M80.4647 36.8021H76.5079V28.3305C76.5079 27.284 76.3306 26.5013 75.976 25.9824C75.63 25.4548 75.0808 25.191 74.3284 25.191C73.3165 25.191 72.5813 25.5629 72.1229 26.3067C71.6645 27.0505 71.4353 28.2743 71.4353 29.9781V36.8021H67.4785V22.298H70.5013L71.0332 24.1532H71.2537C71.6429 23.4872 72.2051 22.9683 72.9402 22.5964C73.6754 22.2158 74.5187 22.0256 75.47 22.0256C77.6409 22.0256 79.1112 22.7348 79.8809 24.1532H80.2312C80.6204 23.4786 81.1912 22.9553 81.9437 22.5834C82.7048 22.2115 83.561 22.0256 84.5124 22.0256C86.1556 22.0256 87.3967 22.4494 88.2357 23.2969C89.0833 24.1359 89.5071 25.4851 89.5071 27.3446V36.8021H85.5372V28.3305C85.5372 27.284 85.3599 26.5013 85.0053 25.9824C84.6594 25.4548 84.1102 25.191 83.3577 25.191C82.3891 25.191 81.6626 25.537 81.1782 26.2289C80.7026 26.9208 80.4647 28.0192 80.4647 29.5241V36.8021Z" fill="#AAAAAA" />
                            <path d="M102.792 36.8021L102.026 34.8301H101.922C101.256 35.6691 100.569 36.2529 99.8597 36.5815C99.1591 36.9015 98.2424 37.0615 97.1094 37.0615C95.7169 37.0615 94.6185 36.6637 93.8142 35.868C93.0185 35.0723 92.6206 33.9393 92.6206 32.469C92.6206 30.9295 93.1569 29.7965 94.2293 29.07C95.3104 28.3349 96.9364 27.9284 99.1072 27.8505L101.624 27.7727V27.137C101.624 25.6667 100.872 24.9316 99.3667 24.9316C98.2078 24.9316 96.8456 25.2818 95.2801 25.9824L93.9698 23.3099C95.6391 22.4364 97.4899 21.9996 99.5224 21.9996C101.468 21.9996 102.96 22.4234 103.998 23.271C105.036 24.1186 105.555 25.4072 105.555 27.137V36.8021H102.792ZM101.624 30.0819L100.093 30.1338C98.9429 30.1684 98.0867 30.376 97.5245 30.7565C96.9623 31.1371 96.6812 31.7166 96.6812 32.495C96.6812 33.6107 97.3213 34.1685 98.6013 34.1685C99.5181 34.1685 100.249 33.9047 100.794 33.3771C101.347 32.8496 101.624 32.149 101.624 31.2755V30.0819Z" fill="#AAAAAA" />
                            <path d="M123.03 36.8021H119.073V28.3305C119.073 27.284 118.887 26.5013 118.515 25.9824C118.143 25.4548 117.551 25.191 116.738 25.191C115.631 25.191 114.831 25.5629 114.338 26.3067C113.845 27.0419 113.598 28.2657 113.598 29.9781V36.8021H109.642V22.298H112.664L113.196 24.1532H113.417C113.858 23.4526 114.463 22.925 115.233 22.5704C116.011 22.2072 116.894 22.0256 117.88 22.0256C119.566 22.0256 120.846 22.4839 121.72 23.4007C122.593 24.3088 123.03 25.6235 123.03 27.3446V36.8021Z" fill="#AAAAAA" />
                            <path d="M133.214 33.909C133.906 33.909 134.736 33.7577 135.705 33.455V36.3999C134.719 36.841 133.508 37.0615 132.072 37.0615C130.489 37.0615 129.335 36.6637 128.608 35.868C127.891 35.0637 127.532 33.8615 127.532 32.2614V25.2689H125.637V23.5953L127.817 22.272L128.959 19.2104H131.488V22.298H135.549V25.2689H131.488V32.2614C131.488 32.8236 131.644 33.2388 131.955 33.5069C132.275 33.775 132.695 33.909 133.214 33.909Z" fill="#AAAAAA" />
                            <path d="M152.038 36.8021H148.081V28.3305C148.081 26.2375 147.303 25.191 145.746 25.191C144.639 25.191 143.839 25.5673 143.346 26.3197C142.853 27.0721 142.606 28.2916 142.606 29.9781V36.8021H138.65V16.6157H142.606V20.7282C142.606 21.0482 142.576 21.8007 142.516 22.9856L142.425 24.1532H142.632C143.515 22.7348 144.916 22.0256 146.836 22.0256C148.54 22.0256 149.833 22.4839 150.715 23.4007C151.597 24.3175 152.038 25.6321 152.038 27.3446V36.8021Z" fill="#AAAAAA" />
                            <path d="M166.386 36.8021L165.854 34.9469H165.647C165.223 35.6215 164.622 36.1448 163.844 36.5167C163.065 36.8799 162.179 37.0615 161.184 37.0615C159.48 37.0615 158.196 36.6075 157.331 35.6993C156.466 34.7826 156.034 33.4679 156.034 31.7555V22.298H159.991V30.7695C159.991 31.816 160.177 32.6031 160.548 33.1306C160.92 33.6496 161.513 33.909 162.326 33.909C163.433 33.909 164.233 33.5415 164.726 32.8063C165.219 32.0625 165.465 30.8344 165.465 29.1219V22.298H169.422V36.8021H166.386Z" fill="#AAAAAA" />
                            <path d="M177.53 36.8021H173.574V16.6157H177.53V36.8021Z" fill="#AAAAAA" />
                            <path d="M0.30862 26.1743C0.308621 22.8597 0.961491 19.5775 2.22995 16.5151C3.49842 13.4528 5.35764 10.6702 7.70146 8.32643C10.0453 5.98261 12.8278 4.1234 15.8901 2.85493C18.9525 1.58647 22.2347 0.933599 25.5493 0.933599C28.864 0.933599 32.1462 1.58647 35.2085 2.85494C38.2709 4.1234 41.0534 5.98262 43.3972 8.32643C45.741 10.6703 47.6002 13.4528 48.8687 16.5151C50.1372 19.5775 50.79 22.8597 50.79 26.1743L38.1697 26.1743C38.1697 24.517 37.8432 22.8759 37.209 21.3447C36.5748 19.8135 35.6452 18.4223 34.4733 17.2504C33.3014 16.0785 31.9101 15.1489 30.3789 14.5146C28.8478 13.8804 27.2067 13.554 25.5493 13.554C23.892 13.554 22.2509 13.8804 20.7197 14.5146C19.1886 15.1489 17.7973 16.0785 16.6254 17.2504C15.4535 18.4223 14.5239 19.8135 13.8896 21.3447C13.2554 22.8759 12.929 24.517 12.929 26.1743L0.30862 26.1743Z" fill="#AAAAAA" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9069 47.039C14.9889 46.2446 13.1936 45.1911 11.5698 43.9113L16.79 38.6911C17.6979 39.3264 18.6743 39.8626 19.703 40.2887C21.5565 41.0564 23.5431 41.4516 25.5493 41.4516C27.5556 41.4516 29.5422 41.0564 31.3957 40.2887C32.4243 39.8626 33.4008 39.3264 34.3086 38.6911L39.5288 43.9113C37.905 45.1911 36.1097 46.2446 34.1918 47.039C31.4518 48.174 28.5151 48.7581 25.5493 48.7581C22.5836 48.7581 19.6469 48.174 16.9069 47.039ZM41.4193 45.8018C42.1081 45.2448 42.7684 44.6509 43.3972 44.0222L34.4733 35.0983C33.3013 36.2702 31.9101 37.1998 30.3789 37.834C28.8477 38.4682 27.2066 38.7947 25.5493 38.7947C23.892 38.7947 22.2509 38.4682 20.7197 37.834C19.1885 37.1998 17.7973 36.2702 16.6254 35.0983L7.70144 44.0222C8.33019 44.6509 8.9905 45.2448 9.67932 45.8018C11.5583 47.321 13.6493 48.5655 15.8901 49.4937C18.9525 50.7622 22.2347 51.415 25.5493 51.415C28.864 51.415 32.1462 50.7622 35.2085 49.4937C37.4494 48.5655 39.5404 47.321 41.4193 45.8018Z" fill="#AAAAAA" />
                        </svg>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}
