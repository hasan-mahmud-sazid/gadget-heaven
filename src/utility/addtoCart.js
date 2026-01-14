const getStoredCartList = () => {
  const storedListStr = localStorage.getItem("cart-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addtoCartList = (id) => {
  const storedList = getStoredCartList();
  if (storedList.includes(id)) {
    console.log(id, "Id Already Exist");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("cart-list", storedListStr);
  }
};

export { addtoCartList, getStoredCartList };
