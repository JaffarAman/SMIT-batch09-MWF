const getUser = () => {
  const userData = window.atob(localStorage.getItem("user"));
  const userDataParse = JSON.parse(userData);
  return userDataParse;
};

export { getUser };
