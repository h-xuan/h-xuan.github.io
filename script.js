var frame = document.getElementById("cframe");
// var doc = frame.contentDocument
//   ? frame.contentDocument
//   : frame.contentWindow.document;

// frame.addEventListener("load", function () {
//   window.frames[0].document.body.style.color = "#eee";
// });

// dark mode script //
const moonPath =
  "M16 27.5C16 42.6878 27.5 54.5 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 16 12.3122 16 27.5Z";
const sunPath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");

let toggle = false;

if (darkMode) {
  darkMode.addEventListener("click", () => {
    // use anime.js
    // set up timeline
    const timeline = anime.timeline({
      duration: 750,
      easing: "easeOutExpo",
    });
    // add anims to timeline
    timeline
      .add({
        targets: ".sun",
        d: [{ value: toggle ? sunPath : moonPath }],
      })
      .add(
        {
          targets: "#darkMode",
          rotate: toggle ? 0 : 320,
        },
        "-= 350"
      )
      .add(
        {
          targets: "#main",
          filter: toggle
            ? "grayscale(0%) brightness(100%)"
            : "grayscale(80%) brightness(40%)",
        },
        "-= 1200"
      )
      .add(
        {
          targets: "#content",
          backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(57,54,50)",
        },
        "-= 1200"
      )
      // .add(
      //   {
      //     targets: "#cframe",
      //     filter: toggle ? "invert(0%)" : "invert(100%)",
      //   },
      //   "-= 1200"
      // )
      .add(
        {
          targets: "#house",
          filter: toggle
            ? "sepia(50%) grayscale(0%) brightness(100%)"
            : "grayscale(80%) brightness(40%)",
        },
        "-= 1200"
      )
      .add(
        {
          targets: "#window",
          backgroundColor: toggle ? "rgb(209, 205, 205)" : "rgb(255, 215, 112)",
        },
        "-= 1200"
      )
      .add(
        {
          targets: "h1",
          color: toggle ? "rgb(0, 0, 0)" : "rgb(255, 215, 112)",
          opacity: toggle ? 0.3 : 0.5,
        },
        "-= 1200"
      )
      .add(
        {
          targets: "nav a",
          color: toggle ? "rgb(0, 0, 0)" : "rgb(255, 237, 191)",
        },
        "-= 1200"
      )
      .add(
        {
          targets: "p",
          color: toggle ? "rgb(0, 0, 0)" : "rgb(237, 237, 237)",
        },
        "-= 1200"
      );

    window.frames[0].document.body.style.color = toggle ? "#303030" : "#eee";
    toggle = !toggle;
  });
}

// div slide-in script //

let mql = window.matchMedia("(max-width: 768px)");

// slide content container out //
var links = document.getElementsByClassName("link-item");
if (links) {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      // mobile //
      if (mql.matches) {
        document.getElementById("content").style.bottom = "0";
        document.getElementById("canvas").style.height = "22%";
        document.getElementById("main").style.top = "-40%";
        document.getElementById("headerz").style.top = "-250px";
        document.getElementById("darkMode").style.top = "2%";
        document.getElementById("darkMode").style.left = "80%";
        document.getElementById("house-container").style.top = "5%";
      }
      // web //
      else {
        document.getElementById("canvas").style.width = "35%";
        document.getElementById("house-container").style.left = "15%";
        document.getElementById("darkMode").style.left = "20%";
        document.getElementById("headerz").style.left = "-33%";
        document.getElementById("content").style.right = "0";
      }
    });
  }
}

// slide back to main page //
var titleh1 = document.getElementById("titleh1");
if (titleh1) {
  titleh1.addEventListener("click", () => {
    if (mql.matches) {
      document.getElementById("content").style.bottom = "-100%";
      document.getElementById("canvas").style.height = "100%";
      document.getElementById("main").style.top = "0";
      document.getElementById("headerz").style.top = "0";
      document.getElementById("darkMode").style.top = "10%";
      document.getElementById("darkMode").style.left = "60%";
      document.getElementById("house-container").style.top = "45%";
    }
    // web //
    else {
      document.getElementById("canvas").style.width = "100%";
      document.getElementById("house-container").style.left = "55%";
      document.getElementById("darkMode").style.left = "60%";
      document.getElementById("headerz").style.left = "0";
      document.getElementById("content").style.right = "-65%";
    }
  });
}

// function delay(URL) {
// 	setTimeout(function () {window.location = URL}, 700);
// };
