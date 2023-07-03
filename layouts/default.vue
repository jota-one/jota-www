<template>
  <TopLine />
  <Navigation />
  <main>
    <article>
      <section>
        <div class="container">
          <div class="row">
            <div class="col">
              <div v-if="page.logo" id="product-logo">
                <img :src="page.logo" alt="" />
              </div>
              <h1>
                <span v-if="page.homepage"><Logo /></span>
                <span v-else v-html="page.title" />
                <p v-html="page.description" />
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
              <Hero :type="page.hero.type" :payload="page.hero.payload" />
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
const { page } = useContent()
useHead({
  bodyAttrs: {
    class: computed(() => {
      if (page.value.theme) {
        return `theme-${page.value.theme}`
      }
      return ''
    }),
  },
})
</script>
