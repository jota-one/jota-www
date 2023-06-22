<template>
  <div class="cta" :class="{ transparent }">
    <a class="link fake" :href="url" :target="target">
      <span>{{ label }}</span>
    </a>
    <a class="link arrow" :href="url" :target="target">{{ label }}</a>
  </div>
</template>

<script setup lang="ts">
type Props = {
  label: string
  target: string
  transparent?: boolean
  url: string
}
withDefaults(defineProps<Props>(), {
  transparent: false,
})
</script>

<style scoped>
.cta {
  position: relative;

  &.transparent .fake {
    background: transparent;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
  }

  .fake {
    padding-right: 3rem;
    background: rgba(0, 0, 0, 0.5);
    border: 2px solid;

    span {
      visibility: hidden;
    }
  }

  .arrow {
    position: absolute;
    top: 0.1rem;
    left: 0;
  }
}
</style>
