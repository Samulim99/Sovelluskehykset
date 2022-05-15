
<script setup>
import NavigationBar from '../navigation/NavigationBar.vue';

</script>

<template>
    <div>
        <NavigationBar></NavigationBar>
    </div>
    <div class="container center">
        <slot></slot>
    </div>
</template>

<style scoped>


.container {
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-color: rgb(226, 255, 169);
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    align-items: center;
    justify-content: center;
}

</style>   
