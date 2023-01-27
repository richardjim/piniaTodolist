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
    // completedTasksCount() {
    //   return this.reduce((c, p) => {
    //     return p.completed ? c + 1 : c;
    //   }, 0);
    // },
    completedTasksCount() {
      return this.completedTasks.length;
    },
    taskCount() {
      return this.tasks.length;
    },
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleTask(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.completed = !task.completed;

      return task;
    },
  },
});
