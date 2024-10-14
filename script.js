// JavaScript for dynamic greeting based on time
document.addEventListener("DOMContentLoaded", function() {
    const welcomeSection = document.getElementById("welcome");
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning! Welcome to Sunshine Primary School.";
    } else if (hours < 18) {
        greeting = "Good afternoon! Welcome to Sunshine Primary School.";
    } else {
        greeting = "Good evening! Welcome to Sunshine Primary School.";
    }

    welcomeSection.innerHTML = `<h2>${greeting}</h2><p>We provide a nurturing environment where children can explore, learn, and grow into their full potential.</p>`;
});
