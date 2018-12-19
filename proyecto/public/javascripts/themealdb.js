// const EDAMAN_ID = "5940c193";
// const EDAMAN_KEY = "4e1db070e05a46be2e5876d8b1d38516";
// let page = 1;

// $(document).ready(function() {
//   $("select").formSelect();
// });

// const urlMaker = () => {
//   let max = page * 10;
//   let min = max - 10;
//   let mainIngredient = document.querySelector(".mainingredient").value;
//   const diet = document.querySelector(".diet").value;
//   const calories = document.querySelector(".calories").value;
//   if (calories == "" && mainIngredient == "" && diet == "none") {
//     mainIngredient = "sugar";
//   }
//   let baseURL = `https://api.edamam.com/search?q=${mainIngredient}&app_id=${EDAMAN_ID}&app_key=${EDAMAN_KEY}`;
//   if (diet != "none") {
//     baseURL += `&diet=${diet}`;
//   }
//   if (calories != "") {
//     baseURL += `&calories=${calories}`;
//   }
//   baseURL += `&from=${min}&to=${max}`;
//   return baseURL;
// };

// const getMeals = () => {
//   let API_URL = urlMaker();
//   return axios.get(API_URL).then(res => {
//     console.log(API_URL);
//     let html = "";
//     res.data.hits.forEach(el => {
//       html += '<div class="target">';
//       html += `<h3>${el.recipe.label}</h3>`;
//       html += `<img src="${el.recipe.image}">`;
//       html += "<button class='seeRecipe'>See this recipe</button>";
//       html += "</div>";
//     });
//     const buttonshtml = document.querySelector(".nextbackbuttons");
//     buttonshtml.innerHTML = "";
//     if (page > 1) {
//       buttonshtml.innerHTML += '<button class="backbutton">back</button>';
//     }
//     if (res.data.more) {
//       buttonshtml.innerHTML += '<button class="nextbutton">next</button>';
//     }
//     document.querySelector(".apiRecipes").innerHTML = html;
//     buttonAdder();
//     nextbackbutton();
//   });
// };
// document.querySelector(".Search").addEventListener("click", getMeals);

// const randomMeal = () => {
//   let API_URL = urlMaker();
//   API_URL += "&to=50";
//   return axios.get(API_URL).then(res => {
//     console.log(res);
//     let html = "";
//     const recipe = res.data.hits;
//     const random = Math.floor(Math.random() * recipe.length);
//     html += '<div class="target">';
//     html += `<h3>${recipe[random].recipe.label}</h3>`;
//     html += `<img src="${recipe[random].recipe.image}">`;
//     recipe[random].recipe.ingredients.forEach(e => {
//       html += `<p>${e.text}</p>`;
//     });
//     html += "</div>";

//     document.querySelector(".apiRecipes").innerHTML = html;
//   });
// };
// document.querySelector(".Random").addEventListener("click", randomMeal);

// const buttonAdder = () => {
//   document.querySelectorAll(".seeRecipe").forEach(e => {
//     e.addEventListener("click", function(e) {
//       const recipeName = e.target.parentNode.querySelector("h3").innerText;

//       const API_URL = `https://api.edamam.com/search?q=${recipeName}&app_id=${EDAMAN_ID}&app_key=${EDAMAN_KEY}`;
//       axios
//         .get(API_URL)
//         .then(res => {
//           console.log(res);
//           let recipe;
//           res.data.hits.forEach(e => {
//             if (e.recipe.label == recipeName) {
//               recipe = e.recipe;
//             }
//           });
//           let html = "";
//           html += `<div class="oneRecipe">`;
//           html += `<h2 class="recipelabel">${recipe.label}</h2>`;
//           html += `<img class="recipeimage" src="${recipe.image}">`;
//           html += `<ul><h3>Ingredients</h3>`;
//           recipe.ingredients.forEach(e => {
//             html += `<li class="ingredientsli">${e.text}</li>`;
//           });
//           html += `</ul>`;
//           html += `<p>Calories:${recipe.calories}</p>`;
//           html += `<ul><h3>Health labels<h3>`;
//           recipe.healthLabels.forEach(e => (html += `<li>${e}</li>`));
//           html += `</ul>`;
//           html += `<button class="addRecipe">Add to your recipes</button>`;
//           html += `</div>`;
//           document.querySelector(".apiRecipes").innerHTML = html;
//         })
//         .then(() => {
//           addRecipeButton();
//         });
//     });
//   });
// };
// const addRecipeButton = () => {
//   document.querySelector(".addRecipe").addEventListener("click", () => {
//     const name = document.querySelector(".recipelabel").innerText;
//     const imgPath = document.querySelector(".recipeimage").src;
//     let ingredients = [];
//     document.querySelectorAll(".ingredientsli").forEach(e => {
//       ingredients.push(e.innerText);
//     });
//     axios
//       .post("/logged/addmeal", {
//         name,
//         imgPath,
//         ingredients
//       })
//       .then(res => {
//         console.log(res);
//         window.location.replace(`/logged/standarize/${res.data}`);
//       });
//   });
// };

