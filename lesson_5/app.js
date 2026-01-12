function renderNumber(value) {
  const div = document.createElement("div");
  div.className = "array-item";
  div.textContent = value;
  return div;
}

// 1) for
// 1.1 i
// 1.2 for..of
// 1.3 for..in
// 2) while
// 3) do..while

const original = [15, 78, 4, 12, 55, 47, 35, 7];
// [15+5, 78+5, 4+5...]

const originalContainer = document.querySelector("#original .array");

// for (const item of original) {
//   const div = renderNumber(item);
//   originalContainer.append(div);
// }

// foreach

original.forEach(function (item) {
  const div = renderNumber(item);
  originalContainer.append(div);
});

// callback - функция обратного вызова

const buttonsContainer = document.querySelector(".methods");

// event propagation - распространение события

buttonsContainer.onclick = function (event) {
  if (event.target.innerText === "map +5") {
    map5();
  }

  if (event.target.innerText === "map x2") {
    mapX2();
  }

  if (event.target.innerText === "filter > 50") {
    filter50();
  }

  if (event.target.innerText === "filter evens") {
    filterEvens();
  }
};

function map5() {
  const updated = original.map(function (item) {
    return item + 5;
  });
  renderArray(updated);
}

function mapX2() {
  const result = original.map(function (value) {
    return value * 2;
  });
  renderArray(result);
}

function filter50() {
  const result = original.filter(function (value) {
    return value > 50;
  });
  renderArray(result);
}

function filterEvens() {
  const result = original.filter(function (value) {
    return value % 2 === 0;
  });
  renderArray(result);
}

function renderArray(array) {
  const container = document.querySelector("#updated .array");
  container.innerHTML = "";
  const numbers = array.map(function (item) {
    return renderNumber(item);
  });
  container.append(...numbers);

  // container.append([1,2,3]);
  // container.append(1,2,3);
}

// document.body.onclick = function () {
//   console.log("body click");
// };
