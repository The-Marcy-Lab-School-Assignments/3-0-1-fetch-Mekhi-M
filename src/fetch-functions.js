const userUrl = `https://jsonplaceholder.typicode.com/users`;

export const checkResponseStatus = () => {
  return fetch(userUrl).then((response) => {
    return {
      ok: response.ok,
      status: response.status,
      url: response.url,
    };
  });
};

export const getUsers = () => {
  return fetch(userUrl).then((response) => response.json());
};

export const getUserPosts = (userId, maxNumPosts = 3) => {
  return fetch(`${userUrl}/${userId}/posts`)
    .then((response) => response.json())
    .then((postArray) => postArray.slice(0, maxNumPosts));
};

export const createNewUser = (newUserData) => {
  const postOption = {
    method: "POST",
    body: JSON.stringify(newUserData), // The data to be sent to the API
    headers: {
      "Content-Type": "application/json", // The format of the body's data
    },
  };
  return fetch(userUrl, postOption).then((response) => response.json());
};
