const EDAMAN_ID = "5940c193";
const EDAMAN_KEY = "4e1db070e05a46be2e5876d8b1d38516";
let page = 1;

const urlMaker = () => {
  let max = page * 10;
  let min = max - 10;
  const mainIngredient = document.querySelector(".mainingredient").value;
  const diet = document.querySelector(".diet").value;
  const calories = document.querySelector(".calories").value;
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
    let html = "";
    res.data.hits.forEach(el => {
      html += '<div class="target">';
      html += `<h3>${el.recipe.label}</h3>`;
      html += `<img src="${el.recipe.image}">`;
      el.recipe.ingredients.forEach(e => {
        html += `<p>${e.text}</p>`;
      });
      html += "<button class='seeRecipe'>See this recipe</button>";
      html += "</div>";
    });
    if (page > 1) {
      html += '<button class="backbutton">back</button>';
    }
    if (res.data.more) {
      html += '<button class="nextbutton">next</button>';
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
  console.log(API_URL);
  return axios.get(API_URL).then(res => {
    let html = "";
    const recipe = res.data.hits;
    const random = Math.floor(Math.random() * recipe.length);
    html += '<div class="target">';
    html += `<h3>${recipe[random].recipe.label}</h3>`;
    html += `<img src="${recipe[random].recipe.image}">`;
    recipe[random].recipe.ingredients.forEach(e => {
      html += `<p>${e.text}</p>`;
    });
    html += "</div>";

    document.querySelector(".apiRecipes").innerHTML = html;
  });
};
document.querySelector(".Random").addEventListener("click", randomMeal);

const buttonAdder = () => {
  document.querySelectorAll(".seeRecipe").forEach(e => {
    e.addEventListener("click", function() {
      const recipeName = this.parentNode.querySelector("h3").innerText;
      const API_URL = `https://api.edamam.com/search?q=${recipeName}&app_id=${EDAMAN_ID}&app_key=${EDAMAN_KEY}`;
      axios
        .get(API_URL)
        .then(res => {
          const recipe = res.data.hits[0].recipe;
          let html = "";
          html += `<div class="oneRecipe">`;
          html += `<h2 class="recipelabel">${recipe.label}</h2>`;
          html += `<img class="recipeimage" src="${recipe.image}">`;
          html += `<ul><h3>Ingredients</h3>`;
          recipe.ingredients.forEach(e => {
            html += `<li>${e.text}</li>`;
          });
          html += `</ul>`;
          html += `<p>Calories:${recipe.calories}</p>`;
          html += `<ul><h3>Health labels<h3>`;
          recipe.healthLabels.forEach(e => (html += `<li>${e}</li>`));
          html += `</ul>`;
          html += `<button class="addRecipe">Add to your recipes</button>`;
          html += `</div>`;
          document.querySelector(".apiRecipes").innerHTML = html;
        })
        .then(() => {
          addRecipeButton();
        });
    });
  });
};
const addRecipeButton = () => {
  document.querySelector(".addRecipe").addEventListener("click", () => {
    const name = document.querySelector(".recipelabel").innerText;
    const imgPath = document.querySelector(".recipeimage").src;
    let ingredients = [];
    document.querySelectorAll("li").forEach(e => {
      ingredients.push(e.innerText);
    });
    axios.post("http://localhost:3000/logged/addmeal", {
      name,
      imgPath,
      ingredients
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
