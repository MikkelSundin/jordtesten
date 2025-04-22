const resultText = document.getElementById("resultText");

const q1 = localStorage.getItem("q1");
const q2 = localStorage.getItem("q2");
const q3 = localStorage.getItem("q3");

let result = "jord1"; // fallback

// Enkel logikk for å tildele jordtype basert på tidligere svar
if (q1 === "blomsterbed") {
  if (q2 === "Tulipaner" || q3 === "Tulipaner") {
    result = "jord1";
  } else if (q2 === "Lavendel" || q3 === "Lavendel") {
    result = "jord2";
  } else {
    result = "jord3";
  }
} else if (q1 === "plen") {
  result = "jord4";
} else if (q1 === "takhage") {
  result = "jord5";
} else if (q1 === "offentlig") {
  result = "jord6";
} else if (q1 === "annet") {
  result = "jord7";
}

// Vis resultatet på siden
resultText.textContent = `Basert på dine svar anbefaler vi: ${result}.`;

// Lagre resultatet til localStorage for evt. bruk senere
localStorage.setItem("jordType", result);

// Legg det samme resultatet i skjemaets skjulte input-felt
document.getElementById("message").value = `Anbefalt jordtype: ${result}`;

// Start testen på nytt
function startOver() {
  localStorage.clear();
  window.location.href = "index.html";
}
