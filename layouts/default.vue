<template>
  <TopLine />
  <Navigation />
  <article class="{% block article_type %}{% endblock article_type %}">
    <div class="container">
      <div id="title">
        <h1><slot name="title" /></h1>
        <h2><slot name="sub_title" /></h2>
      </div>
      <div id="content">
        <div id="aside">
          <div class="aside-wrapper"><slot name="aside" /></div>
        </div>
        <main>
          <slot />
        </main>
      </div>
    </div>
  </article>
  <BottomLine />
</template>

<script setup lang="ts">
const { page } = useContent()
console.log(page.value)
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
