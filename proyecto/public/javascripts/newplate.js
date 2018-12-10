document.querySelector(".ingredientbutton").addEventListener("click", e => {
  e.preventDefault();
  let input = document.querySelector(".ingredientsadd");
  const input2 = document.createElement( 'input' )
  input2.setAttribute("name","ingredient")
  input2.setAttribute("placeholder","Add ingredient")
  console.log(input2)
  input.appendChild(input2)
});
var a  