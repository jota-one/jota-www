<template>
  <nav>
    <div class="container">
      <button class="handler" @click="hamburgerClicked">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div v-show="tooltipVisible" class="tooltip">
        You might want
        <br />
        to click here...
      </div>
      <ul>
        <li
          v-for="({ _path: path, title, active }, index) in navigation"
          :key="index"
        >
          <span v-if="active">
            {{ title }}
          </span>
          <NuxtLink
            v-else
            :href="path"
            class="item"
            :class="{ active }"
            @click="closeNavigation"
            >{{ title }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineEmits(['close'])

const { navigation } = useContent()
const tooltipVisible = ref(false)

const closeNavigation = () => {
  document.body.classList.remove('navigate')
}

const toggleNavigation = () => {
  document.body.classList.toggle('navigate')
}

const hideTooltip = () => {
  tooltipVisible.value = false
}

const hamburgerClicked = () => {
  toggleNavigation()
  hideTooltip()
}
</script>

<style lang="postcss" scoped>
@import '../assets/styles/_media.pcss';
nav {
  position: sticky;
  top: 10rem;
  display: flex;
  margin-bottom: -4rem;
  z-index: 1;
  pointer-events: none;

  ul {
    position: absolute;
    top: 0;
    left: 1.5rem;
    list-style: none;
    padding: 0;
    margin: 0 0 0 2rem;
    opacity: 0;
    transition: all 0.25s ease;
    pointer-events: none;

    @media (--m) {
      left: 2rem;
    }

    body.navigate & {
      opacity: 1;
      transition: all 0.75s ease;
      pointer-events: all;
    }
  }

  li {
    font-size: 1.3rem;
    line-height: 1.6rem;
    font-weight: 900;
    color: var(--c-primary);
  }

  .link {
    text-decoration: none;
    color: var(--c-secondary);
    transition: color 0.2s linear;

    &:hover {
      color: var(--c-primary);
    }
  }

  .handler {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2px 0 0 0.75rem;
    padding: 0;
    width: 1.75rem;
    height: 1.75rem;
    border: none;
    background: none;
    cursor: pointer;
    transform-origin: center;
    transition: transform 0.125s ease;
    outline: none;
    pointer-events: all;

    @media (--m) {
      margin-left: 1.25rem;
    }

    &:hover span {
      background: var(--c-primary);
    }

    body.navigate & {
      transform: rotate(90deg);
    }

    span {
      display: block;
      width: 100%;
      height: 2px;
      margin: 4px 0 0;
      background: var(--c-secondary);
      transition: background 0.25s ease;

      &:first-child {
        margin-top: 0;
      }

      @media (--m) {
        height: 3px;
        margin: 5px 0 0;
      }
    }
  }

  .tooltip {
    position: absolute;
    top: -2.5rem;
    left: 2.5rem;
    padding-left: 1rem;
    font-family: 'Kalam', cursive;
    font-size: 1.1rem;
    line-height: 1;
    transform: rotate(-10deg);
    transform-origin: 0 0;
    opacity: 0;
    transition: opacity 0.5s ease;

    @media (--m) {
      left: 2.75rem;
    }

    @media (--xl) {
      left: 3rem;
    }

    &:before {
      content: '⟶';
      position: absolute;
      top: 1rem;
      left: -1rem;
      font-family: 'Inter', sans-serif;
      transform: rotate(145deg);
    }

    &.visible {
      opacity: 1;
    }
  }
}
</style>
