import { React, useState } from "react";
import Layout from "../layout/nav";
import washingMachine from "../assets/images/machine1.png";
import Avatar from "../components/avatar";
import Footer from "../layout/footer";

const Booking = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    pickupAddress: "",
    deliveryAddress: "",
    pickupDateTime: "",
    deliveryDateTime: "",
    serviceType: "",
    instruction: "",
  });
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [successName, setSuccessName] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value});
  };

  const reset = () => {
    setForm({
      fullName: "",
      email: "",
      phoneNumber: "",
      pickupAddress: "",
      deliveryAddress: "",
      pickupDateTime: "",
      deliveryDateTime: "",
      serviceType: "",
      instruction: "",
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!form.fullName.trim()) {
      isValid = false;
      errors["fullName"] = "Please enter your full name";
    } else if (!/\S+@\S+\.\S+/.test(form.email.trim())) {
      isValid = false;
      errors["email"] = "Please enter a valid email address";
    } else if (!form.phoneNumber.trim()) {
      isValid = false;
      errors["phoneNumber"] = "Please enter your phone number";
    } else if (!form.serviceType.trim()) {
      isValid = false;
      errors["serviceType"] = "Please select a service type";
    }
    setError(errors);
    return isValid;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(form);
      setSuccess(true);
      setSuccessName(form.fullName);
      reset();
    }
  };

  return (
    <section className="wrapper">
      <Layout />
      <div className="booking">
        <header className="booking--header">
          <h1 className="booking--header__title">
            Laundry service request form
          </h1>
          <div className="booking--header__avatar">
            <Avatar
              image={washingMachine}
              alt="washing machine"
              style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
            />
          </div>
        </header>
        <div className="booking--container">
          <p className="booking--container__subtitle">
            Fill the form below to book a service with us
          </p>
          <form className="booking--container--form" onSubmit={submitForm}>
            <div className="booking--container--form__group">
              <label
                htmlFor="full-name"
                className="booking--container--form__group--label"
              >
                Full Name
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                className="booking--container--form__group--input"
                placeholder="full name"
                autoComplete="name"
                enterKeyHint="next"
                value={form.fullName}
                onChange={handleChange}
              />
              {error.fullName && (
                <p className="booking__container--form__error">
                  {error.fullName}
                </p>
              )}
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="email"
                className="booking--container--form__group--label"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="booking--container--form__group--input"
                placeholder="email (username@example.com)"
                autoComplete="email"
                enterKeyHint="next"
                value={form.email}
                onChange={handleChange}
              />
              {error.email && (
                <p className="booking__container--form__error">{error.email}</p>
              )}
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="phone-number"
                className="booking--container--form__group--label"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                className="booking--container--form__group--input"
                placeholder="phone number"
                autoComplete="tel"
                enterKeyHint="next"
                value={form.phoneNumber}
                onChange={handleChange}
              />
              {error.phoneNumber && (
                <p className="booking__container--form__error">
                  {error.phoneNumber}
                </p>
              )}
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="pickup-address"
                className="booking--container--form__group--label"
              >
                Pickup Address
              </label>
              <input
                type="text"
                name="pickup-address"
                id="pickup-address"
                enterKeyHint="next"
                autoComplete="pickup-address"
                className="booking--container--form__group--input"
                placeholder="street address"
                onChange={handleChange}
                value={form.pickupAddress}
              />
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="delivery-address"
                className="booking--container--form__group--label"
              >
                Delivery Address
              </label>
              <input
                type="text"
                name="delivery-address"
                id="delivery-address"
                enterKeyHint="next"
                autoComplete="delivery-address"
                className="booking--container--form__group--input"
                placeholder="street address"
                onChange={handleChange}
                value={form.deliveryAddress}
              />
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="pickup-date-time"
                className="booking--container--form__group--label"
              >
                Pickup Date and Time
              </label>
              <input
                type="datetime-local"
                name="pickup-date-time"
                id="pickup-date-time"
                className="booking--container--form__group--input"
                onChange={handleChange}
                value={form.pickupDateTime}
              />
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="delivery-date-time"
                className="booking--container--form__group--label"
              >
                Delivery Date and Time
              </label>
              <input
                type="datetime-local"
                name="delivery-date-time"
                id="delivery-date-time"
                className="booking--container--form__group--input"
                onChange={handleChange}
                value={form.deliveryDateTime}
              />
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="service-type"
                className="booking--container--form__group--label"
              >
                Service Type
              </label>
              <select
                name="service-type"
                id="service-type"
                className="booking--container--form__group--input"
                onChange={handleChange}
                value={form.serviceType}
              >
                <option value="">
                  choose a service ...
                </option>
                <option value="wash">Wash</option>
                <option value="iron">Iron</option>
                <option value="wash and iron">Wash and Iron</option>
              </select>
              {error.serviceType && (
                <p className="booking__container--form__error">
                  {error.serviceType}
                </p>
              )}
            </div>
            <div className="booking--container--form__check">
              <div className="booking--container--form__check--header">
                <h3 className="booking--container--form__check--header__title">
                  Important Instructions
                </h3>
                <p className="booking--container--form__check--header__subtitle">
                  Please read the following instructions carefully before
                  submitting your laundry.
                </p>
              </div>
              <div className="booking--container--form__check--content">
                <div className="booking--container--form__check--content__group">
                  <label className="booking--container--form__check--content__group__label">
                    <input
                      type="checkbox"
                      name="instruction"
                      id="instruction"
                      className="booking--container--form__check--content__group__label__checkbox"
                    />
                    <span className="booking--container--form__check--content__group__label__text">
                      Service days and turnaround time vary by location
                    </span>
                  </label>
                </div>
                <div className="booking--container--form__check--content__group">
                  <label
                    htmlFor="lost"
                    className="booking--container--form__check--content__group__label"
                  >
                    <input
                      type="checkbox"
                      name="lost"
                      id="lost"
                      className="booking--container--form__check--content__group__label__checkbox"
                      onChange={handleChange}
                      value={form.instruction}
                    />
                    <span className="booking--container--form__check--content__group__label__text">
                      Any lost item must be reported via email to within 5
                      business days.
                    </span>
                  </label>
                </div>
                <div className="booking--container--form__check--content__group">
                  <label
                    htmlFor="caution"
                    className="booking--container--form__check--content__group__label"
                  >
                    <input
                      type="checkbox"
                      name="caution"
                      id="caution"
                      className="booking--container--form__check--content__group__label__checkbox"
                    />
                    <span className="booking--container--form__check--content__group__label__text">
                      We request that customers remove items and empty pockets
                      prior to leaving their laundry with us as we cannot be
                      held responsible for damage of your garments from the left
                      items in pockets.
                    </span>
                  </label>
                </div>
                <textarea
                  className="booking--container--form__check--content__textarea"
                  name="instruction"
                  id="instruction"
                  placeholder="Please specify any special instructions or requests here"
                ></textarea>
              </div>
            </div>
            <button className="booking--container--form__cta">Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Booking;
