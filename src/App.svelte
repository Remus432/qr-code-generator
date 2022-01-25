<script lang="ts">
  // Components
  import Card from "./components/Card.svelte"
  import SearchBar from "./components/SearchBar.svelte"
  // Third Party
  import Particles from "svelte-particles"
  import { gsap } from "gsap"
  // Core
  import { onMount } from "svelte"

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

  onMount(() => {
    const tl = gsap.timeline()

    tl.from(".url-form > *", {
      opacity: 0,
      duration: .8,
      y: 60,
      stagger: .4,
      ease: "power2.easeIn"
    })
    .from(".qr-card", {
      opacity: 0,
      duration: .8,
      y: 100,
      ease: "power3.easeInOut"
    })
    .to(".qr-card > .overlay", {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      duration: .8,
      ease: "power3.easeInOut"
    })
    .from(".qr-card > *:not(:first-of-type)", {
      opacity: 0,
      duration: 1,
      y: 50,
      stagger: .5,
      ease: "power3.easeInOut"
    }, "-=.7")

  })

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
