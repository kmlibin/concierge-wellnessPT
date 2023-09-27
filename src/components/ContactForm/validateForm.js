const validateForm = (formData, setFormErrors) => {
    let errors = {};
    let formIsValid = true;

    if (!formData.name) {
      formIsValid = false;
      errors["username"] = "*Please enter your name";
    }

    if (!formData.email) {
      formIsValid = false;
      errors["email"] = "*Please enter your email";
    }

    if (formData.email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const isValidEmail = emailPattern.test(formData.email);
      if (!isValidEmail) {
        formIsValid = false;
        errors["email"] = "*Please enter a valid email";
      }
    }

    if (!formData.phone) {
      formIsValid = false;
      errors["number"] = "*Please enter your phone number";
    }

    if (!formData.preferredContactMethod) {
      formIsValid = false;
      errors["contactMethod"] = "*Please make a selection";
    }

    if (!formData.message) {
      errors["message"] = "*Please provide information";
    }

    setFormErrors(errors);
    return formIsValid;
  };

  export default validateForm