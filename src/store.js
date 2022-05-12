import { useStorage } from "@vueuse/core";
import { computed, reactive } from "vue";



export const globalState = useStorage('global_state',{
    accessToken: null
})

export const isAuth = computed(() =>{
    return globalState.value.accessToken != null
})