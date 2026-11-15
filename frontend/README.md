# AutoCare — jurnal de mentenanță auto

Aplicație React pentru afișarea și urmărirea intervențiilor de mentenanță auto.
Interfața principală este în `frontend/`, iar prototipul static din etapele
anterioare este păstrat în `mockup/`.

## Conținutul proiectului

- `src/App.jsx` încarcă intervențiile, calculează contorul și gestionează
  tema, bifarea și ștergerea locală.
- `src/components/` conține componentele reutilizabile pentru lista de
  intervenții și cardul fiecărei intervenții.
- `src/api.js` centralizează cererea HTTP și adresa API-ului.
- `db.json` conține cinci intervenții de test, cu categorii și stări diferite.
- `src/App.css` definește aspectul adaptabil și temele vizuale.

## Rulare locală

Pornește comenzile în două terminale, ambele din directorul `frontend/`.

Terminalul 1 — API-ul mock:

```sh
npm run api
```

API-ul expune lista la <http://localhost:3001/maintenanceTasks>.

Terminalul 2 — aplicația React:

```sh
npm run dev
```

Deschide adresa Vite afișată în terminal (implicit
<http://localhost:5173>). Adresa API poate fi schimbată prin `VITE_API_URL`;
valoarea implicită este `http://localhost:3001`.

## Stadiul proiectului

- [x] Etapa 5: stare locală și evenimente
- [x] Etapa 6: încărcarea datelor dintr-un API mock
- [ ] Etapa 7: formular și validare

## Etapa 6: date de la un API mock

La deschiderea paginii, aplicația cere datele din `db.json` prin `json-server`.
Interfața afișează starea de încărcare, lista după răspunsul reușit sau un
mesaj de eroare cu instrucțiunea de pornire a API-ului. Cererile HTTP sunt
centralizate în `src/api.js`, iar efectul React este curățat la demontarea
componentei.

Bifarea și ștergerea modifică momentan doar starea locală și se pierd la
reîncărcarea paginii; salvarea modificărilor pe server ține de etapa următoare.

| ID | Cerință | Verificare |
|---|---|---|
| S6-R1 | `npm run api` pornește API-ul cu datele din `db.json` | Deschide `http://localhost:3001/maintenanceTasks` |
| S6-R2 | Datele sunt încărcate de la API, nu hardcodate în `App.jsx` | Oprește și repornește API-ul |
| S6-R3 | Este afișat mesajul de încărcare | Pornește temporar API-ul cu `npx json-server --watch db.json --port 3001 --delay 4000` |
| S6-R4 | O eroare API este explicată utilizatorului | Oprește API-ul și reîncarcă pagina |
| S6-R5 | `fetch` este centralizat, iar URL-ul poate fi configurat | Verifică `src/api.js` și `.env.example` |
| S6-R6 | Etapa este documentată | Consultă `ai-log/etapa-06.md` |

Verificări de proiect:

```sh
npm run lint
npm run build
```
