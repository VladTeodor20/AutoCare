# Jurnal AI - Etapa 6

## Proiect

AutoCare — aplicație React pentru organizarea intervențiilor de mentenanță
auto.

## Obiectivul etapei

Mutarea datelor de test din codul React într-un API REST mock, servit de
`json-server` din `frontend/db.json`, și încărcarea lor la deschiderea paginii.
Interfața trebuie să facă vizibile stările de încărcare, succes și eroare.

## Ce conține proiectul

- Interfața principală Vite/React este în `frontend/src/`.
- `App.jsx` încarcă lista de la API cu `useEffect`, menține stările de
  încărcare și eroare, calculează numărul de intervenții active și permite
  schimbarea temei.
- `MaintenanceList.jsx` afișează lista și mesajul pentru lista goală.
- `MaintenanceCard.jsx` afișează titlul, descrierea, categoria și starea
  fiecărei intervenții; checkbox-ul permite bifarea, iar butonul permite
  ștergerea.
- `api.js` este singurul modul care face `fetch`, verifică `response.ok` și
  folosește `VITE_API_URL`, cu valoarea implicită `http://localhost:3001`.
- `db.json` conține cinci intervenții cu categorii și stări diferite.
- `package.json` definește comenzile `npm run dev` și `npm run api`.
- `App.css` conține stilurile interfeței, inclusiv pentru încărcare, eroare și
  categorii.
- `mockup/` păstrează prototipul HTML/CSS/JavaScript din etapa inițială.

## Implementarea Etapei 6

1. Datele de test sunt servite de `json-server` la ruta
   `/maintenanceTasks`.
2. `api.js` face cererea HTTP și semnalează răspunsurile HTTP nereușite.
3. La montarea componentei, `useEffect` cere datele și folosește o funcție de
   curățare pentru a evita actualizarea stării după demontare.
4. Câmpurile API (`title`, `description`, `category`, `completed`) sunt
   adaptate la modelul folosit de componentele AutoCare.
5. Pagina afișează mesajul de încărcare, lista după încărcare sau o eroare
   explicită, care îi indică utilizatorului să pornească API-ul.
6. URL-ul API poate fi configurat în `.env`; `.env.example` documentează
   valoarea locală implicită.

## Rulare și verificare

Din `frontend/`, pornește API-ul într-un terminal:

```sh
npm run api
```

Într-un al doilea terminal, pornește interfața:

```sh
npm run dev
```

Ruta API poate fi verificată la
<http://localhost:3001/maintenanceTasks>. Pentru verificarea stării de
încărcare se poate porni temporar serverul cu întârziere:

```sh
npx json-server --watch db.json --port 3001 --delay 4000
```

Pentru verificarea erorii, oprește API-ul și reîncarcă pagina. Au fost rulate
`npm run lint` și `npm run build`.

## Limite cunoscute

Bifarea și ștergerea actualizează doar starea din browser; modificările nu sunt
salvate în API și se pierd la reîncărcare. Persistența și formularul de
adăugare țin de etapele următoare.

## Jurnalul contribuției AI

Asistentul a fost folosit pentru compararea cerințelor Etapei 6 cu proiectul,
corectarea afișării exclusive a stărilor de încărcare/eroare/listă, adăugarea
instrucțiunii de pornire a API-ului în eroare și redactarea documentației.
Modificările au fost verificate prin lint, build și deschiderea aplicației în
browser.
