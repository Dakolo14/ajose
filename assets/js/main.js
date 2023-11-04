
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*  Menu Show   */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*  Menu Hidden   */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When each nav__link is clicked, I want the show-menu removed
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/

const shadowHeader = () => {
    const header = document.getElementById('header')

    // When the user scrolls more than 50 viewport height, add the shadowheader class
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_68v4w4u','template_l2s6l9t','#contact-form','fma0b_FxxlVPQNcnk').then(() => {
        //Show sent successfully
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () => {
        // Show error message
        contactMessage.textContent = ' Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail) 

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrolling class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
              
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Define a function to set the theme to 'light' on page load
function setLightTheme() {
  document.body.classList.remove(darkTheme);
  themeButton.classList.remove(iconTheme);
  localStorage.setItem('selected-theme', 'light');
  localStorage.setItem('selected-icon', 'ri-sun-line');
}

// If the user hasn't selected a theme yet, set the default theme to 'light'
if (localStorage.getItem('selected-theme') === null) {
  setLightTheme();
}

// Set the initial theme and icon based on the stored values
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);

// Define the functions to get the current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

// Ensure the website starts with the light theme
document.addEventListener('DOMContentLoaded', setLightTheme);


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    //reset : true // Animation repeat
})

sr.reveal(`.home__prefil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, .italics, .about__container, .section__title-1, .about__info, .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})




