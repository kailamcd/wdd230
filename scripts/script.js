// make date info
const options = {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
let date = new Date().toLocaleDateString('en-US', options)
const optionsYear = {year: 'numeric'};
let year = new Date().toLocaleDateString('en-Us', optionsYear);

// output data to html
document.querySelector('#footer-info').innerHTML = `\u00A9${year}  |  Kaila McDonald  |  Texas`; 
document.querySelector('#updated').innerHTML = `Last Updated ${date}`;

//make assignment list
const assignment = {lessonNumber:"01", }