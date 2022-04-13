<script setup>
function showMessage() {
  Neutralino.os.showMessageBox('Hello', 'hello there');
}
</script>

<template>
    <section>
      <p>Hello there 👋</p>
      <p @click="showMessage">click me</p>
    </section>
</template>

<style lang="postcss">
</style>
