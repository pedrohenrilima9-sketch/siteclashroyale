document.addEventListener("DOMContentLoaded", () => {
    const copyBtn = document.getElementById("copy-deck");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const deckList = "Golem, Bebê Dragão, Tornado, Barril de Bárbaros, etc.";
        navigator.clipboard.writeText(deckList).then(() => {
          alert("Deck copiado para a área de transferência!");
        });
      });
    }
  });
  