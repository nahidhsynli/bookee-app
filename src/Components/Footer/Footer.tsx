import styles from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className="subscribe-footer">
            <div className={styles.subscribe}>
                <h2 className={styles.subscribeh2}>Subscribe our newsletter for newest books updates</h2>
                <input className={styles.subscribeinput} type="text" name="text" id="text" placeholder="Type your email here..." />
                <button className={styles.subscribebutton} type="submit">Subscribe</button>
            </div>
            <div className="footer d-flex justify-content-around p-3 gap-3">
                <div className="footer-left">
                    <div className="logo d-flex gap-2 ">
                        <div className="logo-left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                <rect rx="5" ry="5" width="100%" height="100%" fill="#6C5DD3" />
                                <path d="M41.3203 35.4414H37.8658C38.0446 34.8673 38.0725 34.2384 37.9134 33.6128L36.6477 28.7217C36.4158 27.8254 35.5018 27.2854 34.6045 27.5157L29.096 28.9274L25.3088 14.0346L29.2157 13.0409L31.5575 22.25C31.7861 23.1492 32.7008 23.6928 33.5993 23.4638C34.4986 23.2351 35.0418 22.3211 34.8132 21.4219L30.8364 5.78278C30.6153 4.91341 30.0684 4.18183 29.2971 3.7232C28.5258 3.26489 27.6227 3.13367 26.7523 3.35511L23.1797 4.26352V3.35938C23.1797 1.50713 21.6726 0 19.8203 0H15.7891C13.9368 0 12.4297 1.50713 12.4297 3.35938V6.71875H8.39844C6.54619 6.71875 5.03906 8.22588 5.03906 10.0781V35.4414H1.67969C0.751923 35.4414 0 36.1933 0 37.1211C0 38.0489 0.751923 38.8008 1.67969 38.8008H3.35938V41.3203C3.35938 42.2481 4.1113 43 5.03906 43C5.96683 43 6.71875 42.2481 6.71875 41.3203V38.8008H36.2812V41.3203C36.2812 42.2481 37.0332 43 37.9609 43C38.8887 43 39.6406 42.2481 39.6406 41.3203V38.8008H41.3203C42.2481 38.8008 43 38.0489 43 37.1211C43 36.1933 42.2481 35.4414 41.3203 35.4414ZM23.1797 19.2928L27.2861 35.4414H23.1797V19.2928ZM33.8152 31.1858L34.6593 34.4474L30.7524 35.4411L29.924 32.1827L33.8152 31.1858ZM27.5803 6.61082L28.3877 9.78516L24.4808 10.7789L23.6738 7.60419L27.5803 6.61082ZM12.4297 10.0781V13.3535H8.39844V10.0781H12.4297ZM8.39844 16.7129H12.4297V35.4414H8.39844V16.7129ZM15.7891 35.4414V3.35938H19.8203V35.4414H15.7891Z" fill="white" />
                            </svg>
                        </div>
                        <div className="logo-right gap-2">
                            <svg width="119" height="27" viewBox="0 0 119 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Bookoe">
                                    <path d="M0 0.758428H10.2196C13.0009 0.758428 15.0423 1.31461 16.3437 2.42697C17.6706 3.51404 18.334 5.28371 18.334 7.73596C18.334 9.05056 18.1171 10.1376 17.6833 10.9972C17.2495 11.8567 16.5095 12.6152 15.4633 13.2725C16.6116 13.7275 17.4537 14.4228 17.9895 15.3581C18.5509 16.2935 18.8316 17.5197 18.8316 19.0365C18.8316 21.5646 18.1044 23.448 16.6499 24.6868C15.1954 25.9256 13.103 26.5449 10.3727 26.5449H0V0.758428ZM9.98993 11.3764C11.9803 11.3764 12.9754 10.3525 12.9754 8.30478C12.9754 6.25702 11.9675 5.23315 9.95165 5.23315H5.28203V11.3764H9.98993ZM10.1048 22.0702C11.253 22.0702 12.0951 21.8427 12.6309 21.3876C13.1923 20.9073 13.473 20.111 13.473 18.9986C13.473 17.8862 13.2051 17.0772 12.6692 16.5716C12.1334 16.0407 11.2785 15.7753 10.1048 15.7753H5.28203V22.0702H10.1048Z" fill="#11142D" />
                                    <path d="M30.4862 27C27.6028 27 25.4083 26.1404 23.9028 24.4213C22.4228 22.677 21.6828 20.2121 21.6828 17.0267C21.6828 13.8666 22.4228 11.427 23.9028 9.70786C25.4083 7.98876 27.6028 7.12921 30.4862 7.12921C33.3696 7.12921 35.5513 7.98876 37.0313 9.70786C38.5368 11.427 39.2896 13.8666 39.2896 17.0267C39.2896 20.2121 38.5368 22.677 37.0313 24.4213C35.5513 26.1404 33.3696 27 30.4862 27ZM30.4862 22.677C31.711 22.677 32.6169 22.2346 33.2038 21.3497C33.7907 20.4649 34.0841 19.0239 34.0841 17.0267C34.0841 15.0295 33.7907 13.6011 33.2038 12.7416C32.6169 11.882 31.711 11.4522 30.4862 11.4522C29.2614 11.4522 28.3555 11.882 27.7686 12.7416C27.1817 13.6011 26.8883 15.0295 26.8883 17.0267C26.8883 19.0239 27.1817 20.4649 27.7686 21.3497C28.3555 22.2346 29.2614 22.677 30.4862 22.677Z" fill="#11142D" />
                                    <path d="M50.8575 27C47.9741 27 45.7796 26.1404 44.2741 24.4213C42.7941 22.677 42.0541 20.2121 42.0541 17.0267C42.0541 13.8666 42.7941 11.427 44.2741 9.70786C45.7796 7.98876 47.9741 7.12921 50.8575 7.12921C53.7409 7.12921 55.9226 7.98876 57.4026 9.70786C58.9081 11.427 59.6609 13.8666 59.6609 17.0267C59.6609 20.2121 58.9081 22.677 57.4026 24.4213C55.9226 26.1404 53.7409 27 50.8575 27ZM50.8575 22.677C52.0823 22.677 52.9882 22.2346 53.5751 21.3497C54.1619 20.4649 54.4554 19.0239 54.4554 17.0267C54.4554 15.0295 54.1619 13.6011 53.5751 12.7416C52.9882 11.882 52.0823 11.4522 50.8575 11.4522C49.6327 11.4522 48.7268 11.882 48.1399 12.7416C47.553 13.6011 47.2596 15.0295 47.2596 17.0267C47.2596 19.0239 47.553 20.4649 48.1399 21.3497C48.7268 22.2346 49.6327 22.677 50.8575 22.677Z" fill="#11142D" />
                                    <path d="M63.4206 0H68.5495V15.0927L70.5015 14.7514L74.2908 7.58427H80.0322L75.0563 16.5716L80.3001 26.5449H74.5205L70.6546 19.1503L68.5495 19.4916V26.5449H63.4206V0Z" fill="#11142D" />
                                    <path d="M90.5908 27C87.7074 27 85.5129 26.1404 84.0074 24.4213C82.5274 22.677 81.7875 20.2121 81.7875 17.0267C81.7875 13.8666 82.5274 11.427 84.0074 9.70786C85.5129 7.98876 87.7074 7.12921 90.5908 7.12921C93.4743 7.12921 95.656 7.98876 97.136 9.70786C98.6415 11.427 99.3942 13.8666 99.3942 17.0267C99.3942 20.2121 98.6415 22.677 97.136 24.4213C95.656 26.1404 93.4743 27 90.5908 27ZM90.5908 22.677C91.8157 22.677 92.7215 22.2346 93.3084 21.3497C93.8953 20.4649 94.1887 19.0239 94.1887 17.0267C94.1887 15.0295 93.8953 13.6011 93.3084 12.7416C92.7215 11.882 91.8157 11.4522 90.5908 11.4522C89.366 11.4522 88.4602 11.882 87.8733 12.7416C87.2864 13.6011 86.9929 15.0295 86.9929 17.0267C86.9929 19.0239 87.2864 20.4649 87.8733 21.3497C88.4602 22.2346 89.366 22.677 90.5908 22.677Z" fill="#11142D" />
                                    <path d="M110.656 27C107.67 27 105.514 26.2542 104.187 24.7626C102.86 23.2711 102.197 20.8567 102.197 17.5197C102.197 14.0309 102.886 11.427 104.264 9.70786C105.667 7.98876 107.836 7.12921 110.771 7.12921C113.476 7.12921 115.517 7.84972 116.895 9.29073C118.298 10.7065 119 12.8427 119 15.6994L118.617 19.2261H107.364C107.415 20.111 107.568 20.7935 107.824 21.2739C108.104 21.7289 108.538 22.0576 109.125 22.2598C109.737 22.4368 110.579 22.5253 111.651 22.5253C112.493 22.5253 113.501 22.5 114.675 22.4494C115.849 22.3989 116.703 22.3483 117.239 22.2978L118.311 22.184L118.388 25.9382C115.504 26.6461 112.927 27 110.656 27ZM113.948 15.3581C113.948 13.8413 113.705 12.7921 113.22 12.2107C112.761 11.6039 111.932 11.3006 110.732 11.3006C109.508 11.3006 108.64 11.6166 108.13 12.2486C107.619 12.8553 107.351 13.8919 107.326 15.3581H113.948Z" fill="#11142D" />
                                </g>
                            </svg>
                            <h4 className={styles.logoh4}>Book Store Website</h4>
                        </div>
                    </div>
                    <p className={styles.footerlefttext}>Bookoe is a Book Store Website lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    <div className="socials ">
                        <h5>Follow us</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="59" viewBox="0 0 58 59" fill="none">
                            <rect x="0.5" y="1.41992" width="57" height="57" rx="13.5" stroke="#F0F0F0" />
                            <path d="M32.9709 31.0201L33.4687 27.8349H30.3561V25.768C30.3561 24.8966 30.7909 24.0471 32.185 24.0471H33.6V21.3353C33.6 21.3353 32.3159 21.1201 31.0881 21.1201C28.5248 21.1201 26.8493 22.6457 26.8493 25.4074V27.8349H24V31.0201H26.8493V38.7201H30.3561V31.0201H32.9709Z" fill="#1E33E6" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="59" viewBox="0 0 58 59" fill="none">
                            <rect y="0.919922" width="58" height="58" rx="14" fill="#FFD5D5" />
                            <path d="M41.4776 23.9365C41.1901 22.8279 40.3429 21.9548 39.2673 21.6585C37.3177 21.1201 29.5 21.1201 29.5 21.1201C29.5 21.1201 21.6823 21.1201 19.7327 21.6585C18.6571 21.9549 17.8099 22.8279 17.5224 23.9365C17 25.9459 17 30.1383 17 30.1383C17 30.1383 17 34.3307 17.5224 36.3401C17.8099 37.4487 18.6571 38.2854 19.7327 38.5817C21.6823 39.1201 29.5 39.1201 29.5 39.1201C29.5 39.1201 37.3177 39.1201 39.2673 38.5817C40.3429 38.2854 41.1901 37.4487 41.4776 36.3401C42 34.3307 42 30.1383 42 30.1383C42 30.1383 42 25.9459 41.4776 23.9365ZM26.9432 33.9447V26.3319L33.4772 30.1384L26.9432 33.9447Z" fill="#FF2B2B" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="59" viewBox="0 0 58 59" fill="none">
                            <rect x="0.5" y="1.41992" width="57" height="57" rx="13.5" stroke="#F0F0F0" />
                            <path d="M35.7908 26.0093C35.802 26.1799 35.802 26.3505 35.802 26.521C35.802 31.723 32.1726 37.7169 25.5391 37.7169C23.4954 37.7169 21.597 37.0712 20 35.9505C20.2904 35.987 20.5695 35.9992 20.8711 35.9992C22.5573 35.9992 24.1096 35.3779 25.3492 34.318C23.7634 34.2814 22.4345 33.1484 21.9766 31.589C22.2 31.6255 22.4233 31.6499 22.6579 31.6499C22.9817 31.6499 23.3056 31.6012 23.6071 31.5159C21.9543 31.1504 20.7147 29.5667 20.7147 27.654V27.6053C21.1949 27.8977 21.7533 28.0804 22.3451 28.1047C21.3736 27.3981 20.737 26.1921 20.737 24.8276C20.737 24.0966 20.9157 23.4266 21.2284 22.8418C23.004 25.2296 25.6731 26.789 28.6659 26.9596C28.6101 26.6672 28.5766 26.3626 28.5766 26.0581C28.5766 23.8895 30.1847 22.123 32.1837 22.123C33.2223 22.123 34.1603 22.5982 34.8192 23.3657C35.6344 23.1951 36.4162 22.8662 37.1086 22.4154C36.8405 23.3292 36.271 24.0967 35.5228 24.5839C36.2487 24.4987 36.9522 24.2794 37.5999 23.9748C37.1086 24.7545 36.4944 25.4489 35.7908 26.0093Z" fill="#3CB5DB" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="59" viewBox="0 0 58 59" fill="none">
                            <rect x="0.5" y="1.41992" width="57" height="57" rx="13.5" stroke="#F0F0F0" />
                            <path d="M36.8286 20.7197H20.3671C19.6129 20.7197 19 21.3153 19 22.0463V37.7931C19 38.5242 19.6129 39.1197 20.3671 39.1197H36.8286C37.5829 39.1197 38.2 38.5242 38.2 37.7931V22.0463C38.2 21.3153 37.5829 20.7197 36.8286 20.7197ZM24.8029 36.4912H21.9571V27.7101H24.8071V36.4912H24.8029ZM23.38 26.5108C22.4671 26.5108 21.73 25.8003 21.73 24.9295C21.73 24.0588 22.4671 23.3483 23.38 23.3483C24.2886 23.3483 25.03 24.0588 25.03 24.9295C25.03 25.8044 24.2929 26.5108 23.38 26.5108ZM35.47 36.4912H32.6243V32.2197C32.6243 31.2012 32.6029 29.891 31.1457 29.891C29.6629 29.891 29.4357 30.9999 29.4357 32.1458V36.4912H26.59V27.7101H29.32V28.9094H29.3586C29.74 28.2194 30.67 27.4924 32.0543 27.4924C34.9343 27.4924 35.47 29.3119 35.47 31.6776V36.4912Z" fill="#286FA3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="59" viewBox="0 0 58 59" fill="none">
                            <rect x="0.5" y="1.41992" width="57" height="57" rx="13.5" stroke="#F0F0F0" />
                            <path d="M28.802 25.4077C26.3048 25.4077 24.2906 27.4224 24.2906 29.9201C24.2906 32.4179 26.3048 34.4325 28.802 34.4325C31.2991 34.4325 33.3134 32.4179 33.3134 29.9201C33.3134 27.4224 31.2991 25.4077 28.802 25.4077ZM28.802 32.8538C27.1882 32.8538 25.869 31.5381 25.869 29.9201C25.869 28.3021 27.1843 26.9865 28.802 26.9865C30.4196 26.9865 31.735 28.3021 31.735 29.9201C31.735 31.5381 30.4157 32.8538 28.802 32.8538ZM34.5502 25.2231C34.5502 25.8083 34.079 26.2756 33.4979 26.2756C32.9129 26.2756 32.4456 25.8044 32.4456 25.2231C32.4456 24.6419 32.9168 24.1706 33.4979 24.1706C34.079 24.1706 34.5502 24.6419 34.5502 25.2231ZM37.5382 26.2913C37.4714 24.8814 37.1494 23.6326 36.1168 22.6036C35.0881 21.5747 33.8395 21.2527 32.4299 21.182C30.9772 21.0995 26.6228 21.0995 25.1701 21.182C23.7644 21.2487 22.5158 21.5708 21.4832 22.5997C20.4506 23.6287 20.1325 24.8775 20.0618 26.2874C19.9794 27.7405 19.9794 32.0958 20.0618 33.5489C20.1286 34.9588 20.4506 36.2077 21.4832 37.2366C22.5158 38.2655 23.7605 38.5876 25.1701 38.6583C26.6228 38.7407 30.9772 38.7407 32.4299 38.6583C33.8395 38.5915 35.0881 38.2695 36.1168 37.2366C37.1455 36.2077 37.4675 34.9588 37.5382 33.5489C37.6206 32.0958 37.6206 27.7444 37.5382 26.2913ZM35.6613 35.108C35.3551 35.8778 34.7622 36.4708 33.9887 36.781C32.8304 37.2405 30.082 37.1345 28.802 37.1345C27.522 37.1345 24.7696 37.2366 23.6152 36.781C22.8456 36.4747 22.2528 35.8817 21.9426 35.108C21.4832 33.9495 21.5892 31.2004 21.5892 29.9201C21.5892 28.6398 21.4871 25.8868 21.9426 24.7322C22.2488 23.9625 22.8417 23.3695 23.6152 23.0592C24.7735 22.5997 27.522 22.7057 28.802 22.7057C30.082 22.7057 32.8344 22.6036 33.9887 23.0592C34.7583 23.3655 35.3512 23.9585 35.6613 24.7322C36.1207 25.8908 36.0147 28.6398 36.0147 29.9201C36.0147 31.2004 36.1207 33.9534 35.6613 35.108Z" fill="#FD3E77" />
                        </svg>
                    </div>
                    <p className="mt-5">Bookoe Book Store Website  -   © 2020 All Rights Reserved</p>
                </div>
                <div className="books-categories">
                    <h5 className="mb-3">Books Categories</h5>
                    <div className="category-links d-flex gap-5">
                        <div className="category-links-left gap-3 d-flex flex-column">
                            <a className={styles.categorylinks} href="#">Action</a>
                            <a className={styles.categorylinks} href="#">Advanture</a>
                            <a className={styles.categorylinks} href="#">Comedy</a>
                            <a className={styles.categorylinks} href="#">Crime</a>
                            <a className={styles.categorylinks} href="#">Drama</a>
                            <a className={styles.categorylinks} href="#">Fantasy</a>
                            <a className={styles.categorylinks} href="#">Horror</a>
                        </div>
                        <div className="category-link-right gap-3 d-flex flex-column">
                            <a className={styles.categorylinks} href="#">Law</a>
                            <a className={styles.categorylinks} href="#">Mystery</a>
                            <a className={styles.categorylinks} href="#">Professional</a>
                            <a className={styles.categorylinks} href="#">Romance</a>
                            <a className={styles.categorylinks} href="#">TV Series</a>
                            <div className="view-more">
                                <a className={styles.viewmore} href="#">View more</a> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M11.1667 8.44032L5.83337 14.4403C5.71659 14.5728 5.55202 14.6535 5.37579 14.6647C5.19955 14.676 5.02606 14.6169 4.89338 14.5003C4.76092 14.3835 4.68021 14.219 4.66896 14.0427C4.65771 13.8665 4.71684 13.693 4.83338 13.5603L9.77337 8.00032L4.83338 2.44032C4.72562 2.30654 4.67367 2.13633 4.68834 1.96518C4.70302 1.79402 4.7832 1.63514 4.91216 1.52166C5.04111 1.40818 5.2089 1.34885 5.38053 1.35606C5.55215 1.36326 5.71438 1.43643 5.83337 1.56032L11.1667 7.56032C11.2736 7.68198 11.3325 7.83838 11.3325 8.00032C11.3325 8.16226 11.2736 8.31866 11.1667 8.44032Z" fill="#6C5DD3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="quick-links">
                    <h5 className="mb-3">Quick Links</h5>
                    <div className="quick-links d-flex gap-3 flex-column">
                        <a className={styles.categorylinks} href="#">About us</a>
                        <a className={styles.categorylinks} href="#">Contact us</a>
                        <a className={styles.categorylinks} href="#">Products</a>
                        <a className={styles.categorylinks} href="#">Login</a>
                        <a className={styles.categorylinks} href="#">Sign Up</a>
                        <a className={styles.categorylinks} href="#">FAQ</a>
                        <a className={styles.categorylinks} href="#">Shipment</a>
                    </div>
                </div>
                <div className="our-store d-flex flex-column">
                    <h5 className="mb-3">Our Store</h5>
                    <div className={styles.ourstorediv}>
                    </div>
                    <div className="location d-flex gap-2 align-items-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6415 16.2445C18.0423 14.3001 19 12.1631 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 12.1631 5.95769 14.3001 7.35846 16.2445C8.74868 18.1742 10.4581 19.7503 11.6769 20.7485C11.8768 20.9122 12.1232 20.9122 12.3231 20.7485C13.5419 19.7503 15.2513 18.1742 16.6415 16.2445ZM13.5904 22.2957C16.1746 20.1791 21 15.4917 21 10C21 5.02944 16.9706 1 12 1C7.02944 1 3 5.02944 3 10C3 15.4917 7.82537 20.1791 10.4096 22.2957C11.3466 23.0631 12.6534 23.0631 13.5904 22.2957Z" fill="#6C5DD3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C10.8954 8 10 8.89542 10 9.99999C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 9.99999C14 8.89542 13.1046 8 12 8ZM8 9.99999C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 9.99999C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 9.99999Z" fill="#6C5DD3" />
                        </svg>
                        <p className={styles.location} > 832  Thompson Drive, San Fransisco
                            CA 94107, United States</p>
                    </div>
                    <div className="phone-number d-flex gap-2 align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64761 2.35238C5.93854 1.06145 8.07355 1.21318 9.16893 2.6737L10.9872 5.09806C11.8829 6.29242 11.7642 7.96371 10.7085 9.01938L9.36796 10.36C9.49788 10.6982 9.92556 11.4402 11.2279 12.7426C12.5303 14.045 13.2724 14.4727 13.6106 14.6026L14.9511 13.2621C16.0068 12.2064 17.6781 12.0876 18.8724 12.9834L21.2968 14.8017C22.7573 15.8971 22.9091 18.0321 21.6181 19.323C21.1984 19.7427 21.1274 19.8137 20.427 20.5141C19.7132 21.2279 18.1976 21.8951 16.663 21.9618C14.2617 22.0662 11 21 6.98532 16.9853C2.97065 12.9706 1.90438 9.70879 2.00879 7.30746C2.06687 5.97166 2.49156 4.50453 3.46209 3.54907C4.15689 2.8431 4.24725 2.75274 4.64761 2.35238ZM4.0069 7.39434C3.93453 9.05888 4.63604 11.8076 8.39954 15.5711C12.163 19.3346 14.9116 20.0361 16.5762 19.9637C18.13 19.8961 18.9636 19.1453 19.0128 19.0999L20.2039 17.9088C20.6342 17.4785 20.5837 16.7668 20.0968 16.4017L17.6724 14.5834C17.2743 14.2848 16.7172 14.3244 16.3653 14.6763C15.8352 15.2065 15.4732 15.5737 14.7648 16.2795C13.2932 17.7456 10.7741 15.1172 9.81375 14.1569C8.93117 13.2743 6.24151 10.6752 7.68965 9.20984C7.69252 9.20696 8.08257 8.81691 9.29431 7.60517C9.6462 7.25328 9.6858 6.69618 9.38721 6.29806L7.56893 3.8737C7.2038 3.38686 6.49213 3.33628 6.06183 3.76659C5.66577 4.16264 5.21755 4.61086 4.87192 4.95889C4.16055 5.67518 4.04497 6.51874 4.0069 7.39434Z" fill="#6C5DD3" />
                        </svg>
                        <p className={styles.location}>+123 345123 556</p>
                    </div>
                    <div className="support d-flex gap-2 align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5ZM4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4Z" fill="#6C5DD3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.23168 7.35984C5.58525 6.93556 6.21581 6.87824 6.64009 7.2318L11.3597 11.1648C11.7306 11.4738 12.2692 11.4738 12.6401 11.1648L17.3597 7.2318C17.784 6.87824 18.4146 6.93556 18.7681 7.35984C19.1217 7.78412 19.0644 8.41468 18.6401 8.76825L13.9204 12.7012C12.8079 13.6284 11.1919 13.6284 10.0793 12.7012L5.35972 8.76825C4.93544 8.41468 4.87812 7.78412 5.23168 7.35984Z" fill="#6C5DD3" />
                        </svg>
                        <p className={styles.location}>support@bookoe.id</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
