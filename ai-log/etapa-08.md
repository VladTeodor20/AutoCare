# Jurnal AI - Etapa 8

## Proiect

AutoCare — aplicație React pentru organizarea intervențiilor de mentenanță
auto.

## Obiectivul etapei

Adăugarea navigării cu React Router, a paginilor pentru listă, detaliu, Despre
și adrese inexistente, plus organizarea stilurilor componentelor în CSS
Modules.

## Adaptarea la proiect

- Resursa din `tw.json` este `maintenanceTasks`, deci ruta pentru un element
  folosește forma `/maintenanceTasks/:id`.
- Pagina de detaliu cere acel element de la API prin
  `/maintenanceTasks/:id`; afișează titlul, categoria, descrierea, starea și
  identificatorul.
- Navigația conține paginile Intervenții și Despre; toate paginile folosesc
  același antet și subsol.
- `App.jsx` conține harta rutelor, iar starea și operațiile listei au fost
  mutate în `pages/TasksPage.jsx`.
- Stilurile specifice sunt în fișiere `.module.css`; `index.css` păstrează
  tema, stilurile de bază și clasele comune.
- Atributele `data-testid` existente au fost păstrate; titlul din card este
  acum link cu `data-testid="item-link"`.

## Implementare

1. `BrowserRouter` învelește aplicația, iar layout-ul folosește `Outlet` și
   `NavLink` pentru navigarea fără reîncărcare și marcarea paginii active.
2. Pagina de detaliu citește ID-ul cu `useParams`, reîncarcă la schimbarea ID-ului
   și afișează stări explicite de încărcare și eroare, inclusiv pentru
   intervenții inexistente.
3. Pagina Despre descrie aplicația AutoCare și tehnologiile folosite; ruta
   wildcard afișează pagina 404.
4. CSS-ul formularului, cardurilor, listei, layout-ului și paginilor a fost
   separat în module lângă componentele lor.
5. README-ul și acest jurnal descriu rutele, verificarea și adaptarea schemei.

## Verificare

Au fost rulate `npm run lint` și `npm run build`. Rutele verificate includ
pagina principală, `/maintenanceTasks/1`, `/maintenanceTasks/999`, `/despre`
și o adresă inventată. API-ul mock se pornește separat cu `npm run api`.
