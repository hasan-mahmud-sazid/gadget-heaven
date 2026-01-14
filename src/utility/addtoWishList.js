const getWishList = () => {
  const wishListStr = localStorage.getItem("cart-list");
  if (wishListStr) {
    const wishList = JSON.parse(wishListStr);
    return wishList;
  } else {
    return [];
  }
};

const addtoWishList = (id) => {
  const wishList = getWishList();
  if (wishList.includes(id)) {
    console.log(id, "Id Already Exist");
  } else {
    wishList.push(id);
    const wishListStr = JSON.stringify(wishList);
    localStorage.setItem("cart-list", wishListStr);
  }
};

export { addtoWishList, getWishList };
