const datefield = document.querySelector("time");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.textContent = fulldate;

// footer
// make date info
const options = {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
let date = new Date().toLocaleDateString('en-US', options)
const optionsYear = {year: 'numeric'};
let year = new Date().toLocaleDateString('en-Us', optionsYear);

// output data to html
document.querySelector('#footer-info').innerHTML = `\u00A9${year}  |  Flower Mound Chamber  |  Kaila McDonald  |  Last Updated ${date}`;

const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});


const optionsDay = {weekday: 'long'};
let day = new Date().toLocaleDateString('en-US', optionsDay);
const banner = document.querySelector('#banner-content')

if (day == 'Monday' || day == "Tuesday") {
	banner.textContent = '🤝 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
};