import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { name, placeholder, ...rest } = props;

  return (
    <div>
      <Field placeholder={placeholder} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
