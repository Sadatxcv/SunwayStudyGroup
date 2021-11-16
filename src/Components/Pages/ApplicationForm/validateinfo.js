export default function validateinfo(values) {
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
  return error;
}