import style from './mainNav.module.css';
import Link from 'next/link'
import React from 'react-dom'
import Image from 'next/image';
import Head from 'next/head';
import { useEffect, useState ,useRef} from "react";
import { BsSearch } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingCart } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineLock } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
function Nav(){
    const [cart,setCart] = useState(0);
    const [cartVisible ,setCartVisible] = useState(false);
    const [cartSummery ,setCartSummery] = useState (false);
    const [wishlist ,setWishlist] = useState (0);
    const [isVisible, setIsVisible] = useState(false);
    const [respNavHidden ,setrespNavHidden] = useState(false);

    const addToCart =()=> {
        setCart (cart + 1) ;
    }
    const cartStatus =()=> {
        if (cart == 0) {
            setCartVisible ((cartVisible)=> !cartVisible);
            setIsVisible(false);
        }
        else {
            setCartSummery ((cartSummery) => !cartSummery);
            setIsVisible(false);
        }
    }
    const userClick =()=> {
            setCartVisible (false);
            setCartSummery (false);
            setrespNavHidden(false);
            setIsVisible((isVisible) => !isVisible);   
    };
    const showRespNav =()=> {
            setCartVisible (false);
            setCartSummery (false);
            setIsVisible(false);
            setrespNavHidden((respNavHidden) => !respNavHidden);
    };
    const closeNav =()=> {
            setrespNavHidden(false);
    };
    const addToFavorite =()=> {
        setWishlist(wishlist + 1);
    }

    let menuRef= useRef(null);
    let respNav= useRef(null);
    useEffect (()=>{
        // let handler=(e: any)=> {
        //     if (!menuRef.current.contains(e.target)){
        //         setIsVisible(false);
        //         setCartVisible (false);
        //         setCartSummery (false);
                
        //     }
            // if (!respNav.current.contains(e.target)){
            //     setrespNavHidden(false);
            // }
        // };
        // document.addEventListener("click",handler);
        // return () => {
        //     document.removeEventListener("click",handler);
        // }
    })
    return (
        <div>
            <Head>
                <title>Be a Dealer</title>
                <body className={style.bodyClass} />
            </Head>
            <div className={style.navContainer}>
                <div className={style.greenNav} >
                    <nav className={`${style.nav} flex lg:flex-cols-4 flex-cols-2 justify-between items-center`}>
                        <div>
                            <Image
                            src="/0010035_Artboard 1.png"
                            width= {170}
                            height= {170}
                            alt=""
                            /> 
                        </div>
                        
                        <div className={`${style.navSearch} lg:grid col-span-2 grid-cols-3 justify-items-end hidden`}>
                            <input type="text" placeholder="Search Store" className={`${style.searchInput} grid col-span-2`}/>
                            <button><BsSearch className={`${style.searchIcon} `}/></button>
                        </div>
                        <div ref={menuRef} className={`${style.profile} flex flex-cols-3 items-center justify-between`}>
                            <button onClick={showRespNav} className="lg:hidden flex">
                                <span><IoIosMenu className={`${style.respNav}`}/></span>
                            </button>
                            <button>
                                <AiOutlineUser className={`${style.profIcon}`} onClick={userClick} />
                            </button>
                            <button className={`${style.icon} lg:grid hidden`}>
                                <Link href="/wishlist"><IoMdHeartEmpty className={`${style.profIcon} ${style.wishIcon}`} /></Link>
                                <span className={style.wishlistCounter}>{wishlist}</span>
                            </button>
                            <button onClick={cartStatus} className={style.icon}>
                                <PiShoppingCart className={`${style.cartIconNav}`} />
                                <span className={style.cartCounter}>{cart}</span>
                            </button> 
                        </div>
                    </nav>
                    {isVisible && 
                        (
                        <div className={`${style.userControl}`}>
                            <div className={style.userSetting}>
                                <select value="currency" className={style.dropDown}>
                                    <option value="kuwaiti dinar">Kuwaiti dinar</option>
                                    <option value="us dollar">US Dollar</option>
                                </select>
                                <select value="language" className={style.dropDown}>
                                    <option value="arabic">AR</option>
                                    <option value="english">EN</option>
                                    <option value="dotch">Dotch</option>
                                </select>
                            </div>
                            <div className={style.userLog}>
                                <ul>
                                    <li>
                                        <BsPencil className={style.userLogIcon}/>
                                        <Link href="" className={style.logLink}>REGISTER</Link>
                                    </li>
                                    <li>
                                        <MdOutlineLock className={style.userLogIcon}/>
                                        <Link href="/login" className={style.logLink}>LOG IN</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        )}
                <div className={`${style.hiddenSearch} lg:hidden flex justify-between`}>
                    <input type="text" placeholder="Search Store"/>
                    <BsSearch className={style.hiddenSearchBtn}/>
                </div>
                {cartVisible && 
                (
                <div className={style.emptyCart}>
                    <p>You have no items in your shopping cart.</p>
                </div>
                )}
                {cartSummery && (
                    <div className={style.cartSummery}>
                        <div className={style.quantity}>
                            <p>{cart} item(s)</p>
                        </div>
                        <div className={style.details}>
                            <Image
                                src=""
                                width={100}
                                height={100}
                                alt=""
                            />
                            <div>
                                <Link href="" className={style.productName}>Product Name</Link>
                                <p className={style.productDiscription}>Description</p>
                                <h1 className={style.subTotalPrice}>KD00.00</h1>
                            </div>
                            <IoCloseSharp />
                        </div>
                        <div className={style.totalPrice}>
                            <div className={style.price}>
                                <h1 className={style.subTotal}>SUB-TOTAL</h1>
                                <h1 className={style.subTotalPrice}>KD00.00</h1>
                            </div>
                            <div className={style.cartBtn}>
                                <button className={style.goToCartBtn}><PiShoppingCart className={style.cartIcon}/>GO TO CART</button>
                                <button className={style.checkoutBtn}>CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                )}
                <div className={`${style.subNavContainer} lg:flex hidden`}>
                    <nav className={`${style.subNav} flex justify-center`}>
                        <li>
                            <Link href='/'>HOME</Link>
                        </li>
                        <li>
                            <Link href='/gifts' >GIFTS</Link>
                        </li>
                        <li>
                            <Link href='/beautyColl'>LTAYEF BEAUTY COLLECTION</Link>
                        </li>
                        <li>
                            <Link href='/search'>SEARCH</Link>
                        </li>
                        <li>
                            <Link href='./account' >MY ACCOUNT</Link>
                        </li>
                        <li>
                            <Link href='/contactUs'>CONTACT US</Link>
                        </li>
                    </nav>
                </div>
            
                {respNavHidden && (
                    <div className={`${style.respNavHidden} lg:hidden block`}>
                        <div className={style.closeHeader}>
                            <span onClick={closeNav}><IoCloseSharp /></span>
                        </div>
                        <nav>
                            <li>
                                <Link href='/'>HOME</Link>
                            </li>
                            <li>
                                <Link href='/gifts' >GIFTS</Link>
                            </li>
                            <li>
                                <Link href='/beautyColl'>LTAYEF BEAUTY COLLECTION</Link>
                            </li>
                            <li>
                                <Link href='/search'>SEARCH</Link>
                            </li>
                            <li>
                                <Link href='./account' >MY ACCOUNT</Link>
                            </li>
                            <li>
                                <Link href='/contactUs'>CONTACT US</Link>
                            </li>
                        </nav>
                    </div>
                )}
            </div>  
            </div>
         <div className={style.startedPagePoint}></div>
        </div>
    )
}
export default Nav;