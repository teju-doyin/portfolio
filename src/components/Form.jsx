import  { useState } from 'react';

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const[successMessage, setSuccessMessage] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formValues.name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formValues.email.trim()) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      formErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formValues.message.trim()) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted successfully!');
      setFormValues({
        name: '',
        email: '',
        message: '',
      });
      setErrors({});
      setSuccessMessage(true)
    }
  };

  return (
    <div className="rounded-t-3xl pt-4">
      <div className="mb-8 text-center">
        <p className="text-brown text-center font-medium">
          Have a project in mind? Write me so we can make something amazing.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mb-5 flex flex-col">
        {successMessage && <p className='text-pink mb-5'> Thank you for reaching out, I’ll be in touch soon! </p>}
        <div className="mb-3">
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full placeholder:text-brown placeholder:opacity-60 border border-brown text-brown outline-none rounded-sm p-2"
            />
            {errors.name && <p className="text-pink text-xs mt-1">{errors.name}</p>}
        </div>

        <div className="mb-3">
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full placeholder:text-brown placeholder:opacity-60 border border-brown text-brown outline-none rounded-sm p-2"
            />
            {errors.email && <p className="text-pink text-xs mt-1">{errors.email}</p>}
        </div>

        <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
          placeholder="Your message here"
          className="w-full outline-none placeholder:text-brown placeholder:opacity-60 text-brown border border-brown resize-none rounded-sm pt-2 pl-2 flex-grow"
          rows={3}
        ></textarea>
        {errors.message && <p className="text-pink text-xs mt-1">{errors.message}</p>}

        <button
          type="submit"
          className="ml-auto mt-5 block bg-pink text-white py-1.5 px-7 rounded-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
