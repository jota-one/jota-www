<template>
  <div>
    <Terminal v-if="type === 'terminal'" v-bind="heroProps" />
  </div>
</template>

<script setup lang="ts">
import Terminal from '@/components/Terminal.vue'

type HeroType = 'terminal' | 'authors'

type Props = {
  type: HeroType
  payload: string
}

const props = defineProps<Props>()
const { data: heroProps } = await useAsyncData('pl', () =>
  queryContent({
    where: [
      {
        _id: `content:${props.payload}`,
      },
    ],
    without: ['_'],
  }).findOne(),
)

console.log('HERO props', props.type, props.payload)
console.log('HERO loaded heroProps', heroProps)
</script>
