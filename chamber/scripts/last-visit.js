const today = Date.now();

if (!localStorage.getItem("visitDate")) {
	localStorage.setItem("visitDate", today);
}

const toSet = parseInt(today) - parseInt(localStorage.getItem("visitDate"));

localStorage.setItem("visitDate", today);

const days = toSet*1.1574e-8;

const lastVisit = document.querySelector("#visit-content");
lastVisit.innerHTML = "Days Since Last Visit: " + days.toFixed(0);
