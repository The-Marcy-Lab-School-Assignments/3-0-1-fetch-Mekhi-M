const userUrl = "https://jsonplaceholder.typicode.com/users";

export const checkResponseStatus = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`);
};

export const getUsers = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => );
};

export const getUserPosts = () => {};

export const createNewUser = () => {};
