var ingredientarr = [];

document.querySelector(".seachingredient").addEventListener("click", e => {
  const input = document.querySelector(".ingredientsadd").value;
  axios.post("/logged/getIngredients", { input }).then(ing => {
    console.log(ing.data.final);
    let html = document.querySelector(".ingredients");
    html.innerHTML = "";
    ing.data.final.forEach(el => {
      html.innerHTML += `<div><p>${el.name}</p><img src="${
        el.imgPath
      }"><button class="addingredient">Add Ingredient</button></div>`;
    });
    document.querySelectorAll(".addingredient").forEach(buttons => {
      buttons.addEventListener("click", e => {
        e.preventDefault();
        let ingHTML = document.querySelector(".ingredientList");
        ingHTML.innerHTML = "";
        const name = e.target.parentNode.querySelector("p").innerText;
        console.log(name);
        ingredientarr.push(name);
        console.log(ingredientarr);
        ingredientarr.forEach(e => {
          ingHTML.innerHTML += `<p>${e}</p>`;
        });
      });
    });
  });
});
document.querySelector(".createRecipe").addEventListener("click", e => {
  console.log(window.location.pathname);
  axios.post(window.location.pathname, { ingredientarr }).then(() => {
    ingredientarr = [];
    window.location.replace("/logged/allmeals");
  });
});

