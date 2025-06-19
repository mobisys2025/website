// Add a function to modify the inner HTML of the class
function modifyInnerHTML() {
  const manual_elements = document.querySelectorAll(".fc-reg-breakfast-time-manual");
  manual_elements.forEach(function (element) {
    const timeElement = element.querySelector(".fc-list-event-time");
    if (timeElement) {
      timeElement.innerHTML = "8:00am - 9:00am";
    }
  });
  const n2women_elements = document.querySelectorAll(".fc-n2women-time-manual");
  n2women_elements.forEach(function (element) {
    const listElement = element.querySelector(".fc-list-event-time");
    if (listElement) {
      listElement.innerHTML = "10:00am - 12:30pm";
    }
  });
  const rising_stars_elements = document.querySelectorAll(".fc-rising-stars-time-manual");
  rising_stars_elements.forEach(function (element) {
    const listElement = element.querySelector(".fc-list-event-time");
    if (listElement) {
      listElement.innerHTML = "11:10am - 12:10pm";
    }
  });
  const halfday_elements = document.querySelectorAll(".fc-event-time-halfday");
  halfday_elements.forEach(function (element) {
    const timeElement = element.querySelector(".fc-list-event-time");
    if (timeElement) {
      timeElement.innerHTML = "Half-day (morning)";
    }
  });
  const fullday_elements = document.querySelectorAll(".fc-event-time-fullday");
  fullday_elements.forEach(function (element) {
    const timeElement = element.querySelector(".fc-list-event-time");
    if (timeElement) {
      timeElement.innerHTML = "Full-day";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  function getInitialView() {
    return window.innerWidth < 768 ? "list" : "calendar";
  }

  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: "America/Los_Angeles",
    initialView: getInitialView(),
    titleFormat: () => "Program",
    views: {
      calendar: {
        type: "timeGrid",
        duration: { days: 5 },
      },
      list: {
        type: "listWeek",
        duration: { days: 5 },
      },
    },
    visibleRange: {
      start: "2025-06-23",
      end: "2025-06-27",
    },
    customButtons: {
      icsButton: {
        text: 'iCalendar',
        click: function() {
          const link = document.createElement('a');
          link.href = 'mobisys25_program.ics';
          link.download = 'mobisys25_program.ics';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    },
    headerToolbar: {
      left: "calendar,list",
      center: "",
      right: "icsButton",
    },
    footerToolbar: false,
    navLinks: true,
    editable: false,
    selectable: true,
    dayMaxEvents: false,
    height: "auto",
    contentHeight: "auto",
    slotEventOverlap: false,
    fixedWeekCount: false,
    showNonCurrentDates: false,
    nextDayThreshold: "00:00:00",
    dateClick: function (info) {
      return false;
    },
    navLinks: false,
    dragScroll: false,
    allDaySlot: true,
    slotDuration: "01:00:00",
    snapDuration: "01:00:00",
    eventOrder: function (a, b) {
      const currentView = calendar.view.type;
      const groups = ["iot-day", "n2women", "rising_stars"];
      const aGroupIndex = groups.indexOf(a.groupId);
      const bGroupIndex = groups.indexOf(b.groupId);
      
      if (currentView === "calendar") {
        if (aGroupIndex === -1 || bGroupIndex === -1) return 0;
        if (aGroupIndex === bGroupIndex) return 0;
        else if (aGroupIndex < bGroupIndex) return -1;
        else return 1;
      } else if (currentView === "list") {
        if (a.start < b.start) return -1;
        else if (a.start > b.start) return 1;

        if (aGroupIndex === -1 || bGroupIndex === -1) return 0;
        if (aGroupIndex === bGroupIndex) return 0;
        else if (aGroupIndex < bGroupIndex) return -1;
        else return 1;
      }
      return 0;
    },
    eventContent: function (arg) {
      if (arg.event.id === "registration_23" || arg.event.id === "breakfast_23") {
        if (arg.view.type === "calendar") {
          return {
            html: `<div class="fc-event-main-frame"><div class="fc-event-time">8:00 - 9:00</div><div class="fc-event-title-container"><div class="fc-event-title fc-sticky">${arg.event.title}</div></div></div>`,
          };
        } else if (arg.view.type === "list") {
          modifyInnerHTML();
        }
      } else if (arg.event.id === "n2women_poster_session") {
        if (arg.view.type === "calendar") {
          return {
            html: `<div class="fc-event-main-frame"><div class="fc-event-time">10:00 - 12:30</div><div class="fc-event-title-container"><div class="fc-event-title fc-sticky">${arg.event.title}</div></div></div>`,
          };
        } else if (arg.view.type === "list") {
          modifyInnerHTML();
        }
      } else if (arg.event.id === "rising_stars_session_2") {
        if (arg.view.type === "calendar") {
          return {
            html: `<div class="fc-event-main-frame"><div class="fc-event-time">11:10 - 12:10</div><div class="fc-event-title-container"><div class="fc-event-title fc-sticky">${arg.event.title}</div></div></div>`,
          };
        } else if (arg.view.type === "list") {
          modifyInnerHTML();
        }
      }
      
      if (arg.event.groupId === "halfday-workshop") {
        if (arg.view.type === "calendar") {
          return {
            html: `<div class="fc-event-main-frame"><div class="fc-event-time">Half-day in the morning</div><div class="fc-event-title-container"><div class="fc-event-title fc-sticky">${arg.event.title}</div></div></div>`,
          };
        } else if (arg.view.type === "list") {
          modifyInnerHTML();
        }
      } else if (arg.event.groupId === "fullday-workshop") {
        if (arg.view.type === "calendar") {
          return {
            html: `<div class="fc-event-main-frame"><div class="fc-event-time">Full-day</div><div class="fc-event-title-container"><div class="fc-event-title fc-sticky">${arg.event.title}</div></div></div>`,
          };
        } else if (arg.view.type === "list") {
          modifyInnerHTML();
        }
      }
      return true;
    },
    validRange: {
      start: "2025-06-23",
      end: "2025-06-28",
    },
    slotMinTime: "08:00:00",
    slotMaxTime: "21:00:00",
    events: {
      url: "full_program.json",
      extraParams: function () {
        return {
          dynamic_value: Math.random(),
        };
      },
    },
    viewDidMount: function (info) {
      modifyInnerHTML();
    },
  });

  // Add window resize event listener to handle responsive view changes
  window.addEventListener("resize", function () {
    const newView = window.innerWidth < 768 ? "list" : "calendar";
    if (newView !== calendar.view.type) {
      calendar.changeView(newView);
    }
  });

  calendar.render();
});
