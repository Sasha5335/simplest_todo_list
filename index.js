"use strict";

const array = [];
const form = document.getElementById("root-form");
const list = document.getElementById("root-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    target,
    target: { todo },
  } = e;

  if (todo.value.trim()) {
    array.push(todo.value);
    list.append(createListElement(todo.value));
  }
  target.reset();
});

function createListElement(inputValue) {
  const li = document.createElement("li");
  li.append(document.createTextNode(inputValue), createDeleteButton(deleteHendler.bind(li)));
  return li;
}

function createDeleteButton(onDelete) {
  const btn = document.createElement("button");
  btn.textContent = "X";
  btn.addEventListener("click", onDelete);
  return btn;
}

function deleteHendler() {
  this.remove();
  const index = array.indexOf(this);
  array.splice(index, 1);
}
