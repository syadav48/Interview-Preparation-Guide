//If you want multiple APIs to fire at the same time:
// ✔ All requests start immediately
// ✔ They run in parallel
// ✔ Waits until all are resolved

const fetchUsers = fetch("/api/users");
const fetchPosts = fetch("/api/posts");
const fetchComments = fetch("/api/comments");

const [users, posts, comments] = await Promise.all([
  fetchUsers,
  fetchPosts,
  fetchComments
]); 

// Sequencial Call
const users1 = await fetch("/api/users");
const posts1 = await fetch("/api/posts");
const comments1 = await fetch("/api/comments");

// proper parallel pattern

async function getData() {
  const userPromise = fetch("/api/users");
  const postPromise = fetch("/api/posts");

  const [users, posts] = await Promise.all([
    userPromise,
    postPromise
  ]);

  return { users, posts };
}


