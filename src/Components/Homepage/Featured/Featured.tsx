import styles from "./Featured.module.css"
import { NavLink } from 'react-router-dom'
import { Rate } from 'antd';

export const Featured = () => {
    return (
        <div className="featured">
            <div className={styles.featuredbox}>
                <div className="featured-left ">
                    <div className="featured-left-heading">
                        <h1 className={styles.featuredlefth1} >Featured Books</h1>
                        <p className=" mt-3 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    </div>
                    <div className={styles.featuredleftcard}>
                        <div className={styles.featuredleftbox}></div>
                        <div className="featured-left-hero w-50">
                            <div className="featured-left-hero-heading mb-5 d-flex gap-3">
                                <div className="hero-svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <g clip-path="url(#clip0_37_463)">
                                            <path d="M59.57 70.0003C59.22 70.0003 58.45 70.0003 58.1 69.6503H57.75L35 60.1303L12.32 69.6503C10.85 70.3503 9.03 70.0003 7.91 69.3003C6.79 68.6003 6.09 67.1303 6.09 65.6603V14.3503C6.09 6.30031 12.32 0.0703125 20.37 0.0703125H49.7C57.75 0.0703125 63.98 6.30031 63.98 14.3503V65.6603C63.98 67.1303 63.28 68.6003 62.16 69.3003C61.39 69.6503 60.27 70.0003 59.57 70.0003ZM20.37 7.00031C16.73 7.00031 13.44 10.2903 13.44 13.9303V61.1803L35 52.0803L56.63 61.2503V13.9303C56.63 10.2903 53.34 7.00031 49.7 7.00031H20.37Z" fill="#6C5DD3" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_37_463">
                                                <rect width="70" height="70" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h2 className={styles.featuredlefth2}>Battle Drive</h2>
                                    <NavLink className={styles.flashcardlink} to="/sport"> SPORTS,DRAMA </NavLink>
                                </div>
                            </div>
                            <div className="featured-left-hero-bottom">
                                <h6 className={styles.featuredbottomh6} >Synopsis</h6>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <div className="written-year d-flex gap-5">
                                    <div className="written-by">
                                        <p className={styles.featuredbottomp}>Written by</p>
                                        <h6 className={styles.featuredbottomh6}>Kevin Smiley</h6>
                                    </div>
                                    <div className="written-year">
                                        <p className={styles.featuredbottomp}>Year</p>
                                        <h6 className={styles.featuredbottomh6}>2019</h6>
                                    </div>
                                </div>
                                <div className="price-and-button d-flex justify-content-between align-items-end">
                                    <div className="flashcard-price mt-5 d-flex gap-3  align-items-center">
                                        <span className={styles.flashprice} >$ 84.78</span>
                                        <span className={styles.normalprice}>$90.00</span>
                                    </div>
                                    <button className={styles.featuredleftbutton} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20C17.551 20 18 20.448 18 21C18 21.552 17.551 22 17 22C16.448 22 16 21.552 16 21C16 20.448 16.448 20 17 20ZM11 20C11.551 20 12 20.448 12 21C12 21.552 11.551 22 11 22C10.448 22 10 21.552 10 21C10 20.448 10.448 20 11 20ZM21.889 5.458L17.894 13.447C17.725 13.786 17.378 14 17 14H9C8.447 14 8 14.448 8 15C8 15.552 8.447 16 9 16H19C19.551 16 20 16.448 20 17C20 17.552 19.551 18 19 18C19 18 12.413 18 9 18C7.343 18 6 16.657 6 15C6 13.793 6.71201 12.753 7.73901 12.277L5.25601 4H3C2.448 4 2 3.552 2 3C2 2.448 2.448 2 3 2H6C6.441 2 6.83 2.29 6.957 2.713L7.34403 4H20.988C21.067 3.999 21.147 4.007 21.225 4.026L21.233 4.028C21.326 4.05 21.413 4.085 21.494 4.131C21.644 4.216 21.765 4.335 21.85 4.474C21.936 4.613 21.989 4.774 21.998 4.947C22.003 5.039 21.995 5.133 21.974 5.226L21.972 5.234C21.953 5.313 21.925 5.388 21.889 5.458ZM19.382 6H7.944L9.74402 12H16.382L19.382 6Z" fill="white" />
                                    </svg> ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.featuredright}>
                    <div className={styles.featuredrighttbox}></div>
                    <div className={styles.featuredrighttbox}></div>
                    <div className={styles.featuredrighttbox}></div>
                    <div className={styles.featuredrighttbox}></div>
                    <div className={styles.featuredrighttbox}></div>
                    <div className={styles.featuredrighttbox}></div>
                </div>
            </div>
            <div className="testimonals text-center mt-5">
                <div className="testimonals-heading">
                    <h1 className={styles.featuredlefth1} >Testimonals</h1>
                    <p className={styles.testimonalsp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <div className="tesimonals-circles ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                            <circle cx="32.5" cy="32.5" r="30.5" fill="#C4C4C4" stroke="white" stroke-width="4" />
                        </svg>
                        <svg className={styles.testsvg} xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                            <circle cx="32.5" cy="32.5" r="30.5" fill="#C4C4C4" stroke="white" stroke-width="4" />
                        </svg>
                        <svg className={styles.testsvg} xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                            <circle cx="32.5" cy="32.5" r="30.5" fill="#C4C4C4" stroke="white" stroke-width="4" />
                        </svg>
                        <svg className={styles.testsvg} xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                            <circle cx="32.5" cy="32.5" r="30.5" fill="#C4C4C4" stroke="white" stroke-width="4" />
                        </svg>
                        <svg className={styles.testsvg} xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                            <circle cx="32.5" cy="32.5" r="30.5" fill="#6C5DD3" stroke="white" stroke-width="4" />
                            <text x="15" y="38" fill="white">21k+</text>
                        </svg>
                    </div>
                </div>
                <div className="testimonals-hero">

                </div>
            </div>
            <div className="user-ratings mt-5 d-flex gap-5">
                <div className={styles.userratingbox}>
                    <div className="user-rating-heading">
                        <p className={styles.userratingheading}>Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!</p>
                    </div>
                    <div className="user-rating-hero d-flex justify-content-between align-items-center">
                        <div className="user-info d-flex align-items-end  gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none">
                                <circle cx="35.5" cy="35.5" r="31.5" fill="#C4C4C4" stroke="white" stroke-width="8" />
                            </svg>
                            <div className="user-name">
                                <h6 className={styles.username} >Steve Henry</h6>
                                <p>Book Lovers</p>
                            </div>
                        </div>
                        <div className="rating-box">
                            <Rate allowHalf defaultValue={2.5} />
                        </div>
                    </div>
                </div>
                <div className={styles.userratingbox}>
                    <div className="user-rating-heading">
                        <p className={styles.userratingheading}>Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!</p>
                    </div>
                    <div className="user-rating-hero d-flex justify-content-between align-items-center">
                        <div className="user-info d-flex align-items-end  gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none">
                                <circle cx="35.5" cy="35.5" r="31.5" fill="#C4C4C4" stroke="white" stroke-width="8" />
                            </svg>
                            <div className="user-name">
                                <h6 className={styles.username} >Steve Henry</h6>
                                <p>Book Lovers</p>
                            </div>
                        </div>
                        <div className="rating-box">
                            <Rate allowHalf defaultValue={2.5} />
                        </div>
                    </div>
                </div>
                <div className={styles.userratingbox}>
                    <div className="user-rating-heading">
                        <p className={styles.userratingheading}>Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!</p>
                    </div>
                    <div className="user-rating-hero d-flex justify-content-between align-items-center">
                        <div className="user-info d-flex align-items-end  gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none">
                                <circle cx="35.5" cy="35.5" r="31.5" fill="#C4C4C4" stroke="white" stroke-width="8" />
                            </svg>
                            <div className="user-name">
                                <h6 className={styles.username} >Steve Henry</h6>
                                <p>Book Lovers</p>
                            </div>
                        </div>
                        <div className="rating-box">
                            <Rate allowHalf defaultValue={2.5} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="latest-news mt-5 p-5">
                <div className="latest-news-heading">
                    <h1 className={styles.featuredlefth1} >Latest News</h1>
                    <p className={styles.latestnewsp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="news-boxs d-flex align-items-center justify-content-center gap-3">
                    <div className="news-box">
                        <div className={styles.newsbox}></div>
                        <h5 className={styles.newsh5} >Why reading is important for our children?</h5>
                        <p className={styles.newsp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                        <NavLink className={styles.newslink} to="/home/news">Continue reading</NavLink>
                        <div className="user-info d-flex align-items-end  gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none">
                                <circle cx="35.5" cy="35.5" r="31.5" fill="#C4C4C4" stroke="white" stroke-width="8" />
                            </svg>
                            <div className="user-name ">
                                <h6 className={styles.username} >Steve Henry</h6>
                                <p className={styles.newsp}>2 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="news-box">
                        <div className={styles.newsbox}></div>
                        <h5 className={styles.newsh5} >Why reading is important for our children?</h5>
                        <p className={styles.newsp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                        <NavLink className={styles.newslink} to="/home/news">Continue reading</NavLink>
                        <div className="user-info d-flex align-items-end  gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none">
                                <circle cx="35.5" cy="35.5" r="31.5" fill="#C4C4C4" stroke="white" stroke-width="8" />
                            </svg>
                            <div className="user-name ">
                                <h6 className={styles.username} >Steve Henry</h6>
                                <p className={styles.newsp}>2 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="news-box">
                        <div className={styles.newsbox}></div>
                        <h5 className={styles.newsh5} >Why reading is important for our children?</h5>
                        <p className={styles.newsp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                        <NavLink className={styles.newslink} to="/home/news">Continue reading</NavLink>
                        <div className="user-info d-flex align-items-end  gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none">
                                <circle cx="35.5" cy="35.5" r="31.5" fill="#C4C4C4" stroke="white" stroke-width="8" />
                            </svg>
                            <div className="user-name ">
                                <h6 className={styles.username} >Steve Henry</h6>
                                <p className={styles.newsp}>2 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="news-box">
                        <div className={styles.newsbox}></div>
                        <h5 className={styles.newsh5} >Why reading is important for our children?</h5>
                        <p className={styles.newsp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                        <NavLink className={styles.newslink} to="/home/news">Continue reading</NavLink>
                        <div className="user-info d-flex align-items-end  gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none">
                                <circle cx="35.5" cy="35.5" r="31.5" fill="#C4C4C4" stroke="white" stroke-width="8" />
                            </svg>
                            <div className="user-name ">
                                <h6 className={styles.username} >Steve Henry</h6>
                                <p className={styles.newsp}>2 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-top d-flex gap-5 p-5 justify-content-around">
                <div className="happy-customers text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path d="M78.125 25C74.3219 25 70.9531 26.7438 68.6594 29.4313C68.7156 30.0281 68.75 30.6375 68.75 31.25C68.75 34.7312 67.7781 37.9844 66.1156 40.7844C67.5688 46.0781 72.375 50 78.125 50C85.0188 50 90.625 44.3938 90.625 37.5C90.625 30.6062 85.0188 25 78.125 25Z" fill="#6C5DD3" />
                        <path d="M31.25 31.25C31.25 30.6375 31.2844 30.0281 31.3406 29.4313C29.0469 26.7438 25.6781 25 21.875 25C14.9812 25 9.375 30.6062 9.375 37.5C9.375 44.3938 14.9812 50 21.875 50C27.625 50 32.4281 46.0781 33.8812 40.7844C32.2219 37.9844 31.25 34.7312 31.25 31.25Z" fill="#6C5DD3" />
                        <path d="M50 46.875C41.3844 46.875 34.375 39.8656 34.375 31.25C34.375 22.6344 41.3844 15.625 50 15.625C58.6156 15.625 65.625 22.6344 65.625 31.25C65.625 39.8656 58.6156 46.875 50 46.875Z" fill="#6C5DD3" />
                        <path d="M20.4875 56.25H12.5C7.33125 56.25 3.125 60.4562 3.125 65.625V78.125C3.125 79.8531 4.525 81.25 6.25 81.25H18.75V62.5C18.75 60.2156 19.4125 58.0969 20.4875 56.25Z" fill="#6C5DD3" />
                        <path d="M87.5 56.25H79.5094C80.5875 58.0969 81.25 60.2156 81.25 62.5V81.25H93.75C95.4781 81.25 96.875 79.8531 96.875 78.125V65.625C96.875 60.4562 92.6687 56.25 87.5 56.25Z" fill="#6C5DD3" />
                        <path d="M75 84.375H25C23.275 84.375 21.875 82.9781 21.875 81.25V62.5C21.875 57.3312 26.0812 53.125 31.25 53.125H68.75C73.9188 53.125 78.125 57.3312 78.125 62.5V81.25C78.125 82.9781 76.7281 84.375 75 84.375Z" fill="#6C5DD3" />
                    </svg>
                    <h1 className={styles.happycustomerh1}>125,663</h1>
                    <p className={styles.happycustomerp}>Happy Customers</p>
                </div>
                <div className="happy-customers text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <g clip-path="url(#clip0_37_588)">
                            <path d="M100 29.2969V94.1406H70.2012C62.0127 94.1406 57.7062 99.693 57.2676 100H42.7324C42.2875 99.6887 38.0426 94.1406 29.7988 94.1406H0V23.4375H5.85938V88.2812H29.8242C38.9809 88.2812 44.0777 93.4475 45.3477 94.1406H54.6523C55.9217 93.4477 61.0199 88.2812 70.1758 88.2812H94.1406V29.2969H100Z" fill="#6C5DD3" />
                            <path d="M41.1973 84.7598C37.6387 83.2207 33.7891 82.4219 29.8242 82.4219H11.7188V11.7188H17.5781V70.7031H26.3672C34.3516 70.7031 40.8828 76.9551 41.1973 84.7598Z" fill="#6C5DD3" />
                            <path d="M70.1758 17.5781C63.9699 17.5781 57.9928 19.2039 52.7238 22.3127C52.8599 23.6436 52.9297 24.9969 52.9297 26.3672V88.1584C53.3221 87.8738 53.7707 87.5584 54.2818 87.2228C63.3279 81.1896 69.5609 82.4219 88.2812 82.4219V17.5781H70.1758Z" fill="#6C5DD3" />
                            <path d="M47.0703 85.3516C47.0703 74.0436 37.783 64.8438 26.3672 64.8438H23.4375V0C38.0842 0 47.0703 11.8283 47.0703 26.3672V85.3516Z" fill="#6C5DD3" />
                        </g>
                        <defs>
                            <clipPath id="clip0_37_588">
                                <rect width="100" height="100" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h1 className={styles.happycustomerh1}>50,672+</h1>
                    <p className={styles.happycustomerp}>Book Collections</p>
                </div>
                <div className="happy-customers text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path d="M87.0188 25L93.75 40.625C93.75 45.8031 88.8531 50 82.8125 50C77.0031 50 72.25 46.1156 71.8969 41.2125C71.8938 41.1562 71.8594 41.1562 71.8531 41.2125C71.5 46.1156 66.7469 50 60.9375 50C55.1281 50 50.375 46.1156 50.0219 41.2125C50.0187 41.1562 49.9844 41.1562 49.9781 41.2125C49.625 46.1156 44.8719 50 39.0625 50C33.2531 50 28.5 46.1156 28.1469 41.2125C28.1437 41.1562 28.1094 41.1562 28.1031 41.2125C27.75 46.1156 22.9969 50 17.1875 50C11.1469 50 6.25 45.8031 6.25 40.625L12.9812 25H87.0188Z" fill="#6C5DD3" />
                        <path d="M87.5 18.75H12.5V9.375C12.5 7.65 13.9 6.25 15.625 6.25H84.375C86.1 6.25 87.5 7.65 87.5 9.375V18.75Z" fill="#6C5DD3" />
                        <path d="M87.5 55.6436V93.7498H12.5V55.6436C13.9937 56.0311 15.5594 56.2498 17.1875 56.2498C18.8156 56.2498 20.375 55.9873 21.875 55.5967V79.6873C21.875 80.5498 22.575 81.2498 23.4375 81.2498H76.5625C77.425 81.2498 78.125 80.5498 78.125 79.6873V55.5967C79.625 55.9873 81.1844 56.2498 82.8125 56.2498C84.4406 56.2498 86.0062 56.0311 87.5 55.6436Z" fill="#6C5DD3" />
                    </svg>
                    <h1 className={styles.happycustomerh1}>1,562</h1>
                    <p className={styles.happycustomerp}>Our Stores</p>
                </div>
                <div className="happy-customers text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <g clip-path="url(#clip0_37_631)">
                            <path d="M99.524 0.237793C35.2557 4.41275 24.6808 44.1124 16.5248 79.4739L0 99.7618H8.55597L23.1808 80.962C57.4865 73.024 75.6303 55.3683 75.6303 55.3683L61.2685 47.5744C61.2685 47.5744 82.2873 41.1934 88.2493 42.6114C92.5302 39.1183 102.255 26.6875 99.524 0.237793ZM24.8437 73.8929L24.4377 73.6869C28.8816 66.3809 55.7493 24.0493 89.806 8.79357C71.6932 19.9376 32.7497 64.693 24.8437 73.8929Z" fill="#6C5DD3" />
                        </g>
                        <defs>
                            <clipPath id="clip0_37_631">
                                <rect width="100" height="100" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h1 className={styles.happycustomerh1}>457</h1>
                    <p className={styles.happycustomerp}>Famous Writers</p>
                </div>
            </div>
        </div>

    )
}
