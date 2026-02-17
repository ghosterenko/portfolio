import { MainHtml, } from "./main.js"



const mainPage = document.getElementById("main");
const aboutPage = document.getElementById("about");
const achivementPage = document.getElementById("achivement");
const worksPage = document.getElementById("works");
const documetsPage = document.getElementById("documets");
const citizenPage = document.getElementById("citizen");


const sectionMain = document.querySelector(".section");

mainPage.addEventListener('click', () => {
    sectionMain.innerHTML = MainHtml();
});
aboutPage.addEventListener('click', () => {
     sectionMain.innerHTML = aboutHtml();
});
achivementPage.addEventListener('click', () => {
     sectionMain.innerHTML = achivementHtml();
});
worksPage.addEventListener('click', () => {
     sectionMain.innerHTML = WorksHtml();
});
documetsPage.addEventListener('click', () => {
     sectionMain.innerHTML = DocumentHtml();
});
citizenPage.addEventListener('click', () => {
     sectionMain.innerHTML = CitizenHtml();
});
