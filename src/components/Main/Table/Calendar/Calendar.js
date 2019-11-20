import React from "react";
import { connect } from "react-redux";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import { DateRangePicker } from "react-dates";
import {
  setStartDate,
  setEndDate
} from "../../../../redux/actions/dataActions";

class Calendar extends React.Component {
  state = {
    focusedInput: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    console.log(startDate, endDate);
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div className="ml-3 mt-3">
        <DateRangePicker
          startDate={this.props.data.startDate} // momentPropTypes.momentObj or null,
          endDate={this.props.data.endDate} // momentPropTypes.momentObj or null,
          startDateId="unique_start_date_id"
          endDateId="unique_end_date_id"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
          small={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { data: state.data };
};

export default connect(mapStateToProps)(Calendar);
