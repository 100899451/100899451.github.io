"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules and components
var $ = require("jquery");
// Define the main application class
var HarmonyHubApp = /** @class */ (function () {
    function HarmonyHubApp() {
    }
    // Function to load header
    HarmonyHubApp.prototype.loadHeader = function () {
        var _this = this;
        // Load header from header.html using AJAX
        $.ajax({
            url: 'header.html',
            method: 'GET',
            success: function (data) {
                $('header').html(data);
                _this.checkLogin(); // Call checkLogin after loading header
            },
            error: function (error) {
                console.error('Error loading header:', error);
            }
        });
    };
    // Function to load footer
    HarmonyHubApp.prototype.loadFooter = function () {
        // Load footer from footer.html using AJAX
        $.ajax({
            url: 'footer.html',
            method: 'GET',
            success: function (data) {
                $('footer').html(data);
            },
            error: function (error) {
                console.error('Error loading footer:', error);
            }
        });
    };
    // Function to load blog content
    HarmonyHubApp.prototype.loadBlogContent = function () {
        // Load blog content from blog.html using AJAX
        $.ajax({
            url: 'blog.html',
            method: 'GET',
            success: function (data) {
                $('#blog').html(data);
            },
            error: function (error) {
                console.error('Error loading blog content:', error);
            }
        });
    };
    // Function to check if user is logged in and adjust UI accordingly
    HarmonyHubApp.prototype.checkLogin = function () {
        // Check login status and adjust UI
        var isLoggedIn = sessionStorage.getItem('user') !== null;
        if (isLoggedIn) {
            $('#login').html("<a class=\"nav-link\" href=\"/logout\"><i class=\"fa-solid fa-sign-in-alt\"></i> Logout</a>");
        }
        else {
            $('#login').html("<a class=\"nav-link\" href=\"/login\"><i class=\"fa-solid fa-sign-in-alt\"></i> Login</a>");
        }
    };
    // Function to load content via AJAX
    HarmonyHubApp.prototype.loadContent = function (url) {
        fetch(url)
            .then(function (response) { return response.text(); })
            .then(function (html) {
            document.getElementById('content').innerHTML = html;
        })
            .catch(function (error) { return console.error('Error fetching content:', error); });
    };
    // Function to handle navigation
    HarmonyHubApp.prototype.navigate = function (event) {
        event.preventDefault();
        var url = event.target.getAttribute('href');
        this.loadContent(url);
        history.pushState({}, '', url);
    };
    // Main function to start the application
    HarmonyHubApp.prototype.start = function () {
        var _this = this;
        console.log('App Started...');
        // Call necessary functions to initialize the application
        this.loadHeader();
        this.loadFooter();
        // Load specific content based on the page
        if ($('body').is('.home-page')) {
            // Load home page content
            // Example: this.loadHomePageContent();
        }
        else if ($('body').is('.about-page')) {
            // Load about page content
            // Example: this.loadAboutPageContent();
        }
        else if ($('body').is('.contact-page')) {
            // Load contact page content
            // Example: this.loadContactPageContent();
        }
        else {
            console.warn('No specific page logic implemented for this page.');
        }
        // Event listener for navigation
        document.querySelectorAll('nav a').forEach(function (link) {
            link.addEventListener('click', _this.navigate.bind(_this));
        });
    };
    return HarmonyHubApp;
}());
// Instantiate HarmonyHubApp and start the application
var app = new HarmonyHubApp();
window.addEventListener('load', function () {
    app.start();
});
// Common logic for all pages
// Navigation toggler logic
$('.navbar-toggler').click(function () {
    $('.navbar-collapse').toggleClass('show');
});
// Team page logic
if ($('body').is('.team-page')) {
    // Team page specific logic here
}
// Terms of Service page logic
if ($('body').is('.terms-of-service-page')) {
    // Terms of Service page specific logic here
}
// Portfolio page logic
if ($('body').is('.portfolio-page')) {
    // Portfolio page specific logic here
}
