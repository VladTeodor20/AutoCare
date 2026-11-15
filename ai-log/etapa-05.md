# Jurnal AI - Etapa 5

În această etapă, am folosit asistentul AI pentru a genera și adapta codul necesar aplicației AutoCare:

- **Integrarea `useState`:** Mutarea listei de intervenții auto în state-ul componentei `App` și inițializarea stării.
- **Funcții de modificare:** Redactarea funcțiilor imutabile de comutare a stării unei intervenții (folosind `map`) și de ștergere a acesteia (folosind `filter`).
- **Componente controlate:** Modificarea componentei `MaintenanceCard` pentru a utiliza un checkbox controlat (`checked` și `onChange`) și un buton de ștergere accesibil (`aria-label`).
- **Comutarea temei:** Implementarea logicii de stare pentru temă (luminos/întunecat) și aplicarea atributului `data-theme` pe elementul `<html>`, împreună cu actualizarea regulilor în fișierul CSS.