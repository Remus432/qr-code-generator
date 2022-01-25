<script lang="ts">
  export let infoState

  let isEmpty
  let urlVal

  // Graphic Assets
  import QRCodeIcon from "../assets/images/qr-code-icon.png"
  // Utils
  import { retrieveInfoObj } from "../ui/ui.actions"

  export const validateForm = async (e) => {
    e.preventDefault()

    if (urlVal) {
      $: isEmpty = false

      $: infoState = {...infoState, isLoading: true}

      $: infoState = await retrieveInfoObj(urlVal)

      setTimeout(() => {
        $: infoState = {...infoState, isLoading: false}
      }, 500)
    } else {
      $: isEmpty = true
    }
  } 
</script>

<form on:submit={validateForm} class="url-form">
  <input class={`url-form__input ${isEmpty ? "empty" : ""}`} type="text" bind:value={urlVal} placeholder="Add URL for QR code generation">
  {#if isEmpty}
    <span class="url-form__err">Please add a website</span>
  {/if}
  <button class="url-form__btn">
    Generate
    <img class="url-form__icon" src={QRCodeIcon} alt="QR Code" />
  </button>
</form>

<style lang="scss">
  @use "../styles/variables";

  .url-form {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: variables.$spacing-m;
    z-index: 10;

    &__input {
      border: none;
      border-radius: 1rem;
      color: variables.$color-blue--dark;
      font-weight: 500;
      flex: 1;
      padding: 1.2rem;

      &.empty {
        position: relative;
        outline: 2px solid #e74c3c;
      }

      &::placeholder {
        color: variables.$color-blue--grayish;
      }
    }

    &__err {
      color: #e74c3c;
      position: absolute;
      top: -3rem;
    }

    &__btn {
      align-items: center;
      background-color: variables.$color-blue--light;
      border: none;
      border-radius: .8rem;
      color: variables.$color-white;
      cursor: pointer;
      display: flex;
      justify-content: center;
      padding: variables.$spacing-xs 0;
      margin-top: variables.$spacing-xs;

      &:hover {
        background-color: variables.$color-blue--light-hover;
      }
    }

    &__icon {
      margin-left: variables.$spacing-xs;
      width: 2rem;
    }
  }

</style>