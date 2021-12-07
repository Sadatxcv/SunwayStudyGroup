export default function LogInValidateinfo(values) {
  let error = {};

  if (values.group === "") {
    error.group = "Group type required!";
  }
  if (!values.userID.trim()) {
    error.userID = "ID required!";
  }
  if (!values.userPassword.trim()) {
    error.userPassword = "Password required!";
  }
  if (!values.name.trim()) {
    error.name = "Name required!";
  }
  if (values.country === "") {
    error.country = "Country required!";
  }
  if (!values.email) {
    error.email = "Email Required!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    error.email = "Email address is invalid!";
  }
  if (!values.phoneno.trim()) {
    error.phoneno = "Phone number required!";
  }
  if (!values.password.trim()) {
    error.password = "Password required!";
  }
  if (values.confirmPassword != values.password) {
    error.confirmPassword = "Password dont match!";
  }
  return error;
}