<script>

export default {
    name: 'AppCard',
    props: { project: Object },
};
</script>

<template>
    <div class="card col-4 g-3">
        <img class="card-img-top" :src="project.image" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <router-link class="btn btn-success" :to="{ name: 'DetailPage', params: { id: project.id } }">view
                details!</router-link>
        </div>
    </div>
</template>