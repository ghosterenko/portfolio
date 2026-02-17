


const mainPage = document.getElementById("main");
const aboutPage = document.getElementById("about");
const achivementPage = document.getElementById("achivement");
const worksPage = document.getElementById("works");
const documetsPage = document.getElementById("documets");
const citizenPage = document.getElementById("citizen");


const sectionMain = document.querySelector(".section");

mainPage.addEventListener('click', () => {
    sectionMain.innerHTML = "<h1 class=\"title\">Министерство образования Свердловской области</h1>" + 
    "<p>Екатеринбургский колледж транспортного строительства</p>" +
    "";
    
    const title = document.querySelector("title");
    title.style.color = "white";


});
aboutPage.addEventListener('click', () => {
     sectionMain.innerHTML = "1";
});
achivementPage.addEventListener('click', () => {
     sectionMain.innerHTML = "2";
});
worksPage.addEventListener('click', () => {
     sectionMain.innerHTML = "3";
});
documetsPage.addEventListener('click', () => {
     sectionMain.innerHTML = "4";
});
citizenPage.addEventListener('click', () => {
     sectionMain.innerHTML = "5";
});
