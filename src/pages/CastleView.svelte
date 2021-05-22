<script>
    import Castle from "../components/Castle.svelte";
    import {navBar, mainBar, subTitle, title} from "../stores"


    title.set("Caisleáin na hÉireann");
    subTitle.set("Castle View");
    navBar.set({
      bar: mainBar
    });    

    

  </script>
  
  <Castle/>