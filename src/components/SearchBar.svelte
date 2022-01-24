<script lang="ts">
  export let isLoading
  export let pageScreenshot
  export let pageDescription 
  export let pageHeadline
  export let pageTitle
  export let qrImg

  let isEmpty
  let urlVal
  let httpPattern = ""

  import QRCodeIcon from "../assets/images/qr-code-icon.png"

  export const addUrl = async (e: any) => {
    const url = await navigator.clipboard.readText()
    $: urlVal = url
  }

  export const retrievePageInfo = async () => {
    
    const res = await fetch("http://localhost:3001/data")
    const info = await res.json()

    $: pageScreenshot = info[0].pageScreenshot
    $: pageDescription = info[0].pageDescription
    $: pageHeadline = info[0].pageHeadline
    $: pageTitle = info[0].pageTitle

    setTimeout(() => { 
      $: isLoading = false
    }, 500)
    
  }

  export const sendURL = async (url) => {
    $: isLoading = true

    const response = await fetch("http://localhost:3001/data", { 
      method: "POST", 
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }, 
      body: JSON.stringify({ url })
    })

    await retrievePageInfo()
  }


  export const generateCode = async (e: any) => {
    e.preventDefault()

    if (urlVal) {
      $: isEmpty = false

      !urlVal.includes("https://") ? httpPattern = "https://" : httpPattern = ""

      await sendURL(`${httpPattern}${urlVal}`)
      $: qrImg = `https://api.qrserver.com/v1/create-qr-code/?data=${httpPattern}${urlVal}&size=200x200&bgcolor=2C7DFA&color=fff&format=svg`
    } else {
      $: isEmpty = true
    }
    
  }
</script>

<form on:submit={generateCode} class="url-form">
  <input on:mouseover={addUrl} class={`url-form__input ${isEmpty ? "empty" : ""}`} type="text" bind:value={urlVal} placeholder="Add URL for QR code generation">
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
      margin-right: 1rem;

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