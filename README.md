# 📘 My Recipes (SQLite Version)

Application web mobile-first pour stocker et rechercher des recettes de cuisine.  
Frontend en React, Backend en Node.js + Express, base de données SQLite locale (auto-gérée), le tout déployé avec Docker Compose.

---

## 🚀 Fonctionnalités

- Stockage de recettes avec les champs :
  - Titre
  - Ingrédients (liste)
  - Étapes (liste)
  - Photo (URL)
  - URL source
- Page d'ajout de recette
- Page de recherche et visualisation des recettes
- Application web responsive, utilisable sur mobile

---

## 🧱 Stack technique

| Composant  | Technologie       |
|------------|------------------|
| Frontend   | React + Vite     |
| Backend    | Node.js + Express |
| Base de données | SQLite via `better-sqlite3` |
| Conteneurisation | Docker & Docker Compose |

---

## 🛠️ Installation locale

### 1. Prérequis

- Docker & Docker Compose installés

### 2. Lancer l'application

```bash
docker compose up --build
