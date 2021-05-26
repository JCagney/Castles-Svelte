<script>
    import {onMount, getContext} from 'svelte'
    const castleService = getContext("CastleService");
    import {castleid} from "../stores.js"

    let castleList;
    onMount(async () => {
      castleList = await castleService.getCastles()
    })
  

  </script>

<h3 class="uk-heading-divider">
    Castle List
  </h3>
  <div class="uk-table uk-table-divider">
    <table class="uk-table">
      <thead>
        <th>
          Enter
        </th>
        <th>
          Name
        </th>
        <th>
          Author
        </th>
      </thead>
      <tbody class="uk-text-left">
        {#if castleList}  
          {#each castleList as castle}
          <tr>
            <td> 
              <a on:click={() => localStorage.castleid = JSON.stringify(castle._id)} href="/#/castleview" class="uk-card uk-card-small uk-card-hover uk-padding-small">
                <i class="fas fa-chess-rook" title="Enter {castle.name}" uk-tooltip></i>
              </a>
            </td>
            <td>{castle.name}</td>
            {#if castle.author}
            <td>{castle.author.firstName} {castle.author.lastName}</td>
            {/if}
          </tr>
        {/each}
      {/if}
      </tbody>
    </table>
  </div>