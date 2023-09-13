import { NavLink } from 'react-router-dom'
import styles from './Flashsale.module.css'
import { Pagination } from 'antd';


export const FlashSale = () => {
    return (
        <div>
            <div className="flash-sale-countdown">
                <div className="flash-sale text-center  ">
                    <h1 className={styles.flashsaleh1} >Flash Sale</h1>
                    <p className={styles.flashsalep} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="countdown d-flex gap-5 justify-content-center  ">
                    <div className="countdown-day d-flex flex-column align-items-center">
                        <h1 className={styles.countdownh1}>02</h1>
                        <p>Day</p>
                    </div>
                    <div className="countdown-hours d-flex flex-column align-items-center">
                        <h1 className={styles.countdownh1}>05</h1>
                        <p>Hours</p>
                    </div>
                    <div className="countdown-minutes d-flex flex-column align-items-center">
                        <h1 className={styles.countdownh1}>42</h1>
                        <p>Minutes</p>
                    </div>
                    <div className="countdown-second d-flex flex-column align-items-center">
                        <h1 className={styles.countdownh1} >19</h1>
                        <p>Second</p>
                    </div>
                </div>
            </div>
            <div className="flash-sale-cards justify-content-center  d-flex gap-4 p-5">
                <div className="flash-sale-card text-center">
                    <div className={styles.flashcardtop}> </div>
                    <div className="flashcard-bottom">
                        <h5 className={styles.flashcardh5} >SECONDS</h5>
                        <NavLink className={styles.flashcardlink} to="/thriller"> THRILLER </NavLink>
                        <div className="flashcard-price">
                            <span className={styles.flashprice} >$ 54.78</span>
                            <span className={styles.normalprice}>$70.00</span>
                        </div>
                    </div>
                </div>
                <div className="flash-sale-card text-center">
                    <div className={styles.flashcardtop}> </div>
                    <div className="flashcard-bottom">
                        <h5 className={styles.flashcardh5} >REWORK</h5>
                        <NavLink className={styles.flashcardlink} to="/drama"> DRAMA,BIOGRAPHY </NavLink>
                        <div className="flashcard-price">
                            <span className={styles.flashprice} >$ 54.78</span>
                            <span className={styles.normalprice}>$70.00</span>
                        </div>
                    </div>
                </div>
                <div className="flash-sale-card text-center">
                    <div className={styles.flashcardtop}> </div>
                    <div className="flashcard-bottom">
                        <h5 className={styles.flashcardh5} >Such a Fun Age</h5>
                        <NavLink className={styles.flashcardlink} to="/thriller"> THRILLER </NavLink>
                        <div className="flashcard-price">
                            <span className={styles.flashprice} >$ 54.78</span>
                            <span className={styles.normalprice}>$70.00</span>
                        </div>
                    </div>
                </div>
                <div className="flash-sale-card text-center">
                    <div className={styles.flashcardtop}> </div>
                    <div className="flashcard-bottom">
                        <h5 className={styles.flashcardh5} >Emily and The Back..</h5>
                        <NavLink className={styles.flashcardlink} to="/drama"> DRAMA,BIOGRAPHY </NavLink>
                        <div className="flashcard-price">
                            <span className={styles.flashprice} >$ 54.78</span>
                            <span className={styles.normalprice}>$70.00</span>
                        </div>
                    </div>
                </div>
                <div className="flash-sale-card text-center">
                    <div className={styles.flashcardtop}> </div>
                    <div className="flashcard-bottom">
                        <h5 className={styles.flashcardh5} >Battle Drive</h5>
                        <NavLink className={styles.flashcardlink} to="/drama"> DRAMA,BIOGRAPHY </NavLink>
                        <div className="flashcard-price">
                            <span className={styles.flashprice} >$ 54.78</span>
                            <span className={styles.normalprice}>$70.00</span>
                        </div>
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
        </div>
    )
}
