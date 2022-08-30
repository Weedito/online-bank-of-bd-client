import React from "react";

const InputField = ({ label, name, inputClasses, icon, placeholder, ...props }) => {
  return (
    <div className="w-full mt-5">
      <label>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="input w-full bg-indigo-50 border-slate-300"
      />
    </div>
  );
};

export default InputField;
