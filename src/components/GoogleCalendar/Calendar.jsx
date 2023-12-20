import React from 'react'

const Calendar = () => {
  return (
    <div
          className="schedule"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "1rem",
          }}
        >
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1EETz6ot_qwrUVyS1SoXryFGwiVbG2x95K22gDuY4CVbJ1KHUqBRfEatmAd_TC_yjMB1cAE2eZ?gv=true"
            title="Google Scheduling Calendar"
            style={{
              border: "0",
              width: "60%",
              height: "600px",
              frameborder: "0",
              background: "rgb(242,242,242)",
              borderRadius: "5px",
            }}
          ></iframe>
          "
        </div>
  )
}

export default Calendar