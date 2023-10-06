const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");

// mouseover and mouseout event 
const box = document.getElementById("development_active")



// change text on mouse over event
box.addEventListener('mouseover', function handleMouseOver(){
	box.style.color=("black");
});

// change text color on mouse out event 
box.addEventListener('mouseout', function handleMouseOut(){
	box.style.color= '#f79533';
});

// scrollto top arrow

	  let mybutton = document.getElementById("myBtn");

	  // When the user scrolls down 20px from the top of the document, show the button
	  window.onscroll = function(){
	  scrollFunction()
	  };
	  
	  function scrollFunction() {
		if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 500) {
		  mybutton.style.display = "block";
		  console.log("alert")
		} else {
		  mybutton.style.display = "none";
		}
	  }
	  
	  // When the user clicks on the button, scroll to the top of the document
	  function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	  }

	  //   click the icons to change the text in html 
	  const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
	
  const id =e.target.dataset.id;
  console.log(id)
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// rough

function openNav() {
	document.getElementById("mySidenav").style.width = "438px";
  }
  
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }
  
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function() {
	  this.classList.toggle("active");
	  var dropdownContent = this.nextElementSibling;
	  if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	  } else {
		dropdownContent.style.display = "block";
	  }
	});
  }







