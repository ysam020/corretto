import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Select(props) {
  const { name, options, ...rest } = props;

  return (
    <div>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((values, i) => {
          const { option, key } = values;
          return (
            <option key={i} value={option}>
              {key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;
