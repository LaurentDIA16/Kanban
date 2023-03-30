const draggables = document.querySelectorAll(".item");
const droppables = document.querySelectorAll(".item-list");
console.log(draggables);

draggables.forEach((item) => {
  item.addEventListener("dragstart", () => {
    item.classList.add("is-dragging");
  });
});
//   item.addEventListener("dragend", () => {
//     item.classList.remove("is-dragging");
//   });
// });

// droppables.forEach((zone) => {
//   zone.addEventListener("dragover", (e) => {
//     e.preventDefault();

//     const bottomItem = insertAboveItem(zone, e.clientY);
//     const curItem = document.querySelector(".is-dragging");

//     if (!bottomItem) {
//       zone.appendChild(curItem);
//     } else {
//       zone.insertBefore(curItem, bottomItem);
//     }
//   });
// });

// const insertAboveItem = (zone, mouseY) => {
//   const els = zone.querySelectorAll(".item:not(.is-dragging)");

//   let closestItem = null;
//   let closestOffset = Number.NEGATIVE_INFINITY;

//   els.forEach((item) => {
//     const { top } = item.getBoundingClientRect();

//     const offset = mouseY - top;

//     if (offset < 0 && offset > closestOffset) {
//       closestOffset = offset;
//       closestItem = item;
//     }
//   });

//   return closestItem;
// };