<template>
  <div>
    <Terminal v-if="type === 'terminal'" v-bind="heroProps" />
    <Author v-if="type === 'author'" v-bind="heroProps" />
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

type HeroType = 'terminal' | 'author'

type Props = {
  type: HeroType
  payload?: object
  payloadPath?: string
}

const props = defineProps<Props>()
const heroProps = ref(props.payload)
if (!heroProps.value) {
  const { data } = await useAsyncData('pl', () =>
    queryContent({
      where: [
        {
          _id: `content:${props.payloadPath}`,
        },
      ],
      without: ['_'],
    }).findOne(),
  )
  heroProps.value = data.value as ParsedContent
}

console.log('HERO props', props.type, props.payload)
console.log('HERO loaded heroProps', heroProps)
</script>
