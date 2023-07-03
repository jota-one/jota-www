<template>
  <section>
    <div :class="['container', { 'center-h': centerH, 'center-v': centerV }]">
      <h2 v-if="title">
        {{ title }}
      </h2>
      <div v-if="!isFull" class="row">
        <template v-if="$slots.left || $slots.right">
          <div class="col">
            <slot name="left" />
          </div>
          <div class="col">
            <slot name="right" />
          </div>
        </template>
        <div v-else class="col">
          <slot />
        </div>
      </div>
      <div v-else class="col">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Props = {
  title?: string
  isFull?: boolean
  centerH?: boolean
  centerV?: boolean
}
withDefaults(defineProps<Props>(), {
  title: '',
  isFull: false,
  centerH: false,
  centerV: false,
})
</script>

<style scoped></style>
