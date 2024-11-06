import React, { useState } from 'react';
import '../css/Home.css';
import { question } from '../data/FAQ';
import BL from '../assets/banner-l-img.jpg'
import BR1 from '../assets/banner-r-img1.jpeg';
import BR2 from '../assets/banner-r-img2.jpeg';
import S1D from '../assets/sec1-findDoctor.jpeg';
import S1L from '../assets/sec1-findLocation.jpg';
import S1BA from '../assets/sec1-bookAppointment.jpg';
import S2D from '../assets/sec2-docimg.jpeg';
import S4FAQ from '../assets/sec4-faqImg.jpg';
import S5PS from '../assets/sec5-docImg.jpg';
import S5St from '../assets/sec5-stars.jpg';
const Home = () => {
 let [showans, setshowans] = useState(question[0].id);
 return (
  <>
   <div className='home-parent'>
    <div className='banner-container'>
     <div className='banner-content-container'>
      <div className='content'>
       <h1>We help patients live a healthy,<br />longer life</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrum enim aliquam? Accusamus asperiores provident voluptate, nostrum debitis vel aspernatur, ab obcaecati corrupti illum laborum ipsam quam omnis.</p>
       <button>Request an Appointment</button>
      </div>
      <div className='banner-ratio'>
       <div id='ratio-1'>
        <h2>30 +</h2>
        <p>Year of Experience</p>
       </div>
       <div id='ratio-2'>
        <h2>15 +</h2>
        <p>Clinic Location</p>
       </div>
       <div id='ratio-3'>
        <h2>100 %</h2>
        <p>Patient Satisfication</p>
       </div>
      </div>
     </div>
     <div className='banner-img-container'>
      <div className="img-container">
       <div className="left-img">
        <img src={BR1} alt="img-left" />
       </div>
       <div className="right-img">
        <div id="r-img-1">
         <img src={BL} alt="img-right" />
        </div>
        <div id="r-img-2">
         <img src={BR2} alt="img-right" />
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className="sec1-services-parent">
     <div className="sec1-content">
      <h2>Providing the best medical services</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit libero dolor tenetur suscipit corrupti saepe ad quidem aperiam hic delectus?
      </p>
     </div>
     <div className="sec1-cards">
      <div className="sec1-card1">
       <img src={S1D} alt="img-card" />
       <h3>Find a Doctor</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque nam dolor beatae assumenda totam.</p>
      </div>
      <div className="sec1-card2">
       <img src={S1L} alt="img-card" />
       <h3>Find a Location</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque nam dolor beatae assumenda totam.</p>
      </div>
      <div className="sec1-card3">
       <img src={S1BA} alt="img-card" />
       <h3>Book Appointment</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque nam dolor beatae assumenda totam.</p>
      </div>
     </div>
    </div>
    <div className="sec2-doctors">
     <div className="sec2-img-container">
      <img src={S2D} alt="sec2-img" />
     </div>
     <div className="sec2-content">
      <h2>Proud to be one of the nations best</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iusto inventore aliquam accusantium molestias iure eos cum, sequi consequatur rerum autem quo, quibusdam repudiandae assumenda.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iusto inventore aliquam accusantium molestias iure eos cum, sequi consequatur rerum autem quo, quibusdam repudiandae assumenda.</p>
      <button>Learn more</button>
     </div>
    </div>
    <div className="sec3-medical-services">
     <div className="sec3-content">
      <h2>Our medical services</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit libero dolor tenetur suscipit corrupti saepe ad quidem aperiam hic delectus?
      </p>
     </div>
     <div className="sec3-cards">
      <div className="sec3-card1">
       <h3>Cancer Care</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque nam dolor beatae assumenda totam.</p>
      </div>
      <div className="sec3-card2">
       <h3>Labor & Delivery</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque nam dolor beatae assumenda totam.</p>
      </div>
      <div className="sec3-card3">
       <h3>Heart & Vascular</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque nam dolor beatae assumenda totam.</p>
      </div>
      <div className="sec3-card4">
       <h3>Mental Health</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque nam dolor beatae assumenda totam.</p>
      </div>
      <div className="sec3-card5">
       <h3>Neurology</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque nam dolor beatae assumenda totam.</p>
      </div>
      <div className="sec3-card6">
       <h3>Burn Treatment</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque nam dolor beatae assumenda totam.</p>
      </div>
     </div>
    </div>
    <div className="sec4-FAQ">
     <div className="sec4-img-container">
      <img src={S4FAQ} alt="sec4-img" />
     </div>
     <div className="sec4-content">
      <h2>Most questions by our beloved patients</h2>
      <div className="sec4-faq-content">
       {question.map((faqItems, i) => {
        return (
         <div className="sec4-faqItems">
          <h3 onClick={() => setshowans(faqItems.id)}>{faqItems.ques}</h3>
          <p className={showans === faqItems.id ? "activeAns" : ""}>{faqItems.anws}</p>
         </div>
        )})}
      </div>
     </div>
    </div>

    <div className="sec5-patient-say">
     <div className="sec5-content">
      <h2>What our patient say</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit libero dolor tenetur suscipit corrupti saepe ad quidem aperiam hic delectus?
      </p>
     </div>
     <div className="sec5-cards">
      <div className="sec5-card1">
       <div className='sec5-img-container'>
        <img src={S5PS} alt="sec5-img" />
        <div>
         <h4>Muhmmad Sarfraz</h4>
         <img src={S5St} alt="stars" id="sec5-stars" />
        </div>
       </div>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque nam dolor beatae assumenda totam.</p>
      </div>
      <div className="sec5-card2">
       <div className='sec5-img-container'>
        <img src={S5PS} alt="sec5-img" />
        <div>
         <h4>Muhmmad Sarfraz</h4>
         <img src={S5St} alt="stars"  id="sec5-stars"/>
        </div>
       </div>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque nam dolor beatae assumenda totam.</p>
      </div>
      <div className="sec5-card3">
       <div className='sec5-img-container'>
        <img src={S5PS} alt="sec5-img" />
        <div>
         <h4>Muhmmad Sarfraz</h4>
         <img src={S5St} alt="stars"  id="sec5-stars"/>
        </div>
       </div>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque nam dolor beatae assumenda totam.</p>
      </div>  
     </div>
    </div>

















   </div>
  </>
 )
}

export default Home
