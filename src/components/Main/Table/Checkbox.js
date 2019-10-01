import React from "react";

import { Field, reduxForm } from "redux-form";

class Checkbox extends React.Component {
  renderCheckbox({ input }) {
    return <input {...input} type="checkbox" />;
  }
  render() {
    console.log(this.props);
    return (
      <Field
        id={this.props.id}
        name="checkbox"
        component={this.renderCheckbox}
      />
    );
  }
}

export default reduxForm({
  form: "simple"
})(Checkbox);
