<script>
  import { idStore } from "./stores.mjs";
</script>

{#each $idStore as id}
  <section>
    <img src={id.observation.taxon.default_photo.url} alt="" />
    <h2>{id.observation.taxon.preferred_common_name}</h2>
  </section>
{/each}
