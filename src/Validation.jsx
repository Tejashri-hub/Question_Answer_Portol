const Validation = (values) => {
  let errors = {};
  if (!values.Username) {
    errors.Username = "Username is required.";
  }
  if (!values.Password) {
    errors.Password = "Password is required.";
  } else if (values.Password.length < 8) {
    errors.Password = "Password must be more the 8 characters.";
  }

  return errors;
};

export default Validation;