import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "Task 1", completed: true },
      { id: 2, title: "Task 2", completed: false },
    ],
  }),
  getters: {
    completedTasks() {
      return this.tasks.filter((task) => task.completed);
    },
  },
});
