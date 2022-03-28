<script setup lang="ts">
import DatePicker from '../../utils/DatePicker.vue';

const addToGCal = ref(false);

const date = new Date();
const selectedDate = ref(
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
);
</script>

<template>
  <div class="add-task">
    <h2 class="title">What are you planning?</h2>
    <form class="add-task-form" @submit.prevent>
      <input
        id="task"
        type="text"
        name="task"
        class="task-input"
        placeholder="I have to ..."
      />
      <CustomSelect
        id="collections-select"
        :options="[
          'No collection',
          'School',
          'Family',
          'Professional',
          'No collection',
          'School',
          'Family',
          'Professional',
          'No collection',
          'School',
          'Family',
          'Professional',
        ]"
        class="mb-[1rem]"
      />
      <Checkbox
        v-model="addToGCal"
        field-id="g-calandar-select"
        label="Also add to google calandar"
        class="g-calandar-select"
      />
      <DatePicker id="collections-select" v-model="selectedDate" />
      <div class="control-btns">
        <button class="cancel" type="button">Cancel</button>
        <button class="add" type="submit">Add</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: var(--color-light);
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.add-task {
  width: 100%;
  // max-width: 500px;
  user-select: none;
}

.input-group {
  position: relative;
}

label {
  color: var(--color-light);
}

.task-input {
  width: 100%;
  background-color: var(--color-darker);
  color: var(--color-light);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 3px solid transparent;
  margin-bottom: 1rem;

  &::placeholder {
    transition: transform 0.3s ease-in-out;
  }

  &:focus {
    outline: none;
    border: 3px solid orangered;
    // margin-top: 2rem;

    &::placeholder {
      // color: transparent;
      transform: translateY(-2rem);
    }
  }
}

.control-btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}

.cancel {
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background-color: var(--color-darker);
  color: var(--color-light);
}

.add {
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background-image: var(--main-gradient);
  color: var(--color-light);
}

@media (max-width: 768px) {
  .title {
    font-size: 1.2rem;
    margin-left: 0.2rem;
  }
}
</style>
