import { Link, NavLink } from 'react-router-dom'
import styles from './Special.module.css'

export const Special = () => {
    return (
        <div className="special">
            <div className="homepage-hero d-flex gap-3">
                <div className={styles.backtoschool}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="54" viewBox="0 0 38 54" fill="none">
                        <circle cx="3" cy="3" r="3" fill="#D3CCFF" />
                        <circle cx="19" cy="3" r="3" fill="#D3CCFF" />
                        <circle cx="35" cy="3" r="3" fill="#D3CCFF" />
                        <circle cx="3" cy="19" r="3" fill="#D3CCFF" />
                        <circle cx="19" cy="19" r="3" fill="#D3CCFF" />
                        <circle cx="35" cy="19" r="3" fill="#D3CCFF" />
                        <circle cx="3" cy="35" r="3" fill="#D3CCFF" />
                        <circle cx="19" cy="35" r="3" fill="#D3CCFF" />
                        <circle cx="35" cy="35" r="3" fill="#D3CCFF" />
                        <circle cx="3" cy="51" r="3" fill="#D3CCFF" />
                        <circle cx="19" cy="51" r="3" fill="#D3CCFF" />
                        <circle cx="35" cy="51" r="3" fill="#D3CCFF" />
                    </svg>
                    <h4 className={styles.backtoschoolh4}>BACK TO SCHOOL</h4>
                    <h1 className={styles.backtoschoolh1}>Special 50% Off</h1>
                    <h2 className={styles.backtoschoolh2}>for our student community</h2>
                    <p className={styles.backtoschoolp} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    <div className="hero-buttons d-flex gap-3">
                        <NavLink to="/home/books" className={styles.getdealbutton} >Get the deal <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M2.01763 13.0019H19.584L16.293 16.293C15.3477 17.2383 16.7657 18.6562 17.711 17.7109L20.7082 14.709L22.709 12.705C23.0968 12.3149 23.0968 11.6849 22.709 11.2948L17.711 6.29097C17.5208 6.09556 17.2591 5.98593 16.9864 5.98819C16.0862 5.98831 15.6444 7.08475 16.293 7.70898L19.5918 11H1.96587C0.579479 11.0688 0.682995 13.0709 2.01763 13.0019Z" fill="white" />
                        </svg></NavLink>
                        <button className={styles.otherpromos}>See other promos</button>
                    </div>
                    <div className="hero-slider m-5 d-flex gap-3">
                        <Link to="/hero/slider1" >
                            <button className={styles.sliderbutton} id='slider-button' ></button>
                        </Link>
                        <Link to="/hero/slider2" >
                            <button className={styles.sliderbutton} id='slider-button' ></button>
                        </Link>
                        <Link to="/hero/slider3" >
                            <button className={styles.sliderbutton} id='slider-button' ></button>
                        </Link>
                        <Link to="/hero/slider4" >
                            <button className={styles.sliderbutton} id='slider-button' ></button>
                        </Link>
                    </div>
                </div>
                <div className={styles.bestseller}>
                    <h1 className={styles.bestsellerh1}>Best Seller</h1>
                    <h5 className={styles.bestsellerh5} >Based sales this week</h5>
                    <div className={styles.bestsellercard}>
                    </div>
                    <h3 className={styles.bestsellerh3}>Pushing Clouds</h3>
                    <h4 className={styles.bestsellerh4} >ADVANTURE, SCIENCE, COMEDY</h4>
                    <button className={styles.bestsellerbutton}>
                        <span className={styles.bestsellerbuttonleft}>60.00</span>
                        <span className={styles.bestsellerbuttonright}>USD 45.25</span>
                    </button>
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
            <div className="hero-third p-5  d-flex gap-5 justify-content-around">
                <div className={styles.recomendedcard}>
                    <h1 className="mt-5">Recomended For You</h1>
                    <p className="mt-4 mb-5 w-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="recomended-boxs d-flex gap-3">
                        <div className={styles.recomendedbox}>
                        </div>
                        <div className={styles.recomendedbox}>
                        </div>
                        <div className={styles.recomendedbox}>
                        </div>
                        <div className={styles.recomendedbox}>
                        </div>
                    </div>
                </div>
                <div className={styles.recomendedcardsecond}>
                    <h1 className="mt-5">Popular in 2020</h1>
                    <p className="mt-4 mb-5 w-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="recomended-boxs d-flex gap-3">
                        <div className={styles.recomendedbox}>
                        </div>
                        <div className={styles.recomendedbox}>
                        </div>
                        <div className={styles.recomendedbox}>
                        </div>
                        <div className={styles.recomendedbox}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="special-offers text-center ">
                <h1 className="fw-bold mb-3">Special Offers</h1>
                <p className={styles.specialoffersp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="special-offers-cards d-flex justify-content-around gap-5 p-5">
                <div className="special-offers-card">
                    <div className={styles.specialofferscardtop}>
                    </div>
                    <div className={styles.specialofferscardtbottom}>
                        <h3>SECONDS [Part I]</h3>
                        <div className="offers-link d-flex gap-3  mt-3">
                            <NavLink className={styles.offerlink} to="/biography">BIOGRAPHY</NavLink>
                            <NavLink className={styles.offerlink} to="/thriller">THRILLER</NavLink>
                            <NavLink className={styles.offerlink} to="/horror">HORROR</NavLink>
                        </div>
                        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        <h6>Kevin Smiley</h6>
                        <div className="add-to-card-price d-flex gap-5 align-items-end mt-4">
                            <button className={styles.addtocardbutton} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20C17.551 20 18 20.448 18 21C18 21.552 17.551 22 17 22C16.448 22 16 21.552 16 21C16 20.448 16.448 20 17 20ZM11 20C11.551 20 12 20.448 12 21C12 21.552 11.551 22 11 22C10.448 22 10 21.552 10 21C10 20.448 10.448 20 11 20ZM21.889 5.458L17.894 13.447C17.725 13.786 17.378 14 17 14H9C8.447 14 8 14.448 8 15C8 15.552 8.447 16 9 16H19C19.551 16 20 16.448 20 17C20 17.552 19.551 18 19 18C19 18 12.413 18 9 18C7.343 18 6 16.657 6 15C6 13.793 6.71202 12.753 7.73902 12.277L5.25602 4H3C2.448 4 2 3.552 2 3C2 2.448 2.448 2 3 2H6C6.441 2 6.83001 2.29 6.95701 2.713L7.34403 4H20.988C21.067 3.999 21.147 4.007 21.225 4.026L21.233 4.028C21.326 4.05 21.413 4.085 21.494 4.131C21.644 4.216 21.765 4.335 21.85 4.474C21.936 4.613 21.989 4.774 21.998 4.947C22.003 5.039 21.995 5.133 21.974 5.226L21.972 5.234C21.953 5.313 21.925 5.388 21.889 5.458ZM19.382 6H7.944L9.74402 12H16.382L19.382 6Z" fill="white" />
                            </svg> Add to card</button>
                            <p className="fw-bold fs-4" >$18,78 <span className="fw-light fs-6">$25</span> </p>

                        </div>
                    </div>
                </div>
                <div className="special-offers-card">
                    <div className={styles.specialofferscardtop}>
                    </div>
                    <div className={styles.specialofferscardtbottom}>
                        <h3>SECONDS [Part I]</h3>
                        <div className="offers-link d-flex gap-3  mt-3">
                            <NavLink className={styles.offerlink} to="/biography">BIOGRAPHY</NavLink>
                            <NavLink className={styles.offerlink} to="/thriller">THRILLER</NavLink>
                            <NavLink className={styles.offerlink} to="/horror">HORROR</NavLink>
                        </div>
                        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        <h6>Kevin Smiley</h6>
                        <div className="add-to-card-price d-flex gap-5 align-items-end mt-4">
                            <button className={styles.addtocardbutton} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20C17.551 20 18 20.448 18 21C18 21.552 17.551 22 17 22C16.448 22 16 21.552 16 21C16 20.448 16.448 20 17 20ZM11 20C11.551 20 12 20.448 12 21C12 21.552 11.551 22 11 22C10.448 22 10 21.552 10 21C10 20.448 10.448 20 11 20ZM21.889 5.458L17.894 13.447C17.725 13.786 17.378 14 17 14H9C8.447 14 8 14.448 8 15C8 15.552 8.447 16 9 16H19C19.551 16 20 16.448 20 17C20 17.552 19.551 18 19 18C19 18 12.413 18 9 18C7.343 18 6 16.657 6 15C6 13.793 6.71202 12.753 7.73902 12.277L5.25602 4H3C2.448 4 2 3.552 2 3C2 2.448 2.448 2 3 2H6C6.441 2 6.83001 2.29 6.95701 2.713L7.34403 4H20.988C21.067 3.999 21.147 4.007 21.225 4.026L21.233 4.028C21.326 4.05 21.413 4.085 21.494 4.131C21.644 4.216 21.765 4.335 21.85 4.474C21.936 4.613 21.989 4.774 21.998 4.947C22.003 5.039 21.995 5.133 21.974 5.226L21.972 5.234C21.953 5.313 21.925 5.388 21.889 5.458ZM19.382 6H7.944L9.74402 12H16.382L19.382 6Z" fill="white" />
                            </svg> Add to card</button>
                            <p className="fw-bold fs-4" >$18,78 <span className="fw-light fs-6">$25</span> </p>

                        </div>
                    </div>
                </div>
                <div className="special-offers-card">
                    <div className={styles.specialofferscardtop}>
                    </div>
                    <div className={styles.specialofferscardtbottom}>
                        <h3>SECONDS [Part I]</h3>
                        <div className="offers-link d-flex gap-3  mt-3">
                            <NavLink className={styles.offerlink} to="/biography">BIOGRAPHY</NavLink>
                            <NavLink className={styles.offerlink} to="/thriller">THRILLER</NavLink>
                            <NavLink className={styles.offerlink} to="/horror">HORROR</NavLink>
                        </div>
                        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        <h6>Kevin Smiley</h6>
                        <div className="add-to-card-price d-flex gap-5 align-items-end mt-4">
                            <button className={styles.addtocardbutton} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20C17.551 20 18 20.448 18 21C18 21.552 17.551 22 17 22C16.448 22 16 21.552 16 21C16 20.448 16.448 20 17 20ZM11 20C11.551 20 12 20.448 12 21C12 21.552 11.551 22 11 22C10.448 22 10 21.552 10 21C10 20.448 10.448 20 11 20ZM21.889 5.458L17.894 13.447C17.725 13.786 17.378 14 17 14H9C8.447 14 8 14.448 8 15C8 15.552 8.447 16 9 16H19C19.551 16 20 16.448 20 17C20 17.552 19.551 18 19 18C19 18 12.413 18 9 18C7.343 18 6 16.657 6 15C6 13.793 6.71202 12.753 7.73902 12.277L5.25602 4H3C2.448 4 2 3.552 2 3C2 2.448 2.448 2 3 2H6C6.441 2 6.83001 2.29 6.95701 2.713L7.34403 4H20.988C21.067 3.999 21.147 4.007 21.225 4.026L21.233 4.028C21.326 4.05 21.413 4.085 21.494 4.131C21.644 4.216 21.765 4.335 21.85 4.474C21.936 4.613 21.989 4.774 21.998 4.947C22.003 5.039 21.995 5.133 21.974 5.226L21.972 5.234C21.953 5.313 21.925 5.388 21.889 5.458ZM19.382 6H7.944L9.74402 12H16.382L19.382 6Z" fill="white" />
                            </svg> Add to card</button>
                            <p className="fw-bold fs-4" >$18,78 <span className="fw-light fs-6">$25</span> </p>

                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
