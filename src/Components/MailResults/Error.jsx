import React from "react";
import errorface from "../../assets/Error-emoji.svg";

const Error = ({errorOnClick}) => {
  return (
    <div className="mail-res">
      <img src={errorface}></img>
      <h3>Oops!</h3>
      <p>Something went wrong. </p>
      <p>We couldn't send your message</p>
      <button onClick={()=>errorOnClick()}>Try again</button>
    </div>
  );
};

export default Error;
