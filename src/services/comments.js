// save comment
export const saveComment = (comment, postId) => {
  return fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "post",
    body: JSON.stringify({ ...comment, postId }),
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      throw err;
    });
};

// get comments
export const getComments = (postId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      throw err;
    });
};
