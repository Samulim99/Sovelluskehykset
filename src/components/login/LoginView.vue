<script setup>
import { onClickOutside } from '@vueuse/core';
import { inject, reactive, ref } from 'vue';
import { authService } from '../../services/authService';

const showLoginView = inject('showLoginView')

const credentials = reactive({
    username: '',
    password: ''
})

const target = ref(null)


onClickOutside(target, () => {
    showLoginView.value = false
})

const login = async ()=>{
    await authService.useLogin(credentials)

    credentials.username = ''
    credentials.password = ''
}


</script>

<template>
    <div class="overlay">
 

            <form @submit.prevent = "login" ref="target" class="login">

                <label>Käyttäjänimi</label>
                <input v-model="credentials.username" type="text">
            
            
                <label>Salasana</label>
                <input v-model="credentials.password" type="password">

                <button type="submit">Kirjaudu</button>
            
            </form>


      
    </div>
</template>

<style>
.login {
    width: 250px;
    background-color: aquamarine;
    position: fixed;
    left: 50%;
    top: 50%;
    display: flex;
    flex-direction: column;
    transform: translateX(-50%) translateY(-50%);
    padding: 20px;
}

input {
    margin-bottom: 10px;
    flex: 6;
    /* width: 80%; */
}

button{
    margin-top: 6px;
    font-family: 'Times New Roman', Times, serif;
    background-color: aqua;
}

/* .overlay {
    position: fixed;
    display: flex;
    width: 100%;
    justify-content: center;
    align-content: flex-start;
    top: 30%;
} */
</style>