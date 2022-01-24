<script lang="ts">
  export let qr
  // Graphic Assets
  import QRImg from "../assets/images/image-qr-code.png"
  // Third Party
  import VanillaTilt from "vanilla-tilt"
  // Core
  import { onMount } from "svelte"

  onMount(() => {
    const qrCard = document.querySelector(".qr-card") as HTMLElement | HTMLElement[]

    VanillaTilt.init(qrCard)
  })
</script>

<article class="qr-card">
  <div class={`qr-card__wrapper ${qr.img !== "" ? "default" : ""} ${qr.isLoading ? "loading" : ""}`}>
    <img src={qr.img !== "" ? qr.img : QRImg} alt="QR Code" class="qr-card__code">
  </div>
  <div class="qr-card__text">
    <h1 class={`qr-card__headline ${qr.isLoading ? "loading" : ""}`}>{qr.page.title}</h1>
    <p class={`qr-card__description ${qr.isLoading ? "loading" : ""}`}>{qr.page.descr ? qr.page.descr : qr.page.headline}</p>
  </div>
  <img class="screenshot" src="data:image/png;base64,{qr.page.img}" alt="" />
</article>

<style lang="scss">
  @use "../styles/variables";
  @use "../styles/keyframes" as *;

  .screenshot {
    width: 100%;
    height: 100%;
    display: none;
  }

  .qr-card {
    background-color: variables.$color-white;
    border-radius: 2rem;
    box-shadow: 0 2.5rem 2.5rem rgba(0, 0, 0, 0.04);
    padding: 1.6rem;
    padding-bottom: 4rem;
    position: relative;
    transform: perspective(1000px);
    transform-style: preserve-3d;
    width: clamp(32rem, 50vw, 40rem);

    &:hover &__wrapper { box-shadow: 0 1rem 1.5rem rgba(variables.$color-blue--light, .2); }

    &:hover &__wrapper,
    &:hover &__text { transform: translateZ(5rem); }

    &__wrapper {
      background-image: url("../assets/images/oval-bg.png");
      background-size: cover;
      background-repeat: no-repeat;
      box-shadow: 0 1rem 1.5rem rgba(variables.$color-blue--light, 0);
      border-radius: 1rem;
      position: relative;
      text-align: center;
      transition: box-shadow .6s ease;
      line-height: 0;

      &.default {
        padding: calc(variables.$spacing-xl + 5vh);
      }
    }

    &__code {
      border-radius: 1rem;
      display: inline-block;
      position: relative;
      z-index: 2;
    }

    &__text {
      margin-top: variables.$spacing-m;
      text-align: center;
    }

    &__headline {
      border-radius: 1rem;
      color: variables.$color-blue--dark;
      font-size: 2.2rem;
      position: relative;
    }

    &__description {
      border-radius: 1rem;
      color: variables.$color-blue--grayish;
      font-weight: 400;
      position: relative;
      margin-top: variables.$spacing-s;
    }
  }
</style>