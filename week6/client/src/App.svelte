<script>
  import AddPost from "./lib/AddPost.svelte";
  import ListPosts from "./lib/ListPosts.svelte";
</script>

<main>
  <h1>My simple blog</h1>

  <div class="card">
    <AddPost />
  </div>
  <div class="card">
    <h2>Posts</h2>
    <ListPosts />
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
