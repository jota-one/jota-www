<template>
  <footer>
    <div class="container">
      <ul>
        <li v-for="soc in social.platforms" :key="soc.url">
          <a
            aria-label="{{ soc.icon }}"
            class="link"
            href="{{ soc.url }}"
            rel="noopener"
            target="_blank"
            title="{{ soc.icon }}"
          >
            <Icon :name="soc.icon" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
const globals = useContent().globals
const social = globals.value.social || []
</script>

<style scoped>
footer {
  display: flex;
  align-items: center;
  padding: 2.5rem 0 4.5rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    li {
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }
    }

    a {
      transition: color 0.5s ease;

      &:hover {
        color: var(--c-primary);
      }
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
