import React from 'react'
import window from "../../../images/windows.svg"
import mac from "../../../images/mac.svg"
export default function Pc() {
  return (
    <div className="d-flex flex-column gap-4 justify-center align-center">
      <h3 className="font-md-18 black-color">دانلود اپلیکیشن:</h3>
      <button
        className="d-flex justify-center align-center gap-2 border-radius-5"
        style={{
          padding: "10px",
          border: "1px solid #aaaaaa",
          maxWidth: "440px",
        }}
      >
        <img src={window} alt="" />
        <p className="font-md-14 black-color font-12">ویندوز</p>
      </button>
      <button
        className="d-flex justify-center align-center gap-2 border-radius-5"
        style={{
          padding: "10px",
          border: "1px solid #aaaaaa",
          maxWidth: "440px",
        }}
      >
        <img src={mac} alt="" />
        <p className="font-md-14 black-color font-12">مک</p>
      </button>
    </div>
  );
}
