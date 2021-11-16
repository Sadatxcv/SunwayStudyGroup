import React, {useState} from 'react'
import ApplicationForm from './ApplicationForm'
import FormSuccess from "./FormSuccess";
import "./Application.css"

export default function Application() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
      setIsSubmitted(true);
    }
    return (
      <>
      <div>
      </div>
        <div className="form-container-application">
          {!isSubmitted ? (
            <ApplicationForm submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </>
    );
}
