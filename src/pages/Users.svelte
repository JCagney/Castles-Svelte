<script>
    import UserList from "../components/UserList.svelte";
    import clare from "/src/assets/clare-island.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("Caisleáin na hÉireann");
    subTitle.set("Current Castle Enthusiasts");
    navBar.set({
      bar: mainBar
    });    
  </script>
  
  <div class="uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
      <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
        <UserList/>
      </div>
    </div>
    <div class="uk-width-1-2@m">
      <img width="400" src="{clare}" alt="Clare island">
    </div>
  </div>