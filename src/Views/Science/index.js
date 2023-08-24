import React from "react";
import { assets } from "../../assets/assets";
import NavbarComp from "../../Components/Navbar";
import { FOOTER_LIST_BOTTOM } from "../Home/helper";
import "./style.css";

const Science = () => {
  return (
    <>
      <div className="support-navbar">
        <NavbarComp />
      </div>
      <div className="science-main-container">
        <div className="science-section-one">
          <div className="wrapper-div">
            <div className="science-first">
              <p className="bold-text">Science</p>
              <p className="hero-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </p>
            </div>
          </div>
        </div>
        <div className="inner-nav-science">
          <a href="#Stress" className="nav-link">
            Stress
          </a>
          <a href="#Solfeggio" className="nav-link">
            Solfeggio frequencies
          </a>
          <a href="#Pranayama" className="nav-link">
            Pranayama
          </a>
          <a href="#Meditation" className="nav-link">
            Meditation
          </a>
          <a href="#Section-5" className="nav-link">
            Section 5
          </a>
          <a href="#Section-6" className="nav-link">
            Section 6
          </a>
          <a href="#Section-7" className="nav-link">
            Section 7
          </a>
          <a href="#Section-8" className="nav-link">
            Section 8
          </a>
        </div>
        <div className="section-container">
          <div className="container mt-5" id="Stress">
            <img className="animation" src={assets.sciencewave} alt="wave" />
            <div className="d-flex flex-md-row  custom-flex  flex-sm-column flex-xs-column-reverse align-items-sm-center a">
              <div className="section-right-top">
                <h3 className="highlight-text mb-md-2">Stress</h3>
                <img
                  className="img-fluid media-image"
                  src={assets.girls}
                  alt="image1"
                />
                <p className="paragraph">
                  Stress is the brain and body’s response to change, challenge
                  or demand. It is the body’s natural defense against danger
                  brought on by an event or thought that makes you feel
                  frustrated, angry or nervous.
                </p>
                <p className="paragraph">
                  The body’s autonomic nervous system controls our heart rate,
                  breathing, vision changes and more. It has a built in stress
                  response.
                </p>

                <button className="know-more">Know more</button>
              </div>
              <div className="section-left-top">
                <img
                  className="img-fluid big-section-image"
                  src={assets.girls}
                  alt="image2"
                />
              </div>
            </div>
            <div
              className="d-flex flex-md-row  custom-flex flex-sm-column flex-xs-column align-items-sm-center mt-5 mobile-comtainers"
              id="Solfeggio"
            >
              <div className="section-left-bottom">
                <img
                  className="img-fluid big-section-image"
                  src={assets.girls}
                  alt="image3"
                />
              </div>
              <div className="section-right-bottom">
                <h3 className="highlight-text mb-md-2">Solfeggio frequencies</h3>
                <img
                  className="img-fluid media-image"
                  src={assets.girls}
                  alt="image4"
                />
                <p className="paragraph">
                  Solfeggio frequencies are 7 different Hz that have a powerful
                  effect on the conscious and subconscious minds, promoting
                  stillness, quietness, and tranquility. Each frequency has a
                  unique and diverse effect, such as promoting calmness,
                  energizing, uplifting, increasing positivity, boosting
                  creativity, developing love, and developing harmony.
                </p>
                <button className="know-more">Know more</button>
              </div>
            </div>
          </div>
          <div className="mobile-show">
            <p className="paragraph">Experience Nispand</p>
            <div
              className="row justify-content-center align-items-center"
              id="atop"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.nispand.com"
                className="col-5 google-store-img p-0 px-1 text-end"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={assets.googlPlayImg}
                  className="img-fluid"
                  alt="gplay"
                />
              </a>
              <a
                href="#top"
                className="col-5 apple-store-img tooltiptext p-0 px-1"
              >
                <img
                  src={assets.appStore}
                  className="img-fluid "
                  alt="astore"
                />
                <span id="fooltip-home">Coming Soon</span>
              </a>
            </div>
          </div>
        </div>
        <div className="home-curve"></div>
        <div className="section-container">
          <img className="animation2" src={assets.sciencewave} alt="wave" />
          <div className="container " id="Pranayama">
            <div className="d-flex flex-sm-column flex-md-row  custom-flex  flex-xs-column-reverse align-items-sm-center">
              <div className="section-right-top">
                <h3 className="highlight-text mb-md-2">Pranayama</h3>
                <img
                  className="img-fluid media-image"
                  src={assets.girls}
                  alt="image5"
                />

                <p className="paragraph">
                  ‘As the breath moves, so does the mind; When one is steadied,
                  the other too becomes steady’ -Hatha Yoga Pradipika 11. 2
                </p>

                <p className="paragraph">
                  Pranayama is to manage the breath in such a way that the mind
                  becomes steady, the darkness (clouds of ignorance) covering
                  the mind is cleared and it becomes ready for meditation.
                </p>
                <button className="know-more">Know more</button>
              </div>
              <div className="section-left-top">
                <img
                  className="img-fluid big-section-image"
                  src={assets.girls}
                  alt="image6"
                />
              </div>
            </div>
            <div
              className="d-flex flex-md-row  custom-flex flex-sm-column flex-xs-column align-items-sm-center mt-5 mobile-comtainers"
              id="Meditation"
            >
              <div className="section-left-bottom ">
                <img
                  className="img-fluid big-section-image"
                  src={assets.girls}
                  alt="image7"
                />
              </div>
              <div className="section-right-bottom">
                <h3 className="highlight-text mb-md-2">Meditation </h3>
                <img
                  className="img-fluid media-image"
                  src={assets.girls}
                  alt="dcscs"
                />
                <p className="paragraph">
                  Congratulations! You have already taken the first step to
                  start meditation. TYI is here with NISPAND APP to help
                  beginners understand how to meditate. Following these simple
                  tips will deliver deeper experiences that will ensure a
                  profound lifelong meditation practice. The very first thing to
                  get clarity about is that Meditation is simple to learn with
                  easy-to-do techniques. While it is not complicated like rocket
                  science, it still helps to embark on this journey under expert
                  guidance to enhance every step of the way.
                </p>
                <button className="know-more">Know more</button>
              </div>
            </div>
          </div>
          <div className="mobile-show">
            <p className="paragraph">Experience Nispand</p>
            <div
              className="row justify-content-center align-items-center"
              id="atop"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.nispand.com"
                className="col-5 google-store-img p-0 px-1 text-end"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={assets.googlPlayImg}
                  className="img-fluid"
                  alt="gplay"
                />
              </a>
              <a
                href="#top"
                className="col-5 apple-store-img tooltiptext p-0 px-1"
              >
                <img
                  src={assets.appStore}
                  className="img-fluid "
                  alt="astore"
                />
                <span id="fooltip-home">Coming Soon</span>
              </a>
            </div>
          </div>
        </div>
        <div className="home-curve"></div>
        <div className="section-container">
          <img
            className="animation3"
            src={assets.sciencewave}
            alt="animation"
          />
          <div className="container" id="Section-5">
            <div className="d-flex flex-sm-column  flex-md-row  custom-flex flex-xs-column-reverse align-items-sm-center">
              <div className="section-right-top">
                <h3 className="highlight-text mb-md-2">Section five</h3>
                <img
                  className="img-fluid media-image"
                  src={assets.girls}
                  alt="image9"
                />
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.
                </p>
                <button className="know-more">Know more</button>
              </div>
              <div className="col-md-4 section-left-top">
                <img
                  className="img-fluid big-section-image"
                  src={assets.girls}
                  alt="image10"
                />
              </div>
            </div>
            <div
              className="d-flex flex-md-row  custom-flex flex-sm-column flex-xs-column align-items-sm-center mt-5 mobile-comtainers"
              id="Section-6"
            >
              <div className="col-md-4 section-left-bottom">
                <img
                  className="img-fluid big-section-image"
                  src={assets.girls}
                  alt="image11"
                />
              </div>
              <div className="section-right-bottom">
                <h3 className="highlight-text mb-md-2">Section six</h3>
                <img
                  className="img-fluid media-image"
                  src={assets.girls}
                  alt="image12"
                />
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.
                </p>
                <button className="know-more">Know more</button>
              </div>
            </div>
          </div>
          <div className="mobile-show">
            <p className="paragraph">Experience Nispand</p>
            <div
              className="row justify-content-center align-items-center"
              id="atop"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.nispand.com"
                className="col-5 google-store-img p-0 px-1 text-end p-0 px-1"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={assets.googlPlayImg}
                  className="img-fluid"
                  alt="gplay"
                />
              </a>
              <a
                href="#top"
                className="col-5 apple-store-img tooltiptext p-0 px-1"
              >
                <img
                  src={assets.appStore}
                  className="img-fluid "
                  alt="astore"
                />
                <span id="fooltip-home">Coming Soon</span>
              </a>
            </div>
          </div>
        </div>
        <div className="home-curve"></div>
        <div className="section-container">
          <div className="container" id="Section-7">
            <img
              className="animation4"
              src={assets.sciencewave}
              alt="animation"
            />
            <div className="d-flex flex-sm-column flex-md-row  custom-flex  flex-xs-column-reverse align-items-sm-center">
              <div className="section-right-top">
                <h3 className="highlight-text mb-md-2">Section five</h3>
                <img
                  className="img-fluid media-image"
                  src={assets.girls}
                  alt="image19"
                />
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.
                </p>
                <button className="know-more">Know more</button>
              </div>
              <div className="section-left-top">
                <img
                  className="img-fluid big-section-image"
                  src={assets.girls}
                  alt="image13"
                />
              </div>
            </div>

            <div
              className="d-flex flex-sm-column flex-md-row  custom-flex flex-xs-column align-items-sm-center my-md-5"
              id="Section-8"
            >
              <div className="section-left-bottom">
                <img
                  className="img-fluid big-section-image"
                  src={assets.girls}
                  alt="image14"
                />
              </div>
              <div className="section-right-bottom ">
                <h3 className="highlight-text mb-md-2">Section six</h3>
                <img
                  className="img-fluid media-image"
                  src={assets.girls}
                  alt="image15"
                />
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.
                </p>
                <button className="know-more">Know more</button>
              </div>
            </div>
          </div>
          <div className="mobile-show">
            <p className="paragraph">Experience Nispand</p>
            <div
              className="row justify-content-center align-items-center"
              id="atop"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.nispand.com"
                className="col-5 google-store-img p-0 px-1 text-end"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={assets.googlPlayImg}
                  className="img-fluid"
                  alt="gplay"
                />
              </a>
              <a
                href="#top"
                className="col-5 apple-store-img tooltiptext p-0 px-1"
              >
                <img
                  src={assets.appStore}
                  className="img-fluid "
                  alt="astore"
                />
                <span id="fooltip-home">Coming Soon</span>
              </a>
            </div>
          </div>
        </div>

        {/* footer */}

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
                    {i !== 3 && <li>|</li>}
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Science;
