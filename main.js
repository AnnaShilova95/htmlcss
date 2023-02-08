let body = document.querySelector('div.slider');
let menuActive = document.querySelector('div.navigation__menuTop');
let menuVisible = document.querySelector('div.dropdownContent');

body.onclick = () => {
  menuVisible.style.display = 'none';
}

menuActive.onclick = () => {
   rect =  menuActive.getBoundingClientRect();
   coordX = rect.left;
   coordY = rect.top+50;
   menuVisible.style.left = coordX+'px';
   menuVisible.style.top = coordY+'px';
   menuVisible.style.display = 'block';
}

