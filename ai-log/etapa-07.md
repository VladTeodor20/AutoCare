# Jurnal AI - Etapa 7

## Proiect

AutoCare — aplicație React pentru organizarea intervențiilor de mentenanță
auto.

## Obiectivul etapei

Adăugarea unui formular controlat și validat, precum și salvarea pe API a
intervențiilor noi, a bifării și a ștergerii acestora.

## Adaptarea cerințelor la proiect

- Resursa API este `maintenanceTasks`, iar câmpurile folosite sunt `title`,
  `description`, `category` și `completed`.
- Formularul permite completarea titlului, a descrierii opționale și a
  categoriei. Titlul este obligatoriu și limitat la 100 de caractere.
- Valorile categoriilor provin din categoriile existente în `db.json`.
- Interfața păstrează conversia dintre modelul API și denumirile românești
  folosite în componentele React.
- Fișierul `tw.json` descrie resursa, câmpul de titlu, starea de finalizare și
  valorile de test ale formularului.

## Implementarea Etapei 7

1. `api.js` centralizează GET, POST, PATCH și DELETE într-o funcție `request`,
   care verifică răspunsul HTTP și tratează răspunsurile fără corp.
2. `TaskForm.jsx` gestionează câmpurile controlate, validează titlul înainte de
   trimitere și afișează erorile lângă formular.
3. La trimitere, formularul așteaptă confirmarea API-ului. Lista se actualizează
   cu elementul întors de server, iar formularul se golește doar după succes.
4. Bifarea trimite starea nouă prin PATCH, iar ștergerea elimină elementul
   numai după confirmarea DELETE.
5. Erorile operațiilor API sunt afișate în pagină. Cât timp are loc o trimitere,
   câmpurile și butonul formularului sunt dezactivate.
6. Au fost adăugate atributele `data-testid` necesare formularului, mesajelor,
   listei și cardurilor.
7. Interfața folosește în continuare layout-ul adaptabil existent, cu formularul
   și lista în două coloane pe ecrane suficient de late.

## Rulare și verificare

Din `frontend/`, pornește API-ul într-un terminal:

```sh
npm run api
```

Într-un al doilea terminal, pornește aplicația:

```sh
npm run dev
```

Verifică adăugarea din interfață, apoi reîncarcă pagina pentru a confirma
persistența. Repetă verificarea pentru bifare și ștergere. Trimiterea fără titlu
trebuie să afișeze mesajul de validare fără să trimită o cerere; cu API-ul oprit,
eroarea de salvare trebuie afișată fără pierderea datelor introduse.

Au fost rulate `npm run lint` și `npm run build`.

## Jurnalul contribuției AI

Asistentul a fost folosit pentru extragerea cerințelor din ghidul Etapei 7,
adaptarea lor la structura și schema AutoCare, implementarea formularului și a
operațiilor persistente, precum și redactarea documentației. Codul a fost
verificat prin lint și build.
