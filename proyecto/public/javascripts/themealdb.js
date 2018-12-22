const EDAMAN_ID = "5940c193";
const EDAMAN_KEY = "4e1db070e05a46be2e5876d8b1d38516";
let page = 1;
let recipe;
let index = 0;

$(document).ready(function() {
  $("select").formSelect();
});
$(document).ready(function() {
  M.updateTextFields();
});

const urlMaker = () => {
  let max = page * 10;
  let min = max - 10;
  let mainIngredient = document.querySelector(".mainingredient").value;
  const diet = document.querySelector(".diet").value;
  const calories = document.querySelector(".calories").value;
  if (calories == "" && mainIngredient == "" && diet == "none") {
    mainIngredient = "sugar";
  }
  let baseURL = `https://api.edamam.com/search?q=${mainIngredient}&app_id=${EDAMAN_ID}&app_key=${EDAMAN_KEY}`;
  if (diet != "none") {
    baseURL += `&diet=${diet}`;
  }
  if (calories != "") {
    baseURL += `&calories=${calories}`;
  }
  baseURL += `&from=${min}&to=${max}`;
  return baseURL;
};

const getMeals = () => {
  let API_URL = urlMaker();
  return axios.get(API_URL).then(res => {
    recipe = res.data.hits;
    let html = "";
    res.data.hits.forEach(el => {
      html += ` <div class="row">
      <div class="col s12 m7 targeta">
        <div class="card small ">
          <div class="card-image">
            <img src="${el.recipe.image}">
          </div>
          <div class="card-content">
            <p>${el.recipe.label}<span style="display:none">${index}</span></p>
          </div>
          <div class="card-action">
            <a  class='seeRecipe' href="#">See this recipe</a>
          </div>
        </div>
      </div>
    </div>`;
      index++;
    });
    index = 0;
    const buttonshtml = document.querySelector(".nextbackbuttons");
    buttonshtml.innerHTML = "";
    if (page > 1) {
      buttonshtml.innerHTML += '<button class="backbutton">back</button>';
    }
    if (res.data.more) {
      buttonshtml.innerHTML += '<button class="nextbutton">next</button>';
    }
    document.querySelector(".apiRecipes").innerHTML = html;
    buttonAdder();
    nextbackbutton();
  });
};
document.querySelector(".Search").addEventListener("click", getMeals);

const randomMeal = () => {
  let API_URL = urlMaker();
  API_URL += "&to=50";
  return axios.get(API_URL).then(res => {
    let html = "";
    const recipe = res.data.hits;
    const random = Math.floor(Math.random() * recipe.length);
    html = ` <div class="singleappirecipe">
    <div class="col s12 m7">
    <h2 class="header recipelabel">${recipe[random].recipe.label}</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img class="singlerecipeimage" src="${recipe[random].recipe.image}">
    </div>
      <div class="card-stacked">
        <div class="card-content">
        <ul>`;
    recipe[random].recipe.ingredients.forEach(e => {
      html += `<li class="ingredientsli">${e.text}</li>`;
    });
    html += `</ul>
         <p>Calories:${recipe[random].recipe.calories}</p><br><br>`;
    recipe[random].recipe.healthLabels.forEach(e => (html += `<li>${e}</li>`));
    html += `</div>
        <div class="card-action">
          <a href="#" class="addRecipe">Add to your favorites</a>
        </div>
      </div>
    </div>
  </div>
  </div>`;
    document.querySelector(".apiRecipes").innerHTML = html;
    addRecipeButton();
  });
};
document.querySelector(".Random").addEventListener("click", randomMeal);

const buttonAdder = () => {
  document.querySelectorAll(".seeRecipe").forEach(e => {
    e.addEventListener("click", function(e) {
      let recindex = e.target.parentNode.parentNode.querySelector("span")
        .innerText;
      printRecipe(recipe[recindex].recipe);
    });
  });
};

const printRecipe = recipe => {
  document.querySelector(".nextbackbuttons").innerHTML=""
  let html = `<div class="row">
<div class="col s12 m7">
  <div class="card">
    <div class="card-image">
      <img class="recipeimage"src="${recipe.image}">
    </div>
    <div class="card-content">
      <p><h3 class="recipelabel">${recipe.label}</h3>
      <ul>`;
  recipe.ingredients.forEach(e => {
    html += `<li class="ingredientsli">${e.text}</li>`;
  });
  html += `</ul>
           <p>Calories:${recipe.calories}</p><br><br>`;
  recipe.healthLabels.forEach(e => (html += `<li>${e}</li>`));
  html += `</p>
    </div>
    <div class="card-action">
            <a href="#" class="addRecipe">Add to your favorites</a>
          </div>
  </div>
</div>
</div>`;

  document.querySelector(".apiRecipes").innerHTML = html;
  addRecipeButton();
};

const addRecipeButton = () => {
  document.querySelector(".addRecipe").addEventListener("click", () => {
    const name = document.querySelector(".recipelabel").innerText;
    const imgPath = document.querySelector(".recipeimage").src;
    let ingredients = [];
    document.querySelectorAll(".ingredientsli").forEach(e => {
      ingredients.push(e.innerText);
    });
    axios
      .post("/logged/addmeal", {
        name,
        imgPath,
        ingredients
      })
      .then(res => {
        console.log(res);
        window.location.replace(`/logged/standarize/${res.data}`);
      });
  });
};

const nextbackbutton = () => {
  if (document.querySelector(".backbutton") != null) {
    document.querySelector(".backbutton").addEventListener("click", () => {
      page -= 1;
      getMeals();
    });
  }
  if (document.querySelector(".nextbutton") != null) {
    document.querySelector(".nextbutton").addEventListener("click", () => {
      page += 1;
      getMeals();
    });
  }
};
