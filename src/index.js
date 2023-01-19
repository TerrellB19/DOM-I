const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//images
const headerImg = document.querySelector('#logo-img');
headerImg.src = 'http://localhost:9000/img/logo.png';
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'http://localhost:9000/img/cta.png';
const middleImg = document.querySelector('#middle-img');
middleImg.src = 'http://localhost:9000/img/accent.png';

// head
const header = document.querySelector('header')
const nav = document.querySelectorAll('nav a')
const h1 = document.querySelector('h1')
h1.textContent = 'DOM Is Awesome'
const button = document.querySelector('button')
button.textContent = 'Get Started'
// nav
nav.forEach(item => item.className = 'italic')
nav[0].textContent = 'Services'
nav[1].textContent = 'Product'
nav[2].textContent = 'Vision'
nav[3].textContent = 'Features'
nav[4].textContent = 'About'
nav[5].textContent = 'Contact'
//top content

const topContent = document.querySelector('.top-content');
const topH4 = topContent.querySelectorAll('h4');

const topPg = topContent.querySelectorAll('p');
topH4[0].textContent = 'Features';
topPg[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
topH4[1].textContent = 'About';
topPg[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
//bottom content

const bottomContent = document.querySelector('.bottom-content');
const bottomH4 = bottomContent.querySelectorAll('h4');
const bottomPG = bottomContent.querySelectorAll('p')

bottomH4[0].textContent = 'Services';
bottomPG[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomH4[1].textContent = 'Product';
bottomPG[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomH4[2].textContent = 'Vision'
bottomPG[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// contact

const contact = document.querySelector('.contact')
const contactH4 = contact.querySelector('h4')
const contactPg = contact.querySelectorAll('p')
contactH4.textContent = 'Contact'
contactPg[0].textContent = '123 Way 456 Street Somewhere, USA'
contactPg[1].textContent = '1 (888) 888-8888'
contactPg[2].textContent = 'sales@greatidea.io'
//footer
const footer = document.querySelector('footer')

const footerHref = footer.querySelector('a')
footerHref.className = 'bold'
footerHref.textContent = 'Copyright Great Idea! 2021'
