
import './App.css';
import asset0 from './image/asset 0.svg';
import white from './image/white.svg';
import asset2 from './image/asset 10.webp';
import cdmi from './image/asset 29.jpeg';
import student from './image/happy-students.webp';
import cav from './image/asset 39.png';
import nilay from './image/asset 30.jpeg';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { AiOutlineMail } from "react-icons/ai";
import { FaCertificate, FaGooglePlusG, FaInstagram, FaYoutube, FaWhatsapp, FaChevronDown, FaHandPointRight, FaUniversity } from "react-icons/fa";
import { FaLinkedin, FaArrowRight } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io";
import { IoStarSharp, IoStarHalf } from "react-icons/io5";
import { PiStudentFill, PiNotePencil, PiChalkboardTeacher, PiEnvelopeOpenFill } from "react-icons/pi";
import { BiSolidQuoteRight } from "react-icons/bi";


var menu = ['HOME', 'COURSES', 'ACTIVITIES', 'BLOG', 'KNOW_US', 'GET_IN_TOUCH', 'STUDENT_ZONE'];

var slider1 = [require('./image/sli1.webp'), require('./image/sli2.webp'), require('./image/sli3.webp')]

var offer = [
  { "imge": require('./image/_0045_Android.webp'), course: "Development Course" },
  { "imge": require('./image/_0057_4_VFX.webp'), course: "Design Courses" },
  { "imge": require('./image/laravel.jpg'), course: "Programming IT" },
  { "imge": require('./image/app.webp'), course: "Trendy Courses" },
  { "imge": require('./image/lom.webp'), course: "Civil-Mech. Engineering" },
  { "imge": require('./image/businees.webp'), course: "Business Development" },
]

var count = [
  { icon: <PiStudentFill />, num: "14000+", name: "HAPPY STUDENT" },
  { icon: <PiNotePencil />, num: "10+", name: "CERTIFICATION APPROVAL" },
  { icon: <PiChalkboardTeacher />, num: "100+", name: "CERTIFIED TEACHERS" },
  { icon: <PiEnvelopeOpenFill />, num: "12000+", name: "STUDENTS PLACED" },
]

