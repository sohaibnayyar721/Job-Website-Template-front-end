import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MapSingle from "../components/map/MapSingle";
import lo1 from "../assets/images/logo-company/cty4.png";
import StarProgress from "../components/progressBar/StarProgress";
import { useRef, useState, useEffect } from "react";
import Video from "../components/popup/Video";
import Gallery from "../components/popup/Gallery";
import { Collapse } from "react-collapse";
import logo from "../assets/images/logo.png";
import Header4 from "../components/header/Header4";

Jobsingle_v1.propTypes = {};

const marKers = [
  {
    id: 1,
    title: "Rockstar Games New York",
    name: "Senior UI/UX Designer",
    address: "Las Vegas, NV 89107, USA",
    longitude: -74.00122,
    latitude: 40.71023,
    img: lo1,
  },
];

function Jobsingle_v1(props) {
  const progressRef = useRef();
  const [targetHeight, setTargetHeight] = useState(0);
  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });
  const [isShowMobile, setShowMobile] = useState(false);

  const handleToggle = (key) => {
    if (toggle.key === key) {
      setToggle({
        status: false,
      });
    } else {
      setToggle({
        status: true,
        key,
      });
    }
  };

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };

  useEffect(() => {
    if (progressRef?.current) {
      const offsetHeight = progressRef?.current?.offsetTop;
      setTargetHeight(offsetHeight);
    }
  }, [progressRef]);

  return (
    <>
      <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop" onClick={handleMobile}></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <Link to="/">
                <img className="site-logo" src={logo} alt="Image" />
              </Link>
            </div>
            <Link className="title-button-group" onClick={handleMobile}>
              <i className="icon-close"></i>
            </Link>
          </div>

          <Tabs className="tf-tab">
            <TabList className="menu-tab">
              <Tab className="user-tag">Menu</Tab>
              <Tab className="user-tag">Categories</Tab>
            </TabList>

            <div className="content-tab">
              <TabPanel className="header-ct-center menu-moblie animation-tab">
                <div className="nav-wrap">
                  <nav className="main-nav mobile">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("home");
                          }}
                        >
                          Home
                        </Link>
                        <Collapse isOpened={toggle.key === "home"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${toggle.key === "home" ? "block" : "none"
                                }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/">Home Page 01 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v2">Home Page 02 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v3">Home Page 03 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v4">Home Page 04 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v5">Home Page 05 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v6">Home Page 06 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v7">Home Page 07 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v8">Home Page 08 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v9">Home Page 09 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v10">Home Page 10 </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>

                      <li className="menu-item menu-item-has-children-mobile current-item">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("job");
                          }}
                        >
                          Find jobs
                        </Link>
                        <Collapse isOpened={toggle.key === "job"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${toggle.key === "job" ? "block" : "none"
                                }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v1">List Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/job-grid">Grid Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/job-list-sidebar">List Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/job-grid-sidebar">Grid Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v5">
                                List Sidebar Fullwidth
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v6">
                                Grid Sidebar Fullwidth
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v7">Top Map</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v8">Top Map Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v9">Half Map - V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v10">Half Map - V2</Link>
                            </li>
                            <li className="menu-item menu-item-mobile  current-item">
                              <Link to="/jobsingle_v1">Jobs Single - V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/jobsingle_v2">Jobs Single - V2</Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>

                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          Employers
                        </Link>
                        <Collapse isOpened={toggle.key === "employers"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${toggle.key === "employers" ? "block" : "none"
                                }`,
                            }}
                          >
                            <li className="menu-item">
                              <Link to="/employers_v1">List Layout</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v2">Grid Layout</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v3">List Sidebar</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v4">Grid Sidebar</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v5">Full Width</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v6">Top Map</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v7">Half Map</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employersingle_v1">
                                Employers Single - V1
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employersingle_v2">
                                Employers Single - V2
                              </Link>
                            </li>

                            <li className="menu-item">
                              <Link to="/employerreview">
                                Employers Reviews
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employernotfound">
                                Employers Not Found
                              </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("candidate");
                          }}
                        >
                          Candidates
                        </Link>
                        <Collapse isOpened={toggle.key === "candidate"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${toggle.key === "candidate" ? "block" : "none"
                                }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v1">List Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v2">Grid Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v3">List Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v4">Top Map</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v5">Half Map</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v6">No Available V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v7">No Available V2</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidatesingle_v1">
                                Candidate Single - V1
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidatesingle_v2">
                                Candidate Single - V2
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/samplecv">Sample CV</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/samplecvslidebar">
                                Sample CV Sidebar
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/samplecvdetails">CV Details</Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("blog");
                          }}
                        >
                          Blog
                        </Link>
                        <Collapse isOpened={toggle.key === "blog"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${toggle.key === "blog" ? "block" : "none"
                                }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blog_v1">Blog List </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blog_v2">Blog Grid</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blog_v3">Blog Masonry</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blogsingle_v1">Blog Details - V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blogsingle_v2">Blog Details - V2</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blogsingle_v3">
                                Blog Details Sidebar
                              </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("pages");
                          }}
                        >
                          Pages
                        </Link>
                        <Collapse isOpened={toggle.key === "pages"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${toggle.key === "pages" ? "block" : "none"
                                }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/aboutus">About Us</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/faqs">FAQS</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/termsofuse">Terms Of Use</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/pricing">Pricing</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/shop">Shop List</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/shoppingcart">Shopping Cart</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/shopsingle">Shop Single</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/checkout">Checkout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/login">Login</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/createaccount">Create Account</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/contactus">Contact Us</Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                    </ul>
                  </nav>
                </div>
              </TabPanel>

              <TabPanel className="categories animation-tab">
                <div className="sub-categorie-mobile">
                  <ul className="pop-up">
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-1"></span>Design &
                        Creative
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-8"></span>Digital
                        Marketing
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-2"></span>Development &
                        IT
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-3"></span>Music & Audio
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-4"></span>Finance &
                        Accounting
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-5"></span>Programming &
                        Tech
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-6"></span>Video &
                        Animation
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-7"></span>Writing &
                        translation
                      </Link>
                    </li>
                  </ul>
                </div>
              </TabPanel>
            </div>
          </Tabs>

          <div className="header-customize-item button">
            <Link to="/">Upload Resume</Link>
          </div>

          <div className="mobile-footer">
            <div className="icon-infor d-flex aln-center">
              <div className="icon">
                <span className="icon-call-calling">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </span>
              </div>
              <div className="content">
                <p>Need help? 24/7</p>
                <h6>
                  <Link to="tel:0123456678">001-1234-88888</Link>
                </h6>
              </div>
            </div>
            <div className="wd-social d-flex aln-center">
              <ul className="list-social d-flex aln-center">
                <li>
                  <Link to="#">
                    <i className="icon-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-linkedin2"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-pinterest"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-instagram1"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Header4 clname="actJob2" handleMobile={handleMobile} />

      <section className="single-job-thumb">
        <img
          src={require("../assets/images/review/singlejob.jpg")}
          alt="images"
        />
      </section>

      <section className="form-sticky fixed-space">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wd-job-author2">
                <div className="content-left">
                  <div className="thumb">
                    <img
                      src={require("../assets/images/logo-company/cty4.png")}
                      alt="logo"
                    />
                  </div>
                  <div className="content">
                    <Link to="#" className="category">
                      Rockstar Games New York
                    </Link>
                    <h6>
                      <Link to="#">
                        Senior UI/UX Designer{" "}
                        <span className="icon-bolt"></span>
                      </Link>
                    </h6>
                    <ul className="job-info">
                      <li>
                        <span className="icon-map-pin"></span>
                        <span>Las Vegas, NV 89107, USA</span>
                      </li>
                      <li>
                        <span className="icon-calendar"></span>
                        <span>2 days ago</span>
                      </li>
                    </ul>
                    <ul className="tags">
                      <li>
                        <Link to="#">Full-time</Link>
                      </li>
                      <li>
                        <Link to="#">Remote</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-right">
                  <div className="top">
                    <Link to="#" className="share">
                      <i className="icon-share2" />
                    </Link>
                    <Link to="#" className="wishlist">
                      <i className="icon-heart" />
                    </Link>
                    <Link to="#" className="btn btn-popup">
                      <i className="icon-send" />
                      Apply Now
                    </Link>
                  </div>
                  <div className="bottom">
                    <div className="gr-rating">
                      <p>32 days left to apply</p>
                      <ul className="list-star">
                        <li className="icon-star-full" />
                        <li className="icon-star-full" />
                        <li className="icon-star-full" />
                        <li className="icon-star-full" />
                        <li className="icon-star-full" />
                      </ul>
                    </div>
                    <div className="price">
                      <span className="icon-dollar" />
                      <p>
                        $83,000 - $110,000 <span className="year">/year</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inner-jobs-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <Tabs className="job-article tf-tab single-job">
                <div className="content-tab">
                  <TabPanel className="inner-content animation-tab">
                    <h5>Job Description</h5>
                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart, world-class
                      campaigns across a variety of mediums?
                    </p>
                    <p className="mg-19">
                      Deloitte's Green Dot Agency is looking to add a Lead User
                      Experience Designer to our experience design team. We want
                      a passionate creative who's inspired by new trends and
                      emerging technologies, and is able to integrate them into
                      memorable user experiences. A problem solver who is
                      entrepreneurial, collaborative, hungry, and humble; can
                      deliver beautifully designed, leading-edge experiences
                      under tight deadlines; and who has demonstrated proven
                      expertise.
                    </p>
                    <h6>The Work You'll Do:</h6>
                    <ul className="list-dot">
                      <li>
                        Support the Creative Directors and Associate Creative
                        Directors of experience design to concept and oversee
                        the production of bold, innovative, award-winning
                        campaigns and digital experiences.
                      </li>
                      <li>
                        Make strategic and tactical UX decisions related to
                        design and usability as well as features and functions.
                      </li>
                      <li>
                        Creates low- and high-fidelity wireframes that represent
                        a user's journey.
                      </li>
                      <li>
                        Effectively pitch wireframes to and solutions to
                        stakeholders. You'll be the greatest advocate for our
                        work, but you'll also listen and internalize feedback so
                        that we can come back with creative that exceeds
                        expectations.
                      </li>
                    </ul>
                    <h6>What you'll bring:</h6>
                    <ul className="list-dot mg-bt-15">
                      <li>
                        Passion for Human-Centered Design-a drive to make
                        interactive technology better for people.
                      </li>
                      <li>Thorough knowledge of UX/UI best practices.</li>
                      <li>
                        Understanding of brand identity and working within a
                        defined design system as well as contributing to it.
                      </li>
                      <li>
                        A mastery of craft. You dream about color, typography,
                        and interaction design every day. You are proficient
                        using tools like Figma and Adobe XD. You can efficiently
                        use your skill set to develop new designs within
                        existing and new visual systems and design languages.
                      </li>
                      <li>
                        A portfolio which highlights strong understanding of UX
                        design including but not limited to: user flows, IA, and
                        translating customer research, analytics, and insights
                        into wireframes and high-fidelity designs.
                      </li>
                      <li>
                        Possess problem-solving skills, an investigative
                        mentality, and a proactive nature-committed to
                        delivering solutions.
                      </li>
                      <li>Possess problem-solving skills</li>
                    </ul>
                    <h6>Qualifications:</h6>
                    <ul className="list-dot mg-bt-15">
                      <li>
                        Bachelor's degree preferred, or equivalent experience.
                      </li>
                      <li>
                        At least 5-8 years of experience with UX and UI design.
                      </li>
                      <li>
                        2 years of experience with design thinking or similar
                        framework that focuses on defining users' needs early.
                      </li>
                      <li>
                        Strong portfolio showing expert concept, layout, and
                        typographic skills, as well as creativity and ability to
                        adhere to brand standards.
                      </li>
                      <li>
                        Expertise in Figma, Adobe Creative Cloud suite,
                        Microsoft suite.
                      </li>
                      <li>
                        Ability to collaborate well with cross-disciplinary
                        agency team and stakeholders at all levels.
                      </li>
                      <li>
                        Forever learning: Relentless desire to learn and
                        leverage the latest web technologies.
                      </li>
                      <li>
                        Detail-oriented: You must be highly organized, be able
                        to multi-task, and meet tight deadlines.
                      </li>
                      <li>
                        Independence: The ability to make things happen with
                        limited direction. Excellent proactive attitude,
                        take-charge personality, and "can-do" demeanor.
                      </li>
                      <li>
                        Proficiency with Front-End UI technologies a bonus but
                        not necessary (such as HTML, CSS, JavaScript).
                      </li>
                    </ul>
                    <p>
                      For individuals assigned and/or hired to work in Colorado
                      or Nevada, Deloitte is required by law to include a
                      reasonable estimate of the compensation range for this
                      role. This compensation range is specific to the State of
                      Colorado and the State of Nevada and takes into account
                      the wide range of factors that are considered in making
                      compensation decisions including but not limited to skill
                      sets; experience and training; licensure and
                      certifications; and other business and organizational
                      needs. The disclosed range estimate has not been adjusted
                      for the applicable geographic differential associated with
                      the location at which the position may be filled. At
                      Deloitte, it is not typical for an individual to be hired
                      at or near the top of the range for their role and
                      compensation decisions are dependent on the facts and
                      circumstances of each case. A reasonable estimate of the
                      current range is $86425- $177470.
                    </p>
                    <p>
                      You may also be eligible to participate in a discretionary
                      annual incentive program, subject to the rules governing
                      the program, whereby an award, if any, depends on various
                      factors, including, without limitation, individual and
                      organizational performance.
                    </p>
                    <div className="post-navigation d-flex aln-center">
                      <div className="wd-social d-flex aln-center">
                        <span>Social Profiles:</span>
                        <ul className="list-social d-flex aln-center">
                          <li>
                            <Link to="#">
                              <i className="icon-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="icon-linkedin2"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="icon-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="icon-pinterest"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="icon-instagram1"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="icon-youtube"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="video-thumb">
                      <div className="content-tab2">
                        <div className="inner">
                          <div className="thumb">
                            <img
                              src={require("../assets/images/review/thumbv3.jpg")}
                              alt="images"
                            />
                            <Video />
                          </div>
                        </div>
                      </div>
                      <Gallery />
                    </div>
                  </TabPanel>
 
                </div>
              </Tabs>
            </div>
            <div className="col-lg-4">
              <div className="cv-form-details po-sticky job-sg single-stick">
                <MapSingle marKers={marKers} />
                <ul className="list-infor">
                  <li>
                    <div className="category">Website</div>
                    <div className="detail">
                      <Link to="https://themeforest.net/user/themesflat">
                        Themesflat.vn
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="category">Email</div>
                    <div className="detail">themesflat@gmail.com</div>
                  </li>
                  <li>
                    <div className="category">Industry</div>
                    <div className="detail">Internet Publishing</div>
                  </li>
                  <li>
                    <div className="category">Company size</div>
                    <div className="detail">51-200 employees</div>
                  </li>
                  <li>
                    <div className="category">Headquarters</div>
                    <div className="detail">3 S Valley , Las Vegas, USA</div>
                  </li>
                  <li>
                    <div className="category">Founded</div>
                    <div className="detail">2017</div>
                  </li>
                </ul>

                <div className="wd-social d-flex aln-center">
                  <span>Socials:</span>
                  <ul className="list-social d-flex aln-center">
                    <li>
                      <Link to="#">
                        <i className="icon-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-linkedin2"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-pinterest"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-instagram1"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="form-job-single">
                  <h6>Contact Us</h6>
                  <form action="post">
                    <input type="text" placeholder="Subject" />
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message..."></textarea>
                    <button>Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />
    </>
  );
}

export default Jobsingle_v1;
