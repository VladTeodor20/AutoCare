import { useState } from "react";

const CATEGORII = ["Motor", "Frâne", "Anvelope", "Filtre", "Electric"];
const TITLU_MAX = 100;

export default function TaskForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [descriere, setDescriere] = useState("");
  const [categorie, setCategorie] = useState(CATEGORII[0]);
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const titluCuratat = titlu.trim();
    if (titluCuratat === "") return "Titlul este obligatoriu.";
    if (titluCuratat.length > TITLU_MAX) {
      return `Titlul poate avea maximum ${TITLU_MAX} de caractere.`;
    }
    return "";
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);
    try {
      await onAdd({
        title: titlu.trim(),
        description: descriere.trim(),
        category: categorie,
        completed: false,
      });
      setTitlu("");
      setDescriere("");
      setCategorie(CATEGORII[0]);
    } catch (err) {
      setEroare(err instanceof Error ? err.message : "Intervenția nu a putut fi salvată.");
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className="item-form" onSubmit={handleSubmit} noValidate data-testid="form">
      <label htmlFor="form-title">Titlu</label>
      <input
        id="form-title"
        type="text"
        value={titlu}
        onChange={(event) => setTitlu(event.target.value)}
        placeholder="Ex: Schimb ulei motor"
        maxLength={TITLU_MAX}
        aria-invalid={Boolean(eroare)}
        aria-describedby={eroare ? "form-error" : undefined}
        disabled={trimite}
        data-testid="form-title"
      />

      <label htmlFor="form-description">Descriere</label>
      <input
        id="form-description"
        type="text"
        value={descriere}
        onChange={(event) => setDescriere(event.target.value)}
        placeholder="Detalii despre intervenție (opțional)"
        disabled={trimite}
        data-testid="form-description"
      />

      <label htmlFor="form-category">Categorie</label>
      <select
        id="form-category"
        value={categorie}
        onChange={(event) => setCategorie(event.target.value)}
        disabled={trimite}
        data-testid="form-category"
      >
        {CATEGORII.map((categorieDisponibila) => (
          <option key={categorieDisponibila} value={categorieDisponibila}>
            {categorieDisponibila}
          </option>
        ))}
      </select>

      {eroare && (
        <p className="error" id="form-error" role="alert" data-testid="form-error">
          {eroare}
        </p>
      )}
      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă intervenția"}
      </button>
    </form>
  );
}
