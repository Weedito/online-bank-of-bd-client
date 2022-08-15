import React from "react";
import './NoticeFromBank.css';

const NoticeFromBank = () => {

  const bankNotice = {
    notice: "This is a sample scrolling text for our banking project that has scrolls texts to left.",
    date: "08.11.2023",
  };

  return (
    <div className="bankNotice">
      <marquee direction="left" className="text-white text-2xl text-center my-5">
        {bankNotice.notice}
      </marquee>
    </div>
  );
};

export default NoticeFromBank;
