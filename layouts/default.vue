<template>
  <TopLine />
  <Navigation />
  <main>
    <article v-if="page">
      <section>
        <div class="container">
          <div class="row">
            <div class="col">
              <div v-if="page.logo" id="product-logo">
                <img :src="page.logo" alt="" />
              </div>
              <h1>
                <span v-if="page.homepage"><Logo /></span>
                <ContentRendererMarkdown
                  v-else-if="title"
                  tag="span"
                  :value="title"
                />
                <ContentRendererMarkdown
                  v-if="description"
                  :value="description"
                />
              </h1>
              <MetaInformations
                v-if="
                  page.license ||
                  page.audience ||
                  page.techs ||
                  page.github ||
                  page.npm ||
                  page.website
                "
                :license="page.license"
                :audience="page.audience"
                :techs="page.techs"
                :github="page.github"
                :npm="page.npm"
                :website="page.website"
              />
            </div>
            <div v-if="page.hero" id="hero" class="col">
              <Hero
                :type="page.hero.type"
                :payload="page.hero.payload"
                :payload-path="page.hero.payloadPath"
              />
            </div>
          </div>
        </div>
      </section>
      <slot />
    </article>
  </main>
  <BottomLine />
</template>

<script setup lang="ts">
import { parseMarkdown } from '~/helpers/md'

const { page } = useContent()
const title = ref('')
const description = ref('')

useHead({
  bodyAttrs: {
    class: computed(() => {
      const classes: string[] = []
      if (page.value?.theme) {
        classes.push(`theme-${page.value.theme}`)
      } else {
        classes.push('theme-default')
      }
      if (page.value?.bodyClass) {
        classes.push(page.value.bodyClass)
      }
      return classes.join(' ')
    }),
  },
})

onMounted(async () => {
  title.value = await parseMarkdown(page.value.title)
  description.value = await parseMarkdown(page.value.description)
})
</script>
