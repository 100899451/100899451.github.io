// Import necessary modules and components
import * as $ from 'jquery';

// Define the main application class
class HarmonyHubApp {
    constructor() {}

    // Function to load header
    private loadHeader(): void {
        // Load header from header.html using AJAX
        $.ajax({
            url: 'header.html',
            method: 'GET',
            success: (data) => {
                $('header').html(data);
                this.checkLogin(); // Call checkLogin after loading header
            },
            error: (error) => {
                console.error('Error loading header:', error);
            }
        });
    }

    // Function to load footer
    private loadFooter(): void {
        // Load footer from footer.html using AJAX
        $.ajax({
            url: 'footer.html',
            method: 'GET',
            success: (data) => {
                $('footer').html(data);
            },
            error: (error) => {
                console.error('Error loading footer:', error);
            }
        });
    }

    // Function to load blog content
    private loadBlogContent(): void {
        // Load blog content from blog.html using AJAX
        $.ajax({
            url: 'blog.html',
            method: 'GET',
            success: (data) => {
                $('#blog').html(data);
            },
            error: (error) => {
                console.error('Error loading blog content:', error);
            }
        });
    }

    // Function to check if user is logged in and adjust UI accordingly
    private checkLogin(): void {
        // Check login status and adjust UI
        const isLoggedIn = sessionStorage.getItem('user') !== null;

        if (isLoggedIn) {
            $('#login').html(`<a class="nav-link" href="/logout"><i class="fa-solid fa-sign-in-alt"></i> Logout</a>`);
        } else {
            $('#login').html(`<a class="nav-link" href="/login"><i class="fa-solid fa-sign-in-alt"></i> Login</a>`);
        }
    }

    // Function to load content via AJAX
    private loadContent(url: string): void {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;
            })
            .catch(error => console.error('Error fetching content:', error));
    }

    // Function to handle navigation
    private navigate(event: Event): void {
        event.preventDefault();
        const url = (event.target as HTMLAnchorElement).getAttribute('href');
        this.loadContent(url);
        history.pushState({}, '', url);
    }


    // Main function to start the application
    public start(): void {
        console.log('App Started...');

        // Call necessary functions to initialize the application
        this.loadHeader();
        this.loadFooter();

        // Load specific content based on the page
        if ($('body').is('.home-page')) {
            // Load home page content
            // Example: this.loadHomePageContent();
        } else if ($('body').is('.about-page')) {
            // Load about page content
            // Example: this.loadAboutPageContent();
        } else if ($('body').is('.contact-page')) {
            // Load contact page content
            // Example: this.loadContactPageContent();
        } else {
            console.warn('No specific page logic implemented for this page.');
        }

        // Event listener for navigation
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', this.navigate.bind(this));
        });
    }
}

// Instantiate HarmonyHubApp and start the application
const app = new HarmonyHubApp();
window.addEventListener('load', () => {
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
