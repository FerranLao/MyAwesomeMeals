
const API_URL = "https://www.themealdb.com/api/json/v1/1/latest.php"

const getMeals = () => {
    return axios.get(API_URL).then(res => {
       let html = ""
       console.log(res)
       res.data.meals.forEach(e=> {
           html += `<img src="${e.strMealThumb}">`                      
       });
       document.querySelector(".pepe").innerHTML=html
    });    
}
getMeals()