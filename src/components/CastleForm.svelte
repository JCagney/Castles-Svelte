<script >
  import { onMount, getContext } from "svelte";
  const castleService = getContext("CastleService");
  import {user} from "../stores.js"
  import { push } from "svelte-spa-router";

  let categoryList = [];
  let name = ""; 
  let description = ""; 
  let coordinates = "";
  let selectedCategory = 0;
  let errorMessage = "";


  onMount(async () => {
    categoryList = await castleService.getCategories()
  });

  async function addCastle() {
    const success = await castleService.addCastle(name, description, coordinates, categoryList[selectedCategory]._id, $user._id)
    console.log(success)
    if (success) {
      push("/castles");

    } else {
      errorMessage = "Castle not Added - some error occurred";
    }
  }

</script>


<div class="uk-margin uk-width-expand uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <form on:submit|preventDefault={addCastle} class="uk-form-stacked uk-text-left" action="/addcastle" method="POST">
      <legend>Add a Castle</legend><br>
      <div class="uk-grid uk-grid-stack">
        <div class="uk-width-1-1@m">
          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">Enter castle name</label>
            <div class="uk-form-controls">
              <input bind:value={name} class="uk-input" id="form-stacked-text" type="text" name="name" placeholder="Name" />
            </div>
          </div>
          <div class="uk-margin">
           <label class="uk-form-label" for="form-stacked-text">Enter castle description</label>
            <div class="uk-margin">
              <textarea bind:value={description} class="uk-textarea" rows="6" placeholder="Description" name="description"></textarea>
            </div>
          </div>
          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">Enter castle coordinates</label>
            <div class="uk-margin">
              <input bind:value={coordinates} class="uk-input" id="form-stacked-text" type="text" name="coordinates" placeholder="Coordinates" />
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-button uk-form-select" data-uk-form-select>
                <div class="uk-form-label">Select Category </div>
                {#each categoryList as category, i}
                <label>
                    <input bind:group={selectedCategory} value={i} class="uk-radio" type="radio" name="candidate" />
                    {category.name}
                </label>
                <br/>
                {/each}
            </div>
          </div>
          <div class="uk-margin">
            <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Add Castle</button>
          </div> 
          {#if errorMessage}
        <div class="uk-text-left uk-text-small">
          {errorMessage}
        </div>
      {/if}
        </div>     
      </div>
    </form>
  </div>