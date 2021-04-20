<template>
    <div class="bg-blue-900 text-gray-300 py-4 shadow-xl">
        <div class="container mx-auto flex justify-between items-center">
            <div class="brand flex space-x-3 text-2xl ">
                <mdi:cat/>
                <h1 class="text-2xl font-light">Cat<span class="font-semibold text-yellow-400">Chat</span></h1>
            </div>
            <div class="menu">
                <div v-if="!isAuthenticated">
                    <button class="bg-purple-900 text-white py-2 px-2 rounded-full shadow-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-purple-400" @click="googlePopUp">Sign In</button>
                </div>
                <div v-else class="flex items-center space-x-5">
                    <p>{{user?.displayName}}</p>
                   <button @click="signOut" class="bg-rose-800 text-white py-2 px-2 rounded-full shadow-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400" >Sign Out</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {authentication} from '../helpers/useFirebase'
    const {isAuthenticated, user, googlePopUp, signOut} = authentication() 
</script>