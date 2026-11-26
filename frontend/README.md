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
- [x] Etapa 7: formular, validare și operații persistente
- [ ] Etapa 8: rutare și pagină de detaliu

## Etapa 6: date de la un API mock

La deschiderea paginii, aplicația cere datele din `db.json` prin `json-server`.
Interfața afișează starea de încărcare, lista după răspunsul reușit sau un
mesaj de eroare cu instrucțiunea de pornire a API-ului. Cererile HTTP sunt
centralizate în `src/api.js`, iar efectul React este curățat la demontarea
componentei.

La Etapa 6, bifarea și ștergerea erau doar locale; Etapa 7 adaugă salvarea lor
pe server, alături de formularul de creare.

| ID | Cerință | Verificare |
|---|---|---|
| S6-R1 | `npm run api` pornește API-ul cu datele din `db.json` | Deschide `http://localhost:3001/maintenanceTasks` |
| S6-R2 | Datele sunt încărcate de la API, nu hardcodate în `App.jsx` | Oprește și repornește API-ul |
| S6-R3 | Este afișat mesajul de încărcare | Pornește temporar API-ul cu `npx json-server --watch db.json --port 3001 --delay 4000` |
| S6-R4 | O eroare API este explicată utilizatorului | Oprește API-ul și reîncarcă pagina |
| S6-R5 | `fetch` este centralizat, iar URL-ul poate fi configurat | Verifică `src/api.js` și `.env.example` |
| S6-R6 | Etapa este documentată | Consultă `ai-log/etapa-06.md` |

## Etapa 7: formular și validare

Formularul controlat permite adăugarea unei intervenții cu titlu, descriere
opțională și categorie. Titlul este obligatoriu și are maximum 100 de
caractere. Datele sunt trimise către API înainte de actualizarea listei, iar
formularul se golește numai după salvarea reușită. Erorile sunt afișate lângă
formular; în timpul trimiterii, câmpurile și butonul sunt dezactivate.

Încărcarea, adăugarea, bifarea și ștergerea folosesc API-ul din
`frontend/src/api.js`. Bifarea trimite o cerere PATCH, ștergerea o cerere
DELETE, iar modificările rămân salvate în `frontend/db.json` și după reîncărcare.
Configurația folosită de verificarea automată se află în `tw.json` din rădăcina
repository-ului.

| ID | Cerință | Verificare |
|---|---|---|
| S7-R1 | Formular controlat pentru titlu, descriere și categorie | Scrie în câmpuri și verifică valorile |
| S7-R2 | Titlul gol nu este trimis și afișează eroare | Trimite formularul gol; verifică mesajul și fila Network |
| S7-R3 | O intervenție nouă este salvată și rămâne după refresh | Adaugă una, verifică `db.json`, reîncarcă pagina |
| S7-R4 | Bifarea și ștergerea sunt persistente | Bifează/șterge o intervenție și reîncarcă pagina |
| S7-R5 | Butonul este dezactivat cât timp se salvează; datele se șterg doar la succes | Pornește API-ul cu `--delay 3000`; apoi testează și cu API-ul oprit |
| S7-R6 | `tw.json` și atributele `data-testid` sunt prezente | Verifică formularul, cardurile, mesajele și selectorii în consolă |
| S7-R7 | README și jurnalul AI documentează etapa | Consultă această secțiune și `ai-log/etapa-07.md` |

Pentru testarea erorii de salvare, oprește API-ul, completează formularul și
trimite-l. Mesajul de eroare trebuie să apară, iar textul introdus să rămână
disponibil pentru o nouă încercare. Pentru a testa starea de trimitere, pornește
temporar API-ul cu întârziere:

```sh
npx json-server --watch db.json --port 3001 --delay 3000
```

Verificări de proiect:

```sh
npm run lint
npm run build
```
