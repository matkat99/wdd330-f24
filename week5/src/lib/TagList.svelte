<script>
  export let tags = [];
</script>

<div>
  {#each tags as tag}
    <button on:click data-tag={tag}>{tag}</button>
  {/each}
</div>

<style>
  div {
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
    font-size: 0.8em;
    padding-left: 0;
  }
  button {
    padding: 0.5em 0.5em;
    border: 1px solid;
    background: transparent;
  }
</style>
