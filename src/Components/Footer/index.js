import React from "react";
import "./style.css";
import { FOOTER_LIST, FOOTER_LIST_BOTTOM } from "../../Views/Home/helper";
import { assets } from "../../assets/assets";


const Footer = () => {
  return (
    <div>
      <div className="contact-container-last-section waves" >
        <div className="custom-container">
          <div className="row texts">
            <div className="col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
              <div className="footer-logo">
                <img src={assets.footerLogo} alt="" />
              </div>
            </div>
            {FOOTER_LIST.map((ele, i) => (
              <div key={ele.heading} className="col-md-6 col-lg-3" id="top">
                <ul>
                  <li>
                    <h3>{ele.heading}</h3>
                  </li>
                  {ele.list.map((list,i) => {
                    return(
                    <li key={list.name}>
                      <a className={ele.heading==="Subscriptions"||ele.heading==="Experience Nispand" ? 'tooltiptext':null} href={list.url}>{list.name}{(ele.heading==="Subscriptions" || ele.heading==="Experience Nispand") && <span id="fooltip-sub">Coming Soon</span>}</a>
                    </li>
                  )})}
                  {i === 2 && (
                    <li className="my-5 text-white">
                      <h4>Download Now!</h4>
                      <div className="row mt-2 justify-content-start content-algin">
                        <a href="https://play.google.com/store/apps/details?id=com.nispand.com" className="col-4 google-store-img-footer p-0 px-1">
                          <img
                            src={assets.googlPlayImg}
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                        <a href="#top" className="col-4 apple-store-img-footer tooltiptext  p-0 px-1">
                          <img
                            src={assets.appStore}
                            className="img-fluid"
                            alt=""
                          />
                          <span id="fooltip-applestore">Coming Soon</span>
                        </a>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="custom-container">
          <div className="footer-bottom-left">
            <ul>
              <li>Follow us :</li>
              {FOOTER_LIST_BOTTOM.leftSection.map((ele) => (
                <li>
                  <a href={ele.link} target="_blank" rel="noreferrer">
                    <i className={`fa-brands ${ele.name}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-bottom-right">
            <ul>
              {FOOTER_LIST_BOTTOM.rightSection.map((ele, i) => (
                <>
                  <li>
                    <a href={ele.url}>{ele.name}</a>
                  </li>
                  {i !== 2 && <li>|</li>}
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
