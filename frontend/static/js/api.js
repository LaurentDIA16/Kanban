const API_URL = "http://localhost:8000/api/";

// Récupérer les tableaux depuis l'API
async function getBoards() {
    const response = await fetch(API_URL + "boards/");
    return response.json();
  }

// Créer un tableau
async function createBoard(title, position) {
  const response = await fetch(API_URL + "boards/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, position }),
  });

  return response.json();
}

//Mettre à jour un tableau
async function updateBoard(id_board, title) {
  const response = await fetch(API_URL + "boards/" + id_board + "/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  return response.json();
}

//Supprimer un tableau
async function deleteBoard(id_board) {
  const response = await fetch(API_URL + "boards/" + id_board + "/", {
    method: "DELETE",
  });

  return response.status;
}

// Créer un item
async function createItem(title, position, board) {
  const response = await fetch(API_URL + "items/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, position, board: board }),
  });

  return response.json();
}

// Récupérer les items d'un tableau
async function getItemsByBoard(board) {
  const response = await fetch(API_URL + `items/?board=${board}`);
  return response.json();
}

//Mettre à jour un item
async function updateItem(id_item, title, id_board) {
  const response = await fetch(API_URL + "items/" + id_item + "/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, id_board }),
  });

  return response.json();
}

// Supprimer un item
async function deleteItem(id) {
  const response = await fetch(API_URL + "items/" + id + "/", {
    method: "DELETE",
  });

  return response.status === 204;
}

// Étendre les fonctions à un autre fichier js
export { createBoard, getBoards, updateBoard, deleteBoard, createItem, getItemsByBoard, updateItem, deleteItem }; //getItems
