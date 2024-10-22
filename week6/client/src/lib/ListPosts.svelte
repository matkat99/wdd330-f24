<script>
  import { posts } from "./stores.mjs";

  async function getPosts() {
    const resp = await fetch("http://localhost:3000/posts");
    if (resp.ok) {
      const data = await resp.json();
      $posts = data;
    }
  }
  function init() {
    getPosts();
  }

  init();
</script>

<ul>
  {#each $posts as post}
    <li>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </li>
  {/each}
</ul>
<!-- {JSON.stringify(posts)} -->
