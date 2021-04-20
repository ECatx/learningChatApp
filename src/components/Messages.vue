<template>
    <div class="mt-24">
        <Message v-for="(n , index) in messages" :key="index" :message="n"/>
        <div ref="bottom" class="pb-16" />
    </div>
    <NewMessage/>
</template>

<script setup>
    import {database} from '../helpers/useFirebase'
    const {messages} = database() 
</script>