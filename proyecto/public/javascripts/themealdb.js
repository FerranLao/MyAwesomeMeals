// const API_URL = "https://www.themealdb.com/api/json/v1/1/latest.php"

const EDAMAN_ID = "5940c193";
const EDAMAN_KEY = "4e1db070e05a46be2e5876d8b1d38516";
const API_URL = `https://api.edamam.com/search?q=chicken&app_id=${EDAMAN_ID}&app_key=${EDAMAN_KEY}`;

const getMeals = () => {
  return axios.get(API_URL).then(res => {
    console.log(res.data);
    let html;
    res.data.hits.forEach(el => {
      html += `<img src="${el.recipe.image}">`;
      el.recipe.ingredients.forEach(e => {
        html += `<p>${e.text}</p>`;
      });
    });
    document.querySelector(".pepe").innerHTML = html;
  });
};
getMeals();

// const getMeals = () => {
//     return axios.get(API_URL).then(res => {
//        let html = ""
//        console.log(res)
//        res.data.meals.forEach(e=> {
//            html += `<img src="${e.strMealThumb}">`
//        });
//        document.querySelector(".pepe").innerHTML=html
//     });
// }
// getMeals()
