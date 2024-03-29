const aboutSkills = document.querySelector(".aboutskills");
const aboutExp = document.querySelector(".aboutexp");
const aboutEdu = document.querySelector(".aboutedu");
const aboutAch = document.querySelector(".aboutach");
const tabLinks = document.querySelector(".tab-links-skills");
const tabLinksExp = document.querySelector(".tab-links-exp");
const tabLinksEdu = document.querySelector(".tab-links-edu");
const tabLinksAch = document.querySelector(".tab-links-ach");

const colorPalet = document.querySelector(".colorpalet");
const colorOption = document.querySelector(".color-option");

const theme = document.querySelector(".theme");
const faMoon = document.querySelector(".fa-moon");
const mobileNavlist = document.querySelector(".mobile_nav-list");
const closeNavlist = document.querySelectorAll(".closenavlist");
const hamBurgermenu = document.querySelector(".hamburger");
const hamburgerMobile = document.querySelector(".hamburgermobile");

// faMoon.addEventListener("click",function () {
//     theme.classList.add("light")
//     colorPalet.classList.add("hidden")
//     document.documentElement.style.setProperty('--colortheme',"#5793fb")
//     document.documentElement.style.setProperty('--divbackground',"#afdaff")

// })

// faMoon.addEventListener("dblclick",function () {
//     theme.classList.remove("light")
//     colorPalet.classList.remove("hidden")
//     document.documentElement.style.setProperty('--colortheme',"#5067cd")
//     document.documentElement.style.setProperty('--divbackground',"#212121")

// })

hamBurgermenu.addEventListener("click", function () {
  hamburgerMobile.classList.toggle("isactive");
});

for (let i = 0; i < closeNavlist.length; i++) {
  closeNavlist[i].addEventListener("click", function () {
    hamburgerMobile.classList.toggle("isactive");
  });
}

faMoon.addEventListener("click", function () {
  theme.classList.toggle("light");
  colorPalet.classList.toggle("hidden");
  if (theme.classList.contains("light")) {
    document.documentElement.style.setProperty("--colortheme", "#5793fb");
    document.documentElement.style.setProperty("--divbackground", "#afdaff");
    mobileNavlist.classList.add("light");
  } else {
    document.documentElement.style.setProperty("--colortheme", "#5067cd");
    document.documentElement.style.setProperty("--divbackground", "#212121");
    mobileNavlist.classList.remove("light");
  }
});

//
//
//
//
colorPalet.addEventListener("click", function () {
  colorOption.classList.toggle("hidden");
});

//
//
//

// old code

// const Colors=document.querySelector(".red")
// Colors.addEventListener("click",function () {
//             console.log("hello")
//             let color=this.getAttribute('data-color')
//             document.documentElement.style.setProperty('--colortheme',color)
//     colorOption.classList.toggle("hidden")

//         })

//         const Colors2=document.querySelector(".blue")
//         Colors2.addEventListener("click",function () {
//                     console.log("hello")
//                     let color=this.getAttribute('data-color')
//                     document.documentElement.style.setProperty('--colortheme',color)
//     colorOption.classList.toggle("hidden")

//                 })

//                 const Colors3=document.querySelector(".green")
// Colors3.addEventListener("click",function () {
//             console.log("hello")
//             let color=this.getAttribute('data-color')
//             document.documentElement.style.setProperty('--colortheme',color)
//     colorOption.classList.toggle("hidden")

//         })

const colorOptions = document.querySelectorAll(".colortheme");
colorOptions.forEach((colorOption) => {
  colorOption.addEventListener("click", function () {
    let color = this.getAttribute("data-color");
    document.documentElement.style.setProperty("--colortheme", color);
    // colorOption.classList.toggle("hidden")
  });
});

tabLinks.addEventListener("click", function () {
  aboutSkills.classList.add("active-tab");
  aboutExp.classList.remove("active-tab");
  aboutEdu.classList.remove("active-tab");
  aboutAch.classList.remove("active-tab");
  tabLinks.classList.add("currentlink");
  tabLinksAch.classList.remove("currentlink");
  tabLinksEdu.classList.remove("currentlink");
  tabLinksExp.classList.remove("currentlink");
});
tabLinksExp.addEventListener("click", function () {
  aboutExp.classList.add("active-tab");
  aboutEdu.classList.remove("active-tab");
  aboutSkills.classList.remove("active-tab");
  aboutAch.classList.remove("active-tab");
  tabLinksExp.classList.add("currentlink");
  tabLinksAch.classList.remove("currentlink");
  tabLinksEdu.classList.remove("currentlink");

  tabLinks.classList.remove("currentlink");
});
tabLinksEdu.addEventListener("click", function () {
  aboutEdu.classList.add("active-tab");
  aboutExp.classList.remove("active-tab");
  aboutSkills.classList.remove("active-tab");
  aboutAch.classList.remove("active-tab");
  tabLinksEdu.classList.add("currentlink");
  tabLinksAch.classList.remove("currentlink");
  tabLinksExp.classList.remove("currentlink");
  tabLinks.classList.remove("currentlink");
});
tabLinksAch.addEventListener("click", function () {
  aboutAch.classList.add("active-tab");

  aboutEdu.classList.remove("active-tab");
  aboutExp.classList.remove("active-tab");
  aboutSkills.classList.remove("active-tab");
  tabLinksAch.classList.add("currentlink");
  tabLinksEdu.classList.remove("currentlink");
  tabLinksExp.classList.remove("currentlink");
  tabLinks.classList.remove("currentlink");
});

// tabLinks.addEventListener("click", function(event) {
//     if (event.target.classList.contains("tab-links-skills")) {
//       aboutSkills.classList.add("active-tab")
//       aboutExp.classList.remove("active-tab")
//       aboutEdu.classList.remove("active-tab")
//     } else if (event.target.classList.contains("tab-links-exp")) {
//       aboutExp.classList.add("active-tab")
//       aboutEdu.classList.remove("active-tab")
//       aboutSkills.classList.remove("active-tab")
//     } else if (event.target.classList.contains("tab-links-edu")) {
//       aboutEdu.classList.add("active-tab")
//       aboutExp.classList.remove("active-tab")
//       aboutSkills.classList.remove("active-tab")
//     }
//   })
