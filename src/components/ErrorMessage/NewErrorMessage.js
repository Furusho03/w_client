import React from "react";
import { removeNewError } from "../../store/actions/errors";

const removeErrorHandler = () => {
  console.log("remove")
  removeNewError()
}

const NewErrorMessage = (errors) => {
  console.log("NewErrorMessage", errors.errors);
  return (
    <div className="NewErrorMessage-list">
      {errors.errors.message.map((m, i) => (
        <div onClick={removeErrorHandler} className="NewErrorMessage-item" key={i}>{m.msg}</div>
      ))}
    </div>
  );
};

export default NewErrorMessage;
