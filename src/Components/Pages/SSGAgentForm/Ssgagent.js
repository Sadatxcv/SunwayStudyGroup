import React, { useState } from "react";
import Applyagent from "./Applyagent";
import FormSuccess from "./FormSuccess";
import "./AgentForm.css";
import HeroSection from "../../HeroSection/HeroSection";
import { Button } from "../../Button/Button";
export default function Ssgagent() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <section>
        <div>
          <HeroSection
            herotitle="Be Our Global Partner"
            imgsrc="https://c0.wallpaperflare.com/preview/534/41/125/school-books-young-adult-education.jpg"
            imgalt="hero image"
            btnlink="/Home" //input link here to redirect to a page
          />
        </div>
        {/* <h1 className="Card">
          <h1 className="buttonContainer">
            {
              <Button buttonStyle="btn--inCard" buttonLink="/Login">
                {" "}
                <i class="fas fa-search"></i> Search Agent
              </Button>
            }
          </h1>
        </h1> */}
      </section>
      <div className="agentformlabel">
        <h1>Apply To Become An Agent</h1>
      </div>
      <section id="form" className="form-container">
        {!isSubmitted ? (
          <Applyagent submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        <div className="agent">
          <h1>Agent Policy</h1>
          <h2>Who are the Agents?</h2>
          <p>
            SSG is a Global Edu-Aid platform where you can grow your business,
            no matter which country you are applying from. If you already have
            your own business setup with total communication system, you can
            apply for being a Global Business Agent with SSG. And you will be
            empowered to refer students wishing to study abroad and can provide
            them advice and assistance. <br />
            <br />
            We also appreciate individual agents only for Bangladeshi
            Nationality. Your location does not matter, you can work with SSG as
            an individual agent from any corner on the globe and can gain
            benefits providing students.
          </p>
          <h2>How To become an Agent</h2>
          <p>
            <ul className="list">
              <li>Complete the form attached herewith.</li>
              <li>Provide the contact details of 2 (two) references.</li>
              <li>
                Provide proof of all updated business documents issued from the
                legal authorities of your country.
              </li>
              <li>Provide proof of professional recognitions.</li>
            </ul>
          </p>
          <h2>Confirmation Process</h2>
          <p>
            After receiving your application, one of our counsellors will
            evaluate your submitted documents and contact you within a short
            period of time. The standard processing time for an agent
            application is three to four weeks from the receipt of a completed
            application. If you do not provide all of the information required,
            your application may be delayed or declined.<br/><br/>
            At the approval of your application, we will:<br/><br/>
            <ul className="list">
              <li>send you the Agent Agreement for your signature, and</li>
              <li>request the signed Agreement to be returned for processing</li>
            </ul>
          </p>
        </div>
      </section>
    </>
  );
}
