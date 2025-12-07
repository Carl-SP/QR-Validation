const API_URL = "https://script.google.com/macros/s/AKfycbzPcS2oXSdKK2nGvc_AG3BpTNLvcHs7XreONzCI4iQV3AcOor-rU9F5tWKyBKXzp71gjQ/exec";

// Récupérer tous les invités
async function getAll() {
  const res = await fetch(API_URL + "?action=getAll");
  return res.json();
}

// Ajouter un scan
async function addScan(nom, prenom) {
  const url = `${API_URL}?action=addScan&nom=${encodeURIComponent(nom)}&prenom=${encodeURIComponent(prenom)}`;
  const res = await fetch(url);
  return res.json();
}

// Ajouter un invité via admin
async function addGuest(nom, prenom) {
  const url = `${API_URL}?action=addGuest&nom=${encodeURIComponent(nom)}&prenom=${encodeURIComponent(prenom)}`;
  const res = await fetch(url);
  return res.json();
}

// Réinitialiser l'événement
async function resetEvent() {
  const url = `${API_URL}?action=resetEvent`;
  const res = await fetch(url);
  return res.json();
}

// Exporter l'événement (CSV)
async function exportEvent() {
  const url = `${API_URL}?action=export`;
  const res = await fetch(url);
  const text = await res.text();
  const a = document.createElement("a");
  a.href = "data:text/csv;charset=utf-8," + encodeURIComponent(text);
  a.download = "event.csv";
  a.click();
}
