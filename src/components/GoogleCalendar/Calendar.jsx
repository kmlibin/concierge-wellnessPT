import React from "react";
import "./Calendar.scss";

const Calendar = () => {
  return (
    <div className="schedule">
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1EETz6ot_qwrUVyS1SoXryFGwiVbG2x95K22gDuY4CVbJ1KHUqBRfEatmAd_TC_yjMB1cAE2eZ?gv=true"
        title="Google Scheduling Calendar"
        className="calendar-container"
        style={{
          frameborder: "0",
        }}
      ></iframe>
      "
    </div>
  );
};

export default Calendar;