// const nextbackbutton = () => {
//   if (document.querySelector(".backbutton") != null) {
//     document.querySelector(".backbutton").addEventListener("click", () => {
//       page -= 1;
//       getMeals();
//     });
//   }
//   if (document.querySelector(".nextbutton") != null) {
//     document.querySelector(".nextbutton").addEventListener("click", () => {
//       page += 1;
//       getMeals();
//     });
//   }
// };

const EDAMAN_ID = "5940c193";
const EDAMAN_KEY = "4e1db070e05a46be2e5876d8b1d38516";
let page = 1;

$(document).ready(function() {
  $("select").formSelect();
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
    console.log(API_URL);
    let html = "";
    res.data.hits.forEach(el => {
      html += ` <div class="row">
      <div class="col s12 m7 targeta">
        <div class="card small ">
          <div class="card-image">
            <img src="${el.recipe.image}">
          </div>
          <div class="card-content">
            <p>${el.recipe.label}</p>
          </div>
          <div class="card-action">
            <a  class='seeRecipe' href="#">See this recipe</a>
          </div>
        </div>
      </div>
    </div>`
      // html += '<div class="target">';
      // html += `<h3>${el.recipe.label}</h3>`;
      // html += `<img src="${el.recipe.image}">`;
      // html += "<button class='seeRecipe'>See this recipe</button>";
      // html += "</div>";
    });
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
    console.log(res);
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
    e.addEventListener("click", function(e) {
      const recipeName = e.target.parentNode.parentNode.querySelector("p")
      console.log(recipeName)

      const API_URL = `https://api.edamam.com/search?q=${recipeName.innerText}&app_id=${EDAMAN_ID}&app_key=${EDAMAN_KEY}`;
      axios
        .get(API_URL)
        .then(res => {
          console.log(res);
          let recipe;
          res.data.hits.forEach(e => {
            if (e.recipe.label == recipeName.innerText) {
              recipe = e.recipe;
            }
          });
          let html = `  <div class="row">
          <div class="col s12 m6">
            <div class="card large">
              <div class="card-image">
                <img src="${recipe.image}">
                <span class="card-title">${recipe.label}</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red addRecipe"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">`
              recipe.ingredients.forEach(e => {
            html += `<p class="ingredientsli">${e.text}</>`;
          });
                html+=`</div>
            </div>
          </div>
        </div>`;
          
          // html += `<div class="oneRecipe">`;
          // html += `<h2 class="recipelabel">${recipe.label}</h2>`;
          // html += `<img class="recipeimage" src="${recipe.image}">`;
          // html += `<ul><h3>Ingredients</h3>`;
          // recipe.ingredients.forEach(e => {
          //   html += `<li class="ingredientsli">${e.text}</li>`;
          // });
          // html += `</ul>`;
          // html += `<p>Calories:${recipe.calories}</p>`;
          // html += `<ul><h3>Health labels<h3>`;
          // recipe.healthLabels.forEach(e => (html += `<li>${e}</li>`));
          // html += `</ul>`;
          // html += `<button class="addRecipe">Add to your recipes</button>`;
          // html += `</div>`;
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

