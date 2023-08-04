<template>
  <section
    :class="{ 'showcase': true, 'img-left': imgLeft }"
    :style="{
      background: showcase.theme.background,
      color: showcase.theme.color,
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 :id="id">
            {{ showcase.title }}
          </h2>
          <h3>
            {{ showcase.subTitle }}
          </h3>
          <slot name="description" />
          <br />
          <Cta
            :url="showcase.url"
            :label="showcase.url.replace('https://', '')"
            target="_blank"
            :transparent="true"
          />
        </div>
        <div class="col img">
          <div class="device-wrapper">
            <svg width="354" height="705" viewBox="0 0 354 705">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M51.5015 0.908936H301.4C328.286 0.908936 350.082 22.7044 350.082 49.5905V655.676C350.082 682.562 328.286 704.358 301.4 704.358H51.5015C24.6153 704.358 2.81982 682.562 2.81982 655.676V49.5905C2.81982 22.7044 24.6153 0.908936 51.5015 0.908936Z"
                fill="#2D2D2D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M52.3122 4.9657H300.588C325.682 4.9657 346.024 25.3081 346.024 50.4019V654.865C346.024 679.959 325.682 700.301 300.588 700.301H52.3122C27.2184 700.301 6.87598 679.959 6.87598 654.865V50.4019C6.87598 25.3081 27.2184 4.9657 52.3122 4.9657Z"
                fill="#141414"
              />
              <path
                d="M350.352 631.065H344.402V636.474H350.352V631.065Z"
                fill="#141414"
              />
              <path
                d="M8.76979 631.065H2.81982V636.474H8.76979V631.065Z"
                fill="#141414"
              />
              <path
                d="M350.352 68.5222H344.402V73.9313H350.352V68.5222Z"
                fill="#141414"
              />
              <path
                d="M8.76979 68.5222H2.81982V73.9313H8.76979V68.5222Z"
                fill="#141414"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M215.937 35.5269C218.925 35.5269 221.346 33.1052 221.346 30.1178C221.346 27.1305 218.925 24.7087 215.937 24.7087C212.95 24.7087 210.528 27.1305 210.528 30.1178C210.528 33.1052 212.95 35.5269 215.937 35.5269Z"
                fill="#444444"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M158.601 27.9542H194.842C196.037 27.9542 197.005 28.923 197.005 30.1179C197.005 31.3128 196.037 32.2815 194.842 32.2815H158.601C157.406 32.2815 156.438 31.3128 156.438 30.1179C156.438 28.923 157.406 27.9542 158.601 27.9542Z"
                fill="#444444"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M140.751 33.3632C142.544 33.3632 143.997 31.9101 143.997 30.1178C143.997 28.3253 142.544 26.8723 140.751 26.8723C138.959 26.8723 137.506 28.3253 137.506 30.1178C137.506 31.9101 138.959 33.3632 140.751 33.3632Z"
                fill="#444444"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.115234 211.59C0.115234 210.993 0.695454 210.51 1.41658 210.51H3.36067V261.896H1.41658C0.697866 261.896 0.115234 261.412 0.115234 260.817V211.59Z"
                fill="#2D2D2D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.115234 147.492C0.115234 146.896 0.695454 146.413 1.41658 146.413H3.36067V197.799H1.41658C0.697866 197.799 0.115234 197.315 0.115234 196.72V147.492Z"
                fill="#2D2D2D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.115234 97.1896C0.115234 96.5925 0.695454 96.1089 1.41658 96.1089H3.36067V124.235H1.41658C0.697866 124.235 0.115234 123.754 0.115234 123.155V97.1896Z"
                fill="#2D2D2D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M349.812 162.641H351.434C352.331 162.641 353.057 163.243 353.057 163.991V245.13C353.057 245.875 352.328 246.481 351.434 246.481H349.812V162.641Z"
                fill="#2D2D2D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M54.205 22.8156C37.774 22.8156 24.4556 36.1186 24.4556 52.5288V651.115C24.4556 667.526 37.7748 680.828 54.205 680.828H298.966C315.397 680.828 328.715 667.525 328.715 651.115V52.5288C328.715 36.1176 315.396 22.8156 298.966 22.8156H266.241V22.8266C266.152 22.8193 266.061 22.8156 265.971 22.8156C264.177 22.8156 262.725 24.2677 262.725 26.059V26.3281V27.6777C262.725 38.4189 253.993 47.1263 243.224 47.1263H109.947C99.1769 47.1263 90.4459 38.4212 90.4459 27.6777V26.3281V26.059C90.4459 24.2677 88.9936 22.8156 87.2005 22.8156C87.1096 22.8156 87.0195 22.8193 86.9303 22.8266V22.8156H54.205Z"
                fill="#212121"
              />
              <rect
                opacity="0.3"
                x="34.4468"
                y="61.9254"
                width="284.28"
                height="24.0116"
                rx="7"
                fill="#C4C4C4"
              />
              <rect
                x="24.5254"
                y="99.4222"
                width="304.191"
                height="0.920907"
                fill="#141414"
              />
              <rect
                x="264.053"
                y="43.0021"
                width="2.29622"
                height="4.86624"
                fill="#787878"
              />
              <rect
                x="267.498"
                y="41.1594"
                width="2.29622"
                height="6.70864"
                fill="#787878"
              />
              <rect
                x="270.941"
                y="39.2369"
                width="2.29622"
                height="8.63115"
                fill="#787878"
              />
              <rect
                opacity="0.2"
                x="274.386"
                y="37.3945"
                width="2.29622"
                height="10.4735"
                fill="#C4C4C4"
              />
              <path
                d="M289.22 47.7026L291.504 44.9538C290.869 44.5243 290.076 44.2666 289.22 44.2666C288.363 44.2666 287.57 44.5243 286.936 44.9538L289.22 47.7026ZM289.22 37.3947C286.65 37.3947 284.277 38.162 282.368 39.4563L283.51 40.8306C285.096 39.754 287.075 39.1127 289.22 39.1127C291.364 39.1127 293.344 39.754 294.93 40.8306L296.072 39.4563C294.162 38.162 291.789 37.3947 289.22 37.3947ZM289.22 40.8306C287.507 40.8306 285.927 41.3403 284.652 42.205L285.794 43.5794C286.745 42.9323 287.932 42.5486 289.22 42.5486C290.508 42.5486 291.694 42.9323 292.646 43.5794L293.788 42.205C292.513 41.3403 290.933 40.8306 289.22 40.8306Z"
                fill="#787878"
              />
              <rect
                x="303.471"
                y="41.3972"
                width="8.88588"
                height="4.31133"
                fill="#787878"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M301.759 47.4444V39.6609H317.349V41.2286H318.726V45.8347H317.349V47.4444H301.759ZM302.543 40.4448H316.565V46.6605H302.543V40.4448Z"
                fill="#787878"
              />
              <text
                class="showcase-time"
                x="42"
                y="45"
                fill="#787878"
                style="font-weight: 600; font-size: 12px"
              >
                {{ someDate }}
              </text>
              <text
                class="showcase-url"
                x="50%"
                y="78"
                fill="#d0d0d0"
                style="font-weight: 500; font-size: 14px; text-anchor: middle"
              >
                {{ showcase.url.replace('https://', '') }}
              </text>
              <img
                x="24"
                y="80"
                width="305"
                height="580"
                alt=""
                :src="showcase.img.src"
                :srcset="showcase.img.srcset"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Props = {
  id: string
  imgLeft?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  imgLeft: false,
})

