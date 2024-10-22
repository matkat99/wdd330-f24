<script>
  import { posts } from "./stores.mjs";
  let title = "";
  let body = "";

  async function submitHandler() {
    // get data from form
    // package it up in the right format

    const post = {
      title,
      body
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    };
    // send (POST) it to the API
    const resp = await fetch("http://localhost:3000/posts", options);
    if (resp.ok) {
      const data = await resp.json();
      // update the store to trigger an update of the ListPosts component.
      // we can't do a simple push here as Svelte will not recognize that as a change. We have to make a re-assignment.
      $posts = [...$posts, data];
      return data;
    }
  }
</script>

<form action="" on:submit|preventDefault={submitHandler}>
  <p>
    <label for="title">Title</label>
    <input
      bind:value={title}
      type="text"
      id="title"
      name="title"
      placeholder="Enter title"
      required
    />
  </p>
  <p>
    <label for="body">Post Body</label>
    <textarea
      bind:value={body}
      id="body"
      name="body"
      placeholder="Enter post body"
      required
    ></textarea>
  </p>
  <button>Submit</button>
</form>
