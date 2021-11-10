import React, { useState } from "react";
import Applyagent from "./Applyagent";
import FormSuccess from "./FormSuccess";
import "./AgentForm.css";
import HeroSection from "../../HeroSection/HeroSection";
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
            herotitle="cat"
            imgsrc="https://c0.wallpaperflare.com/preview/534/41/125/school-books-young-adult-education.jpg"
            imgalt="yo sup?"
          />
        </div>
        <span className="top-sec">
          <div className="text1">
            <h1>Why Join Us?</h1>
            <p>
              Sunway Study group friendly agent platform. Our
              Agents/Partners/Associate can enjoy various services. Both
              Individual and Business agent. Persons and company have gre
              opportunity to recruiting students to having theirs country. Digi
              Edu Pro always welcome our global partners.
            </p>
            <h1>Risk Free Apply</h1>
            <p>
              Agents whether individuals or business will enjoy risk-free
              applications for 2021. If unfortunately, admission does not go
              success, our partners will get back 100% refund. So individual
              agents who have no business experience and lack of financial
              capability can start international students recruiting from their
              country and easy to take small challenges. Besides our business
              agent also can be confident with their prospective students not to
              losing any money for processing.
            </p>
            <h1>Business Development</h1>
            <p>
              Individual agent also can develop their business and can earn
              mentionable profit. Individual and Business agent both they can
              cooperate with us base on commission or rate per students. As per
              numbers of students can enjoy different service fees. Establish
              yourself as a successful in business.
            </p>
            <h1>Extensive Supports</h1>
            <p>
              Agents will get free consultancy supports for documentation
              +Admission + Scholarship. Business agents will get authorisation
              letters and can arrange spot admission to arrange Visit university
              personnel. Sunway Study Group documentation to registration in
              university after visa. Strength to apply more than 300
              Universities in China.
            </p>
          </div>
          <div>
            <img
              className="top-img"
              src="https://images.pexels.com/photos/1837590/pexels-photo-1837590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Study img"
            />
          </div>
        </span>
      </section>
      <div className="agentformlabel">
        <h1>Growing With Sunway Study Group</h1>
      </div>
      <section className="form-container">
        <div className="agent">
          <h1>Individual Agent</h1>
          <h2>Who is Individual Agent?</h2>
          <p>
            A single human being as distinct from a group or company who have no
            opportunities to open business or no have sufficient time as a
            students or job holder in any countries in the world.
          </p>
          <h2>Everybody Can Join</h2>
          <p>
            No matter your location or countries whether you have experience or
            not. Any person can work with Us as an individual agent and can
            provide students as much as he/she can. We always appreciate
            Individual agent to grow with Digi Edu Pro @ Study in China.
          </p>
          <h2>No Issues With Working Time</h2>
          <p>
            Whenever you have time can promote our offers in social media and
            different apps to let know prospective students about our offers.
          </p>
          <h2>Earning as a Students or Occupied in Any Professions</h2>
          <p>
            There are 2 ways you can work with Digi Edu Pro, 1. Commission Base:
            Digi Edu Pro will provide Certain percentage of commission as per
            students number and Digi Edu Pro will provide full Consultancy
            supports as well for your students. 2. Rate Basis: you can charge
            your students on Application, Admission , Scholarship and earn your
            profit by paying us certain service fee.
          </p>
        </div>
        {!isSubmitted ? (
          <Applyagent submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        <div className="agent">
          <h1>Business Agent</h1>
          <h2>Who is Individual Agent?</h2>
          <p>
            A single human being as distinct from a group or company who have no
            opportunities to open business or no have sufficient time as a
            students or job holder in any countries in the world.
          </p>
          <h2>Everybody Can Join</h2>
          <p>
            No matter your location or countries whether you have experience or
            not. Any person can work with Us as an individual agent and can
            provide students as much as he/she can. We always appreciate
            Individual agent to grow with Digi Edu Pro @ Study in China.
          </p>
          <h2>No Issues With Working Time</h2>
          <p>
            Whenever you have time can promote our offers in social media and
            different apps to let know prospective students about our offers.
          </p>
          <h2>Earning as a Students or Occupied in Any Professions</h2>
          <p>
            There are 2 ways you can work with Digi Edu Pro, 1. Commission Base:
            Digi Edu Pro will provide Certain percentage of commission as per
            students number and Digi Edu Pro will provide full Consultancy
            supports as well for your students. 2. Rate Basis: you can charge
            your students on Application, Admission , Scholarship and earn your
            profit by paying us certain service fee.
          </p>
        </div>
      </section>
      <section className="bottomtext">
        <h1>Simple Ways to Work With us as a Partner</h1>
        <h2>Be SSG Agent </h2>
        <p1>
          We appreciate you to fill up the agents form whether Individual or
          Business and register with Digi Edu Pro as well as submit your
          business documents. After evaluating documents our consultants will
          communicate short span of time. some cases if needed sign and
          agreement specially for business agent we will do subjective on
          negotiation.
        </p1>
        <h2>Start Application Process</h2>
        <p1>
          You can apply your students documents over our online system or send
          documents by email . After uploading or sending email please don’t
          forget to confirm your consultant. Of Digi Edu Pro If you have any
          problem with students documentation always keep in touch with
          consultants he/she always ready to guide. Applying part is very
          important to get success for admission. So our partners have to be
          always responsible for this.
        </p1>
        <h2>Pay Application Processing Fee</h2>
        <p1>
          Upon checking documents if everything is ok our consultants will ask
          to pay fee which may vary subjective of schools. After receiving fee
          consultant will submit application in school as per your students
          required majors . wait until admission result out after evaluating by
          university admission office. Your consultant will update you on time
          during all process. Unfortunately If admission not goes success ,you
          will get back 100% application processing fee for the year 2021.
        </p1>
        <h2>Pay Service fee Upon Admission</h2>
        <p1>
          After admission you need to pay service fee. Upon receiving payment
          our Digi Edu Pro office or University will send Original Admission
          Letter + JW form by courier which need to submit embassy to obtain
          chinese student visa.
        </p1>
      </section>
    </>
  );
}
