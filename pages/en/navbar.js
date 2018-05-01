/* too soon to use
function loadhtml(callback) {

  var xobj = new XMLHttpRequest();
  
  xobj.open('GET', "/pages/fr/navbar.html", true);
  xobj.responseType = "document";
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}*/


function init() {
  var navstring = '';
  var urlpath;
  urlpath = window.location.pathname;
  urlparsed = urlpath.split("/");
  page = urlparsed.slice(-1)[0];


  navstring += '<nav class="navbar navbar-expand-lg py-1">';
  navstring += '  <a class="navbar-brand" href="/pages/en/home.html">Mael Abgrall</a>';
  navstring += '  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">';
  navstring += '    <i class="fas fa-bars"></i>';
  navstring += '  </button>';
  navstring += '  <div class="collapse navbar-collapse" id="collapsibleNavbar">';
  navstring += '    <ul class="navbar-nav">';


  navstring += '      <li class="nav-item py-0">';
  if (page.indexOf("ccueil") != -1) {
    navstring += '      <a class="nav-link active" href="/pages/en/home.html">';
  } else {
    navstring += '      <a class="nav-link" href="/pages/en/home.html">';
  }
  navstring += '          <i class="fas fa-home"></i> Home</a>';
  navstring += '      </li>';


  navstring += '      <li class="nav-item py-0">';
  if (page.indexOf("ducation") != -1) {
    navstring += '      <a class="nav-link active" href="/pages/en/education.html">';
  } else {
    navstring += '      <a class="nav-link" href="/pages/en/education.html">';
  }
  navstring += '          <i class="fas fa-graduation-cap"></i> Education</a>';
  navstring += '      </li>';


  navstring += '      <li class="nav-item">';
  if (page.indexOf("xperience") != -1) {
    navstring += '      <a class="nav-link active" href="/pages/en/experience.html">';
  } else {
    navstring += '      <a class="nav-link" href="/pages/en/experience.html">';
  }
  navstring += '          <i class="fas fa-suitcase"></i> Experience</a>';
  navstring += '      </li>';


  navstring += '      <li class="nav-item">';
  if (page.indexOf("rojet") != -1) {
    navstring += '      <a class="nav-link active" href="/pages/en/projet.html">';
  } else {
    navstring += '      <a class="nav-link" href="/pages/en/projet.html">';
  }
  navstring += '          <i class="fas fa-lightbulb"></i> Projects</a>';
  navstring += '      </li>';


  navstring += '      <li class="nav-item">';
  if (page.indexOf("kill") != -1) {
    navstring += '      <a class="nav-link active" href="/pages/en/skill.html">';
  } else {
    navstring += '      <a class="nav-link" href="/pages/en/skill.html">';
  }
  navstring += '          <i class="fas fa-wrench"></i> Skills</a>';
  navstring += '      </li>';


  navstring += '      <li class="nav-item">';
  if (page.indexOf("obby") != -1) {
    navstring += '      <a class="nav-link active" href="/pages/en/hobby.html">';
  } else {
    navstring += '      <a class="nav-link" href="/pages/en/hobby.html">';
  }
  navstring += '          <i class="fas fa-map-signs"></i> Hobbies</a>';
  navstring += '      </li>';


  navstring += '      <li class="nav-item">';
  if (page.indexOf("ontact") != -1) {
    navstring += '      <a class="nav-link active" href="/pages/en/contact.html">';
  } else {
    navstring += '      <a class="nav-link" href="/pages/en/contact.html">';
  }
  navstring += '          <i class="fas fa-address-card"></i> Contact</a>';
  navstring += '      </li>';
  navstring += '    </ul>';




  navstring += '    <ul class="navbar-nav ml-auto">';
  navstring += '      <li class="nav-item dropdown">';
  navstring += '        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">';
  navstring += '          <i class="fas fa-flag"></i> Language';
  navstring += '        </a>';
  navstring += '        <div class="dropdown-menu">';
  navstring += '          <a class="dropdown-item" href="/pages/fr/home.html">French</a>';
  navstring += '          <a class="dropdown-item active" href="/pages/en/home.html">English</a>';
  navstring += '        </div>';
  navstring += '      </li>';

  navstring += '      <li class="nav-item">';
  navstring += '        <a class="nav-link" href="/index_fr.html">';
  navstring += '          <i class="fas fa-sign-out-alt"></i> Changer de site</a>';
  navstring += '      </li>';
  navstring += '    </ul>';
  navstring += '  </div>';
  navstring += '</nav>';


  document.getElementById("navstring").innerHTML = navstring;
}

init();