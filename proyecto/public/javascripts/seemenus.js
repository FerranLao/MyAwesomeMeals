document.querySelectorAll(".menudelete").forEach(node => {
  node.addEventListener("click", e => {
    const node = e.target.parentNode.querySelector("span");
    const id=node.innerText
    axios.post("/logged/menuremove",  {id} ).then(() => {
      e.target.parentNode.innerHTML = "";
    });
  });
});
