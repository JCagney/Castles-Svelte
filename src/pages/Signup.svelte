<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import SignupForm from "../components/SignupForm.svelte"
    import clare from "/src/assets/clare-island.jpg";
    title.set("Castles");
    subTitle.set("Please Sign Up");
  
    navBar.set({
      bar: welcomeBar
    });
  </script>
  
  <div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-2-3@m">
      <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
        <h3 class="uk-card-title uk-text-center">Welcome to Castles!</h3>
        <SignupForm />
      </div>
    </div>
    <div class="uk-width-1-3@m ">
      <img width="300" src="{clare}" alt="homer">
    </div>
  </div>