# 📱 My Recipes – Web App Mobile-First

Application web privée de gestion de recettes, avec un backend REST et une base de données MongoDB managée (MongoDB Atlas ou autre).

---

## 📦 Structure du projet

```
my-recipes/
├── client/        # Frontend React (Vite)
├── server/        # Backend Node.js + Express + Mongoose
├── .env           # Variables d’environnement backend
└── docker-compose.yml (optionnel)
```

---

## ⚙️ Prérequis

- Node.js ≥ 18
- Accès à une base **MongoDB managée** (MongoDB Atlas recommandé)
- npm ou yarn

---

## 🚀 Lancement du backend

1. Créez un fichier `.env` à la racine avec le contenu suivant :

```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/myrecipes
PORT=3001
```

2. Installez les dépendances du backend :

```bash
cd server
npm install
```

3. Lancez l’API :

```bash
npm start
```

Vous verrez dans la console : `Server running on port 3001`

---

## 💡 Routes de l’API REST

| Méthode | URL           | Description             |
|--------:|---------------|--------------------------|
| GET     | `/recipes`    | Liste des recettes       |
| POST    | `/recipes`    | Ajout d’une recette      |

---

## 🧪 Exemple de corps `POST /recipes`

```json
{
  "title": "Crêpes maison",
  "ingredients": ["Farine", "Œufs", "Lait"],
  "steps": ["Mélanger", "Cuire à la poêle"],
  "photoUrl": "https://example.com/photo.jpg",
  "url": "https://example.com/recette"
}
```

---

## 📱 Lancement du frontend (React)

1. Installez les dépendances :

```bash
cd client
npm install
```

2. Lancez l'application React :

```bash
npm run dev
```

L’application sera disponible sur `http://localhost:5173` (ou autre port Vite).

---

## 📋 À faire

- [ ] Intégration de l’interface (pages Home & New)
- [ ] Upload d’image local ou via URL
- [ ] Validation des champs
- [ ] Authentification légère (si besoin)

---

## 🛠 Stack utilisée

- **Frontend** : React 18, React Router, Tailwind (ou autre UI)
- **Backend** : Node.js, Express, Mongoose
- **Base de données** : MongoDB Atlas (managée)

---

## 📄 Licence

Usage privé / personnel.
