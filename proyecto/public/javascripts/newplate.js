var ingredientarr = [];

document.querySelector(".seachingredient").addEventListener("click", e => {
  const input = document.querySelector(".ingredientsadd").value;
  axios.post("/logged/getIngredients", { input }).then(ing => {
    console.log(ing.data.final);
    let html = document.querySelector(".ingredients");
    html.innerHTML = "";
    ing.data.final.forEach(el => {
      html.innerHTML += `  <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src="${el.imgPath}">
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
          </div>
          <div class="card-content">
            <p>${el.name}</p>
          </div>
        </div>
      </div>
    </div>`
      
      
      
    //   ` <div class="row">
    //   <div class="col s12 m7">
    //     <div class="card small">
    //       <div class="card-image">
    //         <img src="${el.imgPath}">
    //       </div>
    //       <div class="card-content">
    //         <p>${el.name}</p>
    //       </div>
    //       <div class="card-action">
    //         <a class="addingredient" href="#">Add Ingredient</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>`;
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
  createing.innerHTML = `
  <div class="row">
  <form class="col s12" action="/logged/newingredient" method="POST" id="form-container" enctype="multipart/form-data">
    <div class="row">
      <div class="input-field col s6">
        <input id="name" type="text" name="name" class="validate">
        <label for="name">Ingredient name</label>
      </div>
      <div class="file-field input-field">
      <div class="btn">
        <span>Add a photo</span>
        <input id="photo" type="file" name="photo" placeholder="Your photo">
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
      </div>
    </div>
    </div>
    <button class="btn waves-effect waves-light" type="submit" name="action">Create Ingredient
    </button>
    <a class="waves-effect waves-light btn-small undo">^</a>
  </form>
</div>`;
  undobtn();
});

const undobtn = () => {
  document.querySelector(".undo").addEventListener("click", e => {
    e.preventDefault();
    createing.innerHTML = "";
  });
};

document.querySelector(".createRecipe").addEventListener("click", e => {
  console.log(window.location.pathname);
  let path = window.location.pathname;
  path = path.split("/");
  axios.post(`/logged/newmeal/${path[3]}`, { ingredientarr }).then(e => {
    console.log(e);
    ingredientarr = [];
    window.location.replace("/logged/allmeals");
  });
});
