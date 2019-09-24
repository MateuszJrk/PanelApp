import React from "react";

const Checkbox = ({
  id,
  type = "checkbox",
  name,
  checked = false,
  onChange
}) => (
  <input
    id={id}
    type={type}
    checked={checked}
    name={name}
    onChange={onChange}
  />
);

export default Checkbox;
