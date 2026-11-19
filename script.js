
// Automatically update the footer year

document.getElementById("year").textContent =
  new Date().getFullYear();


// Smooth navigation when clicking menu links

document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", event => {

    const target = document.querySelector(
      link.getAttribute("href")
    );

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});
