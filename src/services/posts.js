// get all posts
export const getPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      throw err;
    });
};

// get one post
export const getPost = ({ postId }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((json) => {
      console.log("postssss", json);
      return json;
    })
    .catch((err) => {
      throw err;
    });
};

// save post
export const savePosts = (post) => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("postMethod ", json);
      return json;
    })
    .catch((err) => {
      throw err;
    });
};

// edit post
export const editPosts = (post, postId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "put",
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("pUtMethod ", json);
      return json;
    })
    .catch((err) => {
      throw err;
    });
};

// delete post
export const deletePosts = (postId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "delete",
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("DeleteMethod ", json);
      return json;
    })
    .catch((err) => {
      throw err;
    });
};
