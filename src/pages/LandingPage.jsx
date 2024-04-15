//CSS
import "../CSS/navbar.css";
import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/swiper/swiper.min.css'

//MOTION FOR ANIMATED ELEMENTS
import { motion } from "framer-motion";

//SPLINE 3D
import Spline from '@splinetool/react-spline';

//REACT
import React from "react";

//IMAGE
import downArrow from "../assets/down-arrow.png";
import mePicture from "../assets/mePic.png"
import GetconLogo from "../assets/gtcon.png"

//ICONS
import { SocialIcon } from "react-social-icons";

//COMPONENTS
import ServiceBox from "../components/serviceBox";
import ServiceBoxCyber from "../components/serviceBoxCyber";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import ChatMessage from "../components/ClippifyComponents/chatMessage";

import CancelIcon from '@mui/icons-material/Cancel';
import ServiceBoxMobile from "../components/serviceBoxMobile";
import ServiceBoxAi from "../components/serviceBoxAi";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BasicModal from "../components/CertificateModal/certifitaceModal";
import metaLogo from "../assets/meta-logo.jpeg";
import metaCertificate from '../assets/META.jpg'
import udemyLogo from '../assets/udemyIMAGE.png'
import UdemyIosCertificate from '../assets/UdemyIosCert.jpeg'
import ibmLogo from '../assets/ibm.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import betterByteLogo from '../assets/BetterByteLogo.png'
import ClippifyLogo from '../assets/Clippify-log.svg'
import LupodyLogo from '../assets/Lupody_Black.png';
import LupodyScreen from '../assets/LupodyScreen2.png';
import ClippifyScreen from '../assets/ClippifyScreen.png';
import ClippifyMobileScreen from '../assets/ClippifyMobileScreen.png';
import LupodyMobileScreen from '../assets/LupodyMobileScreen.png';
import { Link } from "react-router-dom";
import MyResume from '../assets/OT_Resume.pdf'

import { CloudflareworkersOriginal, Css3Original, FigmaOriginal, FirebaseOriginal, GoogleOriginal, GooglecloudOriginal, Html5Original, NodejsOriginal, ReactOriginal, ViteOriginal, ViteOriginalWordmark } from 'devicons-react';

const LandingPage = () => {

//<**************VARIABLES**********************>

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
        duration: 1,
        staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
        duration: 2,
        repeat: Infinity,
        },
    },
};

const slider = [
    {
        title: "Clippify",
        description: "CLippify is a web app for CLIPPING -> STORING, SAVING, ANALISING videos. Suited with AI Speech To Text and AI chatbot.",
        url: ClippifyScreen,
        logo: ClippifyLogo
        },
        {
        title: "Lupody",
        description: "Lupody is a PODCAST social media platform with AI chatbot and AI powered content.",
        url: LupodyScreen,
        logo: LupodyLogo
        },
        {
        title: "Lupody Mobile",
        description: "Lupody Mobile is a PODCAST social media platform with AI chatbot and AI powered content.",
        url: LupodyMobileScreen,
        logo: LupodyLogo
        },
    
        {
        title: "Clippify Mobile",
        description: "Cippify Mobile is a web app for CLIPPING -> STORING, SAVING, ANALISING videos. Suited with AI Speech To Text and AI chatbot.",
        url: ClippifyMobileScreen,
        logo: ClippifyLogo
        },
]

//IS SELECTED | WEB | MOBILE | CROSS
const [isSelected, setIsSelected] = React.useState("cross");

const [isAiChatOpen, setIsAiChatOpen]= React.useState(false);

const [assistantInput , setAssistantInput] = React.useState("");

const [chatLog, setChatLog] = React.useState([]);

//WEB DATA
const webData = {
    title: "Fullstack Development",
    desc: "Web App Desc",
}

//MOBILE DATA
const mobileData = {
    title: "Mobile Development",
    desc: "Mobile App Desc",
}

//CROSS DATA
const crossData = {
    title: "Cross-Platform",
    desc: "Cross-Platform Desc",
}

//<**************FUNCTIONS**********************>

