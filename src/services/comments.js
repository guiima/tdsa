// save comment
export const saveComment = (comment, postId) => {
  const teste = { ...comment, postId };

  console.log("comments", teste);
  return fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "post",
    body: JSON.stringify({ ...comment, postId }),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("comments Post ", json);
      return json;
    })
    .catch((err) => {
      throw err;
    });
};

// get comments
export const getComments = (postId) => {
  console.log("postId", postId);
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((json) => {
      console.log("get comments Post ", json);
      return json;
    })
    .catch((err) => {
      throw err;
    });
};
