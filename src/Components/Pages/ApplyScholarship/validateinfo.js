export default function validateinfo(values) {
  let error = {};

  if (!values.name.trim()) {
    error.name = "Name required!";
  }

  if (values.degreeObtained === "") {
    error.degreeObtained = "Value for Degree required!";
  }
  if (values.englishProficiency === "") {
    error.englishProficiency = "Value for English Proficiency required!";
  }
  if (!values.bachelors.trim()) {
    error.bachelors =
      "Type N/A is you are applying for Masters, otherwise required.";
  }
  if (!values.masters.trim()) {
    error.masters =
      "Type N/A is you are applying for Bachelors, otherwise required.";
  }
  if (values.avgGrade === "") {
    error.avgGrade = "Average Grade Required!";
  }
  if (values.studyBudget === "") {
    error.studyBudget = "Average Grade Required!";
  }
  if (values.nationality === "") {
    error.nationality = "Nationality required!";
  }
  if (values.dateofbirth === "") {
    error.dateofbirth = "Date of birth required!";
  }
  if (!values.email) {
    error.email = "Email Required!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    error.email = "Email address is invalid!";
  }
  if (!values.phoneno.trim()) {
    error.phoneno = "Phone number required!";
  }
  return error;
}
