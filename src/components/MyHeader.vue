<template>
    <input type="text" v-model="store.search">
    <button @click="$emit('doSearch')">Cerca</button>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'MyHeader',
    data() {
        return {
            store
        }
    }
} 
</script>

<style scoped lang="scss"></style>