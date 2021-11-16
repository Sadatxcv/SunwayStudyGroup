import React from "react";
import "./Application.css";
import validate from "./validateinfo";
import useForm from "./useForm";

const ApplicationForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, error } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-application">
      <form className="form-application" onSubmit={handleSubmit}>
        <h1>Fill out the login information to Sign in.</h1>

        <div className="form-inputs-application">
          <label htmlFor="photo" className="form-label-application">Upload your passport-sized photo.</label>
          <input
            id="photo"
            type="file"
            name="photo"
            className="form-input-application"
            value={values.photo}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs-application">
          <label htmlFor="name" className="form-label-application">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input-application"
            placeholder="Full Name"
            value={values.name}
            onChange={handleChange}
          />
          {error.name && <p>{error.name}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Passport Number
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Passport Expire Date
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="nationality" className="form-label-application">
            Nationality
          </label>
          <input
            id="nationality"
            type="text"
            name="nationality"
            className="form-input-application"
            placeholder=""
            value={values.nationality}
            onChange={handleChange}
          />
          {error.nationality && <p>{error.nationality}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Religion
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Sex
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Date of Birth
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Place of Birth
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="group" className="form-label-application">
            Marital Status
          </label>
          <select
            id="group"
            type="text"
            name="group"
            className="form-input-application"
            value={values.loginType}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Admin">Admin</option>
            <option value="Agent">Agent</option>
          </select>
          {error.group && <p>{error.group}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Applicant Email
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Applicant Phone
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Homeland Address
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Home Phone Number
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Major Subject
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <h1>
          _____________________________________________
          <br />
          <br />
          Educational Background
        </h1>

        <h2>Educational History 1:</h2>
        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Institute Name
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Field/Program of study
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            From:
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            To:
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Obtained CGPA:
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <br />
        <br />
        <h2>Educational History 2:</h2>
        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Institute Name
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Field/Program of study
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            From:
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            To:
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Obtained CGPA:
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <h1>
          _____________________________________________
          <br />
          <br />
          Personal Details
        </h1>

        <div className="form-inputs-application">
          <label htmlFor="userPassword" className="form-label-application">
            Applicant Profession
          </label>
          <input
            id="userPassword"
            type="password"
            name="userPassword"
            className="form-input-application"
            value={values.userPassword}
            onChange={handleChange}
          />
          {error.userPassword && <p>{error.userPassword}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="userPassword" className="form-label-application">
            Mother Language
          </label>
          <input
            id="userPassword"
            type="password"
            name="userPassword"
            className="form-input-application"
            value={values.userPassword}
            onChange={handleChange}
          />
          {error.userPassword && <p>{error.userPassword}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="userPassword" className="form-label-application">
            Fathers Name
          </label>
          <input
            id="userPassword"
            type="password"
            name="userPassword"
            className="form-input-application"
            value={values.userPassword}
            onChange={handleChange}
          />
          {error.userPassword && <p>{error.userPassword}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="userPassword" className="form-label-application">
            Mothers Name
          </label>
          <input
            id="userPassword"
            type="password"
            name="userPassword"
            className="form-input-application"
            value={values.userPassword}
            onChange={handleChange}
          />
          {error.userPassword && <p>{error.userPassword}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="userPassword" className="form-label-application">
            Fathers Age
          </label>
          <input
            id="userPassword"
            type="password"
            name="userPassword"
            className="form-input-application"
            value={values.userPassword}
            onChange={handleChange}
          />
          {error.userPassword && <p>{error.userPassword}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="userPassword" className="form-label-application">
            Mothers Age
          </label>
          <input
            id="userPassword"
            type="password"
            name="userPassword"
            className="form-input-application"
            value={values.userPassword}
            onChange={handleChange}
          />
          {error.userPassword && <p>{error.userPassword}</p>}
        </div>


        <button className="form-input-apply-application" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default ApplicationForm;
