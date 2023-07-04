<template>
  <header id="header">
    <div class="container">
      <a href="/" class="logo">
        <svg height="80" viewBox="0 0 82 120">
          <path class="bg" d="M81.3128 0V38.6871L0 120V0H81.3128Z" />
          <path
            class="text"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.8578 41.2802C30.0578 41.2802 28.68 40.7631 27.7245 39.729C26.7689 38.6948 26.2911 37.2335 26.2911 35.3451V22.9352C26.2911 21.0467 26.7689 19.5854 27.7245 18.5512C28.68 17.5171 30.0578 17 31.8578 17C33.6578 17 35.0356 17.5171 35.9911 18.5512C36.9467 19.5854 37.4244 21.0467 37.4244 22.9352V35.3451C37.4244 37.2335 36.9467 38.6948 35.9911 39.729C35.0356 40.7631 33.6578 41.2802 31.8578 41.2802ZM31.8578 37.908C33.1245 37.908 33.7578 37.1323 33.7578 35.5811V22.6991C33.7578 21.1479 33.1245 20.3723 31.8578 20.3723C30.5911 20.3723 29.9578 21.1479 29.9578 22.6991V35.5811C29.9578 37.1323 30.5911 37.908 31.8578 37.908ZM17.7 41.0779C17.0333 41.0779 16 41.0779 16 41.0779V37.7056C16 37.7056 16.7556 37.7056 17.2 37.7056C17.9333 37.7056 18.4778 37.5258 18.8333 37.1661C19.1889 36.7839 19.3667 36.2106 19.3667 35.4462V26.2394L23.0333 22.5299V35.3451C23.0333 37.2785 22.5889 38.7173 21.7 39.6615C20.8333 40.6058 19.5 41.0779 17.7 41.0779ZM23.0333 19.1021V17.3372H19.3667V22.8116L23.0333 19.1021ZM42.187 20.7095H38.3537V17.3372H49.687V20.7095H45.8537V40.943H42.187V20.7095ZM52.3307 17.3372H57.2974L61.0974 40.943H57.4307L56.764 36.2556V36.323H52.5974L51.9307 40.943H48.5307L52.3307 17.3372ZM56.3307 33.1194L54.6974 21.4514H54.6307L53.0307 33.1194H56.3307Z"
          />
        </svg>
      </a>
    </div>
  </header>
</template>

<style scoped>
@import '../assets/styles/_media.pcss';
header {
  position: sticky;
  top: 0;
  z-index: 1;
  pointer-events: none;

  .container {
    height: 10rem;
    padding: 0 2.5rem;

    @media (--m) {
      padding: 0 3rem;
    }
  }

  .theme-home & {
    visibility: hidden;
  }

  a {
    display: inline-block;
    height: 5.75rem;
    pointer-events: all;
    outline: none;
  }

  svg {
    height: 100%;
    width: auto;
  }

  .bg,
  .text {
    transition: fill 0.25s linear;
  }

  .bg {
    fill: var(--c-logo-background);
  }

  .text {
    fill: var(--c-logo-text);
  }

  .logo:hover {
    .bg {
      fill: var(--c-logo-background-hover);
    }

    .text {
      fill: var(--c-logo-text-hover);
    }
  }
}
</style>
