// setup the counter 
/*import { setupCounter } from './counter.js'
setupCounter(document.querySelector('#counter'))
*/

/* functions that toggles visibility of the hidden sections on the page 
    when you click their cta buttons */

// portolio section toggle

let sectionPortfolio = document.getElementById("portfolio");
let portfolioIsVisible = false; 

const portfolioToggle = () => {    
    
    
    if (portfolioIsVisible) {
        sectionPortfolio.style.display = 'none';
        portfolioIsVisible = false;
    } else {
        sectionPortfolio.style.display = 'block';
        portfolioIsVisible = true;
    }
};

// about section toggle

let sectionAbout = document.getElementById("about");
let aboutIsVisible = false; 

const aboutToggle = () => {    
    
    
    if (aboutIsVisible) {
        sectionAbout.style.display = 'none';
        aboutIsVisible = false;
    } else {
        sectionAbout.style.display = 'block';
        aboutIsVisible = true;
    }
};

// contact section toggle

let sectionContact = document.getElementById("contact");
let contactIsVisible = false; 

const contactToggle = () => {    
    
    
    if (contactIsVisible) {
        sectionContact.style.display = 'none';
        contactIsVisible = false;
    } else {
        sectionContact.style.display = 'block';
        contactIsVisible = true;
    }
};




