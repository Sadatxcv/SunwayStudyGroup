import React, { useState } from "react";
import ApplyScholarshipForm from "./ApplyScholarshipForm";
import FormSuccess from "./FormSuccess";
import "./ScholarshipForm.css";

export const ApplyScholarship = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <span className="top-sec-schlr">
        
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
          accusantium dolore consequuntur hic ipsum alias mollitia in ipsa,
          eligendi, odit fuga sint eveniet obcaecati dolorum eaque. Consectetur
          tenetur ipsum illo at iste, ex in sequi, aperiam suscipit sed
          necessitatibus non. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Distinctio tempore sint eos nemo commodi ratione
          <br /><br />
          ipsum laudantium rerum quas perspiciatis consequatur nulla provident
          dolore, illo iusto sapiente dicta accusantium ea aut voluptatum
          quisquam quos fugit! Reiciendis quisquam sequi commodi aliquam dolores
          delectus corporis tenetur a. Aliquid pariatur facilis vero nesciunt
          est vitae quasi quia consequatur tempora beatae eaque, ratione ex.
        </p>
      </span>
      <div className="form-container-schlr" >
        {!isSubmitted ? (
          <ApplyScholarshipForm submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}

        <div className="list-left">
          <h1>Lorem ipsum dolor sit.</h1>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            maxime illum molestias similique culpa nisi, eaque at ad facilis
            dolores reprehenderit voluptatibus distinctio assumenda id, nam
            repudiandae! Facere, repellat ipsum.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            doloremque corrupti iste eum exercitationem voluptatum nemo sed
            ducimus maxime quis.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos
            quod porro reiciendis pariatur, mollitia soluta aspernatur sint
            iusto?
          </li>
          
        </div>
        <div className="list-right">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos a
            neque commodi cum?
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            in alias eveniet facilis! Dolores laudantium iusto molestias.
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            labore quae esse necessitatibus tenetur? Obcaecati dolores
            laudantium nisi illo, mollitia harum?
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            numquam.
          </li>
          
        </div>
      </div>
      <div className="bottom-sec-schlr">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius!
          Ei
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          ratione praesentium aliquid at labore quam perspiciatis maxime ipsam
          nisillum repellendus id eos eius
          adipisci, quaerat nulla fugiat
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          magni corrupti aut saepe laudantium modi magnam, veritati
          Accusantium?
        </p>
      </div>
    </>
  );
};
export default ApplyScholarship;
