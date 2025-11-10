import React from "react";
import style from "./style.module.scss";
import CustomerReviewCarousal from "../CustomerReviewCarousal/page";

const CustomerReview = () => {  
  return (
    <div className={`${style.customerReview} container`}>
      <p className={style.title}>What Our Customers Says</p>
        <CustomerReviewCarousal />
    </div>
  );
};

export default CustomerReview;
