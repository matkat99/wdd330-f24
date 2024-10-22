<script>
  import { onMount } from "svelte";
  import Post from "./lib/Post.svelte";
  import TagList from "./lib/TagList.svelte";
  let name = "world";
  let q = "";
  let posts = [];
  let filteredPosts = [];
  let tagList = [];
  const url = "https://dummyjson.com/posts/";

  async function getPosts(url) {
    const response = await fetch(url);
    return response.json();
  }

  function searchHandler(event) {
    console.log(event);
    let query = q;
    if (event.target.dataset.tag) {
      query = event.target.dataset.tag;
    }

    filteredPosts = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.body.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
      );
    });
  }

  function uniqueTags() {
    const tags = posts.map((post) => post.tags).flat();
    const uniqueSet = new Set(tags);
    return [...uniqueSet];
  }

  async function init() {
    const data = await getPosts(url);
    posts = data.posts;
    console.log(data);
    filteredPosts = posts;
    tagList = uniqueTags();
  }

  onMount(init);
</script>

<main>
  <div>
    <input type="text" name="search" id="search" bind:value={q} />
    <button on:click={searchHandler}>Search</button>
  </div>
  <TagList tags={tagList} on:click={searchHandler} />
  {#each filteredPosts as post}
    <Post {post} />
    <!-- { JSON.stringify(post) } -->
  {/each}
</main>

<style>
  main {
    font-family: courier;
  }
</style>
