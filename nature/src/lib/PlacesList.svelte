<script>
  import { idStore } from "./stores.mjs";
  let query = "";
  let places = [];
  let identifications = [];
  async function searchHandler() {
    // take the input and make a request to the api for any matches (https://api.inaturalist.org/v1/places/autocomplete?q=yellow)
    const response = await fetch(
      "https://api.inaturalist.org/v1/places/autocomplete?q=" + query
    );
    if (response.ok) {
      const data = await response.json();
      places = data.results;
    }
    // display results as a list of link (something that can be clicked on)
  }
  async function placeHandler(event) {
    const id = event.target.dataset.placeId;
    const response = await fetch(
      `https://api.inaturalist.org/v1/identifications?current=true&place_id=${id}&order=desc&order_by=created_at`
    );
    if (response.ok) {
      const data = await response.json();
      $idStore = data.results;
    }

    // take the selected place and make a request to the api for the place's details (https
    // display the details in a new page
  }
</script>

<section>
  <label for="place">Place</label>
  <input type="text" id="place" bind:value={query} />
  <button on:click={searchHandler}>Search</button>
</section>
{query}
<ul>
  {#each places as place}
    <li>
      <a href="#top" data-place-id={place.id} on:click={placeHandler}
        >{place.display_name}</a
      >
    </li>
  {/each}
</ul>
