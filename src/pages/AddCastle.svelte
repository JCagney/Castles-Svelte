<script>
    import clare from "/src/assets/clare-island.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import CastleForm from "../components/CastleForm.svelte";
  
    title.set("Castles");
    subTitle.set("Add a Castle!");
    navBar.set({
      bar: mainBar
    });
  </script>
  
  <div class="uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <CastleForm/>
    </div>
    <div class="uk-width-1-2@m" >
      <img width="400" src="{clare}" alt="Clare Island Castle">
    </div>
  </div>