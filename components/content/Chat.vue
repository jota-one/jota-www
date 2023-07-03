<template>
  <section class="chat">
    <div class="container center-h">
      <div class="col">
        <ul>
          <li
            v-for="(item, index) in discussion"
            :key="index"
            :class="{ sender: item.isSender }"
          >
            <div class="avatar" :title="chat.users[item.user].name">
              <Author v-bind="chat.users[item.user].avatar" />
            </div>
            <ContentRendererMarkdown class="message" :value="item.msg" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { parseMarkdown } from '~/helpers/md'

type Props = {
  id: string
}
const props = defineProps<Props>()
const discussion = ref([])

const { data: chat } = await useAsyncData('ct', () =>
  queryContent(`_${props.id}`).findOne(),
)

const formatDiscussion = async () => {
  const formatted = []
  for (const message of chat.value.discussion) {
    const msg = await parseMarkdown(message.msg)
    formatted.push({ ...message, msg })
  }
  return formatted
}

onMounted(async () => {
  discussion.value = await formatDiscussion()
})
</script>

<style scoped></style>
