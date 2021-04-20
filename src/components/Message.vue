<template>
    <div class="container mx-auto flex bg-blue-900 my-3 rounded-full" :class="isUser ? 'bg-orange-700' : 'bg-blue-800'">
        <div>
           <img class="rounded-full" :src="message.userPhotoURL" :alt="`Avatar of ${message.userName}`"/> 
        </div>
        <div class="flex flex-grow">
            <div class="flex flex-grow mx-5 justify-between items-center text-lightBlue-100 text-2xl">
                <p>{{message.text}}</p> 
                <p class="font-light text-xs">{{message.userName}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {defineProps, computed,ref} from 'vue'
    import {authentication} from '../helpers/useFirebase'
    
    const {user} = authentication()

    const isUser = computed(() => user.value.uid === props.message.userId)
    const props = defineProps({
        message: {
            type: Object,
            default: () => ({
                userName: '',
                userId: '',
                userPhotoURL: '',
                text: '',
                createdAt: '',
            }),
        },
    })
</script>