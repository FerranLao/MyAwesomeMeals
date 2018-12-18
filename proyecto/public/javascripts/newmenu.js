let menu = [];
document.querySelectorAll(".addtochart").forEach(e => {
  e.addEventListener("click", e => {
    
    const name = e.target.parentNode.querySelector("p").innerText;
    menu.push(name);
    const list = document.querySelector(".menulist");
    list.innerHTML += `<p>${name}</p>`;
  });
});

document.querySelector(".finishchart").addEventListener("click", e => {
  const name=document.querySelector(".menuname").value
  axios.post("/logged/newmenu", { menu,name }).then(menu => {
    window.location.replace(`/logged/charts/${menu.data}`);
  });
});
