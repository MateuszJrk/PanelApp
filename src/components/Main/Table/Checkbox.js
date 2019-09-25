import React from "react";

import { Field, reduxForm } from "redux-form";

const Checkbox = ({
  id,

  name,
  checked = false,
  onChange
}) => (
  <Field
    id={id}
    checked={checked}
    name={name}
    onChange={onChange}
    component="input"
    type="checkbox"
  />
);

export default reduxForm({
  form: "simple"
})(Checkbox);
