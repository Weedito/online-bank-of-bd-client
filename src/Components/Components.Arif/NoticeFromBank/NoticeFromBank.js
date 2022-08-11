import React from "react";
import './NoticeFromBank.css';

const NoticeFromBank = () => {

  const bankNotice = {
    notice: "This is a sample scrolling text for our banking project that has scrolls texts to left.",
    date: "08.11.2023",
  };

  return (
    <div className="bankNotice mt-20">
      <h6 className="text-white pt-5 text-4xl">Notice From Bank</h6>
      <marquee direction="left" className="mt-8 mb-4 text-white lg:w-4/5">
        {bankNotice.notice}
      </marquee>
    </div>
  );
};

export default NoticeFromBank;
