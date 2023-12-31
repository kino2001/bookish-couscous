import style from './footer.module.css';
import React from 'react-dom';
import Link from 'next/link';

import { useEffect, useState, useRef } from 'react';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { TfiYoutube } from 'react-icons/tfi';
import { BiWifi2 } from 'react-icons/bi';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [infoLinks, setInfoLinks] = useState(false);
  const [accLinks, setAccLinks] = useState(false);
  const [customerLinks, setCustomerLinks] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const showInfoLinks = () => {
    setInfoLinks((infoLinks) => !infoLinks);
  };

  const showAccLinks = () => {
    setAccLinks((accLinks) => !accLinks);
  };

  const showCustomerLinks = () => {
    setCustomerLinks((customerLinks) => !customerLinks);
  };
  
  return (
    <div>
      <div className={style.footerSearch}>
        <h1>NEWSLETTER</h1>
        <div
          className={`${style.navSearch} lg:w-2/5 w-4/5 flex flex-cols-3 justify-between`}
        >
          <input
            type="text"
            placeholder="Enter your email here..."
            className="grid col-span-2"
          />
          <button>
            <BsSearch className={style.searchIcon} />
          </button>
        </div>
      </div>
      <div className={style.footerLinksContainer}>
        <div
          className={`${style.footerLinks} grid grid-cols-1 lg:grid-cols-4 justify-items-stretch m-auto`}
        >
          <div>
            <div onClick={showInfoLinks} className={`flex justify-between`}>
              <RxDoubleArrowRight
                className={`${style.arrowShowHidden} lg:hidden block`}
              />
              <h1>INFORMATION</h1>
              <RxDoubleArrowRight
                className={`${style.arrowShowHidden} lg:hidden block`}
              />
            </div>
            <ul className="hiddenLinks lg:grid grid-cols-1 hidden">
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Sitemap
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Shipping & returns
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Privacy notice
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Conditions of Use
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  About us
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Contact us
                </Link>
              </li>
            </ul>
            {infoLinks && (
              <ul className={`${style.hiddenLinks} lg:hidden block`}>
                <li>
                  <Link href="" className={style.links}>
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    Shipping & returns
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    Privacy notice
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    Conditions of Use
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    Contact us
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div>
            <div onClick={showAccLinks} className={`flex justify-between`}>
              <RxDoubleArrowRight
                className={`${style.arrowShowHidden} lg:hidden block`}
              />
              <h1>MY ACCOUNT</h1>
              <RxDoubleArrowRight
                className={`${style.arrowShowHidden} lg:hidden block`}
              />
            </div>
            <ul className="lg:grid grid-cols-1 hidden">
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Customer info
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Addresses
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Orders
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Shopping cart
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Wishlist
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Apply for vendor account
                </Link>
              </li>
            </ul>
            {accLinks && (
              <ul className={`${style.hiddenLinks} lg:hidden block`}>
                <li>
                  <Link href="" className={style.links}>
                    Customer info
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    Addresses
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    Orders
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    Shopping cart
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    Apply for vendor account
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div>
            <div onClick={showCustomerLinks} className={`flex justify-between`}>
              <RxDoubleArrowRight
                className={`${style.arrowShowHidden} lg:hidden block`}
              />
              <h1>CUSTOMER SERVICE</h1>
              <RxDoubleArrowRight
                className={`${style.arrowShowHidden} lg:hidden block`}
              />
            </div>
            <ul className="lg:grid grid-cols-1 hidden">
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Search
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  News
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Blog
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Recently viewed products
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  Compare products list
                </Link>
              </li>
              <li>
                <RxDoubleArrowRight className={style.arrow} />
                <Link href="" className={style.links}>
                  New products
                </Link>
              </li>
            </ul>
            {customerLinks && (
              <ul className={`${style.hiddenLinks} lg:hidden block`}>
                <li>
                  <Link href="" className={style.links}>
                    Search
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    News
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    Recently viewed products
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    Compare products list
                  </Link>
                </li>
                <li>
                  <Link href="" className={style.links}>
                    New products
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="lg:m-0 m-auto">
            <h1 className="lg:text-left text-center">FOLLOW US</h1>
            <ul className={style.socialLinks}>
              <li>
                <Link href="">
                  <FaTwitter className={style.socialMedia} />
                </Link>
              </li>
              <li>
                <Link href="">
                  <FaFacebookF className={style.socialMedia} />
                </Link>
              </li>
              <li>
                <Link href="">
                  <TfiYoutube className={style.socialMedia} />
                </Link>
              </li>
              <li>
                <Link href="">
                  <BiWifi2 className={style.signalRotate} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {isVisible && (
          <div className={style.topArrow}>
            <Link href="">
              <MdKeyboardDoubleArrowUp
                className={style.topArr}
                onClick={scrollToTop}
              />
            </Link>
          </div>
        )}
      </div>
      <div className={style.copyRightContainer}>
        <div
          className={`${style.copyRight} grid grid-cols-1 lg:grid-cols-2 justify-items-center m-auto`}
        >
          <p>Copyright &copy; 2023 Be A Dealer Online. All rights reserved.</p>
          <div>
            <p>
              Powered by{' '}
              <Link href="" className={style.copyRightLinks}>
                nopCommerce
              </Link>
            </p>
            <p>
              Designed by{' '}
              <Link href="" className={style.copyRightLinks}>
                beadealer.co
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;