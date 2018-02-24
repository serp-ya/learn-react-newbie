import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterDateArticles} from '../../ActionCreators';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import {formatDate, parseDate} from 'react-day-picker/moment';
import moment from 'moment';
import Helmet from 'react-helmet';
import 'react-day-picker/lib/style.css';

class Calendar extends Component {
  componentWillUnmount() {
    clearTimeout(this.timeout);
  };

  focusTo() {
    this.timeout = setTimeout(() => this.to.getInput().focus(), 0);
  };

  showFromMonth() {
    const {from, to} = this.props.filtersState.dateArticles;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  };

  handleFromChange = (from) => {
    this.props.filterDateArticles({from});
    if (!this.props.filtersState.dateArticles.to) {
      this.focusTo();
    }
  };

  handleToChange = (to) => {
    this.props.filterDateArticles({to});
    this.showFromMonth();
  };

  render() {
    const {from, to} = this.props.filtersState.dateArticles;
    const modifiers = {start: from, end: to};

    return (
      <div className="InputFromTo" style={{'paddingBottom': '30px'}}>
        <h3>Calendar</h3>
        <DayPickerInput
          value={from}
          placeholder="From"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          hideOnDayClick={false}
          dayPickerProps={{
            selectedDays: [from, {from, to}],
            disabledDays: {after: to},
            toMonth: to,
            modifiers,
            numberOfMonths: 2,
          }}
          onDayChange={this.handleFromChange}
        />
        {' '}
        —
        {' '}
        <span className="InputFromTo-to">
                  <DayPickerInput
                    ref={el => (this.to = el)}
                    value={to}
                    placeholder="To"
                    format="LL"
                    formatDate={formatDate}
                    parseDate={parseDate}
                    hideOnDayClick={false}
                    dayPickerProps={{
                      selectedDays: [from, {from, to}],
                      disabledDays: {before: from},
                      modifiers,
                      month: from,
                      fromMonth: from,
                      numberOfMonths: 2,
                    }}
                    onDayChange={this.handleToChange}
                  />
                </span>
        <Helmet>
          <style>
            {`
                          .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                            background-color: #f0f8ff !important;
                            color: #4a90e2;
                          }
                          .InputFromTo .DayPicker-Day {
                            border-radius: 0 !important;
                          }
                          .InputFromTo .DayPicker-Day--start {
                            border-top-left-radius: 50% !important;
                            border-bottom-left-radius: 50% !important;
                          }
                          .InputFromTo .DayPicker-Day--end {
                            border-top-right-radius: 50% !important;
                            border-bottom-right-radius: 50% !important;
                          }
                          .InputFromTo .DayPickerInput-Overlay {
                            width: 550px;
                          }
                          .InputFromTo-to .DayPickerInput-Overlay {
                            margin-left: -198px;
                          }
                    `}
          </style>
        </Helmet>
      </div>
    );
  }
}

export default connect((state) => (
  {filtersState: state.filtersState}
),
{filterDateArticles})
(Calendar);


export function checkDateFilter(selectedDates = {}, currentArticle = {}) {
  const articleDate = new Date(currentArticle.date);
  let fromCheck = true;
  let toCheck = true;

  if (selectedDates.from) {
    fromCheck = articleDate > selectedDates.from;
  }

  if (selectedDates.to) {
    toCheck = articleDate < selectedDates.to;
  }

  return fromCheck && toCheck;
}