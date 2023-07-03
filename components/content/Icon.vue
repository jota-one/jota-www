<template>
  <svg viewBox="0 0 24 24" :width="size" :height="size">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      :fill="color"
      :d="icons[name] || icons._default"
    />
  </svg>
</template>

<script setup lang="ts">
import icons from '../icons.json'

type Props = {
  name: string
  size?: number
  color?: string
}
withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor',
})
</script>
