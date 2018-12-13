var ingredientarr=[]

document.querySelector(".seachingredient").addEventListener("click", e => {
  e.preventDefault();
  const input = document.querySelector(".ingredientsadd").value;
  axios.get("/logged/getIngredients").then(ing => {
    let match = [];
    let html = document.querySelector(".ingredients");
    ing.data.ing.forEach(e => {
      if (e.name == input) {
        match.push(e);
      }
    });
    html.innerHTML = "";
    match.forEach(el => {
      html.innerHTML += `<p>${el.name}</p>`;
      html.innerHTML += `<img src="${el.imgPath}">`;
      html.innerHTML += `<button class="addingredient">Add Ingredient</button>`;
    });
    document.querySelectorAll(".addingredient").forEach(buttons => {
      buttons.addEventListener("click", e => {
        e.preventDefault();
        let ingHTML=document.querySelector(".ingredientList")
        console.log(ingHTML)

        const name = e.target.parentNode.querySelector("p").innerText;
        ingredientarr.push(name)
        console.log(ingredientarr)
        ingredientarr.forEach(e=>{
          ingHTML.innerHTML+=`<p>${name}</p>`          
        })
      });
    });
  });
});

//añadir inputs
// document.querySelector(".ingredientbutton").addEventListener("click", e => {
//   e.preventDefault();
//   let input = document.querySelector(".ingredientsadd");
//   const input2 = document.createElement( 'input' )
//   input2.setAttribute("name","ingredient")
//   input2.setAttribute("placeholder","Add ingredient")
//   input.appendChild(input2)
// });
