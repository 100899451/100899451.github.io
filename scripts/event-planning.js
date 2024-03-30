"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPlanningPage = void 0;
var EventPlanningPage = /** @class */ (function () {
    function EventPlanningPage() {
        // Constructor logic
    }
    // Method to fetch event data from a JSON file or API
    EventPlanningPage.prototype.fetchData = function () {
        // Example: Fetch data from a JSON file
        return fetch('/data/events.json')
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Failed to fetch event data');
            }
            return response.json();
        })
            .then(function (data) {
            // Process the fetched data
            return data;
        })
            .catch(function (error) {
            console.error('Error fetching event data:', error);
            throw error;
        });
    };
    // Method to render event data on the page
    EventPlanningPage.prototype.renderEvents = function (data) {
        // Example: Render events on the page
        var eventsContainer = document.getElementById('events-container');
        if (eventsContainer) {
            // Clear existing content
            eventsContainer.innerHTML = '';
            // Iterate over events and create HTML elements to display them
            data.events.forEach(function (event) {
                var eventElement = document.createElement('div');
                eventElement.classList.add('event');
                eventElement.innerHTML = "\n                    <h2>".concat(event.title, "</h2>\n                    <p>Date: ").concat(event.date, "</p>\n                    <p>Location: ").concat(event.location, "</p>\n                    <p>Description: ").concat(event.description, "</p>\n                ");
                eventsContainer.appendChild(eventElement);
            });
        }
    };
    // Static method to render the event planning page
    EventPlanningPage.render = function () {
        var eventPlanningPage = new EventPlanningPage();
        eventPlanningPage.fetchData()
            .then(function (data) {
            eventPlanningPage.renderEvents(data);
        })
            .catch(function (error) {
            console.error('Error rendering event planning page:', error);
        });
    };
    return EventPlanningPage;
}());
exports.EventPlanningPage = EventPlanningPage;
//# sourceMappingURL=event-Planning.js.map