<script>
export default {
    name: 'DetailPage',
    props: { project: Object },
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
    <!-- <p class="card-text">{{ abstract }}</p> -->
    <!-- <a :href="project.linkedin" class="btn btn-primary mb-4">{{ project.linkedin }}</a> -->
    <!-- <a :href="project.github" class="btn btn-primary">{{ project.github }}</a> -->
</template>