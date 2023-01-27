<template>
  <main>
    <!-- Header -->
    <header>
      <img src="./assets/pinia.svg" alt="Vue logo" />
      <h1>Task</h1>
      <img src="./assets/sun.svg" alt="sun logo" />
    </header>
    <!-- Filter -->
    <section>
      <div class="new-task-form">
        <TaskForm />
      </div>
      <div class="filter">
        <button @click="pick = 'all'">All</button>
        <button @click="pick = 'completedTasks'">Completed</button>
      </div>
    </section>
    <!-- Task list -->
    <section>
      <div class="task-list" v-if="pick == 'all'">
        <h5>All Task </h5>
        <p>You have {{ taskStore.taskCount }} of Task Left</p>
        <div v-for="task in taskStore.tasks">
          <TaskDetails :task="task" />
        </div>
      </div>
      <div class="task-list" v-if="pick === 'completedTasks'">
        <h5>All Completed Task</h5>
        <p>You have {{ taskStore.completedTasksCount }} of Task Left</p>
        <div v-for="task in taskStore.completedTasks">
          <TaskDetails :task="task" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { useTaskStore } from './stores/TaskStore';
import { ref } from 'vue'
export default {
  components: {
    TaskDetails,
    TaskForm
  },

  setup() {
    const taskStore = useTaskStore();

    const pick = ref('all');

    return { taskStore, pick }
  }

}
</script>