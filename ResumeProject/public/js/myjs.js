//   // Add this JavaScript code to your HTML file

//   // Get all the anchor tags
//   var navLinks = document.querySelectorAll(".nav-link");

//   // Add click event listener to each anchor tag
//   navLinks.forEach(function(link) {
//     link.addEventListener("click", function(event) {
//       // Prevent the default link behavior
//       //   event.preventDefault();

//       // Remove active class from all links
//       navLinks.forEach(function(link) {
//         link.classList.remove("active");
//       });

//       // Add active class to the clicked link
//       this.classList.add("active");
//     });
//   });