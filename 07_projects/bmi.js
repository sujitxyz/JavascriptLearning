const form = document.querySelector("form")

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  const weight = parseInt(document.querySelector("#weight").value)
  const height = parseInt(document.querySelector("#height").value)
  const result = document.querySelector("#results")
 
  if(height === "" || height < 0 || isNaN(height)){
    result.innerHTML = `Please! Enter a valid height: ${height}`
  } else if(weight === "" || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please! Enter a valid weight: ${weight}`
  }else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6){
      result.innerHTML = `<span>Result is ${bmi} which is Under Weight</span>`
      result.style.color = "orange"
    } else if (bmi >= 18.6 && bmi < 24.9){
      result.innerHTML = `<span>Result is ${bmi}</span> which Normal Range`
      result.style.color = "green"
    }else{
      result.innerHTML = `<span>Result is ${bmi}</span> which is Overweight`
      result.style.color = "red"
    }
  }
})