const setLocalStorage = (id) => {
  let listItem = {};

  const storedList = localStorage.getItem("list-item");
  if (storedList) {
    listItem = JSON.parse(storedList);
  }

  const quantity = listItem[id];
  if (quantity) {
    listItem[id] = quantity + 1;
  } else {
    listItem[id] = 1;
  }

  localStorage.setItem("List", JSON.stringify(listItem));
};

const getLocalStorage = () => {
  let listItem = {};
  const storedList = localStorage.getItem("list-item");
  if (storedList) {
    listItem = JSON.parse(storedList);
    return listItem;
  }
};

export { setLocalStorage, getLocalStorage };
