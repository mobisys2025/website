// Add a function to modify the inner HTML of the class
function modifyInnerHTML() {
  const manual_elements = document.querySelectorAll(".fc-reg-breakfast-time-manual");
  manual_elements.forEach(function (element) {
    const timeElement = element.querySelector(".fc-list-event-time");
    if (timeElement) {
      timeElement.innerHTML = "7:45am - 9:00am";
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
    return window.innerWidth < 768 ? "day" : "calendar";
  }

  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: "America/Los_Angeles",
    initialView: getInitialView(),
    titleFormat: () => "Program",
    views: {
      calendar: {
        type: "timeGrid",
      },
      list: {
        type: "listWeek",
        duration: { days: 5 },
      },
      day: {
        type: "timeGridDay"
      }
    },
    visibleRange: {
      start: "2025-06-23",
      end: "2025-06-28",
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
      left: "calendar,list,day",
      center: "",
      right: "icsButton",
    },
    footerToolbar: false,
    navLinks: true,
    nowIndicator: true,
    editable: false,
    selectable: true,
    dayMaxEvents: false,
    height: "auto",
    contentHeight: "auto",
    slotEventOverlap: false,
    fixedWeekCount: true,
    showNonCurrentDates: true,
    nextDayThreshold: "00:00:00",
    dateClick: function (info) {
      return false;
    },
    navLinks: false,
    dragScroll: false,
    allDaySlot: true,
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
            html: `<div class="fc-event-main-frame"><div class="fc-event-time">7:45 - 9:00</div><div class="fc-event-title-container"><div class="fc-event-title fc-sticky">${arg.event.title}</div></div></div>`,
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
    slotMinTime: "07:30:00",
    slotMaxTime: "20:30:00",
    slotDuration: "00:30:00",
    snapDuration: "00:30:00",
    slotLabelInterval: "00:30:00",
    slotLabelFormat: {
      hour: 'numeric',
      minute: '2-digit',
      omitZeroMinute: true,
      meridiem: 'short'
    },
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

  calendar.render();
});
