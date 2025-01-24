/*** Transitions, currently including "slide", "fade", and "spin" ***/
const transitions = [
    // Fade
    { 
        class: 'fade-target', 
        animation: 'fading',
    },
    // Slide
    {
        class: 'slide-target', 
        animation: 'sliding',
    },
    // Spin
    {
        class: 'spin-target', 
        animation: 'spinning',
    },
];

// Create the observer for all transitions
const observer = new IntersectionObserver(entries => {
    let delay = 0;
    const delayIncrement = 100; // delay between animations in milliseconds

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            transitions.forEach(transition => {
                if (entry.target.classList.contains(transition.class)) {
                    // Add a delay before adding the animation class
                    setTimeout(() => {
                        entry.target.classList.add(transition.animation);
                        // Remove target class after animation starts
                        entry.target.classList.remove(transition.class);
                    }, delay);
                    
                    delay += delayIncrement; // Increment the delay for the next animation
                }
            });
        }
    });
});

// Observe elements with specified classes
document.querySelectorAll('.fade-target, .slide-target, .spin-target').forEach(target => {
    observer.observe(target);
});

// Get all elements with the specified target classes
const elements = document.querySelectorAll(
    '.fade-target, .slide-target', '.spin-target'
);

// Loop over the elements and add each one to the observer
elements.forEach((element) => observer.observe(element));

/*** Universal JS ***/

// Collapsible
document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible1");

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active-collapsible");
            var content = this.nextElementSibling;

            // Toggle the max-height style for smooth transition
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });

        // Initial check to set max-height based on initial active state
        var content = coll[i].nextElementSibling;
        if (coll[i].classList.contains("active-collapsible")) {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
});

// Card Lift animation
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card.card-lift-1');
    
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});
