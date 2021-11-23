<template>
    <div class="error">
        <h3>An error occurred :(</h3>
        <button @click="$fetch">Try Again</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .error{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

    }
</style>