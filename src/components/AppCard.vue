<script>

export default {
    name: 'AppCard',
    props: { project: Object },
    computed: {
        abstract() {
            const abstract = this.project.description.slice(0, 100)
            return abstract + '...';
        }
    }
};
</script>

<template>
    <div class="card col-4 g-3">
        <img class="card-img-top" :src="project.image" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ abstract }}</p>
            <a :href="project.linkedin" class="btn btn-primary mb-4">{{ project.linkedin }}</a>
            <a :href="project.github" class="btn btn-primary">{{ project.github }}</a>
        </div>
    </div>
</template>