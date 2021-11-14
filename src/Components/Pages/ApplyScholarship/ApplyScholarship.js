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
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam error,
          voluptas eaque consequatur in accusantium a quisquam, eos quos
          repellat cum porro nisi repudiandae quia adipisci. Aliquam nihil
          numquam corporis. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Harum quasi deserunt consequatur doloremque, nulla,
          exercitationem recusandae numquam dignissimos vero tenetur delectus!
          Sapiente aperiam molestias sint eveniet omnis accusamus nihil aliqua
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia hic
          nulla non alias! Enim, repellendus perspiciatis accusamus accusantium
          quaerat qui dignissimos laboriosam delectus, maxime pariatur nam
          facilis ipsum quae exercitationem expedita nobis illum neque suscipit
          iste quod est perferendis magnam aspernatur. Tempora recusandae quasi
          laudantium similique, consectetur voluptas minima necessitatibus
          doloribus, odit, quisquam minus a blanditiis. Veniam pariatur voluptas
          incidunt architecto beatae similique, ipsum commodi, itaque expedita
          possimus cum nam deleniti iusto? Libero, qui impedit debitis rem enim
          ex? Praesentium, ad, dolor non ut tempore ab blanditiis, beatae ipsum
          accusantium modi quas itaque! Fugiat vero obcaecati iste veritatis.
          Deserunt, laboriosam!
        </p>
      </span>
      <div className="form-container-schlr" >
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
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            repudiandae doloribus est, enim accusamus voluptatibus.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            placeat et enim illo sed! Earum, tenetur magnam dolorum architecto
            facilis libero!
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur obcaecati dolor blanditiis dolores officiis inventore
            unde ducimus quasi sunt totam laboriosam error, natus perferendis
            tempore, eaque quae voluptatem hic eum aspernatur? Modi iusto neque
            nisi hic quae facere assumenda ab laudantium quas iure totam eaque,
            rem amet necessitatibus magnam perspiciatis cupiditate inventore
            dolores numquam magni. Illum, velit. Dicta, doloremque perspiciatis!
          </li>
        </div>
        {!isSubmitted ? (
          <ApplyScholarshipForm submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
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
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            itaque id quod tempore.
          </li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            molestiae architecto sit natus voluptates corporis laboriosam, et
            magnam, excepturi vitae quasi veniam sed aliquam?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            ratione delectus atque, fuga sed quod libero eligendi sit rerum,
            voluptas provident, mollitia ab ut nihil earum fugiat ex accusamus
            esse.
          </li>
        </div>
      </div>
      <div className="bottom-sec-schlr">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius!
          Eius nulla expedita exercitationem vitae voluptatum velit ad magni,
          itaque doloribus hic, asperiores nam aperiam possimus. Eveniet rerum
          minus quis!
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          ratione praesentium aliquid at labore quam perspiciatis maxime ipsam
          nisi ipsum asperiores quidem officiis rerum numquam, suscipit vero rem
          quas consequuntur maiores repellendus atque assumenda fuga tempora!
          Accusamus saepe, repudiandae nam culpa illum repellendus id eos eius
          adipisci, quaerat nulla fugiat. <br /> <br /> Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Alias sed unde ipsum tenetur
          reprehenderit iure aliquam magnam, id non quas ad! Voluptatem
          inventore ad aperiam, id atque corrupti, similique laboriosam ratione
          necessitatibus mollitia consequuntur sed repellat sint blanditiis,
          earum facilis! Odio accusantium expedita et aut quibusdam eum nihil
          molestias, at labore quidem eaque necessitatibus consequuntur ea quia
          officiis deserunt! Ea amet ullam necessitatibus aspernatur
          exercitationem, illo non quidem explicabo iste. <br /> <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem culpa maxime saepe pariatur fuga consectetur. Dolore
          eveniet doloribus laborum non fugiat repudiandae deleniti autem eius.{" "}
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          magni corrupti aut saepe laudantium modi magnam, veritatis
          voluptatibus repellendus. Veniam id, vitae doloribus quod rerum nobis
          magnam mollitia! Commodi vitae eaque asperiores enim dicta.
          Accusantium?
        </p>
      </div>
    </>
  );
};
export default ApplyScholarship;