//HANDLE PORTFOLIO NAVIGATION
const handlePortfolioNavigation = (title) => {
    if(title === "Lupody"){
        window.location.href = "/fullstack-projects/lupody"
    }
    
    if(title === "Clippify"){
        window.location.href = "/fullstack-projects/clippify"
    }

    if(title === "Lupody-Mobile"){
        window.location.href = "/mobile-project/lupody-mobile"
    }

    if(title === "Clippify-Mobile"){
        window.location.href = "/mobile-project/clippify-mobile"
    }

    if(title === "Speech To Text"){
        window.location.href = "/cross-project/speech-to-text"
    }

    if(title === "Object Detection"){  
        window.location.href = "/cross-project/object-detection"
    }

    if(title === "Kaggle Solutions"){
        window.location.href = "/cross-project/kaggle-solutions"
    }

    if(title === "Capture The Flag"){
        window.location.href = "/cyber-project/capture-the-flag"
    }

    if(title === "Pentesting My Web Apps"){
        window.location.href = "/cyber-project/pentesting-web"
    }

    if(title === "Pentesting My Mobile Apps"){
        window.location.href = "/cyber-project/pentesting-mobile"
    }

    if(title === "Vr"){
        window.location.href = "/about-me"
    }

}
//DOWNLOAD RESUME
function downloadResume() {
    // Replace 'your_resume_file_url' with the actual URL of the resume file
    const url = MyResume;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Orban_Tamas_Resume.pdf'); // Change 'resume.pdf' to the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//OPEN RESUME
function openResume() {
    // Replace 'your_resume_file_url' with the actual URL of the resume file
    const url = MyResume;
    window.open(url, '_blank');
}

const handleSeeMore = (navigationTitle) => {
    //GITHUB
    if(navigationTitle == "Github"){
        window.location.href = "https://github.com/orbant12"
    }

    //YOUTUBE
    if(navigationTitle == "Youtube"){
        window.location.href = "https://www.youtube.com/channel/UCV32IuRS4IQiA2_TWVJDd_w"
    }

     //Getcon
    if(navigationTitle == "Getcon"){
        window.location.href = "https://www.getcon.hu/"
    }
}



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
                        Try Stairs for free
                    </div>
                    <div className="unfilled-btn">
                        How it works
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

    <div style={{borderTop:"1px solid black", display:"flex",flexDirection:"column"}}>
        <div id="services">
            <div className="services-pick">
                <h3 onClick={() => setIsSelected("web")} className={isSelected === "web" ? "selected" : "select"}>Fullstack</h3>
                <h3 onClick={() => setIsSelected("cross")} className={isSelected === "cross" ? "selected" : "select"} >Machine Learning</h3>
                <h3  onClick={() => setIsSelected("cyber")} className={isSelected === "cyber" ? "selected" : "select"}>Cyber Security</h3>
                <h3 onClick={() => setIsSelected("mobile")} className={isSelected === "mobile" ? "selected" : "select"}>Mobile</h3>
            </div>

            <div className="service-show">
                {/* <ServiceBox props={isSelected === "web" ? webData : isSelected === "mobile" ? mobileData : isSelected === "cross" ? crossData : null} />  */}
                <div className="service-grid-box">
                    <h2 className="service-help-title">I CAN HELP YOU</h2>
                    {isSelected === "web" ?  <ServiceBox /> : isSelected === "mobile" ? <ServiceBoxMobile /> : isSelected === "cross" ? <ServiceBoxAi /> : isSelected === "cyber" ? <ServiceBoxCyber/> : null}
                </div>
                {isSelected === "web" ?   
                <div className="specific-project-show" >
                    
                    <div onClick={() => handlePortfolioNavigation("Lupody")} className="project-show">
                        <h3>Lupody</h3>
                        <div>
                            <h6>Social Media Platform</h6>
                            <h6>Ai Powered</h6>
                            <h6>Firebase Backend</h6>
                        </div>
                        
                    </div>

                    <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                        <h3>Clippify</h3>
                        <div>
                            <h6>Ai Clip Analysing</h6>
                            <h6>Clip Saving and Storing</h6>
                            <h6>Firebase Backend</h6>
                        </div>
                        
                    </div>
                </div>  : 
                isSelected === "mobile" ?  
                <div className="specific-project-show" >
                    
                    <div onClick={() => handlePortfolioNavigation("Lupody Mobile")} className="project-show">
                        <h3>Lupody Mobile</h3>
                        <div>
                            <h6>Social Media Platform</h6>
                            <h6>Ai Powered</h6>
                            <h6>Firebase Backend</h6>
                        </div>
                        
                    </div>

                    <div onClick={() => handlePortfolioNavigation("Clippify-Mobile")} className="project-show">
                        <h3>Clippify Mobile</h3>
                        <div>
                            <h6>Ai Clip Analysing</h6>
                            <h6>Clip Saving and Storing</h6>
                            <h6>Firebase Backend</h6>
                        </div>
                        
                    </div>
                </div> 
                : isSelected === "cross" ? 
                <div className="specific-project-show" >
                    
                <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                    <h3>Speech To Text</h3>
                    <div>
                        <h6>Self-Made with Tensorflow</h6>
                        <h6>Recurrent Neural Network</h6>
                        <h6>CTC loss & Word Error Rate</h6>
                        <h6>Embedded into Web Application</h6>
                    </div>
                    
                </div>

                <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                    <h3>Object Detection</h3>
                    <div>
                        <h6>Self-Made with Tensorflow</h6>
                        <h6>OpenCV</h6>
                        <h6>Convolutional Neural Network</h6>
                        <h6>Process for Detecting anything</h6>
                        <h6>Embedded into Web Application</h6>
                    </div>
                    
                </div>

                <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                    <h3>Kaggle Solutions</h3>
                    <div>
                        <h6>Free Time Activity</h6>
                        <h6>ML Algorythms for Competitions</h6>
                    </div>
                    
                </div>
                </div>  
                : isSelected === "cyber" ? 
                <div className="specific-project-show" >
                    <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                        <h3>Capture The Flag</h3>
                        <div>
                            <h6>Free Time Activity</h6>
                            <h6>Hack The Box</h6>
                            <h6>Try Hack Me</h6>
                            <h6>Kali Linux</h6>
                        </div>
                    </div>

                    <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                        <h3>Pentesting My Web Apps</h3>
                        <div>
                            <h6>Free Time Activity</h6>
                            <h6>Hack The Box</h6>
                            <h6>Try Hack Me</h6>
                            <h6>Kali Linux</h6>
                        </div>
                    </div>

                    <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                        <h3>Pentesting My Mobile Apps</h3>
                        <div>
                            <h6>Free Time Activity</h6>
                            <h6>Hack The Box</h6>
                            <h6>Try Hack Me</h6>
                            <h6>Kali Linux</h6>
                        </div>
                    </div>

                </div> :
                    null}
            </div>

            <div id="portfolio">
                <div className="portfolio-title">
                    <h1 style={{fontWeight:400,padding:"8px 13px",borderRadius:10,opacity:0.8,boxShadow:"inset -3px -3px 5px 1px black",zIndex:999}}>Portfolio</h1>
                </div>

                <div style={{marginTop:50, maxWidth:1000,width: 1000,marginBottom:100}}>
                    <Swiper 
                        className='myswiper'
                        modules={[Pagination, EffectCoverflow, Autoplay]}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 3,
                            slideShadows: true
                        }}
                        loop={true}
                        pagination={{clickable: true}}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2
                            },
                            768: {
                                slidesPerView: 1
                            },
                            1024: {
                                slidesPerView: 2
                            },
                            1560: {
                                slidesPerView: 3
                            },
                        }}
                    >
                        {
                        slider.map(data => (
                            <SwiperSlide key={data.title} style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider">
                                <div>
                                    <h2>{data.title}</h2>
                                    <p>{data.description}</p>
                                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"0%",height:100,marginTop:30}}>
                                        <img src={data.logo} className="swiper-image" alt="" />
                                        <a onClick={() => handlePortfolioNavigation(data.title)} target="_blank" className='slider-btn'>explore</a>
                                    </div>
                                    
                                </div>
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
            </div>
            
            <div className="divider-row">
                <h4 style={{fontWeight:550,padding:"8px 20px",borderRadius:10,opacity:0.8,boxShadow: "inset -3px -3px 5px 1px black"}} >Worked with ...</h4>
                <img src={GetconLogo} onClick={() => handleSeeMore("Getcon")}/>
            </div>

            <div className="review-bubbles">
                <div className="bubble-rows">
                    {/* COL 1 */}
                    <div className="bubbleCol">
                        <div className="bubble-type1">
                            <div className="cert-logo">
                                <img src={metaLogo} alt="" />
                            </div>
                            <h3>NATIVE APP DEVELOPMENT</h3>
                            <div>
                                <BasicModal input={metaCertificate}  />
                            </div>
                        </div>

                        <div className="bubble-type2">
                        <h3>Live Coding</h3>
                            <h5 style={{opacity:0.7,fontWeight:400,marginTop:5}}>Hacking / Data Science<br /> <span style={{fontWeight:800}}>Programming </span><br/></h5>
                            <div className="see-more_btn" onClick={()=> handleSeeMore("Youtube")}>
                                <h5>Videos</h5>
                            </div>
                        </div>

                    </div>
                    {/* COL 2 */}
                    <div className="bubbleCol">
                        <div className="bubble-type2">
                        <h3>Github</h3>
                            <h5 style={{opacity:0.7,fontWeight:400,marginTop:5}}>All of my personal projects<br /> <span style={{fontWeight:800}}>Passion</span><br/></h5>
                            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:20}}>
                                <SocialIcon url="https://github.com/orbant12" />
                            </div>
                            
                        </div>

                        <div className="bubble-type1">
                            <div className="cert-logo">
                                <img src={udemyLogo} alt="" />
                            </div>
                            <h3>IOS APP DEVELOPMENT</h3>
                            <div>
                                <BasicModal input={UdemyIosCertificate} />
                            </div>
                        </div>

                    </div>
                    {/* COL 3 */}
                    <div className="bubbleCol">
                    <div className="bubble-type1">
                            <div className="cert-logo">
                                <img src={ibmLogo} alt="" />
                            </div>

                            <h3>Machine Leaning</h3>
                            <div>
                                <BasicModal />
                            </div>
                        </div>

                        <div className="bubble-type2">
                            <h3>Socials</h3>
                                <h5 style={{opacity:0.7,fontWeight:400,marginTop:5}}>Feel free to check me out<br /> <span style={{fontWeight:800}}>Budapest, Hungary</span><br/></h5>
                                <div className="social_accs">
                                    <SocialIcon url="https://twitter.com/TamasOrban12" />
                                    <SocialIcon url="https://instagram.com/orbant12" />
                                    <SocialIcon url="https://www.linkedin.com/in/tamas-orban-30921524b/" />                   
                                </div>
                        </div>

                    </div>
                    {/* COL 4 */}
                    <div className="bubbleCol">
                        <div className="bubble-type1">
                            <div className="cert-logo">
                                <img src={metaLogo} alt="" />
                            </div>

                            <h3>Backend Development</h3>
                            <div>
                                <BasicModal />
                            </div>
                        </div>

                        <div className="bubble-type2">
                            <h3>University</h3>
                            <h5 style={{opacity:0.7,fontWeight:400,marginTop:5}}>Vrije University Amsterdam <br /> <span style={{fontWeight:800}}>Computer Science</span><br/></h5>
                            <div className="see-more_btn">
                                <h5>See More</h5>
                            </div>
                        </div>

                    </div>
                    {/* COL 5 */}
                    <div className="bubbleCol">
                    <div className="bubble-type2">
                    <h3>Intern Experience</h3>
                            <h5 style={{opacity:0.7,fontWeight:400,marginTop:5}}>Company: <a href="https://getcon.hu">Getcon</a><br />Duration: 6 months</h5>
                            <div className="see-more_btn">
                                <h5>See More</h5>
                            </div>
                    </div>

                    <div className="bubble-type1">
                            <div className="cert-logo">
                                <img src={udemyLogo} alt="" />
                            </div>
                            <h3>Fullstack Web Development</h3>
                            <div>
                                <BasicModal input={metaCertificate} />
                            </div>
                    </div>

                    </div>
                </div>
            </div>

            <div className="aboutme-section">
                <h2>About Me</h2>
                <h5 style={{padding:"8px 20px",borderRadius:30,opacity:0.7,boxShadow: "inset 1px 1px 5px 1px black",marginTop:5,fontWeight:550}}>Let me show you with another perspective</h5>
                <div onClick={() => handlePortfolioNavigation("Vr")} style={{cursor:"pointer"}}> 
                    <div className="spline-visionPro" > 
                        <Spline scene="https://prod.spline.design/KX8f-KHZwA3H06Gs/scene.splinecode" />
                    </div>
                </div>
            </div>

            <div onClick={() => setIsAiChatOpen(!isAiChatOpen)} className="ai-chat-support">
            <QuestionMarkIcon />
            </div>

            {isAiChatOpen ? 
            <div className="ai-chat">
                <div className="cancel-icon" onClick={() => setIsAiChatOpen(!isAiChatOpen)}>
                    <CancelIcon />
                </div>
                <div className="ai-chat-title">
                    <h3>Quick Information</h3>
                </div>
                <div className="ai-chat-content">
                    <div className="ai-chat-row">
                        <h2>Email:</h2>
                        <h3>betterbyte.business@gmail.com</h3>
                    </div>
                    <div className="ai-chat-row">
                        <h2>Resume:</h2>
                        <h3></h3>
                    </div>

                    <div className="ai-chat-row">
                        <h2>Resume</h2>
                        <div style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-evenly",alignItems:"center",marginTop:10}}>

                        <h3 onClick={openResume} style={{padding:"5px 10px",border:"1px solid black",borderRadius:10,opacity:0.6}}>Quick Look</h3>
                        
                        <hr style={{height:20}} />
                        
                        <h3 onClick={downloadResume} style={{padding:"5px 10px",border:"1px solid black",borderRadius:10,background:"white"}} >Download</h3>

                        </div>
                        
                    </div>
                </div>
            </div> : null}

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Orban Tamas</h4>
                            <ul>
                                <li><a href="/about-me">about Me</a></li>
                                <li><a href="/services">my services</a></li>
                                
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contact Me</h4>
                            <ul>
                                <li><a href="#">Discrod</a></li>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Instagram</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Hire me</h4>
                            <ul>
                                <li><a href="#">Upwork</a></li>
                                <li><a href="#">Email</a></li>

                            </ul>
                        </div>
                
                    </div>
                </div>
            </footer>

        </div>
    </div>
</div>
)};

export default LandingPage;