let tablinks = document.getElementsByClassName("tab-links");
let tabcontent = document.getElementsByClassName("tab-contents");

function openTab(event, tabname) {
    // Remove 'active-link' from all tab links
    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
    }

    // Remove 'active-tab' from all tab contents
    for (let tab of tabcontent) {
        tab.classList.remove('active-tab');
    }

    // Add 'active-link' to clicked tab
    event.currentTarget.classList.add('active-link');

    // Add 'active-tab' to the corresponding tab content
    document.getElementById(tabname).classList.add('active-tab');
}

// Typewriter Effect
let text = "Hi, I am Gemechu Bonsa, a full-stack web developer. Welcome to my portfolio website.";
let index = 0;
let isDeleting = false; 

function typeWriter() {
    let textElement = document.getElementById("text");
    if (!textElement) return; // Prevent errors if element is missing

    if (!isDeleting) {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            isDeleting = true;
            setTimeout(typeWriter, 1000);
        }
    } else {
        if (index > 0) {
            textElement.innerHTML = text.substring(0, index - 1);
            index--;
            setTimeout(typeWriter, 150);
        } else {
            isDeleting = false;
            setTimeout(typeWriter, 500);
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    typeWriter();

    // Navigation Toggle for Mobile
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle");
    toggleButton.innerHTML = "☰";

    const nav = document.querySelector("nav");
    const navList = document.querySelector("nav ul");

    if (nav) {
        nav.prepend(toggleButton);
        toggleButton.addEventListener("click", function () {
            navList.classList.toggle("show");
        });
    }
});
