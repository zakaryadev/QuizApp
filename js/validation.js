const input = document.querySelector(".telefon");
const valid = document.getElementById("validation");
valid.style.display = "none";
valid.style.transition = "all 0.5s ease";
input.addEventListener("input", updateValue);

function updateValue(e) {
  valid.style.display = "block";
  valid.style.transition = "all 0.5s ease";
  if (!isNaN(e.target.value) && e.target.value !== ".") {
    valid.innerHTML = `Sanlar durıs kirtilgenin tekserip barıń`;
    if ((valid.classList.contains = "red")) {
      valid.classList.remove("red");
      valid.classList.add("succes");
    } else {
      valid.classList.add("succes");
    }
  } else {
    valid.classList.add("red");
    valid.innerHTML = `Iltimas tek ǵana sanlardı kiritiń`;
    if ((valid.classList.contains = "succes")) {
      valid.classList.add("red");
      valid.classList.remove("succes");
    } else {
      valid.classList.add("red");
    }
  }
}
