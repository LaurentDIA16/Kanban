import {
    getBoards,
    createBoard,
    updateBoard,
    deleteBoard,
    createItem,
    getItemsByBoard,
    // deleteItem,
  } from "./api.js";

  async function init() {
    const boards = await getBoards();
  
    boards.forEach((board) => {
      createBoardElement(board);
    });
  }
  
  init();
  
  const boardContainer = document.querySelector(".board-container");
  const addBoardBtn = document.getElementById("add-board");
  
  addBoardBtn.addEventListener("click", async () => {
    const defaultBoardTitle = "New board";
  
    // Calculate the position based on the number of existing boards
    const boards = await getBoards();
    const position = boards.length + 1;
  
    const board = await createBoard(defaultBoardTitle, position);
    createBoardElement(board);
  });
  
  
async function createBoardElement(board) {
    const boardElement = document.createElement("div");
    boardElement.className = "board";
    boardElement.classList.add('bg-gray-100', 'border', 'border-gray-300', 'rounded-lg', 'p-4', 'w-60', 'm-4');
    boardElement.dataset.id = board.id_board;
  
    const boardTitle = document.createElement("h3");
    boardTitle.className = "board-title";
    boardTitle.classList.add('text-lg', 'font-semibold', 'mb-4');
    boardTitle.textContent = board.title;
    boardElement.appendChild(boardTitle);


    // Ajout du bouton "update"
    const updateBoardBtn = document.createElement("button");
    updateBoardBtn.className = "update-board";
    updateBoardBtn.innerHTML = '🖉';
    updateBoardBtn.classList.add("text-xl", "ml-2");
    updateBoardBtn.addEventListener("click", async () => {
        const newBoardTitle = prompt("Enter new board title");
        if (!newBoardTitle) return;

        // Mettre à jour le tableau dans la base de données
        await updateBoard(board.id_board, newBoardTitle);

        // Mettre à jour le titre du tableau à l'écran
        boardTitle.textContent = newBoardTitle;
      });
    boardElement.appendChild(updateBoardBtn);


    // Ajout du bouton "delete"
    const deleteBoardBtn = document.createElement("button");
    deleteBoardBtn.className = "delete-board";
    deleteBoardBtn.innerHTML = '🗑';
    deleteBoardBtn.classList.add("text-xl", "ml-2");
    deleteBoardBtn.addEventListener("click", async () => {
      // Supprimer le tableau de la base de données
      await deleteBoard(board.id_board);

      // Supprimer le tableau à l'écran
      boardElement.remove();
    });
    boardElement.appendChild(deleteBoardBtn);

  
    const itemList = document.createElement("div");
    itemList.className = "item-list flex flex-col space-y-2";
    itemList.classList.add('flex', 'flex-col', 'space-y-2', 'mb-4');
    boardElement.appendChild(itemList);
  
    // Récupérez les items pour ce board
    const items = await getItemsByBoard(board.id_board);
  
    // Créez et ajoutez les éléments des items
    items.forEach((item) => createItemElement(item, itemList));
  
    const addItemBtn = document.createElement("button");
    addItemBtn.className = "add-item";
    addItemBtn.classList.add('bg-green-500', 'hover:bg-green-400', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-full');
    addItemBtn.textContent = "Add Item";
    addItemBtn.addEventListener("click", async () => {
        const itemTitle = prompt("Enter item title");
        if (!itemTitle) return;
      
        const position = itemList.children.length + 1;

        const item = await createItem(itemTitle, position, board.id_board);
        createItemElement(item, itemList);
      });
      
      
  
    boardElement.appendChild(addItemBtn);
    boardContainer.appendChild(boardElement);
  }
  
  
  function createItemElement(item, itemList) {
    const itemElement = document.createElement("div");
    itemElement.className = "item";
    itemElement.classList.add('bg-gray-300', 'border', 'border-gray-400', 'rounded-lg', 'p-2', 'text-sm', 'font-semibold');
    itemElement.dataset.id = item.id_item;
    itemElement.dataset.position = item.position;
  
    const itemTitle = document.createElement("p");
    itemTitle.className = "item-title";
    itemTitle.classList.add('text-gray-700');
    itemTitle.textContent = item.title;
    itemElement.appendChild(itemTitle);
  
    itemList.appendChild(itemElement);
  }
  