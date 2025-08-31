# LinkedIn Clone

Un clone del portale LinkedIn realizzato in **React + Vite**, che si appoggia alle API messe a disposizione da **Strive School / Strive API** per:

- Recuperare informazioni sull'utente autenticato (foto, nome, profilo) e mostrarle nella UI;
- Recuperare, creare e aggiornare post; dare la possibilità di condividere post con altri utenti (tramite l'API);
- Recuperare e inviare messaggi tra utenti;
- Visualizzare, salvare e aggiungere esperienze lavorative nel profilo.

---

## Demo

Visitare la demo deployata: `https://likedin-clone-pi.vercel.app` (se il sito è attivo)
(Nota: Se il sito non risulta funzionante è scaduto il token di strive school per effettuare l'accesso)

---

## Indice

1. [Caratteristiche](#caratteristiche)
2. [Tecnologie](#tecnologie)
3. [Architettura e struttura dei file](#architettura-e-struttura-dei-file)
4. [Setup locale](#setup-locale)
5. [Variabili d'ambiente](#variabili-denv)
6. [Esempi di integrazione con l'API (snippet)](#esempi-di-integrazione-con-lapi-snippet)
7. [Problemi comuni e debug](#problemi-comuni-e-debug)

---

## Caratteristiche

- Autenticazione (login) e recupero dati dell'utente tramite Strive API.
- Feed principale con post: leggere, creare, aggiornare e cancellare (se implementato lato API).
- Possibilità di condividere un post con altri utenti (meccanismo di "share" tramite endpoint API o creazione di un post che cita l'originale).
- Visualizzazione e gestione delle esperienze lavorative: aggiungi/edita/rimuovi esperienze legate al profilo.
- Lista messaggi / chat (inbox) recuperata dalla Strive API e possibilità di inviare nuovi messaggi.
- Componenti riutilizzabili per card, modali, form, loader, ecc.

---

## Tecnologie

- **Runtime / Bundler**: Vite + React
- **Linguaggi**: JavaScript (ES6+), HTML, CSS
- **Routing**: react-router-dom
- **State management**: Redux
- **HTTP client**: fetch nativo
- **Styling**: global CSS + Bootstrap
- **Linting**: ESLint (presente `eslint.config.js`)
- **Deployment**: Vercel (link nel repository)

---

## Architettura e struttura dei file

```
/src
  /assets              # immagini, icone, fonts
  /components          # componenti riutilizzabili (PostCard, Navbar, Sidebar)
  /pages               # pagine principali (Login, Feed, Profile, Messages)
  /services            # wrapper per chiamate API (api.js / postsService.js)
  /contexts            # AuthContext, FeedContext, UIContext
  /hooks               # custom hooks (useAuth, useFetchPosts)
  /utils               # funzioni utili (formatDate, validators)
  /styles              # CSS globali e variables
  main.jsx
  App.jsx

.gitignore
package.json
vite.config.js
README.md
```

**Descrizione rapida dei layer principali**

- `services/api.js` — punto unico per le chiamate HTTP verso Strive API: gestisce baseURL, headers (Authorization), error handling e (se si usa axios) interceptors per refresh token.
- `contexts/AuthContext.jsx` — mantiene lo stato dell'utente autenticato (token, profile), espone `login`, `logout`, `refreshProfile`.
- `pages/Feed` — carica i post con paginazione/infinite scroll e usa `PostComposer` per creare nuovi post.
- `components/PostCard` — mostra il singolo post, le azioni (like, comment, share).
- `components/ShareModal` — UI per selezionare utenti e condividere il post tramite API.

---

## Setup locale

**Prerequisiti**

- Node.js LTS (>=16)
- npm o yarn

**Istruzioni**

```bash
# clona il repo
git clone https://github.com/Gianlu201/LinkedIn-Clone.git
cd LinkedIn-Clone

# installa dipendenze
npm install
# oppure
# yarn install
```

Crea un file `.env` nella root con le variabili mostrate più avanti (Vite richiede il prefisso `VITE_` per esporre le variabili a `import.meta.env`).

---

## Variabili d'ambiente

Esempio di `.env` (NON committare mai valori reali):

```
VITE_TOKEN=eyJhbGciOiJI... (token di test o bearer token)
```

---

## Esempi di integrazione con l'API (snippet)

`src/services/api.js` — esempio minimale usando `fetch`:

```js
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const token = import.meta.env.VITE_TOKEN;

async function request(path, options = {}) {
  const res = await fetch(`${baseUrl}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(errText || 'API error');
  }
  return res.json();
}

export const getProfile = () => request('/profile/me');
export const getPosts = (page = 1) => request(`/posts?page=${page}`);
export const createPost = (postBody) =>
  request('/posts', { method: 'POST', body: JSON.stringify(postBody) });
export const sharePost = (postId, payload) =>
  request(`/posts/${postId}/share`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
export const getMessages = () => request('/messages');
```

> Gli endpoint sopra sono esempi: adattali agli endpoint effettivi esposti dall'API di Strive School. Controlla la documentazione / credenziali fornite.

---

## Problemi comuni e debug

- **401 Unauthorized**: controlla che `VITE_STRIVE_TOKEN` sia valido e non scaduto.
- **CORS**: se l'API non ritorna header CORS, usa un proxy server (serverless function) per effettuare le richieste.
- **Variabili non presenti in `import.meta.env`**: ricorda il prefisso `VITE_` per Vite.

---

## Credits

Progetto originale: `Gianlu201/LinkedIn-Clone` — GitHub

Grazie! 🚀
