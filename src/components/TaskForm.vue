<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="I need to ..." v-model="newTask">
            <button>Add</button>
        </form>
    </div>
</template>

<script>
import { useTaskStore } from '../stores/TaskStore';
import { ref } from 'vue'
export default {
    setup() {
        const taskStore = useTaskStore();
        const newTask = ref('');

        const handleSubmit = () => {
            if (newTask.value.length > 0) {
                taskStore.addTask({
                    title: newTask.value,
                    completed: false,
                    id: Math.floor(Math.random() * 1000000)
                });
                newTask.value = '';
            }

        }
        return { newTask, taskStore, handleSubmit }
    }

}
</script>