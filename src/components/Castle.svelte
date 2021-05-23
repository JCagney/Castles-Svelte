<script >
    import { onMount, getContext } from "svelte";
    const castleService = getContext("CastleService");
    import {user, castleid} from "../stores.js"
    import { push } from "svelte-spa-router";
    
    let castle;
    let currentRating;
    let newRating = 8;
    let newReview = ""; 
    let reviews = [];
    async function addRating() {
      console.log(newRating)
      await castleService.rateCastle($castleid, newRating) 
      currentRating = await castleService.getCastleRating($castleid)
    }

    onMount(async () => {
      castle = await castleService.getCastle($castleid)
      currentRating = await castleService.getCastleRating($castleid)
      reviews = await castleService.getReviews($castleid)
      console.log(reviews); 
      console.log(castle.name)
    })

    async function deleteCastle() {
      await castleService.deleteCastle($castleid);
      push("/castles");
    }

    async function addReview() {
      await castleService.postReview(newReview, $user._id,  $castleid);
      reviews = await castleService.getReviews($castleid);
      newReview = ""; 
    }

</script>

{#if castle} 
<div class="uk-margin uk-width-4-5 uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
  <div class="uk-width-expand@m">
    <h1 class="uk-heading-bullet">{castle.name}</h1>
    <ul class="uk-iconnav uk-align-right uk-margin-large-right">
      <a  href="/#/editcastle">
        <i class="far fa-edit fa-2x" style="color:rgb(92, 73, 79)" title="Edit Castle"  uk-tooltip></i>
      </a>
      <button on:click={deleteCastle}>
        <i class="far fa-trash-alt fa-2x" style="color:rgb(92, 73, 79)" title="Delete Castle" uk-tooltip></i>
      </button>
    </ul>
      <p class="title uk-text-muted ">Category: {castle.category.name}. {castle.category.description}</p>
      <p class="title uk-text-muted">Author: {castle.author.firstName} {castle.author.lastName}. <br> {#if castle.lasteditor } Last edited by: {castle.lasteditor.firstName} {castle.lasteditor.lastName} {/if}</p>
    <div class="uk-child-width-expand uk-flex-center uk-flex-top" uk-grid>
      <div class="uk-width-1-2@m">
        <p>{castle.description}</p>
      </div>
      <div class="uk-width-expand@m uk-padding-large uk-padding-remove-top">
        <div class="uk-margin">
        {#if currentRating}<h3>Current Rating: {currentRating}/10 </h3>{/if}
        <form on:submit|preventDefault={addRating}>
          <input bind:value={newRating} class="uk-range" type="range" min="1" max="10" step="1">
          <button class="submit uk-button uk-button-primary uk-button-small uk-width-1-1">Rate This Castle {newRating}/10</button>
        </form>
      </div>
        <iframe src="https://maps.google.com/maps?q={castle.coordinates}&z=15&output=embed" title="location" width="380" height="290" frameborder="0" style="border:0"></iframe>
      </div>     
    </div> 
    <div class="uk-margin">
      {#if reviews}
      {#each reviews as review}
      <div class="uk-margin uk-width-4-5 uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
      <p>On {review.date}, {review.author.firstName} {review.author.lastName} said:</p>   
      <p>{review.text}</p>
      </div>  
      {/each}
      {/if}
    </div>
    <div class="uk-margin">
      <form on:submit|preventDefault={addReview} class="uk-form-stacked uk-text-left">
      <label class="uk-form-label" for="form-stacked-text">Add a Review</label>
       <div class="uk-margin">
         <textarea bind:value={newReview} class="uk-textarea" rows="6" placeholder="Your Review" name="review"></textarea>
       </div>
       <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Add Review</button>
      </form>
    </div>
         
  </div>
</div>
{/if} 