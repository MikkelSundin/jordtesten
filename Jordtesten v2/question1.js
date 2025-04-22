// Når skjemaet sendes inn (brukeren klikker "Neste")
document.getElementById("question-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Hent valgt alternativ
    const selected = document.querySelector('input[name="usage"]:checked');
    if (!selected) {
      alert("Velg et alternativ før du går videre.");
      return;
    }
  
    // Lagre svaret i localStorage
    localStorage.setItem("q1", selected.value);
  
    // Gå til neste side
    window.location.href = "question2.html";
  });
  
  // Gjenopprett valgt alternativ hvis man går tilbake til siden
  window.addEventListener("DOMContentLoaded", function () {
    const savedAnswer = localStorage.getItem("q1");
    if (savedAnswer) {
      const input = document.querySelector(`input[value="${savedAnswer}"]`);
      if (input) {
        input.checked = true;
      }
    }
  });
  