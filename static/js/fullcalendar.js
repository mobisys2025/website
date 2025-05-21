document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  // Function to determine the initial view based on screen size
  function getInitialView() {
    return window.innerWidth < 768 ? "list" : "calendar";
  }

  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'America/Los_Angeles',
    initialView: getInitialView(),
    schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
    titleFormat: () => "Program", // Global setting to force title to be "Program"
    viewTitle: "Program", // Custom property for view title
    views: {
      calendar: {
        type: "timeGrid",
        duration: { days: 5 },
        titleFormat: () => "Program", // Force title to be "Program"
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
    headerToolbar: {
      left: "title",
      center: "",
      right: "calendar,list",
    },
    // slotLabelFormat: {
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     hour12: false,
    // },
    footerToolbar: false,
    navLinks: true,
    editable: false,
    selectable: true,
    dayMaxEvents: false,
    height: "auto",
    contentHeight: "auto",
    slotEventOverlap: true,
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
    // eventContent: function(arg) {
    //   return {
    //     html: '<div class="fc-event-title-container"><div class="fc-event-title fc-sticky">' + arg.timeText + ' ' + arg.event.title + '</div></div>'
    //   };
    // },
    validRange: {
      start: "2025-06-23",
      end: "2025-06-28",
    },
    slotMinTime: "08:00:00",
    slotMaxTime: "21:00:00",
    events: [
      {
        title: "IoT Day/N2Women/Rising Stars",
        start: "2025-06-23",
      },
      {
        title: "Main Conference",
        start: "2025-06-24",
        end: "2025-06-27",
      },
      {
        title: "Workshops",
        start: "2025-06-27",
      },
      {
        title: "IoT Day Opening Remarks",
        start: "2025-06-23T08:50:00",
        end: "2025-06-23T09:00:00",
        backgroundColor: "#6A4E77",
      },
      {
        title: "IoT Day Keynote 1",
        start: "2025-06-23T09:00:00",
        end: "2025-06-23T10:00:00",
        url: "/mobisys/2025/iot_day_program/#keynote-1",
        backgroundColor: "#6A4E77",
      },
      {
        title: "IoT Day Keynote 2",
        start: "2025-06-23T10:15:00",
        end: "2025-06-23T11:15:00",
        url: "/mobisys/2025/iot_day_program/#keynote-2",
        backgroundColor: "#6A4E77",
      },
      {
        title: "IoT Day Keynote 3",
        start: "2025-06-23T11:30:00",
        end: "2025-06-23T12:30:00",
        url: "/mobisys/2025/iot_day_program/#keynote-3",
        backgroundColor: "#6A4E77",
      },
      {
        title: "Lunch",
        start: "2025-06-23T11:30:00",
        end: "2025-06-23T13:00:00",
        backgroundColor: "#B55E3C",
      },
      {
        title: "IoT Day Keynote 4",
        start: "2025-06-23T13:00:00",
        end: "2025-06-23T14:00:00",
        url: "/mobisys/2025/iot_day_program/#keynote-4",
        backgroundColor: "#6A4E77",
      },
      {
        title: "IoT Day Keynote 5",
        start: "2025-06-23T14:15:00",
        end: "2025-06-23T15:15:00",
        url: "/mobisys/2025/iot_day_program/#keynote-5",
        backgroundColor: "#6A4E77",
      },
      {
        title: "Coffee Break",
        start: "2025-06-23T15:15:00",
        end: "2025-06-23T15:45:00",
        backgroundColor: "#B55E3C",
      },
      {
        title: "Panel Discussion",
        start: "2025-06-23T15:45:00",
        end: "2025-06-23T17:00:00",
        backgroundColor: "#6A4E77",
      },
      {
        title: "Registration",
        start: "2025-06-24T08:00:00",
        end: "2025-06-24T09:00:00",
        backgroundColor: "#3A3A3A",
      },
      {
        title: "Breakfast",
        start: "2025-06-24T08:00:00",
        end: "2025-06-24T09:00:00",
        backgroundColor: "#B55E3C",
      },
      {
        title: "Opening Remarks",
        start: "2025-06-24T09:00:00",
        end: "2025-06-24T09:20:00",
        backgroundColor: "#7B5C42",
      },
      {
        title: "Keynote 1",
        start: "2025-06-24T09:20:00",
        end: "2025-06-24T10:30:00",
        url: "/mobisys/2025/keynotes/#keynote-1",
        backgroundColor: "#A14A4A",
      },
      {
        title: "Session 1 - Sensing",
        start: "2025-06-24T10:30:00",
        end: "2025-06-24T12:00:00",
        url: "#session-1---sensing",
        backgroundColor: "#4A6E91",
      },
      {
        title: "Lunch",
        start: "2025-06-24T12:00:00",
        end: "2025-06-24T13:30:00",
        backgroundColor: "#B55E3C",
      },
    //   {
    //     title: "SIGMOBILE Business Meeting",
    //     start: "2025-06-24T12:10:00",
    //     end: "2025-06-24T13:40:00",
    //     backgroundColor: "#3A3A3A",
    //   },
      {
        title: "Session 2 - Internet of Things",
        start: "2025-06-24T13:30:00",
        end: "2025-06-24T15:25:00",
        url: "#session-2---internet-of-things",
        backgroundColor: "#4A6E91",
      },
      {
        title: "Coffee Break",
        start: "2025-06-24T15:25:00",
        end: "2025-06-24T15:50:00",
        backgroundColor: "#B55E3C",
      },
      {
        title: "Session 3 - LLM",
        start: "2025-06-24T15:50:00",
        end: "2025-06-24T17:20:00",
        url: "#session-3---llm",
        backgroundColor: "#4A6E91",
      },
      {
        title: "Poster and Demo Session",
        start: "2025-06-24T17:30:00",
        end: "2025-06-24T19:30:00",
        backgroundColor: "#4F7B4A",
      },
      {
        title: "Registration",
        start: "2025-06-25T08:00:00",
        end: "2025-06-25T09:00:00",
        backgroundColor: "#3A3A3A",
      },
      {
        title: "Breakfast",
        start: "2025-06-25T08:00:00",
        end: "2025-06-25T09:00:00",
        backgroundColor: "#B55E3C",
      },
      {
        title: "Keynote 2",
        start: "2025-06-25T09:00:00",
        end: "2025-06-25T10:10:00",
        url: "/mobisys/2025/keynotes/#keynote-2",
        backgroundColor: "#A14A4A",
      },
      {
        title: "Session 4 - Tools and Testbeds",
        start: "2025-06-25T10:10:00",
        end: "2025-06-25T12:05:00",
        url: "#session-4---tools-and-testbeds",
        backgroundColor: "#4A6E91",
      },
      {
        title: "Lunch",
        start: "2025-06-25T12:05:00",
        end: "2025-06-25T13:35:00",
        backgroundColor: "#B55E3C",
      },
      {
        title: "Session 5 - AR/VR/XR",
        start: "2025-06-25T13:35:00",
        end: "2025-06-25T15:05:00",
        url: "#session-5---arvrxr",
        backgroundColor: "#4A6E91",
      },
      {
        title: "Rising Stars Forum Spotlight Talks",
        start: "2025-06-25T15:05:00",
        end: "2025-06-25T15:35:00",
        backgroundColor: "#7B5D8D",
      },
      {
        title: "Coffee Break",
        start: "2025-06-25T15:35:00",
        end: "2025-06-25T16:00:00",
        backgroundColor: "#B55E3C",
      },
      {
        title: "Session 6 - Smart Surfaces and FutureG",
        start: "2025-06-25T16:00:00",
        end: "2025-06-25T17:30:00",
        url: "#session-6---smart-surfaces-and-futureg",
        backgroundColor: "#4A6E91",
      },
      {
        title: "Banquet",
        start: "2025-06-25T17:30:00",
        end: "2025-06-25T20:30:00",
        backgroundColor: "#B55E3C",
      },
      {
        title: "Registration",
        start: "2025-06-26T08:00:00",
        end: "2025-06-26T09:00:00",
        backgroundColor: "#3A3A3A",
      },
      {
        title: "Breakfast",
        start: "2025-06-26T08:00:00",
        end: "2025-06-26T09:00:00",
        backgroundColor: "#B55E3C",
      },
      {
        title: "Session 7 - Video and Vision",
        start: "2025-06-26T09:00:00",
        end: "2025-06-26T10:30:00",
        url: "#session-7---video-and-vision",
        backgroundColor: "#4A6E91",
      },
      {
        title: "Break",
        start: "2025-06-26T10:30:00",
        end: "2025-06-26T10:40:00",
        backgroundColor: "#B55E3C",
      },
      {
        title: "Session 8 - Robotic and Vehicular Systems",
        start: "2025-06-26T10:40:00",
        end: "2025-06-26T12:10:00",
        url: "#session-8---robotic-and-vehicular-systems",
        backgroundColor: "#4A6E91",
      },
      {
        title: "Lunch",
        start: "2025-06-26T12:10:00",
        end: "2025-06-26T13:40:00",
        backgroundColor: "#B55E3C",
      },
      {
        title: "Session 9 - Security and Privacy",
        start: "2025-06-26T13:40:00",
        end: "2025-06-26T15:10:00",
        url: "#session-9---security-and-privacy",
        backgroundColor: "#4A6E91",
      },
      {
        title: "Coffee Break",
        start: "2025-06-26T15:10:00",
        end: "2025-06-26T15:35:00",
        backgroundColor: "#B55E3C",
      },
      {
        title: "Session 10 - Edge and Embedded Systems",
        start: "2025-06-26T15:35:00",
        end: "2025-06-26T17:05:00",
        url: "#session-10---edge-and-embedded-systems",
        backgroundColor: "#4A6E91",
      },
    ],
  });

  // Add window resize event listener to handle responsive view changes
  window.addEventListener('resize', function() {
    const newView = window.innerWidth < 768 ? "list" : "calendar";
    if (newView !== calendar.view.type) {
      calendar.changeView(newView);
    }
  });

  calendar.render();
});
