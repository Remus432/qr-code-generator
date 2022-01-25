<script lang="ts">
  // Components
  import Card from "./components/Card.svelte"
  import SearchBar from "./components/SearchBar.svelte"
  // Third Party
  import Particles from "svelte-particles"
  import { pageLoadAnim } from "./animations"
  // Config
  import { particlesConfig } from "./particles.config"
  // State
  import { qrState } from "./initialState.state"
  // Core
  import { onMount } from "svelte"

  let qr = {...qrState}
  
  onMount(() => {
    pageLoadAnim()
  })
  
</script>

<main>
  <Particles options="{particlesConfig}" />
  <SearchBar 
    bind:infoState={qr} />
  <Card bind:qr={qr} />
</main>

<style lang="scss" global>
  @use "./main" as *;
</style>
