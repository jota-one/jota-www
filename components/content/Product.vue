<template>
  <section class="product">
    <div class="container">
      <h2 :id="id">{{ id }}</h2>
      <div class="row">
        <div class="col">
          <MetaInformations v-bind="product" />
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Props = {
  id: string
}
const props = defineProps<Props>()

const { data: products } = await useAsyncData('pd', () =>
  queryContent('_products').findOne(),
)
const product = computed(() => {
  if (products.value && products.value[props.id]) {
    return products.value[props.id]
  }
  return {}
})
</script>

<style scoped></style>
