//CSS
import "../CSS/landingpage.css";
import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/swiper/swiper.min.css'
import { DiApple, DiWebplatform } from "react-icons/di";
import { SlArrowRightCircle } from "react-icons/sl";
import { GoogleOriginal } from 'devicons-react';

const LandingPage = () => {

//<**************VARIABLES**********************>



return (
<div className="landing-page">
    <div className="row1">
        <div className="hero-left">
            <div className="hero-m-title">
                <h2>Build a great place to work</h2>
            </div>
            <div className="hero-s-title">
                <h4>Stairs brings together your team's working docs and important discussions. Move projects faster, work more asyncrously and feel connected.</h4>
            </div>
            <div className="hero-b-row">
                <div className="filled-btn">
                    <h4>Try Stairs for free</h4>
                </div>
                <div className="unfilled-btn">
                    <h4>How it works</h4>
                </div>
            </div>
            <div className="trust-row">
                <h6>Companies trust us</h6>
                <GoogleOriginal size={30} />
                <GoogleOriginal size={30} />
                <GoogleOriginal size={30} />
            </div>
        </div>
    </div>

    <section id="why-us">
        <div className="why-us-divider">
            <hr />
            <h6>WHY CHOOSE US ?</h6>
            <hr style={{borderImage:"linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(83, 83, 83)) 1"}} />
        </div>
        <h3 className="why-us-title"> <span className="gradient-span-purple">Modern</span> & <span className="gradient-span-green">Powerful</span> skills</h3>
        <h5 className="why-us-desc">Each member of our team is highly skilled and experienced in their domain, which makes our service quick, powerful and most up to date to the current market</h5>
        <div className="why-us-cont">
            <div className="why-bubble">
                valami
            </div>
            <span style={{color:"white"}}>+</span>
            <div className="why-bubble">
                valami
            </div>
            <span style={{color:"white"}}>+</span>
            <div className="why-bubble">
                valami
            </div>
        </div>
        <hr className="w-hr" />
        <div className="why-us-cont-bottom">
            <div className="why-bubble-bottom">
                valami
            </div>
        </div>
    </section>

    <section id="services">
        <h3 className="services-section-title">Our Services</h3>
        <div className="services-container">
            <div className="service-box">
                <div className="s-t-desc-cont">
                    <DiApple size={35} color="white" />
                    <h5>Topic Interesting Desc</h5>
                </div>
                <h3 className="s-m-desc">Get your dream <span className="word-high-primary">Mobile App</span> idea up and running on both IOS and Android appstores !</h3>
                <div className="s-cont">
                    <div className="s-row">
                        <DiApple color="white" />
                        <h4>Service Title</h4>
                        <SlArrowRightCircle color="white" />
                    </div>

                    <div className="s-row">
                        <DiApple color="white" />
                        <h4>Service Title</h4>
                        <SlArrowRightCircle color="white" />
                    </div>

                    <div className="s-row">
                        <DiApple color="white" />
                        <h4>Service Title</h4>
                        <SlArrowRightCircle color="white" />
                    </div>
                </div>
                <div className="see-more-btn">
                    <h4>Interested</h4>
                </div>
            </div>
        </div>

        <div className="services-container" style={{flexDirection:"row-reverse"}}>
            <div className="service-box" >
                <div className="s-t-desc-cont">
                    <GoogleOriginal size={35} color="white" />
                    <h5>Topic Interesting Desc</h5>
                </div>
                <h3 className="s-m-desc">Get your dream <span className="word-high-secondary">Web App</span> idea up and running on all mainstream platforms !</h3>
                <div className="s-cont">
                    <div className="s-row">
                        <DiApple color="white" />
                        <h4>Service Title</h4>
                        <SlArrowRightCircle color="white" />
                    </div>

                    <div className="s-row">
                        <DiApple color="white" />
                        <h4>Service Title</h4>
                        <SlArrowRightCircle color="white" />
                    </div>

                    <div className="s-row">
                        <DiApple color="white" />
                        <h4>Service Title</h4>
                        <SlArrowRightCircle color="white" />
                    </div>
                </div>
                <div className="see-more-btn">
                    <h4>Interested</h4>
                </div>
            </div>

        </div>

        <div className="service-bottom-row">
            <div className="consultation-box">
                <h5>We are up for the challange</h5>
                <h2>Appoint a <span>Free</span> consultation</h2>
                <h3>In order to make an appointment you will need to answer a few crutial questions designed for understanding your needs ...</h3>
                <div className="consultation-btn">
                    <h4>Get Started</h4>
                </div>
            </div>

            <div className="consultation-box">
                <h5>We are up for the challange</h5>
                <h2>Appoint a <span>Free</span> consultation</h2>
                <h3>In order to make an appointment you will need to answer a few crutial questions designed for understanding your needs ...</h3>
                <div className="consultation-btn">
                    <h4>Get Started</h4>
                </div>
            </div>
        </div>

    </section>

    <section id="why-us">
        <div className="why-us-divider">
            <hr />
            <h6>Betterbyte Team</h6>
            <hr style={{borderImage:"linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(83, 83, 83)) 1"}} />
        </div>
        <h3 className="why-us-title"> <span className="gradient-span-purple">Young</span> & <span className="gradient-span-green">Passionate</span> Team</h3>
        <h5 className="why-us-desc">We strive for bringing your wildest ideas to life with proper and reccurrent communication & multiple iteration for the perfect product </h5>

    
    </section>

    <section id="team">
        <h3>Our Team</h3>
    </section>
</div>
)};

export default LandingPage;