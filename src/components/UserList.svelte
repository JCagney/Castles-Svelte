<script>
    import {getContext, onMount} from 'svelte'
  
    const castleService = getContext("CastleService");
    let userList = [];
  
    onMount(async () => {
      userList = await castleService.getUsers();
    });
  </script>
  
  <h3 class="uk-heading-divider">
    People </h3>
  <div class="uk-table uk-table-divider">
    <table class="uk-table">
      <thead>
        <th>
          First Name
        </th>
        <th>
          Last Name
        </th>
      </thead>
      <tbody class="uk-text-left">
        {#each userList as user}
          <tr>
            <td>
              {user.firstName}
            </td>
            <td>
              {user.lastName}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>