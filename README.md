# Leon Casino Landing Page

# Overview

This project is a responsive landing page developed as part of a Front-End Developer Interview Task. It demonstrates skills in HTML, CSS, and JavaScript by implementing an interactive and visually appealing page with smooth animations and dynamic content updates.

## Features

Responsive Design: The layout adapts to desktop, tablet, and mobile devices.

Rotating Slider/Carousel: A hero slider showcases welcome offers with smooth fade transitions.

Three-Step Process: A section illustrates how to get started (Register, Deposit, Play) with fade-in animations triggered by scrolling.

Animated Cards: A section displays three cards representing Slots, Live Games, and Excellent Service, with engaging hover and scroll animations.

Featured Game Cards: Additional section showcasing featured slot games with layered images (background, character, logo).

Interactive Background: Falling coins effect that animates within the slider area.

Theme Toggle: A switch that allows users to toggle between dark and light modes, updating both colors and images.

Language Toggle: A switch with flags (Brazil and United Kingdom) to dynamically update the page content from Portuguese (default) to English.

## Approach

## Semantic HTML

Structure: Semantic HTML5 elements were used to clearly define the layout (header, main, footer, sections).

Accessibility: Proper aria-label and semantic tags help improve accessibility.

## CSS Variables & Responsive Design

Theming: CSS variables (custom properties) manage color schemes for dark and light modes.

Responsive Layout: Media queries adjust fonts, paddings, and element sizes to ensure a consistent experience across various screen sizes.

Smooth Animations: CSS transitions and keyframe animations are applied to slides, falling coins, and other interactive elements for a fluid experience.

## JavaScript Functionality

Slider Rotation: The slider automatically transitions between slides using a timer and fade-in/out effects.

Scroll Animations: The Intersection Observer API triggers fade-in animations for elements as they enter the viewport.

Falling Coins: Coins are dynamically created with random positions, durations, and delays, then removed after the animation ends.

Theme & Language Toggles: Switches update the page by toggling classes (e.g., light-mode) and updating text content dynamically based on a translation object.

## Code Quality

Clean and Maintainable: The code is structured and well-commented, making it easy to understand and extend.

Modular Approach: JavaScript is divided into logical sections (slider, animations, theme toggle, language toggle), with clear comments explaining key actions.
