import React, { useState } from "react";
import ApplyScholarshipForm from "./ApplyScholarshipForm";
import FormSuccess from "./FormSuccess";
import "./ScholarshipForm.css";

export default function Ssgagent() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container-schlr">
        {!isSubmitted ? (
          <ApplyScholarshipForm submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
}
