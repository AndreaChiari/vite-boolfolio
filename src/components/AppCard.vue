<script>
import axios from 'axios';
const apiBaseUrl = 'http://127.0.0.1:8000/api/'
export default {
    name: 'CardApp',
    data: () => ({
        projects: []
    }),
    methods: {
        fetchProjects() {
            axios.get(apiBaseUrl + 'projects').then(res => {
                console.log(res.data);
            })
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template></template>