const { data: showcases } = await useAsyncData('sc', () =>
  queryContent('_showcases').findOne(),
)

const showcase = computed(() => {
  if (showcases.value && showcases.value[props.id]) {
    return showcases.value[props.id]
  }
  return {}
})
const someDate = ref(new Date().toLocaleTimeString().replace(/:\d{2}$/gim, ''))
</script>

<style scoped>
@import '../../assets/styles/_media.pcss';
.showcase {
  a,
  link {
    color: inherit;
  }

  &.img-left .col.img {
    @media (--l) {
      order: 1;
    }
  }

  .col {
    order: 2;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (--l) {
      padding-bottom: 2rem;
    }

    &.img {
      @media (--l) {
        padding-bottom: 5rem;
      }
    }
  }

  h2,
  h3 {
    p {
      margin: 0;
    }
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    color: inherit;

    a {
      display: block;
      white-space: nowrap;
    }
  }

  h2 + h3 {
    margin-top: 0;
  }

  .device-wrapper {
    order: 2;
    position: relative;
    display: flex;
    justify-content: center;
    margin: 2rem auto 0;
    height: 25rem;
    max-width: 15rem;
    overflow: hidden;

    @media (--s) {
      height: 30rem;
      max-width: 19rem;
    }

    @media (--l) {
      margin-top: 5rem;
      margin-bottom: -5rem;
      height: 32rem;
      max-width: 100%;
    }

    svg {
      height: 30rem;

      @media (--s) {
        height: 35rem;
      }

      @media (--l) {
        height: 40rem;
      }
    }

    img {
      position: absolute;
      width: calc(100% - 2rem);
      height: calc(100% - 2rem);
      margin-top: 70px;

      @media (--s) {
        width: calc(100% - 3.5rem);
        height: calc(100% - 3.5rem);
        margin-top: 80px;
      }

      @media (--l) {
        width: calc(100% - 2.5rem);
        height: calc(100% - 2.5rem);
        margin-top: calc(0.5rem + 90px);
      }

      @media (--xl) {
        margin-top: calc(1.4rem + 100px);
      }
    }
  }
}
</style>
