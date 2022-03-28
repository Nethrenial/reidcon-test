<script setup lang="ts">
const props = defineProps<{
  ratio: string;
}>();

const completedAmount = computed(() => {
  const ratio = props.ratio;
  const numerator = ratio.split('/')[0];
  return parseInt(numerator);
});

const allAmount = computed(() => {
  const ratio = props.ratio;
  const denominator = ratio.split('/')[1];
  return parseInt(denominator);
});
</script>
<template>
  <div class="circle-ratio-wrapper">
    <div class="circle-ratio" />
  </div>
</template>

<style lang="scss" scoped>
.circle-ratio-wrapper {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-image: var(--main-gradient);
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle-ratio {
  background-color: var(--color-dark);
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
}
</style>
