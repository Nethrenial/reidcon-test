<script setup lang="ts">
import IconCheck from '~icons/bi/check';

const props = withDefaults(
  defineProps<{
    label?: string;
    fieldId: string;
    modelValue: boolean;
  }>(),
  {}
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();
</script>

<template>
  <div class="checkbox">
    <label v-if="props.label" :for="props.fieldId" class="label">
      <span class="text">
        {{ props.label }}
      </span>

      <span class="check-mark" :class="props.modelValue ? 'checked' : ''">
        <IconCheck class="icon" />
      </span>
    </label>
    <input
      :id="props.fieldId"
      ref="input"
      type="checkbox"
      class="hidden"
      :checked="props.modelValue"
      @input="(e)=>{
        emit('update:modelValue', (e.target as HTMLInputElement).checked)
      }"
    />
  </div>
</template>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0.2rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.label {
  color: var(--color-light);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
}

.check-mark {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right top,
    var(--color-darker),
    var(--color-darker)
  );
  transition: all 0.3s ease-in-out;
  border-radius: 5px;

  & .icon {
    color: #fff;
    transform: scale(1.5);
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  &.checked {
    background-image: var(--main-gradient);

    & .icon {
      opacity: 1;
    }
  }
}
</style>
