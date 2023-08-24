import React, { useState } from "react";
import NavbarComp from "../../Components/Navbar";
import { PREMIUM_SECTION_LIST } from "./helper";
import { assets } from "../../assets/assets";
import "./home.css";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [videoPlayerData, setVideoPlayerData] = useState(null);

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/contact_us");
  };
  return (
    <>
      <header>
        <NavbarComp />
      </header>

      <section className="home-main-container">
        <div className="main-section">
          <div className="experience-section mt-5">
            <div className="custom-container">
              <div className="row experience-top-content d-flex justify-content-center align-items-center">
                <div className="col-md-6 mt-4 experience-left-content">
                  <h2 className="mb-2 text-center">Experience</h2>
                  <h4 className="mb-2 text-center">Nispand</h4>
                  <p className="text-center m-0">
                    Largest bank of 1000+ authentic <br />
                    and scientific meditations.
                  </p>
                  <h5 className="mb-2 text-center">DOWNLOAD NOW!</h5>
                  <div className="row justify-content-center align-items-center" id="atop">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.nispand.com"
                      className="col-5 google-store-img p-0 px-1 text-end"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={assets.googlPlayImg}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <a
                      href="#top"
                      className="col-5 apple-store-img tooltiptext p-0 px-1"
                    >
                      <img
                        src={assets.appStore}
                        className="img-fluid "
                        alt="apple"
                      />
                      <span id="fooltip-home">Coming Soon</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 mt-4 experience-right-content text-center">
                  <div className="home-screen-img">
                    <img src={assets.homeScreen} className="img-fluid" alt="image3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row home-waves align-items-end justify-content-center">
            {/* <img src={assets.homeWaves} className="img-fluid" alt="" /> */}
            <div className="container sm-bg">
              <div className="row positioning">
                <div className="col-md-3 col-4 comp">
                  <div className="main-comp">
                    <img src={assets.sleep} className="child-img" alt="" />
                    <span className="px-3">
                      <h2 className="wave-heading">Sleep</h2>
                      <h4 className="wave-para">
                        Calm your senses <br /> and sleep like a baby.
                      </h4>
                    </span>
                  </div>
                </div>

                <div className="col-md-3 col-4 comp">
                  <div className="main-comp">
                    <img src={assets.happiness} className="child-img" alt="" />
                    <span className="px-3">
                      <h2 className="wave-heading">Happiness</h2>
                      <h4 className="wave-para">
                        Feel inner positivity and <br /> satisfaction from life.
                      </h4>
                    </span>
                  </div>
                </div>

                <div className="col-md-3 col-4 comp">
                  <div className="main-comp">
                    <img
                      src={assets.productivity}
                      className="child-img"
                      alt=""
                    />
                    <span className="px-3">
                      <h2 className="wave-heading">Productivity</h2>
                      <h4 className="wave-para">
                        Enhance productivity <br /> through a peaceful mind.
                      </h4>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="curve-clip"></div>

          
        </div>
        <div className="suggestion-section">
          <div className="custom-container">
            <div className="row align-items-center">
              <div className="col-md-6 suggestion-section-left text-center">
                <img className="animation-one" src={assets.animation1} alt="" />
                <img src={assets.suggestion} className="img-mix" alt="" />
              </div>
              <div className="col-md-6 suggestion-section-left">
                <div className="suggestion-section-contain">
                  <h3 className="mb-2">Personalised suggestions</h3>
                  <p className="mb-3">
                    Artificial Intelligence and Yogic wisdom brought together to
                    suit your needs and preferences.
                  </p>
                  <div className="know-more-btn">
                    <button className="custom-btn tooltiptext">
                      Know More{" "}
                      <span id="fooltip-personalized">Coming Soon</span>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="destress-section">
          <div className="custom-container">
            <img className="animation-two" src={assets.animation2} alt="" />
            <div className="destress-left-section">
              <h3 className="mb-3">Destress Anytime</h3>
              <p className="mb-3">
                State-of-the-Art Intelligent Stress Monitor to help you destress
                on-the-go
              </p>
              <div className="know-more-btn ">
                <button className="custom-btn tooltiptext">
                  Know more <span id="fooltip-distress">Coming Soon</span>
                </button>
              </div>
            </div>
            <div className="destress-right-section">
              <div className="top-img">
                <img
                  src={assets.girls}
                  className="img-fluid destress-img1"
                  alt=""
                />
              </div>
              <div className="bottom-img mt-2">
                <img
                  src={assets.stress}
                  className="img-fluid destress-img2"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Meditation Section   --> */}
        <div className="meditation-section">
          <img
            className="animation-one-business"
            src={assets.animation1}
            alt=""
          />
          <div className="home-curve"></div>
          <div className="custom-container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <h3 className="meditation-head-small mb-2 mb-sm-4">
                  Our Meditation Library
                </h3>
                <img src={assets.sol} className="img-mix img-med-lib" alt="" />
              </div>
              <div className="col-md-6">
                <h3 className="meditation-head mb-4">Our Meditation Library</h3>
                <div
                  id="carouselExample1"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExample1"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExample1"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExample1"
                      data-bs-slide-to="2"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExample1"
                      data-bs-slide-to="3"
                      aria-label="Slide 2"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item mt-1 active">
                      <h2>Binaural Meditation</h2>
                      <p className="mb-3">
                        Meticulously engineered binaural beats to trigger the
                        positive brain waves.
                      </p>
                      <div className="mb-5">
                        <button className="custom-btn tooltiptext">
                          Explore the science
                          <span id="fooltip-meditation">Coming Soon</span>
                        </button>
                      </div>

                      <h2>Solfeggio Frequencies</h2>
                      <p>
                        Seven mystical frequencies to heal and rejuvenate your
                        body.
                      </p>
                      <div className="mb-5">
                        <button className="custom-btn tooltiptext">
                          Explore the science
                          <span id="fooltip-meditation">Coming Soon</span>
                        </button>
                      </div>
                    </div>
                    <div className="carousel-item mt-1">
                      {/* <h3 className="mb-4">Our Meditation Library</h3> */}

                      <h2>Pranayam</h2>
                      <p className="mb-3">
                        Calming and rejuvenating ancient breathwork techniques
                        to enhance your energy.
                      </p>
                      <div className="mb-5">
                        <button className="custom-btn tooltiptext">
                          Explore the science
                          <span id="fooltip-meditation">Coming Soon</span>
                        </button>
                      </div>

                      <h2>Mantras</h2>
                      <p>
                        Rhythmically chanted Sanskrit mantras to bring harmony
                        to your body and mind.
                      </p>
                      <div className="mb-5">
                        <button className="custom-btn tooltiptext">
                          Explore the science
                          <span id="fooltip-meditation">Coming Soon</span>
                        </button>
                      </div>
                    </div>
                    <div className="carousel-item mt-1">
                      {/* <h3 className="mb-4">Our Meditation Library</h3> */}

                      <h2>90 seconds meditation</h2>
                      <p className="mb-3">
                        Take a meditative break in the middle of your day to
                        replenish your energy.
                      </p>
                      <div className="mb-5">
                        <button className="custom-btn tooltiptext">
                          Explore the Science{" "}
                          <span id="fooltip-meditation">Coming Soon</span>
                        </button>
                      </div>

                      <h2>Guided meditation</h2>
                      <p>
                        Mindfully relax and connect with yourself by listening
                        to guided instructions.
                      </p>
                      <div className="mb-5">
                        <button className="custom-btn tooltiptext">
                          Explore the science
                          <span id="fooltip-meditation">Coming Soon</span>
                        </button>
                      </div>
                    </div>
                    <div className="carousel-item mt-1">
                      {/* <h3 className="mb-4">Our Meditation Library</h3> */}

                      <h2> Nature sounds</h2>
                      <p className="mb-3">
                        Bond with nature by exploring these carefully curated
                        natural sounds.
                      </p>
                      <div className="mb-5">
                        <button className="custom-btn tooltiptext">
                          Explore the science
                          <span id="fooltip-meditation">Coming Soon</span>
                        </button>
                      </div>

                      <h2>Stories</h2>
                      <p>
                        Lose yourself in the world of imagination with these
                        stories and sound effects.
                      </p>
                      <div className="mb-5">
                        <button className="custom-btn tooltiptext">
                          Explore the science
                          <span id="fooltip-meditation">Coming Soon</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Transform yourself  --> */}
        <div className="home-curve"></div>
        <div className="transform-section">
          <div className="custom-container">
            <div className="row align-items-center">
              <div className="mt-4">
              <h2 className="tranform-heading hide-des mob-header text-center">Transform yourself</h2>
              <p className="transform-para hide-des mob-header-para text-center ">
                Meditation made easy for all with our integrated tool having
                advanced technological features:
              </p>
              </div>
              <div className="transform-lelt-image col-md-6 text-end">
                <img
                  src={assets.int2}
                  alt=""
                  className="img-mix transform-lelt-img"
                />
              </div>
              <div className="transform-right-content  col-md-6">
                <h2 className="tranform-heading hide-mob">
                  Transform yourself
                </h2>
                <p className="transform-para hide-mob">
                  Meditation made easy for all with our integrated tool having
                  advanced technological features:
                </p>
                <div
                  id="carouselExample2"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  {/* <!-- Indicators/dots --> */}
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExample2"
                      data-bs-slide-to="0"
                      className="active"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExample2"
                      data-bs-slide-to="1"
                    ></button>
                  </div>

                  {/* <!-- The slideshow/carousel --> */}
                  <div className="carousel-inner pt-1 mb-5">
                    <div className="carousel-item active carousel-height">
                      <div className="row">
                        <div className="col-md-6 col-6">
                          <h4>1000+ meditations</h4>
                          <p>
                            Unique clips curated for an holistic experience.
                          </p>
                        </div>
                        <div className="col-md-6 col-6">
                          <h4>Playlists</h4>
                          <p>Make your own meditation lists.</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-6">
                          <h4>Collections</h4>
                          <p>
                            Mix of relevant meditations based on time and need.
                          </p>
                        </div>
                        <div className="col-md-6 col-6">
                          <h4>Ambient screen</h4>
                          <p>A premium experience to soothe the senses.</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item carousel-height">
                      {/* <h2>Transform yourself</h2>
                      <p>
                        Meditation made easy for all with our integrated tool
                        having advanced technological features:
                      </p> */}
                      <div className="row">
                        <div className="col-md-6 col-6">
                          <h4> Intelligent stress monitor </h4>
                          <p>Catch rising stress before it catches you</p>
                        </div>
                        <div className="col-md-6 col-6">
                          <h4>Reminders</h4>
                          <p>
                            Make it a habit to eat, exercise & meditate
                            regularly
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-6">
                            <h4>Group meditations</h4>
                            <p>
                              For Individual mindfulness and collective
                              consciousness
                            </p>
                          </div>
                          <div className="col-md-6 col-6">
                            <h4>Goals and achievements</h4>
                            <p>Stay on the path with regular motivation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Business Section  --> */}
        <div className="business-section">
          <div className="business-content">
            <div
              className="logo-section text-center"
            >
              <img src={assets.nispandBusiness} alt="" />
              {/* <div class="separator mt-3">
                <div class="line"></div>
                <p
                  className="text-center m-0 px-2 business-section-img"
                >
                  FOR BUSINESS
                </p>
                <div class="line"></div>
              </div> */}
            </div>
            <p className="text-center">
              Enable a culture of wellness with a productive and resilient
              workforce.
            </p>
            <div className="business-growth">
              <div className="business-growth-item">
                <div className="icon-image text-center">
                  <img src={assets.handShake} alt="" />
                </div>
                <h4 className="percent-count mt-3">
                  87<span className="percent-count-span">%</span>
                </h4>
                <p>better team collaboration at work.</p>
              </div>
              <div className="business-growth-item">
                <div className="icon-image text-center">
                  <img src={assets.monitor} alt="" />
                </div>
                <h4 className="percent-count mt-3">
                  89<span className="percent-count-span">%</span>
                </h4>
                <p>better team collaboration at work.</p>
              </div>
              <div className="business-growth-item">
                <div className="icon-image text-center">
                  <img src={assets.idea} alt="" />
                </div>
                <h4 className="percent-count mt-3">
                  75<span className="percent-count-span">%</span>
                </h4>
                <p>better team collaboration at work.</p>
              </div>
            </div>
            <div className="contact-btn-div text-center mt-5 mb-5">
              <button className="custom-btn-special" onClick={handleRedirect}>
                Contact Us
              </button>
            </div>
          </div>

          <div className="notebook-img">
            <img src={assets.notebook} alt="" />
          </div>
          <div className="laptop-img">
            <img src={assets.laptop} alt="" />
            <img
              src={assets.animation1}
              className="animation-two-business"
              alt=""
            />
          </div>
        </div>

        {/* <!-- Yoga Section  --> */}
        <div className="yoga-section">
          <div className="logo mb-sm-5 mb-3">
            <img src={assets.yogaLogo} alt="" />
          </div>
          <div className="yoga-content text-center">
            <p>Authenticity and credibility backed by the glorious</p>
            <h3 className="years">
              100 <span>+</span>
            </h3>
            <h4>YEARS</h4>
            <p>Yogic legacy of The Yoga Institute</p>

            <div>
              <button
                className="custom-btn explore-btn tooltiptext"
                style={{ color: "#a66f74" }}
              >
                Explore our legacy <span id="fooltip-legacy">Coming Soon</span>
              </button>
            </div>
          </div>
        </div>

        {/* Video section */}

        <div className="video-section">
          <div className="custom-container video-mar">
            <div className="row">
              <h1 className="text-center">Videos</h1>
              <p className="text-center mt-2">
                Learn more from our wide range of videos.
              </p>
              <div className="col-md-6 col-lg-4">
                <div
                  className="card"
                  role="button"
                  onClick={() =>
                    setVideoPlayerData(
                      "https://www.youtube.com/embed/8YLHdDQTWrY"
                    )
                  }
                >
                  <img
                    src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/Videos/v1.jpg"
                    className="card-img h-100"
                    alt="..."
                  />
                  <div className="card-img-overlay">
                    <div className="play-icon">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="card"
                  role="button"
                  onClick={() =>
                    setVideoPlayerData(
                      "https://www.youtube.com/embed/EJ7aeYm-nLg"
                    )
                  }
                >
                  <img
                    src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/Videos/v2.jpg"
                    className="card-img h-100"
                    alt="..."
                  />
                  <div className="card-img-overlay">
                    <div className="play-icon">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="card"
                  role="button"
                  onClick={() =>
                    setVideoPlayerData(
                      "https://www.youtube.com/embed/NAScYOAeBmo"
                    )
                  }
                >
                  <img
                    src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/Videos/v3.jpg"
                    className="card-img h-100"
                    alt="..."
                  />
                  <div className="card-img-overlay">
                    <div className="play-icon">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
              </div>
              {videoPlayerData && (
                <div className="video-overlay">
                  <div className="video-player-container">
                    <div
                      className="close-btn"
                      role="button"
                      onClick={() => setVideoPlayerData(null)}
                    >
                      close
                    </div>
                    <iframe
                      src={videoPlayerData}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* jasmeet end */}

        <div className="premium-section">
          <div className="container">
            <div className="row">
            <h2 className="premium-right-mob">Premium</h2>
                  <p className="premium-right-mob-para">Unlock Your Free Premium Now</p>
              <div className="col-md-6 align-self-center">
                <div
                  className="card mx-3 mx-sm-5 premium_card"
                  style={{ position: "relative" }}
                >
                  <div className="know-more-btn move_btn">
                    <button className="custom-btn-special popular_btn">
                      MOST POPULAR
                    </button>
                  </div>
                  <div className="card-body ps-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="premium_annual">
                          Annual
                          <span className="ps-1">billed at 899 per year</span>
                        </h6>
                        <h6 className="free_days my-2">30 days free</h6>
                        <h6 className="premium_annual">₹74.9 per month</h6>
                      </div>
                      <div>
                        <div>
                          <input
                            type="checkbox"
                            checked
                            id="checkbox-3-1"
                            className="regular-checkbox big-checkbox"
                          />
                          <label htmlFor="checkbox-3-1"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mx-3 mx-sm-5 premium_card1 mt-3">
                  <div className="card-body ps-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="premium_annual1">
                          Monthly
                          {/* <span className="ps-1">billed at 899 per year</span> */}
                        </h6>
                        <h6 className="free_days1 my-2">7 days free</h6>
                        <h6 className="premium_annual1">₹99 per month</h6>
                      </div>
                      <div>
                        <div>
                          <input
                            type="checkbox"
                            id="checkbox-2-1"
                            className="regular-checkbox big-checkbox"
                          />
                          <label htmlFor="checkbox-2-1"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 premium-right-content">
                <div>
                  <h2 className="mb-4">Premium</h2>
                  <p className="premium-head-para">Unlock Your Free Premium Now</p>
                </div>
                <div>
                  <ul className="list-premium">
                    {PREMIUM_SECTION_LIST.map((ele) => (
                      <li className="mt-1 mt-sm-3">
                        <div className="d-flex align-items-start">
                          <img src={assets.brandLogo1} alt="" width="50px" />
                          <p className="ms-sm-3 ms-1">{ele}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
