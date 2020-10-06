window.onload = function () {
  alert(localStorage.getItem("storetoggle") == "true");
  //   document.body.style.color =
  //     localStorage.getItem("storetoggle") == "true" ? "#ccc" : "#303030";
  toggleDark();

  // iframe dark mode //
  //   window.frames[0].document.body.style.color = toggle ? "#303030" : "#ccc";
  //   proj_list = window.frames[0].document.getElementsByClassName("proj");
  //   for (let i = 0; i < proj_list.length; i++) {
  //     proj_list[i].style.background = toggle ? "#eee" : "#222";
  //   }

  //   if (window.frames[0].document.getElementsByTagName("h1")[0]) {
  //     window.frames[0].document.getElementsByTagName("h1")[0].style.color = toggle
  //       ? "rgb(211, 181, 156)"
  //       : "rgb(217, 193, 132)";
  //   }
};

function toggleDark() {
  toggle = localStorage.getItem("storetoggle") == "true";
  setTimeout(function () {
    document.body.style.color = toggle ? "#ccc" : "#303030";
    proj_list = document.getElementsByClassName("proj");
    for (let i = 0; i < proj_list.length; i++) {
      proj_list[i].style.background = toggle ? "#222" : "#eee";
    }
    document.getElementsByTagName("h1")[0].style.color = toggle
      ? "rgb(217, 193, 132)"
      : "rgb(211, 181, 156)";
  }, 100);
}
