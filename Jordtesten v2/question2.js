const questionTitle = document.getElementById("questionTitle");
const questionForm = document.getElementById("questionForm");
const backBtn = document.querySelector(".btn-back");
const nextBtn = document.querySelector(".btn-next");

const previousAnswer = localStorage.getItem("q1");
let questionText = "";
let answers = [];

switch (previousAnswer) {
  case "blomsterbed":
    questionText = "Hvilke blomster ønsker du å plante?";
    answers = ["Tulipaner", "Roser", "Lavendel", "Usikker"];
    break;
  case "plen":
    questionText = "Hvor ofte ønsker du å klippe plenen?";
    answers = ["Hver uke", "Annenhver uke", "Sjeldent"];
    break;
  case "takhage":
    questionText = "Hvor stort er arealet på taket?";
    answers = ["Liten (0–10 m²)", "Medium (10–30 m²)", "Stor (30+ m²)"];
    break;
  case "offentlig":
    questionText = "Hva slags offentlig areal er det snakk om?";
    answers = ["Park", "Skolegård", "Fortau", "Annet"];
    break;
  case "annet":
    questionText = "Kan du spesifisere hva jorden skal brukes til?";
    answers = ["Hyttehage", "Skog", "Fjellhage", "Annet"];
    break;
  default:
    questionText = "Vi fant ikke noe forrige svar – gå tilbake til starten.";
    answers = [];
}

questionTitle.textContent = questionText;
questionForm.innerHTML = "";

answers.forEach((answer) => {
  const label = document.createElement("label");
  label.innerHTML = `
    <input type="radio" name="q2" value="${answer}" />
    ${answer}
  `;
  questionForm.appendChild(label);
  questionForm.appendChild(document.createElement("br"));
});

// Forhåndsvelg tidligere svar
window.onload = () => {
  const storedAnswer = localStorage.getItem("q2");
  if (storedAnswer) {
    const input = document.querySelector(`input[value="${storedAnswer}"]`);
    if (input) input.checked = true;
  }
};

// Neste-knapp
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const selected = document.querySelector('input[name="q2"]:checked');
  if (!selected) return alert("Velg et alternativ");
  localStorage.setItem("q2", selected.value);

  // Definer hvilke svar som avslutter testen
  const sluttsvar = ["Tulipaner", "Lavendel", "Skolegård", "Fjellhage", "Annet"];

  if (sluttsvar.includes(selected.value)) {
    window.location.href = "result.html";
  } else {
    window.location.href = "question3.html";
  }
});

// Tilbake-knapp
backBtn.addEventListener("click", () => {
  window.location.href = "question1.html";
});
