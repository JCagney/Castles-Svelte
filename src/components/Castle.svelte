<script >
    import { onMount, getContext } from "svelte";
    const castleService = getContext("CastleService");
    import {user, castleid} from "../stores.js"
    import { push } from "svelte-spa-router";
    
    let castle;
    onMount(async () => {
      castle = await castleService.getCastle($castleid)
      console.log(castle.name)
    })

    async function deleteCastle() {
      await castleService.deleteCastle($castleid);
      push("/castles");
    }

</script>

{#if castle} 
<div class="uk-margin uk-width-4-5 uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
  <div class="uk-width-expand@m">
    <h1 class="uk-heading-bullet">{castle.name}</h1>
    <ul class="uk-iconnav uk-align-right uk-margin-large-right">
      <a  href="/showeditcastle/{castle._id}">
        <i class="far fa-edit fa-2x" style="color:rgb(92, 73, 79)" title="Edit Castle"  uk-tooltip></i>
      </a>
      <button on:click={deleteCastle}>
        <i class="far fa-trash-alt fa-2x" style="color:rgb(92, 73, 79)" title="Delete Castle" uk-tooltip></i>
      </button>
    </ul>
      <p class="title uk-text-muted ">Category: {castle.category.name}. {castle.category.descriptio}</p>
      <p class="title uk-text-muted">Author: {castle.author.firstName} {castle.author.lastName}. <br> {#if castle.lasteditor } Last edited by: {castle.lasteditor.firstName} {castle.lasteditor.lastName} {/if}</p>
    <div class="uk-child-width-expand uk-flex-center uk-flex-top" uk-grid>
      <div class="uk-width-1-2@m">
        <p>{castle.description}</p>
      </div>
      <div class="uk-width-expand@m uk-padding-large uk-padding-remove-top">
        <iframe src="https://maps.google.com/maps?q={castle.coordinates}&z=15&output=embed" title="location" width="380" height="290" frameborder="0" style="border:0"></iframe>
      </div>     
    </div>        
  </div>
</div>
{/if} 