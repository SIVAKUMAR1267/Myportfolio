
   // Wait for DOM to load
    document.addEventListener('DOMContentLoaded', function() {
        // Mobile menu toggle
        document.querySelector('.hamburger').addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            const overlay = document.querySelector('.nav-overlay') || createOverlay();
            
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Toggle hamburger icon
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Create overlay element
        function createOverlay() {
            const overlay = document.createElement('div');
            overlay.className = 'nav-overlay';
            document.body.appendChild(overlay);
            
            overlay.addEventListener('click', function() {
                const navLinks = document.querySelector('.nav-links');
                const hamburger = document.querySelector('.hamburger i');
                navLinks.classList.remove('active');
                overlay.classList.remove('active');
                hamburger.classList.remove('fa-times');
                hamburger.classList.add('fa-bars');
                document.body.style.overflow = '';
            });
            
            return overlay;
        }

        // Close menu when link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                const navLinks = document.querySelector('.nav-links');
                const overlay = document.querySelector('.nav-overlay');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    overlay.classList.remove('active');
                    document.querySelector('.hamburger i').classList.replace('fa-times', 'fa-bars');
                    document.body.style.overflow = '';
                }
            });
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });

