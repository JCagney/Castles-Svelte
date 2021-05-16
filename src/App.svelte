  <script>
    import { setContext } from "svelte";
    import CastleList from "./components/CastleList.svelte"
    import { CastleService } from "./services/castle-service";

    setContext("CastleService", new CastleService("http://localhost:4000"));
  </script>

  <div class="uk-container">
    <h1> Castles Client Application </h1>
    <CastleList/>
</div>