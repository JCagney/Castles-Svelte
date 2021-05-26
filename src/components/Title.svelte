<script>
    import athenry from "/src/assets/athenry-castle.jpg"
    import {title, subTitle, user} from "../stores.js"
  </script>
  
  <div class="uk-width-2-3@m  uk-card uk-card-default uk-padding-small uk-visible@m">
    <div class="uk-grid">
      <div class="uk-width-1-6@m">
        <a href="/"> <img src="{athenry}" width="60" alt="img"/> </a>
        <div class="uk-text-muted" style="font-size:xx-small">{$user.firstName} {$user.lastName}</div>
      </div> 
      <div class="uk-width-expand@m uk-text-left">
        <div class="title">
          {$title}
        </div>
        <div class="uk-text-muted uk-text-small">
          {$subTitle}
        </div>
      </div>
      <div class="uk-card uk-card-small uk-text-center uk-padding-remove">
        <a target="_blank" href="https://github.com/JCagney/castles-svelte">
          <div>
            <i class="fab fa-github fa-3x" style="color:rgb(92, 73, 79)" title="Source repo" uk-tooltip></i>
          </div>     
        </a>
      </div>
    </div>
  </div>