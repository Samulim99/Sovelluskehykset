<script setup>
import { provide, ref } from 'vue';
import { RouterLink } from 'vue-router'
import { setError } from '../../composables/notification';
import { authService } from '../../services/authService';
import { isAuth } from '../../store';
import LoginView from '../login/LoginView.vue';


const showLoginView = ref(false)

provide('showLoginView', showLoginView)

const logout = async ()=>{
    await authService.useLogout()
}


</script>

<template>
    <div class="nav">
        <router-link to="/">Koti</router-link>
        <router-link to="/create">Uusi postaus</router-link>
        <router-link v-if="isAuth" to="/users">Käyttäjät</router-link>
        <router-link to="/register">Rekisteröidy</router-link>
        <a href="#" v-if ="isAuth" @click="logout">Ulos</a>
        <a href="#" v-else @click.prevent="showLoginView = true">Kirjaudu</a>

        <a href="" @click.prevent="setError('Testi virhe')">Testaa ilmoitus</a>

    </div>

    <LoginView v-if="showLoginView && !isAuth"></LoginView>
</template>

<style>
.nav {
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: aquamarine;
    width: 100%;
    top: 0px;
}

a {
    margin: 20px;
    font-size: 18px;
    color: black;
}
</style>