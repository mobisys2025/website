// Add a function to modify the inner HTML of the class
function modifyInnerHTML() {
  const manula_elements = document.querySelectorAll(".fc-list-event-time-manual");
  manula_elements.forEach(function (element) {
    const timeElement = element.querySelector(".fc-list-event-time");
    if (timeElement) {
      timeElement.innerHTML = "8:00am - 9:00am";
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
    // customButtons: {
    //   icsButton: {
    //     text: '.ics',
    //     click: function() {
    //       alert('clicked the custom button!');
    //     }
    //   }
    // },
    headerToolbar: {
      left: "title",
      center: "",
      right: "calendar,list",
    },
    // footerToolbar: {
    //   left: "",
    //   center: "",
    //   right: "icsButton",
    // },
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
      if (
        (arg.event.title === "Registration" ||
          arg.event.title === "Breakfast") &&
        arg.event.start &&
        arg.event.end.getMinutes() != 0
      ) {
        if (arg.view.type === "calendar") {
          return {
            html: `<div class="fc-event-main-frame"><div class="fc-event-time">8:00 - 9:00</div><div class="fc-event-title-container"><div class="fc-event-title fc-sticky">${arg.event.title}</div></div></div>`,
          };
        } else if (arg.view.type === "list") {
          modifyInnerHTML();
        }
      } else if (arg.event.groupId === "halfday-workshop") {
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
