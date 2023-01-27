import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    isLoading: false,
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
    async fetchTasks() {
      this.isLoading = true;
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      this.tasks = data;
      this.isLoading = false;
    },
    async addTask(task) {
      this.tasks.push(task);
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      if (response.error) {
        console.log(response.error);
      }
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);

      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
      if (response.error) {
        console.log(response.error);
      }
    },
    async toggleTask(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.completed = !task.completed;

      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: task.completed }),
      });
      if (response.error) {
        console.log(response.error);
      }

      return task;
    },
  },
});
