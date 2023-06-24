<template>
  <div class="terminal">
    <div class="ratio" />
    <div class="window">
      <div />
      <div />
      <div />
    </div>
    <div ref="shell" class="shell">
      <code v-for="(step, j) in steps" :key="j" class="command">
        <span class="green">$</span> <span class="typed" />
        <span
          v-for="(line, i) in step.output"
          :key="i"
          :class="['line', `line-${i}`]"
          v-html="line"
        />
      </code>
    </div>
  </div>
</template>

<script setup lang="ts">
// import Typed from 'typed.js'

type TerminalStep = {
  command: string
  output: string[]
}
type Props = {
  steps: TerminalStep[]
}

const props = defineProps<Props>()

// let currentCommand = 0
// const shell = ref<HTMLElement>()
// let started = false
//
// const typedOptions = {
//   typeSpeed: 30,
//   loop: false,
//   startDelay: 1000,
// }
//
// function execute(step) {
//   return new Promise(resolve => {
//     const cmdEl = shell.querySelector(
//       `.command:nth-child(${currentCommand + 1})`,
//     )
//
//     const el = cmdEl.querySelector('.typed')
//
//     const options = {
//       ...typedOptions,
//       ...step.options,
//       strings: [step.command],
//       onComplete: onTypedCommplete,
//     }
//
//     async function onTypedCommplete(self) {
//       if (!options.loop) {
//         self.el.parentElement.querySelector('.typed-cursor').style.display =
//           'none'
//       }
//
//       let i = 0
//
//       const interval = window.setInterval(() => {
//         if (i === step.output.length - 1) {
//           window.clearInterval(interval)
//           resolve(true)
//         }
//
//         const lineEl = cmdEl.querySelector(`.line-${i}`)
//         lineEl.classList.add('show')
//         lineEl.innerHTML = lineEl.innerHTML.replace('js:now', now())
//         i++
//       }, 50)
//     }
//
//     cmdEl.classList.add('show')
//     new Typed(el, options)
//   })
// }
//
// function pad(input) {
//   const str = input.toString()
//   try {
//     return str.padStart(2, '0')
//   } catch (e) {
//     return str
//   }
// }
//
// function now() {
//   const d = new Date()
//   return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
// }
//
// onMounted(() => {
//   const callback = async entries => {
//     for (const entry of entries) {
//       if (!started && entry.isIntersecting) {
//         started = true
//
//         for (const step of props.steps) {
//           await execute(step)
//           currentCommand++
//         }
//       }
//     }
//   }
//
//   const observer = new IntersectionObserver(callback)
//   observer.observe(shell.value as HTMLElement)
// })
</script>

<style scoped>
/*.terminal {*/
/*  position: relative;*/
/*  width: 100%;*/
/*  background-color: var(*/
/*    --j-terminal-background-color,*/
/*    rgba(245, 245, 245, 0.9)*/
/*  );*/
/*  border: 1px solid var(--j-terminal-border-color, rgba(0, 0, 0, 0.125));*/
/*  border-radius: 0.35rem;*/
/*  box-shadow: 0 0.25rem 1.5rem*/
/*    var(--j-terminal-box-shadow-color, rgb(0 0 0 / 20%));*/

/*  .ratio {*/
/*    content: '';*/
/*    display: block;*/
/*    height: 0;*/
/*    width: 100%;*/
/*    min-width: var(--j-terminal-min-width);*/
/*    padding-bottom: var(--j-terminal-ratio);*/
/*  }*/
/*}*/

/*.window {*/
/*  position: absolute;*/
/*  top: 0;*/
/*  left: 0;*/
/*  display: flex;*/
/*  align-items: center;*/
/*  padding: 0.75rem;*/
/*  z-index: 1;*/

/*  div {*/
/*    width: 0.65rem;*/
/*    height: 0.65rem;*/
/*    margin-right: 0.375rem;*/
/*    border-radius: 50%;*/
/*    background: var(--j-terminal-window-dots-color, rgb(200, 200, 200));*/
/*  }*/
/*}*/

/*.shell {*/
/*  position: absolute;*/
/*  top: 2.25rem;*/
/*  bottom: 0;*/
/*  overflow: auto;*/
/*  right: 0;*/
/*  left: 0;*/
/*  padding: 0.5rem 1.5rem 1.5rem;*/
/*  font-size: 0.825rem;*/
/*  color: var(--j-terminal-text-color, rgb(113, 113, 113));*/
/*}*/

/*.command:not(.show),*/
/*.line:not(.show) {*/
/*  display: none;*/
/*}*/

/*.line {*/
/*  display: block;*/
/*}*/

/*code {*/
/*  display: block;*/
/*}*/

/*:global .blue {*/
/*  color: rgb(59, 130, 246);*/
/*}*/

/*:global .green {*/
/*  color: rgb(74, 222, 128);*/
/*}*/

/*:global .pink {*/
/*  color: rgb(219, 39, 119);*/
/*}*/

/*:global .opacity-75 {*/
/*  opacity: 0.5;*/
/*}*/

/*:global .opacity-50 {*/
/*  opacity: 0.5;*/
/*}*/

/*:global .opacity-25 {*/
/*  opacity: 0.25;*/
/*}*/
</style>
