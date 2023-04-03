<template>
    <input type="text" v-model="store.search" @keyup.enter="$emit('doSearch')">
    <button @click="$emit('doSearch')">Cerca</button>
</template>

<script>

import { store } from '../store.js';
export default {
    name: 'MyHeader',
    emits: ['doSearch'],
    data() {
        return {
            store
        }
    }
} 
</script>

<style scoped lang="scss"></style>