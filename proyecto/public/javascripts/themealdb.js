const EDAMAN_ID = "5940c193";
const EDAMAN_KEY = "4e1db070e05a46be2e5876d8b1d38516";

const urlMaker = () => {
  const mainIngredient = document.querySelector(".mainingredient").value;
  const diet = document.querySelector(".diet").value;
  const calories = document.querySelector(".calories").value;
  let baseURL = `https://api.edamam.com/search?q=${mainIngredient}&app_id=${EDAMAN_ID}&app_key=${EDAMAN_KEY}&to=10`;
  if (diet != "none") {
    baseURL += `&diet=${diet}`;
  }
  if (calories != "") {
    baseURL += `&calories=${calories}`;
  }

  return baseURL;
};

const getMeals = () => {
  let API_URL = urlMaker();
  return axios.get(API_URL).then(res => {
    console.log(res.data);
    let html = "";
    res.data.hits.forEach(el => {
      html += '<div class="target">';
      html += `<h3>${el.recipe.label}</h3>`;
      html += `<img src="${el.recipe.image}">`;
      el.recipe.ingredients.forEach(e => {
        html += `<p>${e.text}</p>`;
      });
      html += "</div>";
    });
    document.querySelector(".apiRecipes").innerHTML = html;
  });
};
document.querySelector(".Search").addEventListener("click", getMeals);

const randomMeal = () => {
  let API_URL = urlMaker();
  API_URL += "&to=50";
  console.log(API_URL)
  return axios.get(API_URL).then(res => {
    let html = "";
    const recipe = res.data.hits;
    const random = Math.floor(Math.random() * (recipe.length));
    console.log(recipe)
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
