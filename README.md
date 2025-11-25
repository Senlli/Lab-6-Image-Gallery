# Lab 6 – Image Gallery (JavaScript)

This project is a dynamic image gallery built using HTML, CSS, and JavaScript.  
The goal of Lab 6 was to complete the JavaScript functionality inside `gallery.js`, specifically the instructions labeled **Lab 6 – Steps A to G**.

The gallery automatically generates thumbnail images, updates the main displayed image when any thumbnail is clicked, and applies visual “wayfinding” effects to highlight the currently selected image.

---

## 📁 Project Structure

Lab 6 Files Start/
│
├── css/
│   ├── gallery.css
│   ├── normalize.css
│   └── style.css
│
├── images/
│   ├── pic1.jpg
│   ├── pic2.jpg
│   ├── pic3.jpg
│   ├── pic4.jpg
│   └── pic5.jpg
│
├── js/
│   └── gallery.js
│
├── gallery.html
├── assignment2.html
├── events.html
├── events2.html
└── submit.html

---

## 🧩 What Was Completed in `gallery.js`

The following required steps were implemented:

- **Step 1:** Declared variables for the main displayed image and the thumbnail bar.  
- **Step 2:** Generated 5 thumbnail `<img>` elements using a loop.  
- **Step 3:** (Commented out) Example of inline event handlers.  
- **Step 4:** Created `displayImage()` to update the main image.  
- **Step 5:** Implemented event delegation to detect clicks on thumbnails.  
- **Step A–C:** Applied outline, position, and z-index to the clicked thumbnail.  
- **Step D:** Selected all thumbnails using `querySelectorAll`.  
- **Step E–F:** Added `clearWayfinding()` to remove styles from all thumbnails.  
- **Step G:** Called `clearWayfinding()` before highlighting the active thumbnail.

---

## ▶️ How to Run the Project

1. Download or clone this repository.  
2. Open the folder in any IDE or code editor.  
3. Open `gallery.html` in your browser.  
4. Click any thumbnail to update the main image and highlight the active selection.

No additional setup is required.

---

## 📜 Credits

This lab is based on instructions provided by the course instructor and references from:

- MDN Web Docs – JavaScript Image Gallery Tutorial  
- David Walsh – Event Delegation Article  
