const addToLocalStorage = (id) => {
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
  localStorage.setItem("list-item", JSON.stringify(listItem));
};

const getStoredList = () => {
  let listItem = {};
  const storedCart = localStorage.getItem("list-item");
  if (storedCart) {
    listItem = JSON.parse(storedCart);
    return listItem;
  }
};

const removeFromLocalStorage = (id) => {
  const storedCart = localStorage.getItem("list-item");
  const listItem = JSON.parse(storedCart);
  if (storedCart) {
    if (id in listItem) {
      delete listItem[id];
      localStorage.setItem("list-item", JSON.stringify(listItem));
    }
  }
};

const deleteFromLocalStorage = () => {
  localStorage.removeItem("list-item");
};

export {
  addToLocalStorage,
  getStoredList,
  removeFromLocalStorage,
  deleteFromLocalStorage,
};
