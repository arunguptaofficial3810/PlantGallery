"use client";
import React, { useState } from "react";
import style from "./style.module.scss";

const ContactForm = () => {
  const [value, setValue] = useState({
    name: "",
    mobile_number: "",
    message: "",
  });
  const isDisabled =
    value?.mobile_number?.length !== 10 ||
    !value?.message?.length ||
    !value?.name?.length;

  const handleChange = (targetValue: string, type: string) => {
    if (type === "name") {
      setValue((prev) => ({ ...prev, name: targetValue }));
    } else if (type === "mobile") {
      if (targetValue?.length > 10) return;
      setValue((prev) => ({ ...prev, mobile_number: targetValue }));
    } else if (type === "message") {
      setValue((prev) => ({ ...prev, message: targetValue }));
    } else {
      // const payload = {
      //     name : value?.name,
      //     mobile_number : value?.mobile_number,
      //     message : value?.message
      // }
      window.alert(
        "🌸 Thank you! Your message has been received — our team will be in touch soon."
      );
    }
  };

  return (
    <form
      className={style.form}
      onSubmit={() => handleChange("submit", "submit")}
    >
      <div className={style["form-field"]}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => handleChange(e.target.value, "name")}
          value={value?.name}
        />
      </div>
      <div className={style["form-field"]}>
        <label>Mobile number</label>
        <input
          type="number"
          placeholder="Enter your mobile number"
          onChange={(e) => handleChange(e.target.value, "mobile")}
          value={value?.mobile_number}
        />
      </div>
      <div className={style["form-field"]}>
        <label>Message</label>
        <textarea
          rows={6}
          placeholder="Enter your message"
          onChange={(e) => handleChange(e.target.value, "message")}
          value={value?.message}
        />
      </div>
      <button disabled={isDisabled} type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
