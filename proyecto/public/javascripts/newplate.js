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
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons  addingredient">+</i></a>
          </div>
          <div class="card-content">
            <p>${el.name}</p>
          </div>
        </div>
      </div>
    </div>`;
    });
    document.querySelectorAll(".addingredient").forEach(buttons => {
      buttons.addEventListener("click", e => {
        e.preventDefault();
        const name = e.target.parentNode.parentNode.parentNode.querySelector(
          "p"
        ).innerText;
        ingredientarr.push(name);
        printingr();
      });
    });
  });
});

const inter = (e) => {
  console.log(e)
  e.preventDefault()
  return false
 //axios.post( "/logged/newingredient", {}).then((data)=>console.log(data))
}

const createing = document.querySelector(".createing");
document.querySelector(".createingbutton").addEventListener("click", e => {
  createing.innerHTML = "";
  createing.innerHTML = `
  <div class="row">
  <form class="col s12" id="form-container"  enctype="multipart/form-data">
    <div class="row">
      <div class="input-field col s12">
        <input id="name" type="text" name="name" class="validate">
        <label for="name">Ingredient name</label>
      </div>
    </div>
    <div class="row">
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
    <button class="btn waves-effect waves-light"  type="submit">Create Ingredient
    </button>
    <a class="waves-effect waves-light btn-small undo">^</a>
    </div>   
  </form>
  
</div>`;
  undobtn();
});

//$('#form-container').on("submit", (event)=>{event.preventDefault();inter()});

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

const arrdelete = () => {
  document.querySelectorAll(".listdel").forEach(e => {
    e.addEventListener("click", e => {
      let text = e.target.parentNode.parentNode.innerText;
      text = text.split("\nX")
      const indexof=ingredientarr.indexOf(text[0])
      ingredientarr.splice(indexof, 1);
      printingr()
    });
  });
};

const printingr = () => {
  let ingHTML = document.querySelector(".ingredientList");
  ingHTML.innerHTML = "";
  ingHTML.innerHTML += `<ul class="collection with-header">
  <li class="collection-header"><h4>Ingredients</h4></li>`;
  ingredientarr.forEach(e => {
    if (e != undefined) {
      ingHTML.innerHTML += `<li class="collection-item"><div>${e}<a href="#!" class="secondary-content listdel"><i class="material-icons ">close</i></a></div></li>`;
    }
  });
  ingHTML.innerHTML += `</ul>`;
  arrdelete();
};
