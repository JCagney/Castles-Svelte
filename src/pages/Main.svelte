<script>
    import {title, subTitle, navBar, welcomeBar, user} from "../stores"
    import clare from "/src/assets/clare-island.jpg";
    import axios from "axios";
    title.set("Caisleáin na hÉireann");
    subTitle.set("Sign up or Log in");

    user.set({
      firstName: "",
      lastName: "",
      email: "",
      _id: "",
      token: ""
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.castletoken = null;
    localStorage.userid = null;
  
    navBar.set({
      bar: welcomeBar
    });
  </script>
  
  <div class="uk-text-center" uk-grid>
    <div class="uk-width-1-2@m">
      <img width="200" src="{clare}" alt="Clare Island">
      <p> Lets Go Castling </p>
    </div>
    <div class="uk-width-1-2@m ">
      <div class="uk-width-2xlarge">
        <h3 class="uk-heading-small uk-flex"> Explore Castles of Ireland </h3>
        <p> Add Castles... invite your friends! </p>
      </div>
    </div>
  </div>