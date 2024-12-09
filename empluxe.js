// // Toggle dropdown visibility
// function toggleDropdown() {
//     document.getElementById("dropdownList").classList.toggle("show");
// }

// // Close dropdown when clicking outside
// window.onclick = function(event) {
//     if (!event.target.matches('#dropdownInput')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         for (let i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

// // Set input text when clicking an option
// document.querySelectorAll(".dropdown-content a").forEach(function(item) {
//     item.addEventListener("click", function(e) {
//         document.getElementById("dropdownInput").value = e.target.textContent;
//         document.getElementById("dropdownList").classList.remove("show");//Ensure dropdown closes
        
//     });
// });



// window.addEventListener("scroll", function(){
//     const overlaySection= this.document.querySelector(".overlay-section");
//     const triggerPoint = 100;
//     if(this.window.scrollY > triggerPoint) {
//         overlaySection.classList.add("active");
//     }
//     else{
//         overlaySection.classList.remove("active");
//     }
// });


let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".slide");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
}

// Optional: Auto-change slides
setInterval(() => {
  changeSlide(1);
}, 5000);