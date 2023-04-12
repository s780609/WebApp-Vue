<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <div :key="item" v-for="(item) in jsonResult">
        {{item}}
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
    import { ref, onMounted } from 'vue'
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        setup() {
            const jsonResult = ref([])
            const test = async () => {
                const response = await fetch("/api")
                jsonResult.value = await response.json();
            }

            onMounted(() => {
                test()
            })

            return {
                jsonResult,
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
