import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject:"",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  //custom validation msg
  const validateForm = (name, value) => {
    switch (name) {
      case "name":
        if (!value) {
          return "Name is required";
        } else if (value.length >= 30) {
          return "Name is too Long.";
        }
        break;
      case "email":
        if (!value) {
          return "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          return "Email is invalid";
        }
        break;
        case "subject":
          if (!value) {
            return "Subject is required";
          } else if (value.length >= 30) {
            return "Subject is too Long";
          }
          break;
          case "message":
            if (!value) {
              return "message is required";
            } else if (value.length >= 300) {
              return "message is too Long";
            }
            break;
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: validateForm(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateForm(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setFormErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form data submitted:", formData);
      // Submit form logic
    }
  };

  return (
    <div className="container mx-auto py-10 flex justify-between items-center">
      <div className="flex-1">
        <h1 className="h1">Contact us </h1>
        <p><span>mail:</span> <span>yomail@mail.com</span></p>
        <p><span>mail:</span> <span>yomail@mail.com</span></p><p><span>mail:</span> <span>yomail@mail.com</span></p><p><span>mail:</span> <span>yomail@mail.com</span></p>
      </div>
      <div className="flex-1 shadow-lg p-5 rounded-xl">
        <form action="">
          <div className="mt-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none ${
                formErrors.name ? "border-orange-500" : "border-yellow-300"
              }`}
              placeholder="Jhon Doe"
            />
            {formErrors.name && (
              <p className="text-orange-500 text-xs italic">
                {formErrors.name}
              </p>
            )}
          </div>
          {/* email */}
          <div className="mt-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none ${
                formErrors.email ? "border-orange-500" : "border-yellow-300"
              }`}
              placeholder="sample@email.com"
            />
            {formErrors.email && (
              <p className="text-orange-500 text-xs italic">
                {formErrors.email}
              </p>
            )}
          </div>
          {/* subject */}
          <div className="mt-4">
            <label htmlFor="subject">subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none ${
                formErrors.subject ? "border-orange-500" : "border-yellow-300"
              }`}
              placeholder="Subject"
            />
            {formErrors.subject && (
              <p className="text-orange-500 text-xs italic">
                {formErrors.subject}
              </p>
            )}
          </div>
          {/* textarea */}
          <div className="mt-4">
            <label htmlFor="textarea">Message</label>
            <textarea
              type="textarea"
              name="message"
              id="textarea"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none ${
                formErrors.message ? "border-orange-500" : "border-yellow-300"
              }`}
              placeholder="Your message"
            />
            {formErrors.message && (
              <p className="text-orange-500 text-xs italic">
                {formErrors.message}
              </p>
            )}
          </div>
          <button onClick={handleSubmit} className="btn hover:bg-orange-400" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
