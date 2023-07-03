<template>
  <dl class="meta">
    <div v-if="license">
      <dt>License</dt>
      <dd>{{ license }}</dd>
    </div>
    <div v-if="audience">
      <dt>Target audience</dt>
      <dd>{{ audience }}</dd>
    </div>
    <div v-if="techs?.length > 0">
      <dt>Technologies</dt>
      <dd class="icons">
        <Icon
          v-for="(tech, index) in techs"
          :key="index"
          :name="tech.toLowerCase().replace('.', '')"
          :aria-label="tech"
          :title="tech"
        />
      </dd>
    </div>
    <div v-if="github || npm">
      <dt>Install</dt>
      <dd class="icons">
        <a v-if="github" :href="github" target="_blank">
          <Icon name="github" aria-label="github" title="github" />
        </a>
        <a v-if="npm" class="link" :href="npm" target="_blank">
          <Icon name="npm" aria-label="npm" title="npm" />
        </a>
      </dd>
    </div>
    <div v-if="website">
      <dt>Product website</dt>
      <dd>
        <a
          :aria-label="`product website: ${websiteName}`"
          class="link arrow"
          :href="website"
          rel="noopener"
          target="_blank"
          :title="`product website: ${websiteName}`"
        >
          {{ websiteName }}
        </a>
      </dd>
    </div>
  </dl>
</template>

<script setup lang="ts">
type Props = {
  license: string
  audience: string
  techs: string[]
  github: string
  npm: string
  website: string
}
const props = defineProps<Props>()
const websiteName = computed(() => props.website.replace('http://', ''))
</script>

<style scoped>
dl.meta {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  .full & {
    @media (--l) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  section.product & {
    grid-template-columns: 1fr 1fr 1fr;
  }

  section.product &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--c-primary);
    opacity: 0.25;
  }

  div {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--c-primary);
      opacity: 0.25;
    }

    section.product & {
      padding-bottom: 1rem;

      &:after {
        display: none;
      }
    }
  }

  dt,
  dd {
    margin: 0;
    padding: 0;
  }

  dt {
    padding-top: 0.5rem;
    font-size: 0.75rem;
    opacity: 0.5;

    section.product & {
      padding-top: 0;
      margin-top: -0.5rem;
    }
  }

  dd {
    padding-top: 0.5rem;
    font-size: 0.95rem;
    font-weight: 800;
    line-height: 1.2;

    &.icons {
      padding-top: 0.25rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, 1.5rem);
      align-items: center;
      grid-gap: 0.5rem;
      color: var(--c-primary);

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
}
</style>
