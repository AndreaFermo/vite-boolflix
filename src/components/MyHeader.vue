<template>
    <div class="header">
        <div class="header-container">
            <h1>BoolFlix</h1>
            <div class="header-right">
                <input type="text" v-model="store.search" @keyup.enter="$emit('doSearch')" placeholder="Cerca...">
                <button @click="$emit('doSearch')">Cerca</button>
            </div>

        </div>
    </div>
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

<style scoped lang="scss">
.header {
    background-color: black;
    max-width: 100%;

    .header-container {
        max-width: 1100px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        padding: 0px 10px;

        h1 {
            color: red;
        }

        .header-right {
            input {
                padding: 4px;
                border: none;
                border-radius: 5px;
            }

            button {
                padding: 5px 10px;
                background-color: red;
                font-weight: bold;
                border: none;
                border-radius: 5px;
                margin-left: 15px;

            }
        }

    }
}
</style>