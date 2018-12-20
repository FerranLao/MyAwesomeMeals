document.querySelectorAll(".menudelete").forEach(node => {
  node.addEventListener("click", e => {
    const node = e.target.parentNode.parentNode.querySelector("span");
    console.log(node.parentNode.parentNode)
    const id=node.innerText
    axios.post("/logged/menuremove",  {id} ).then(() => {
      node.parentNode.parentNode.removeChild(node.parentNode)
    });
  });
});
