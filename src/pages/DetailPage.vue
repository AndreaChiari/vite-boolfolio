<script>
import axios from 'axios';
const apiBaseUrl = 'http://127.0.0.1:8000/api/'
export default {
    name: 'DetailPage',

    data: () => ({
        project: null,
    }),
    methods: {
        getProject() {
            const endpoint = apiBaseUrl + 'projects/' + this.$route.params.id
            axios.get(endpoint).then(res => {
                this.project = res.data;
            })

        }
    }, created() {
        this.getProject();
    },
    computed: {
        abstract() {
            const abstract = this.project.description.slice(0, 100)
            return abstract + '...';
        }
    }
}
</script>
<template>
    <h1>hello</h1>
    <h1>{{ project.name }}</h1>
    <p class="card-text">{{ abstract }}</p>
    <a :href="project.linkedin" class="btn btn-primary mb-4">{{ project.linkedin }}</a>
    <a :href="project.github" class="btn btn-primary">{{ project.github }}</a>
</template>