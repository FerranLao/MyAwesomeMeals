let menu = [];
document.querySelectorAll(".addtochart").forEach(e => {
  e.addEventListener("click", e => {
    const name = e.target.parentNode.parentNode.querySelector("p").innerText;
    menu.push(name);
    printmenu()
    
  });
});

document.querySelector(".finishchart").addEventListener("click", e => {
  const name = document.querySelector(".menuname").value;
  axios.post("/logged/newmenu", { menu, name }).then(menu => {
    window.location.replace(`/logged/charts/${menu.data}`);
  });
});


const printmenu = () => {
  let menuHTML = document.querySelector(".menulist");
  menuHTML.innerHTML = "";
  menuHTML.innerHTML += `<ul class="collection with-header">
  <li class="collection-header"><h4>Your menu</h4></li>`;
  menu.forEach(e => {
    if (e != undefined) {
      menuHTML.innerHTML += `<li class="collection-item"><div>${e}<a href="#!" class="secondary-content listdel"><i class="material-icons ">X</i></a></div></li>`;
    }
  });
  menuHTML.innerHTML += `</ul>`;
  arrdelete();
};
const arrdelete = () => {
  document.querySelectorAll(".listdel").forEach(e => {
    e.addEventListener("click", e => {
      let text = e.target.parentNode.parentNode.innerText;
      text = text.split("\nX")
      const indexof=menu.indexOf(text[0])
      menu.splice(indexof, 1);
      printmenu()
    });
  });
};