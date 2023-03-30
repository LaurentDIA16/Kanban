const API_URL = "http://localhost:8000/api/";

async function getBoards() {
    const response = await fetch(API_URL + "boards/");
    return response.json();
  }

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

async function updateBoard(id_board, title) {
  const response = await fetch(API_URL + "boards/" + id_board + "/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  return response.json();
}

async function deleteBoard(id_board) {
  const response = await fetch(API_URL + "boards/" + id_board + "/", {
    method: "DELETE",
  });

  return response.status;
}

// async function deleteBoard(id) {
//   const response = await fetch(API_URL + "boards/" + id + "/", {
//     method: "DELETE",
//   });

//   return response.status === 204;
// }

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

  async function getItemsByBoard(board) {
    const response = await fetch(API_URL + `items/?board=${board}`);
    return response.json();
  }
  

async function deleteItem(id) {
  const response = await fetch(API_URL + "items/" + id + "/", {
    method: "DELETE",
  });

  return response.status === 204;
}

export { createBoard, getBoards, updateBoard, deleteBoard, createItem, getItemsByBoard, deleteItem }; //getItems
