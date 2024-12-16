<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import PlacesList from "./lib/PlacesList.svelte";
  import IdentificationList from "./lib/IdentificationList.svelte";
  /*
  create input box and button for place search
  when search button is clicked:
    take the input and make a request to the api for any matches (https://api.inaturalist.org/v1/places/autocomplete?q=yellow)
    display results as a list of link (something that can be clicked on)

  when a place is clicked on:
    take the place id and query the API for Identifications (https://api.inaturalist.org/v1/identifications?current=true&place_id=1839&order=desc&order_by=created_at
)
    display the results as a list of cards (with images and text)
  */
</script>

<main>
  <h1>Critter Getter</h1>

  <div class="card">
    <PlacesList></PlacesList>
  </div>
  <div class="card">
    <IdentificationList />
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
