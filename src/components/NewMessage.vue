<template>
<div class="fixed bottom-0 left-0 right-0 flex focus-within:ring-2 ring-lightBlue-500">
    <input v-model="newMessage" type="text" class="flex-grow text-2xl focus:outline-none" @change="send">
    <button class="bg-lightBlue-500 px-7 py-2 text-white text-3xl focus:outline-none" @click="send"><mdi:send/></button>
</div>
</template>

<script setup>
    import {ref} from 'vue'
    import {database} from '../helpers/useFirebase'

    const {sendMessage} = database()
    const newMessage = ref(null)
    const send = () => {
        if(newMessage.value?.length > 0){
            sendMessage(newMessage.value)
            newMessage.value = null 
        }
}

</script>