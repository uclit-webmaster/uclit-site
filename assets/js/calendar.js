document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        // themeSystem: 'bootstrap',  // use our bootstrap theme
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,dayGridDay,listYear'
        },

        // displayEventTime: false, // don't show the time column in list view

        googleCalendarApiKey: 'AIzaSyBlPzyRkZyIcE7StgxtLl1Ln7Ul3eNiD4E',

        // uclit calendar
        events: 'uclit.ca_3cs45k1nqg9ikf7sqg5sgf25u8@group.calendar.google.com',

        eventClick: function (arg) {

            // opens events in a popup window
            window.open(arg.event.url, '_blank', 'width=700,height=600');

            // prevents current tab from navigating
            arg.jsEvent.preventDefault();
        }

    });

    calendar.render();
});