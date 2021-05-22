<script>
    import { push } from "svelte-spa-router";
    import {getContext} from "svelte";

    const castleService = getContext("CastleService");
  
    let firstName = "";
    let lastName = "";
    let email = "";
    let password = "";
    let errorMessage = "";
  
    async function signup() {
      console.log(firstName, lastName, email, password);
      let success = await castleService.signup(firstName, lastName, email, password);
      if (success) {
        push("/login");
      } else {
        email = "";
        password = "";
        errorMessage = "Invalid Credentials";
      }
    }
  </script>


<form on:submit|preventDefault={signup}>
  <div class="uk-margin uk-text-left">
    <div class="uk-margin">
      <label class="uk-form-label" for="signup">First name</label>
      <div class="uk-inline uk-width-1-1">
        <span class="uk-form-icon" uk-icon="icon: user"></span>
        <input bind:value={firstName} class="uk-input uk-form-large" type="text" name="firstName">
      </div>
    </div>
    <div class="uk-margin">
      <label class="uk-form-label" for="signup">Last name</label>
      <div class="uk-inline uk-width-1-1">
        <span class="uk-form-icon" uk-icon="icon: user"></span>
        <input bind:value={lastName} class="uk-input uk-form-large" type="text" name="lastName">
      </div>
    </div>
    <label class="uk-form-label" for="signup">Email</label>
    <div class="uk-inline uk-width-1-1">
      <span class="uk-form-icon" uk-icon="icon: mail"></span>
      <input bind:value={email} class="uk-input uk-form-large" type="text" name="email">
    </div>
    <div class="uk-margin">
      <label class="uk-form-label" for="signup">Password</label>
      <div class="uk-inline uk-width-1-1">
        <span class="uk-form-icon" uk-icon="icon: lock"></span>
        <input bind:value={password} class="uk-input uk-form-large" type="password" name="password">
      </div>
    </div>
  </div>
  <div class="uk-margin">
    <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Sign up</button>
  </div>
  {#if errorMessage}
    <div class="uk-text-left uk-text-small">
      {errorMessage}
    </div>
  {/if}
</form>