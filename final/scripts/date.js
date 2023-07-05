const datefield = document.querySelector("#full-date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.textContent = fulldate;

// footer
// make date info
const options = {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
let date = new Date().toLocaleDateString('en-US', options)
const optionsYear = {year: 'numeric'};
let year = new Date().toLocaleDateString('en-Us', optionsYear);

//assign year to copyright info
const footerYear = document.querySelector('#year');
footerYear.textContent = year;