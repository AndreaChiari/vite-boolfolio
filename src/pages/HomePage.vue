<script>

import axios from 'axios';
import AppCard from '../components/AppCard.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api/'
export default {
    name: 'HomePage',
    components: { AppCard },
    data: () => ({
        projects: []
    }),
    methods: {
        fetchProjects() {
            axios.get(apiBaseUrl + 'projects').then(res => {
                this.projects = (res.data);
            })
        }
    },
    created() {
        this.fetchProjects();
    },
}
</script>

<template>
    <div class="row">
        <AppCard v-for="project in projects" :project="project" :key="project.id"></AppCard>
    </div>
</template>