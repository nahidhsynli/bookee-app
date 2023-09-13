import { useState } from 'react';
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { NavLink, useNavigate } from 'react-router-dom'
import styles from "./Books.module.css"
import { UpOutlined, DownOutlined, MenuOutlined, SortAscendingOutlined, InsertRowLeftOutlined, HeartOutlined } from "@ant-design/icons"
import { Checkbox, Slider, Rate, Pagination, Button } from 'antd';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';

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

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export const BooksList = () => {
    const [rating, setRating] = useState(4);

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/home/checkout');
    };
    return (
        <div>
            <Header />
            <div className="Books">
                <div className="books-navigation pt-3 px-5 d-flex gap-2">
                    <NavLink className={styles.homelink} to="/home" >Home / </NavLink>
                    <NavLink className={styles.bookslink} to="/home/books">Books</NavLink>
                </div>
                <div className="filter-books d-flex gap-5 p-5">
                    <div className="filter-option w-25 d-flex flex-column gap-5">
                        <h1 className="mb-3 fw-bold" >Filter Option</h1>
                        <div className={styles.editorspicks}>
                            <div className="editors-heading d-flex align-items-center justify-content-between mb-4">
                                <h3 className=" fw-normal fs-3" >Editors Pick</h3>  <UpOutlined />
                            </div>
                            <div className="best-sales d-flex flex-column gap-2">
                                <NavLink className={styles.bestsales} to="#">+ Best Sales <span className={styles.salesnumber} >(105)</span></NavLink>
                                <NavLink className={styles.bestsales} to="#">+ Most Commented <span className={styles.salesnumber} >(105)</span></NavLink>
                                <NavLink className={styles.bestsales} to="#">+ Newest Books <span className={styles.salesnumber} >(105)</span></NavLink>
                                <NavLink className={styles.bestsales} to="#">+ Featured <span className={styles.salesnumber} >(105)</span></NavLink>
                                <NavLink className={styles.bestsales} to="#">+ Watch History <span className={styles.salesnumber} >(105)</span></NavLink>
                                <NavLink className={styles.bestsales} to="#">+ Best Books <span className={styles.salesnumber} >(105)</span></NavLink>
                            </div>
                            <NavLink className={styles.viewmore} to="#">View more <span ><DownOutlined /></span></NavLink>
                        </div>
                        <div className={styles.choosepublisher}>
                            <h3 className=" fw-normal fs-3" >Choose Publisher</h3> <DownOutlined />
                        </div>
                        <div className={styles.choosepublisher}>
                            <h3 className=" fw-normal fs-3" >Select Year</h3> <DownOutlined />
                        </div>
                        <div className={styles.shopbycategory}>
                            <div className="shopbyheading mb-4 d-flex justify-content-between align-items-center">
                                <h3 className=" fw-normal fs-3">Shop by Category</h3> <UpOutlined /></div>
                            <div className={styles.checkboxs}>
                                <Checkbox className=" fw-bold fs-6" > Action </Checkbox>
                                <Checkbox className=" fw-bold fs-6" > Action </Checkbox>
                                <Checkbox className=" fw-bold fs-6" > Action </Checkbox>
                                <Checkbox className=" fw-bold fs-6" > Action </Checkbox>
                                <Checkbox className=" fw-bold fs-6" >  Action </Checkbox>
                                <Checkbox className=" fw-bold fs-6" >  Action </Checkbox>
                                <Checkbox className=" fw-bold fs-6" >  Action </Checkbox>
                                <Checkbox className=" fw-bold fs-6" >  Action </Checkbox>
                                <Checkbox className=" fw-bold fs-6" >  Action </Checkbox>
                                <Checkbox className=" fw-bold fs-6" >  Action </Checkbox>
                                <Checkbox className=" fw-bold fs-6" >  Action </Checkbox>
                                <Checkbox className=" fw-bold fs-6" >  Action </Checkbox>
                                <Checkbox className=" fw-bold fs-6" >  Action </Checkbox>
                                <Checkbox className=" fw-bold fs-6" >  Action </Checkbox>
                            </div>
                        </div>
                        <div className={styles.shopbycategory}>
                            <div className="shopbyheading mb-4 d-flex justify-content-between align-items-center">
                                <h3 className=" fw-normal fs-3">Price Range</h3> <UpOutlined />
                            </div>
                            <div className="price-slider">
                                <Slider range={{ draggableTrack: true }} defaultValue={[45, 70]} />
                            </div>
                        </div>
                        <div className="bottom-buttons d-flex flex-column align-content-center gap-3">
                            <button className={styles.refinebutton} type="submit">Refine Search</button>
                            <button className={styles.resetbutton} type="reset">Reset Filter</button>
                        </div>
                    </div>
                    <div className="books-section w-75">
                        <h1 className=" mb-5 fw-bold" >Books</h1>
                        <div className={styles.booksnavbar}>
                            <div className="books-time d-flex gap-4 ">
                                <NavLink className={styles.bookstime} to="/home/books/today">Today</NavLink>
                                <NavLink className={styles.bookstime} to="/home/books/week">This Week</NavLink>
                                <NavLink className={styles.bookstime} to="/home/books/month">This Month</NavLink>
                            </div>
                            <div className="navbar-right d-flex gap-3">
                                <div className="navbar-rleft d-flex gap-2">
                                    <NavLink className={styles.bookslista} to="/home/books/list"> <MenuOutlined /></NavLink>
                                    <NavLink className="text-black" to="/home/books/grid"> <InsertRowLeftOutlined /></NavLink>
                                    <NavLink className="text-black" to="/home/books/grid"> <InsertRowLeftOutlined /></NavLink>
                                </div>
                                <div className={styles.navbarrright}>
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
                        </div>
                        <div className="bookslist d-flex flex-column gap-3">
                            <div className={styles.bookslistitem}>
                                <div className="bookbox-title d-flex gap-3">
                                    <div className={styles.bookslistempty}> </div>
                                    <div className="booktitle-rating d-flex gap-3 ">
                                        <div className="booklisttitle d-flex flex-column gap-2 w-75">
                                            <NavLink className={styles.booknamelink} to="/home/books/detail">Thunder Stunt</NavLink>
                                            <NavLink className={styles.booksgridlink} to="home/books/advanture">ADVANTURE,SCIENCE,COMEDY</NavLink>
                                            <p className="w-75">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                        </div>
                                        <div className="booklistrating">
                                            <div>
                                                <Rate tooltips={desc} onChange={setRating} value={rating} />
                                            </div>
                                            <div className="booklistreview d-flex justify-content-around align-items-center ">
                                                <p className={styles.ratingnumber} >4.0</p>
                                                <p className={styles.reviewnumber} >235 reviews</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.booklistprice}>
                                    <p className={styles.ratingnumber} >$84.78</p>
                                    <p className={styles.reviewnumber} >$90.00</p>
                                    <NavLink className={styles.discountone} to="/home/books/list/discount">Get 20% Discount for today</NavLink>
                                    <NavLink className={styles.discountone} to="/home/books/list/discount">50% OFF Discount</NavLink>
                                    <NavLink className={styles.discountthree} to="/home/books/list/discount">See 2+ promos</NavLink>
                                </div>
                                <div className="booklistfooter d-flex justify-content-between">
                                    <div className="booklist-footer-left d-flex justify-content-between w-50">
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
                                    <div className="booklist-footer-right d-flex gap-3 align-items-center ">
                                        <Button onClick={handleButtonClick} className={styles.listaddtocardbutton} htmlType="submit"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20C17.551 20 18 20.448 18 21C18 21.552 17.551 22 17 22C16.448 22 16 21.552 16 21C16 20.448 16.448 20 17 20ZM11 20C11.551 20 12 20.448 12 21C12 21.552 11.551 22 11 22C10.448 22 10 21.552 10 21C10 20.448 10.448 20 11 20ZM21.889 5.458L17.894 13.447C17.725 13.786 17.378 14 17 14H9C8.447 14 8 14.448 8 15C8 15.552 8.447 16 9 16H19C19.551 16 20 16.448 20 17C20 17.552 19.551 18 19 18C19 18 12.413 18 9 18C7.343 18 6 16.657 6 15C6 13.793 6.71201 12.753 7.73901 12.277L5.25601 4H3C2.448 4 2 3.552 2 3C2 2.448 2.448 2 3 2H6C6.441 2 6.83 2.29 6.957 2.713L7.34403 4H20.988C21.067 3.999 21.147 4.007 21.225 4.026L21.233 4.028C21.326 4.05 21.413 4.085 21.494 4.131C21.644 4.216 21.765 4.335 21.85 4.474C21.936 4.613 21.989 4.774 21.998 4.947C22.003 5.039 21.995 5.133 21.974 5.226L21.972 5.234C21.953 5.313 21.925 5.388 21.889 5.458ZM19.382 6H7.944L9.74402 12H16.382L19.382 6Z" fill="white" />
                                        </svg> Add to card</Button>
                                        <HeartOutlined className={styles.listheartanchor} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.bookslistitem}>
                                <div className="bookbox-title d-flex gap-3">
                                    <div className={styles.bookslistempty}> </div>
                                    <div className="booktitle-rating d-flex gap-3 ">
                                        <div className="booklisttitle d-flex flex-column gap-2 w-75 ">
                                            <NavLink className={styles.booknamelink} to="/home/books/detail">Thunder Stunt</NavLink>
                                            <NavLink className={styles.booksgridlink} to="home/books/advanture">ADVANTURE,SCIENCE,COMEDY</NavLink>
                                            <p className="w-75">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                        </div>
                                        <div className="booklistrating">
                                            <div>
                                                <Rate tooltips={desc} onChange={setRating} value={rating} />
                                            </div>
                                            <div className="booklistreview d-flex justify-content-around align-items-center ">
                                                <p className={styles.ratingnumber} >4.0</p>
                                                <p className={styles.reviewnumber} >235 reviews</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.booklistprice}>
                                    <p className={styles.ratingnumber} >$84.78</p>
                                    <p className={styles.reviewnumber} >$90.00</p>
                                    <NavLink className={styles.discountone} to="/home/books/list/discount">Get 20% Discount for today</NavLink>
                                    <NavLink className={styles.discountone} to="/home/books/list/discount">50% OFF Discount</NavLink>
                                    <NavLink className={styles.discountthree} to="/home/books/list/discount">See 2+ promos</NavLink>
                                </div>
                                <div className="booklistfooter d-flex justify-content-between">
                                    <div className="booklist-footer-left d-flex justify-content-between w-50">
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
                                    <div className="booklist-footer-right d-flex gap-3 align-items-center ">
                                        <Button onClick={handleButtonClick} className={styles.listaddtocardbutton} htmlType="submit"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20C17.551 20 18 20.448 18 21C18 21.552 17.551 22 17 22C16.448 22 16 21.552 16 21C16 20.448 16.448 20 17 20ZM11 20C11.551 20 12 20.448 12 21C12 21.552 11.551 22 11 22C10.448 22 10 21.552 10 21C10 20.448 10.448 20 11 20ZM21.889 5.458L17.894 13.447C17.725 13.786 17.378 14 17 14H9C8.447 14 8 14.448 8 15C8 15.552 8.447 16 9 16H19C19.551 16 20 16.448 20 17C20 17.552 19.551 18 19 18C19 18 12.413 18 9 18C7.343 18 6 16.657 6 15C6 13.793 6.71201 12.753 7.73901 12.277L5.25601 4H3C2.448 4 2 3.552 2 3C2 2.448 2.448 2 3 2H6C6.441 2 6.83 2.29 6.957 2.713L7.34403 4H20.988C21.067 3.999 21.147 4.007 21.225 4.026L21.233 4.028C21.326 4.05 21.413 4.085 21.494 4.131C21.644 4.216 21.765 4.335 21.85 4.474C21.936 4.613 21.989 4.774 21.998 4.947C22.003 5.039 21.995 5.133 21.974 5.226L21.972 5.234C21.953 5.313 21.925 5.388 21.889 5.458ZM19.382 6H7.944L9.74402 12H16.382L19.382 6Z" fill="white" />
                                        </svg> Add to card</Button>
                                        <HeartOutlined className={styles.listheartanchor} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.bookslistitem}>
                                <div className="bookbox-title d-flex gap-3">
                                    <div className={styles.bookslistempty}> </div>
                                    <div className="booktitle-rating d-flex gap-3 ">
                                        <div className="booklisttitle d-flex flex-column gap-2 w-75">
                                            <NavLink className={styles.booknamelink} to="/home/books/detail">Thunder Stunt</NavLink>
                                            <NavLink className={styles.booksgridlink} to="home/books/advanture">ADVANTURE,SCIENCE,COMEDY</NavLink>
                                            <p className="w-75">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                        </div>
                                        <div className="booklistrating">
                                            <div>
                                                <Rate tooltips={desc} onChange={setRating} value={rating} />
                                            </div>
                                            <div className="booklistreview d-flex justify-content-around align-items-center ">
                                                <p className={styles.ratingnumber} >4.0</p>
                                                <p className={styles.reviewnumber} >235 reviews</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.booklistprice}>
                                    <p className={styles.ratingnumber} >$84.78</p>
                                    <p className={styles.reviewnumber} >$90.00</p>
                                    <NavLink className={styles.discountone} to="/home/books/list/discount">Get 20% Discount for today</NavLink>
                                    <NavLink className={styles.discountone} to="/home/books/list/discount">50% OFF Discount</NavLink>
                                    <NavLink className={styles.discountthree} to="/home/books/list/discount">See 2+ promos</NavLink>
                                </div>
                                <div className="booklistfooter d-flex justify-content-between">
                                    <div className="booklist-footer-left d-flex justify-content-between w-50">
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
                                    <div className="booklist-footer-right d-flex gap-3 align-items-center ">
                                        <Button onClick={handleButtonClick} className={styles.listaddtocardbutton} htmlType="submit"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20C17.551 20 18 20.448 18 21C18 21.552 17.551 22 17 22C16.448 22 16 21.552 16 21C16 20.448 16.448 20 17 20ZM11 20C11.551 20 12 20.448 12 21C12 21.552 11.551 22 11 22C10.448 22 10 21.552 10 21C10 20.448 10.448 20 11 20ZM21.889 5.458L17.894 13.447C17.725 13.786 17.378 14 17 14H9C8.447 14 8 14.448 8 15C8 15.552 8.447 16 9 16H19C19.551 16 20 16.448 20 17C20 17.552 19.551 18 19 18C19 18 12.413 18 9 18C7.343 18 6 16.657 6 15C6 13.793 6.71201 12.753 7.73901 12.277L5.25601 4H3C2.448 4 2 3.552 2 3C2 2.448 2.448 2 3 2H6C6.441 2 6.83 2.29 6.957 2.713L7.34403 4H20.988C21.067 3.999 21.147 4.007 21.225 4.026L21.233 4.028C21.326 4.05 21.413 4.085 21.494 4.131C21.644 4.216 21.765 4.335 21.85 4.474C21.936 4.613 21.989 4.774 21.998 4.947C22.003 5.039 21.995 5.133 21.974 5.226L21.972 5.234C21.953 5.313 21.925 5.388 21.889 5.458ZM19.382 6H7.944L9.74402 12H16.382L19.382 6Z" fill="white" />
                                        </svg> Add to card</Button>
                                        <HeartOutlined className={styles.listheartanchor} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="books-footer mt-3 d-flex justify-content-between align-items-center">
                            <p>Showing 12 from 50 data</p>
                            <div className="books-pagination mt-4">
                                <Pagination defaultCurrent={1} total={30} />;
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-second p-5 d-flex gap-5 justify-content-around ">
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
            </div>
            <Footer />
        </div >
    )
}
