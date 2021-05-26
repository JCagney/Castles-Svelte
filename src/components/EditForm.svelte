<script >
    import { onMount, getContext } from "svelte";
    const castleService = getContext("CastleService");
    import { push } from "svelte-spa-router";

    let castleid = JSON.parse(localStorage.castleid);
    let userid = JSON.parse(localStorage.userid);
  
    let castle; 
    let categoryList = [];
    let name = ""; 
    let description = ""; 
    let coordinates = "";
    let selectedCategory = 0;
    let errorMessage = "";
  
  
    onMount(async () => {
      castle = await castleService.getCastle(castleid)
      console.log(castle); 
      categoryList = await castleService.getCategories()
    });
  
    async function editCastle() {
      const success = await castleService.editCastle(castleid, castle.name, castle.description, castle.coordinates, categoryList[selectedCategory]._id, userid)
      if (success) {
        push("/castles");
  
      } else {
        errorMessage = "Castle not Edited - some error occurred";
      }
    }
  
  </script>
  
  {#if castle} 
  <div class="uk-margin uk-width-expand uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
      <form on:submit|preventDefault={editCastle} class="uk-form-stacked uk-text-left" action="/addcastle" method="POST">
        <legend>Edit {castle.name}</legend><br>
        <div class="uk-grid uk-grid-stack">
          <div class="uk-width-1-1@m">
            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-text">Enter castle name</label>
              <div class="uk-form-controls">
                <input bind:value={castle.name} class="uk-input" id="form-stacked-text" type="text" name="name" placeholder="Name" />
              </div>
            </div>
            <div class="uk-margin">
             <label class="uk-form-label" for="form-stacked-text">Enter castle description</label>
              <div class="uk-margin">
                <textarea bind:value={castle.description} class="uk-textarea" rows="6" placeholder="Description" name="description"></textarea>
              </div>
            </div>
            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-text">Enter castle coordinates</label>
              <div class="uk-margin">
                <input bind:value={castle.coordinates} class="uk-input" id="form-stacked-text" type="text" name="coordinates" placeholder="Coordinates" />
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
              <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Edit Castle</button>
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
    {/if}