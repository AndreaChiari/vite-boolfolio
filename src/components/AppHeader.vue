<script>
export default {
  name: 'AppHeader'
};
</script>

<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link text-white" href="#">Boolfolio</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link text-white" href="#">Home</a>
        </li>
      </ul>
    </div>
  </nav>
</template>