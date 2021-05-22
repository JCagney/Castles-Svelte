<script>
    import CastleList from "../components/CastleList.svelte";
    import clare from "/src/assets/clare-island.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("Caisleáin na hÉireann");
    subTitle.set("All Castles - Add a Castle");
    navBar.set({
      bar: []
    }); 
    navBar.set({
      bar: mainBar
    });    
  </script>
  
  <div class="uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
      <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
        <CastleList/>
      </div>
    </div>
    <div class="uk-width-1-2@m">  
      <img width="400" src="{clare}" alt="Clare Island Castle">
    </div>   
  </div>