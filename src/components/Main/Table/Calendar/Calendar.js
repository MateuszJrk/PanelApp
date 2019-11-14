import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import moment from "moment";
import { DateRangePicker } from "react-dates";

class Calendar extends React.Component {
  state = {
    startDate: moment(),
    endDate: moment()
  };

  render() {
    return (
      <div className="ml-3 mt-3">
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          startDateId="unique_start_date_id"
          endDateId="unique_end_date_id"
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
          small={true}
        />
      </div>
    );
  }
}

export default Calendar;
