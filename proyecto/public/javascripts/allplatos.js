document.querySelectorAll(".recipeRemove").forEach(e => {
  e.addEventListener("click", e => {
      const name =e.target.parentNode.parentNode.querySelector("p").innerText
        axios.post("/logged/recipeRemove",{name}).then(()=>{
        })
    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode.parentNode.parentNode
    );
  });
});