var choose = [
  { imge: require('./image/why-choose.png'), head: "Industry Expert As Trainers", para: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." },
  { imge: require('./image/full.png'), head: "Latest Curriculum", para: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World today." },
  { imge: require('./image/f_2.png'), head: "Latest Technology", para: "At the end of each training,our training instructor will go through the possible technical questions you may be asked." },
  { imge: require('./image/f_3.png'), head: "Interview Assistance", para: "We will be provided free upgradation for any newer version of the course you have." },
  { imge: require('./image/f_4.png'), head: "Free Upgradation", para: "At the end of each training,our training instructor will go through the possible technical questions you may be asked." },
  { imge: require('./image/f_5.png'), head: "Lifetime Support", para: "We will provide you lifetime support on all the courses you learned from us." },
]

var slider2 = [require('./image/asset 40.png'), require('./image/asset 41.png'), require('./image/asset 43.png'), require('./image/asset 44.png'), require('./image/asset 45.png'),]


var Demanded=["Video editing training institute in varachha","solidworks training institute in Mota Varachha",
"Illustrator training in katargam","Python Training in Surat","mechanical engineering training institute in varachha","Web development training institute in katargam",
"Best animation training course","flutter training institute in surat","Google sketchup civil training course","C++ programming language training institute in katargam"
,"Multimedia training institute","Game design training institute in varachha"]
function App() {
  return (
    <div className="Main">
      {/*--------------- top_info start ---------------------*/}
      <div className="top_info">
        <div className="container">
          <div className="d-flex">
            <div className="d-flex">
              <div className="d-flex left_info">
                <i className="icon"> <AiOutlineMail></AiOutlineMail></i>
                <p>info@cdmi.in </p>
              </div>
              <div className="d-flex">
                <FaCertificate className="icon"></FaCertificate>
                <p> Verify Certificate </p>
              </div>
            </div>
            <div className="center">
              <p>HAVE ANY QUESTION ? +91 90333 16003</p>
            </div>
            <div className="d-flex right_info">
              <i><TiSocialFacebook /></i>
              <i><IoLogoTwitter /></i>
              <i><FaGooglePlusG /></i>
              <i><FaLinkedin /></i>
              <i><FaInstagram /></i>
              <i><FaYoutube /></i>
              <i><FaWhatsapp /></i>
            </div>
          </div>
        </div>
      </div>
      {/*--------------- top_Info End --------------------*/}
      {/*--------------- Nav Start --------------------*/}
      <nav className="nav">
        <div className="container">
          <div className="d-flex">
            <div className="logo">
              <img src={asset0} style={{ width: "100%" }}></img>
            </div>
            <ul className="Main_menu">{
              menu.map((ele, ind) => {
                return (
                  <li key={ind}>{ele}</li>
                )
              })
            }
            </ul>
          </div>
        </div>
      </nav>
      {/*--------------- Nav End --------------------*/}

      {/*--------------- Img start --------------------*/}
      <OwlCarousel className='owl-theme' items={1} autoplay autoplayTimeout={2000} loop margin={10} nav={false} dots={false}>
                {
                    slider1.map((ele) => {
                        return (
                            <div class='item'>
                                <img src={ele}></img>
                            </div>
                        )
                    })
                }
            </OwlCarousel>
      {/*--------------- Img End --------------------*/}

      {/* ----creative courses start ---------*/}
      <section className='course'>
        <div className='container'>
          <div className="title">
            <div className='flex'>
              <span></span>
              <p>CREATIVE COURSE</p>
            </div>
            <h1>OFFERED COURSES</h1>
          </div>
          <div className="grid">{
            offer.map((ele, ind) => {
              return (
                <div className='grid_box'>
                  <div className="img">
                    <img src={ele.imge}></img>
                  </div>
                  <div className='nm'>{ele.course}</div>
                  <hr></hr>
                  <div className='d-flex'>
                    <div className='icons'>
                      <i><IoStarSharp /></i>
                      <i><IoStarSharp /></i>
                      <i><IoStarSharp /></i>
                      <i><IoStarSharp /></i>
                      <i><IoStarHalf /></i>
                    </div>
                    <div>
                      <input type='submit' value="Know More..!"></input>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </section>

      {/* ----creative courses End -----------*/}


      {/* ----About Us Start -----------*/}
      <div className='about'>
        <div className='d-flex'>
          <div className='left_side'>
            <div className='aboutflex'>
              <span></span>
              <p>ABOUT US</p>
            </div>
            <h3>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h3>
            <p className='info'>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat
              for web design, Game design,Mobile App Development, Game Development ,Video Editing &
              All types of IT Courses with 9 years of full-fledged, result-oriented training experience.
              We stepped in the market in 2014 with the goal to help students, working professionals and other
              interested candidates get that dream job or open that desired freelance business in some of
              the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses
              and organizations by providing work-ready professionals who can contribute greatly to their
              success. Since then, we have worked hard to achieve this goal and dedicated our time and
              resources to train students extensively.</p>
            <section className='view'>Enroll Now..!<i><FaArrowRight /></i></section>
          </div>
          <div className='right_side'>
            <img src={cdmi}></img>
          </div>
        </div>
      </div>
      {/* ----About Us End -----------*/}

      {/*--------- student start -----------------*/}
      <section className='student'>
        <div className='container'>
          <div className='flex'>
            {
              count.map((ele, ind) => {
                return (
                  <div className='std_box'>
                    <div className='icon'>
                      <i>{ele.icon}</i>
                    </div>
                    <p style={{ fontSize: "30px", color: "white", fontWeight: "600" }}>{ele.num}</p>
                    <p style={{ fontWeight: "700" }}>{ele.name}</p>
                  </div>
                )
              })
            }

            {/* <div className='std_box'>
              <div className='icon'>
                <i><PiNotePencil /></i>  
              </div>
              <p style={{fontSize :"30px",color:"white",fontWeight:"600"}}>10+</p>
              <p style={{fontWeight:"700"}}>CERTIFICATION APPROVAL</p>
            </div>
            <div className='std_box'>
              <div className='icon'>
                <i><PiChalkboardTeacher /></i>  
              </div>
              <p style={{fontSize :"30px",color:"white",fontWeight:"600"}}>100+</p>
              <p style={{fontWeight:"700"}}>CERTIFIED TEACHERS</p>
            </div>
            <div className='std_box'>
              <div className='icon'>
                <i><PiEnvelopeOpenFill /></i>  
              </div>
              <p style={{fontSize :"30px",color:"white",fontWeight:"600"}}>12000+</p>
              <p style={{fontWeight:"700"}}>STUDENTS PLACED</p>
            </div> */}
          </div>
        </div>
      </section>
      {/* ----------student end ------------------------*/}

      {/* -----------silder start ----------*/}
      <section className='slider'>
        <div className='container'>
          <div className='d-flex'>
            <div className='left'>
              <div className='flex'>
                <span></span>
                <p>HAPPY STUDENTS</p>
              </div>
              <h1>ALUMNI SPEAK</h1>
              <div className='d-flex'>
                <i><BiSolidQuoteRight /></i>
                <div className='d-flex'>
                  <div><input type='submit' value="<"></input></div>
                  <div><input type='submit' value=">"></input></div>
                </div>
              </div>
              <p className='text'>Trainers are good and very supportive.
                creative multimedia institute provide lot
                of opportunities to get placed.I am happy to
                joined creative multimedia institute.
              </p>
              <div className='flex1'>
                <div className='circle'>
                  <img src={nilay}></img>
                </div>
                <div className='content'>
                  <h4 style={{ color: "#003366" }}>Nilay Rabadiya</h4>
                  <div className='d-flex'>
                    <p style={{ color: "rgb(255, 188, 6)", marginRight: "4px" }}>CEO</p>
                    <p>@ Techtical Solution</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='right'>
              <img src={student}></img>
              <img src={cav} className='cav'></img>
            </div>
          </div>
        </div>
      </section>
      {/* -----------silder End ----------*/}

      {/*------- why choose creative start----- */}

      <section className='choose'>
        <div className='container'>
          <div className="title">
            <div className='flex'>
              <span></span>
              <p>READ OUR DIFFERENCE</p>
            </div>
            <h1>WHY CHOOSE CREATIVE</h1>
          </div>
          <div className='grid'>
            {
              choose.map((ele, ind) => {
                return (
                  <div className='grid_box'>
                    <img src={ele.imge} style={{ backgroundColor: "#F6475F"}}></img>
                    <h2>{ele.head}</h2>
                    <p>{ele.para}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      {/*------- why choose creative end------- */}

      {/*------ student palcement start----- */}
      <section className='placement'>
        <div className='container'>
          <div className="title">
            <div className='flex'>
              <span></span>
              <p>STUDENT PLACEMENT</p>
            </div>
            <h1>OUR RECRUITMENT PARTNERS</h1>
          </div>
          <OwlCarousel className='owl-theme' items={6}  autoplay autoplayTimeout={2000} loop margin={10} nav dots={false}>
                    {
                        slider2.map((ele) => {
                            return (
                                <div class='item'>
                                    <img src={ele}></img>
                                </div>
                            )
                        })
                    }
                </OwlCarousel>

          <h2>Our Demanded Course -</h2>
          <div className='grid'>
            {
              Demanded.map((ele,ind)=>{
                return(
                  <p>{ele}</p>
                )
              })
            }
          </div>
        </div>
      </section>
      {/*------ student palcement end----- */}

      {/*------ footer start-------------- */}
      <footer>
        <div className='container'>
          <div className='footer'>
            <div className='first'>
              <img src={white}></img>
              <p>Creative Design and Multimedia Institute is leading
                computer training institute in surat.
                We offers government approved computer training courses in Surat.
              </p>
              <h3>FOLLOW US ON</h3>
              <div className="flex first_info">
                <i><TiSocialFacebook /></i>
                <i><IoLogoTwitter /></i>
                <i><FaGooglePlusG /></i>
                <i><FaLinkedin /></i>
                <i><FaInstagram /></i>
                <i><FaWhatsapp /></i>
                <i><FaYoutube /></i>
              </div>
            </div>
            <div className='second'>
              <p>FEATURE LINKS</p>
              <div className='content'>
                <p><i><FaHandPointRight /></i>About Us</p>
                <p><i><FaHandPointRight /></i>Blogs</p>
                <p><i><FaHandPointRight /></i>Join Us</p>
                <p><i><FaHandPointRight /></i>Company Login</p>
                <p><i><FaHandPointRight /></i>Certificate Verification</p>
              </div>
            </div>
            <div className='third'>
              <p>CONTACT US</p>
              <p style={{ color: "rgb(255, 188, 6)", fontSize: "17px" }}>HEAD OFFICE - YOGICHOWK</p>
              <p className='add'>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
              <div className='flex'>
                <p>Mo:-</p>
                <p style={{ color: "rgb(255, 188, 6)" }}>+91 90333 16003</p>
              </div>
              <p style={{ color: "rgb(255, 188, 6)", fontSize: "18px" }}>OTHER BRANCHES</p>
              <div className='content'>
                <p><i><FaUniversity /></i>Katargam</p>
                <p><i><FaUniversity /></i>Mota Varachha</p>
                <p><i><FaUniversity /></i>Adajan</p>
                <p><i><FaUniversity /></i>Navsari</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='footer_bottom'>
        <div className='container'>
          <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
        </div>
      </div>
      {/*------ footer end---------------- */}   
    </div>
  );
}

export default App;
