import React, { useState } from "react";
import "./index.css";
import NavbarComp from "../../Components/Navbar";
import { assets } from "../../assets/assets";
import { FOOTER_LIST_BOTTOM } from "../Home/helper";

const AboutUs = () => {
  const [activeFounder, setActiveFounder] = useState(0);
  const legacyData = [
    {
      name: "Shri Yogendra ji",
      title: "The inspiration",
      desc: "In 1918, Shri Yogendra ji, the Father of Modern Yoga Renaissance, founded The Yoga Institute in Mumbai to bring powerful Yogic techniques to householders. His teachings that help establish a connection with one’s true nature, and his well- researched techniques have inspired inception of the Nispand App.",
      img: assets.founderGuru,
    },
    {
      name: "Pujya Maa Dr. Hansaji",
      title: "Founder, Mentor",
      desc: "Affectionately known as Hansa Maa, Dr. Hansaji Yogendra, Director of The Yoga Institute, has dedicated her life to serving the people. In today’s busy times, she suggests that mobile phones that tend to add to one’s stress could rather be used constructively– to destress anytime, anywhere.",
      img: assets.Maa,
    },
    {
      name: "Shri Hrishi J. Yogendra",
      title: "Founder",
      desc: "Following the footsteps and revered guidance of Shri Yogendra ji and his gurus, Hrishi J. Yogendra has devoted himself to make Yoga relevant to householders of today. He believes that with the right assistance to enhance mental wellbeing, we can find our inner happiness and positivity. His creation, the Nispand Meditation App helps all live a stress-free life.",
      img: assets.Harish,
    },
  ];

  return (
    <>
      <div className="support-navbar">
        <NavbarComp />
      </div>
      <div className="contact-main-container" id="About">
        <div className="about-section-one">
          <div className="wrapper-div-about">
            <div className="inner-nav">
              <a href="#About" className="inner-nav-link">
                Overview
              </a>
              <a href="#Nispand" className="inner-nav-link">
                Nispand
              </a>
              <a href="#Pillers" className="inner-nav-link">
                Pillars
              </a>
              <a href="#YogaInsitute" className="inner-nav-link">
                The Yoga Institute
              </a>
            </div>
            <div className="contact-first">
              <p className="bold-text">About Us</p>
              <p
                className="hearder-text text-center"
                style={{ fontWeight: "300", width: "50%" }}
              >
                With 1000+ meditations and personalized solutions, Nispand is a
                premium meditation app by The Yoga Institute. Achieve mental
                clarity by selecting a meditation mode at your own pace and in
                your own space. Experience happiness, better sleep, and a
                stress-free life with Nispand
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" background-wave mt-5">
        <div className="container about-info-height " id="Nispand">
          <div className="row justify-content-center align-items-center">
          <img
                  src={assets.singleNispandLogo}
                  className="img-fluid businessLogo-img-mob"
                  alt=""
                />
            <div className="col-md-6 align-img">
              
              <img
                className="img-fluid home-screen-img-about"
                src={assets.homeScreen}
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="nispand-info-container">
                <img
                  src={assets.singleNispandLogo}
                  className="img-fluid businessLogo-img"
                  alt=""
                />
                <p
                  className="experience-left-content text-size mt-4"
                  style={{ fontWeight: "300" }}
                >
                  Embark on your path to peace with Nispand by easily accessing
                  time-tested and well- researched meditation techniques.
                </p>

                <p
                  className="experience-left-content text-size mt-4"
                  style={{ fontWeight: "300" }}
                >
                  Nispand signifies balance. “Ni” means to stop and “Spand”
                  means vibrations (thoughts). Our minds continuously generate
                  thoughts which prevent us from attaining that balance. The App
                  helps you maintain a positive and equanimous state of mind,
                  wherever you are.
                </p>

                <button className="btn read-btn my-sm-4 my-2 tooltiptext">
                  Read More <span id="fooltip-about-nispand">Coming Soon</span>
                </button>

                <h5 className="mb-2 down-txt-mob">DOWNLOAD NOW!</h5>
                <div className="row justifiy-content" id="top">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nispand.com"
                    className="col-4 google-store-img-about"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={assets.googlPlayImg}
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <a href="#top" className="col-4 apple-store-img-about tooltiptext">
                    <img src={assets.appStore} className="img-fluid" alt="" />
                    <span id="foooltip">Coming Soon</span>
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>

      {/* The Pillars */}
      <div className="back-sec" style={{background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(234,238,243,1) 100%);"}}>

      <div className="container" style={{ marginTop: "100px" }}>
        <div
          className="row experience-top-content d-flex justify-content-center align-items-center"
          id="Pillers"
        >
          <div className=" mt-4 heading-content mt-2">
            <h2 className="mb-2 text-center">The Pillars</h2>
            <h5 className="mb-2 text-center" style={{ fontWeight: "400" }}>
              The Revolutionaries Who Believe In Nispand
            </h5>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-5 text-center">
            <img
              src={legacyData[activeFounder].img}
              className="guru-img"
              alt=""
            />
          </div>
          <div className="col-md-7">
            <div className="heading-content guru-heading mt-2">
              <h5 className="mb-0">{legacyData[activeFounder].name}</h5>
              <p className="mt-0">{legacyData[activeFounder].title}</p>
            </div>
            <div className="sub-content">
              <h5 style={{ fontWeight: "300" }}>
                {legacyData[activeFounder].desc}
              </h5>
              <button className="btn read-btn my-sm-5 my-3 tooltiptext">
                Read More <span id="fooltip-about-founder">Coming Soon</span>
              </button>
            </div>
            <div className="row">
              {legacyData.map((data, idx) => (
                <>
                  {idx !== activeFounder ? (
                    <div key={data.name} className="col-md-6 col-6">
                      <img
                        src={data.img}
                        alt=""
                        className="pilar-founder-img"
                        onClick={() => setActiveFounder(idx)}
                      />
                      <div className="heading-content mt-2">
                        <h5 className="mb-0">{data.name}</h5>
                        <p className="mt-0"> {data.title}</p>
                      </div>
                    </div>
                  ) : null}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Powered By */}

      <div className="powered-yoga-section py-5 mb-0">
        <div className="logo text-center" id="YogaInsitute">
          <h2 className="powered-text mb-4">Powered by</h2>
          <img src={assets.yogaLogo} alt="" className="w-75 about-yoga-logo" />
        </div>
        <div className="yoga-content text-center">
          <div className="row justify-content-center w-100">
            <div className="poweredby-text-width">
              <p className="hearder-text mt-2" style={{ fontWeight: "300" }}>
                Nispand encompasses the futuristic vision of the 103 years’ old
                ‘The Yoga Institute’, headquartered in Mumbai, India. The vision
                is to help every person live a better life and sustain an
                ailment-free body by elucidating powerful, ancient Yogic
                techniques to achieve excellent physical, mental, and emotional
                harmony.
              </p>

              <p className="hearder-text mt-2" style={{ fontWeight: "300" }}>
                The institute’s activities address all aspects of human
                wellbeing. As a recognition of its contribution to society, it
                received the Indian Prime Minister’s Award in the year 2018-19.
                Its internationally popular online and on-campus teacher
                training programs equip participants with the experience of
                depth and dimensions of Yoga.
              </p>
              {/* <p className="hearder-text mb-2" style={{ fontWeight: "300" }}>
                At its core, the goal of The Yoga Institute is to elucidate
                powerful, ancient yogic techniques for people of today who
                aspire to achieve excellent physical, mental, and emotional
                harmony. Nispand is an initiative in that direction, to reach as
                many people as possible by bringing relevant guidance and
                knowledge directly into their palms to make stressful lives
                better. It is a modern user-friendly version of the ancient
                knowledge that is inherent in the values inculcated at The Yoga
                Institute.
              </p>

              <p className="hearder-text mt-2" style={{ fontWeight: "300" }}>
                Nispand extends the institutes&#39; vision and endeavours to
                enable you to radically transform yourself with an empowering
                meditative journey - at just a click away.
              </p> */}
            </div>
          </div>
          <div>
            <button className="custom-btn explore-btn tooltiptext">
              Explore our legacy{" "}
              <span id="fooltip-about-legacy">Coming Soon</span>
            </button>
          </div>
        </div>
      </div>


      </div>
      {/* bottom Footer */}

      <div className="footer-bottom">
        <div className="custom-container">
          <div className="footer-bottom-left" id="tag">
            <ul>
              <li>Follow us :</li>
              {FOOTER_LIST_BOTTOM.leftSection.map((ele) => (
                <li key={ele.link}>
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
    </>
  );
};

export default AboutUs;
