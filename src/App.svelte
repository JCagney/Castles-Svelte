  <script>

    import { setContext } from "svelte";
    import Navigator from "./components/Navigator.svelte";
    import Main from "./pages/Main.svelte";
    import Login from "./pages/Login.svelte";
    import Signup from "./pages/Signup.svelte";
    import Castles from "./pages/Castles.svelte";
    import CastleView from "./pages/CastleView.svelte";
    import EditCastle from "./pages/EditCastle.svelte";
    import Users from "./pages/Users.svelte";
    import AddCastle from "./pages/AddCastle.svelte";
    import { CastleService } from "./services/castle-service";
    import Router from "svelte-spa-router";



    setContext("CastleService", new CastleService("http://localhost:4000"));

    let routes = {
    "/" : Main,
    "/login": Login,
    "/signup": Signup,
    "/castles": Castles,
    "/castleview": CastleView,
    "/editcastle": EditCastle,
    "/people": Users,
    "/addcastle": AddCastle,
    "/logout" : Main
    };

  </script>

  <div class="uk-container">
    <Navigator/>
    <Router {routes} />
</div>