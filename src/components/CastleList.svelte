<script>
    import {onMount, getContext} from 'svelte'
    const castleService = getContext("CastleService");

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
          Name
        </th>
        <th>
          Description
        </th>
        <th>
          Author
        </th>
      </thead>
      <tbody class="uk-text-left">
        {#if castleList}  
          {#each castleList as castle}
          <tr>
            <td>{castle.name}</td>
            <td>{castle.description}</td>
            <td>{castle.author.firstName} {castle.author.lastName}</td>
          </tr>
        {/each}
      {/if}
      </tbody>
    </table>
  </div>