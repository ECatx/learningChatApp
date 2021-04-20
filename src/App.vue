<template>
  <Navbar/>
  <Messages v-if="isAuthenticated"/>
  <NotSignedIn v-else/>
</template>

<script setup>
import{authentication} from './helpers/useFirebase'
const {isAuthenticated} = authentication()
</script>
