# AutoCare — jurnal de mentenanță auto

Aplicație React pentru afișarea și urmărirea intervențiilor de mentenanță auto.
Interfața este în acest director, iar prototipul static din etapele anterioare
este păstrat în `../mockup/`.

## Conținutul proiectului

- `src/App.jsx` definește rutele, iar paginile din `src/pages/` gestionează
  lista, detaliile, prezentarea și adresele inexistente.
- `src/components/` conține componentele reutilizabile pentru lista de
  intervenții, formular și layout-ul comun; stilurile lor sunt în CSS Modules.
- `src/api.js` centralizează cererile HTTP, inclusiv încărcarea unui singur
  element la `/maintenanceTasks/:id`.
- `src/index.css` păstrează variabilele și clasele comune.
- `db.json` conține cinci intervenții de test, cu categorii și stări diferite.
- `tw.json` păstrează configurația folosită de verificarea automată.

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
- [x] Etapa 8: rutare, pagină de detaliu și stiluri modulare

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

## Etapa 8: rutare și pagină de detaliu

React Router oferă navigare fără reîncărcarea paginii, cu layout comun,
marcarea rutei active, pagina Despre și pagina 404. Lista rămâne la `/`, iar
detaliile sunt încărcate individual din API la `/maintenanceTasks/:id`.
Componenta de detaliu afișează starea, categoria, descrierea și ID-ul; un ID
inexistent afișează eroarea API cu link înapoi la listă.

Stilurile componentelor și paginilor sunt izolate în fișiere
`.module.css`; `src/index.css` conține numai tema, stilurile de bază și clasele
comune. Atributele `data-testid` din Etapa 7 sunt păstrate, iar titlul fiecărui
card folosește `data-testid="item-link"` pentru navigarea la detalii.

| ID | Cerință | Verificare |
|---|---|---|
| S8-R1 | Navigarea din antet schimbă pagina fără reîncărcare | Navighează între Intervenții și Despre; verifică fila Network |
| S8-R2 | Titlul cardului deschide detaliul elementului | Deschide un card și verifică `/maintenanceTasks/<id>` |
| S8-R3 | Detaliul se poate reîncărca, iar un ID necunoscut afișează eroare | Reîncarcă `/maintenanceTasks/1`, apoi deschide `/maintenanceTasks/999` |
| S8-R4 | O adresă necunoscută afișează pagina 404 a aplicației | Deschide `/ceva` și caută `data-testid="not-found"` |
| S8-R5 | Stilurile specifice sunt CSS Modules; cele comune sunt în `index.css` | Verifică `src/components/` și `src/pages/` |
| S8-R6 | Selectoarele din Etapele 7–8 și ruta bazată pe `tw.json` sunt păstrate | Verifică `data-testid` în pagină și resursa `maintenanceTasks` |
| S8-R7 | README și jurnalul AI documentează etapa | Consultă această secțiune și `../ai-log/etapa-08.md` |

Verificări de proiect:

```sh
npm run lint
npm run build
```
