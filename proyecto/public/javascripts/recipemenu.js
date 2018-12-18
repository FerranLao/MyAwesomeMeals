document.querySelectorAll(".reciperemove").forEach(node => {
  node.addEventListener("click", e => {
    const node = e.target.parentNode.querySelector("span");
    const id = node.innerText;
    let path = window.location.pathname;
    path = path.split("/");
    axios.post(`/logged/recipemenuremove/${path[3]}`, { id }).then(() => {
      e.target.parentNode.innerHTML = "";
    });
  });
});
