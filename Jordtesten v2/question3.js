const questionTitle = document.getElementById("questionTitle");
const questionForm = document.getElementById("questionForm");
const backBtn = document.querySelector(".btn-back");
const nextBtn = document.querySelector(".btn-next");

const previousAnswer = localStorage.getItem("q2");
let questionText = "";
let answers = [];

// Definer spørsmål og svar basert på svar fra q2
switch (previousAnswer) {
  case "Tulipaner":
  case "Roser":
    questionText = "Hvor mye sol får området?";
    answers = ["Full sol", "Halvskygge", "Skygge"];
    break;
  case "Liten (0–10 m²)":
  case "Medium (10–30 m²)":
  case "Stor (30+ m²)":
    questionText = "Er taket flatt eller skrått?";
    answers = ["Flatt", "Skrått", "Vet ikke"];
    break;
  case "Hyttehage":
  case "Skog":
    questionText = "Hvordan er jordsmonnet fra før?";
    answers = ["Sandholdig", "Leirholdig", "Steinete", "Vet ikke"];
    break;
  default:
    // Hvis vi ikke har flere spørsmål, gå rett til resultatsiden
    window.location.href = "result.html";
    break;
}

questionTitle.textContent = questionText;
questionForm.innerHTML = "";

answers.forEach((answer) => {
  const label = document.createElement("label");
  label.innerHTML = `
    <input type="radio" name="q3" value="${answer}" />
    ${answer}
  `;
  questionForm.appendChild(label);
  questionForm.appendChild(document.createElement("br"));
});

// Forhåndsvelg tidligere svar
window.onload = () => {
  const storedAnswer = localStorage.getItem("q3");
  if (storedAnswer) {
    const input = document.querySelector(`input[value="${storedAnswer}"]`);
    if (input) input.checked = true;
  }
};

// Neste-knapp
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const selected = document.querySelector('input[name="q3"]:checked');
  if (!selected) return alert("Velg et alternativ");
  localStorage.setItem("q3", selected.value);

  // Send videre til resultat
  window.location.href = "result.html";
});

// Tilbake-knapp
backBtn.addEventListener("click", () => {
  window.location.href = "question2.html";
});
