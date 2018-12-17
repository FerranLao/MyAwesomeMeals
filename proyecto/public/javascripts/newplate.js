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
        ingredientarr.push(name);
        ingredientarr.forEach(e => {
          ingHTML.innerHTML += `<p>${e}</p>`;
        });
      });
    });
  });
});

const createing = document.querySelector(".createing");
document.querySelector(".createingbutton").addEventListener("click", e => {
  createing.innerHTML = "";
  createing.innerHTML = `<form action="/logged/newingredient" method="POST" id="form-container" enctype="multipart/form-data">
  <label for="name">Ingredient name</label>
  <input id="name" type="text" name="name" placeholder="Tomatoes">
  <br><br>
  <label for="photo">Add a photo</label>
  <input id="photo" type="file" name="photo" placeholder="Your photo">
  <br>
  <button>Create Ingredient</button>
  </form>`;
});

document.querySelector(".createRecipe").addEventListener("click", e => {
  console.log(window.location.pathname);
  let path = window.location.pathname;
  path = path.split("/");
  console.log("eii");
  axios.post(`/logged/newmeal/${path[3]}`, { ingredientarr }).then(e => {
    console.log(e)
    ingredientarr = [];
    window.location.replace("/logged/allmeals");
  });
});
