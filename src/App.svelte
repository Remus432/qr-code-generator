<script lang="ts">
  import Card from "./components/Card.svelte"
  import SearchBar from "./components/SearchBar.svelte"
  import Particles from "svelte-particles"

  let particlesConfig = {
    particles: {
      color: {
        value: "#0569FE"
      },
      opacity: {
        value: 0.5
      },
      links: {
        enable: true,
        distance: 100,
        opacity: "0.5",
        color: "#0569FE"
      },
      move: {
        enable: true,
        speed: 1
      },
      number: {
        value: 50
      }
    },
  }

  let qr = {
    img: "",
    isLoading: undefined,
    page: {
      img: "",
      descr: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
      headline: "",
      title: "Improve your front-end skills by building projects"
    }
  }

</script>

<main>
  <Particles options="{particlesConfig}" />
  <SearchBar 
    bind:qrImg={qr.img}
    bind:pageScreenshot={qr.page.img}
    bind:pageDescription={qr.page.descr}
    bind:pageHeadline={qr.page.headline}
    bind:pageTitle={qr.page.title}
    bind:isLoading={qr.isLoading} />
  <Card bind:qr={qr} />
</main>

<style lang="scss" global>
  @use "./main" as *;
</style>
