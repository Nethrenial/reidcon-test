<script setup lang="ts">
import IconClose from '~icons/ep/close-bold';

const props = withDefaults(
  defineProps<{
    closable?: boolean;
  }>(),
  {
    closable: true,
  }
);

const emit = defineEmits<{
  (e: 'modalClose'): void;
}>();

function handleClick() {
  if (props.closable) emit('modalClose');
  else shakeModal();
}

function shake(el: HTMLElement | null) {
  if (el) {
    el.style.transform = 'translate(-50%, -50%) scale(1.05)';
    setTimeout(() => {
      el.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
  }
}

function shakeModal() {
  const modal = document.querySelector('.modal') as HTMLElement | null;
  shake(modal);
}
</script>
<template>
  <Teleport to="#modals">
    <div class="modal-wrapper" @click="handleClick">
      <div class="modal" tabindex="-1" @click.stop>
        <slot />
        <IconClose
          v-if="!props.closable"
          class="close-btn"
          @click="emit('modalClose')"
        />
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 98vw;
  max-width: 500px;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background-color: var(--color-dark);
  animation: slideUpAndShow 0.3s ease-in-out;
  border-radius: 20px;
  transition: all 0.1s ease-in-out;
}

@keyframes slideUpAndShow {
  0% {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 24px;
  height: 24px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(180deg) scale(1.1);
  }
}

@media (max-width: 768px) {
  .modal {
    padding: 0.5rem;
  }

  .close-btn {
    top: 0.7rem;
    right: 0.5rem;
  }
}
</style>
