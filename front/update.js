function update(){
  console.log("has been up to date!")
  let score = document.getElementById('value-score').value;
  console.log(score);
  fetch('http://localhost:4000/api/seen', {
  method: "PATCH",
  body: JSON.stringify(score),
  headers: {"Content-type": "application/json; charset=UTF-8"}})
}