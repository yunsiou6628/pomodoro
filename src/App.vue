<template lang="pug">
v-app(style="background: #FFAB40;")
  v-app-bar(color="#00695C")
    v-app-bar-title 番茄鐘
    v-spacer
    v-btn(icon to='/')
      v-icon mdi-timer
    v-btn(icon to='/list')
      v-icon mdi-format-list-bulleted
    v-btn(icon to='/settings')
      v-icon mdi-cog
    v-btn(icon v-if="notify" @click="toggleNotify")
      v-icon mdi-bell
    v-btn(icon v-else @click="toggleNotify")
      v-icon mdi-bell-off
  v-main
    v-container(style="width: 100%; height: 100%; position: absolute; top:0; left: 0; overflow:hidden; margin: 0; padding: 0; max-width: unset; opacity: 15%;")
      img(src='https://i.imgur.com/qW4XfOU.png' style="position: absolute; top: -10%; left: -5%; height: 50%; transform: rotate(25deg);")
      img(src='https://i.imgur.com/qW4XfOU.png' style="position: absolute; top: 0%; left: 55%; height: 18%; transform: rotate(10deg);")
      img(src='https://i.imgur.com/qW4XfOU.png' style="position: absolute; top: 25%; right: -5%; height: 85%; transform: rotate(-25deg);")
      img(src='https://i.imgur.com/qW4XfOU.png' style="position: absolute; top: 75%; left: 20%; height: 35%; transform: rotate(-30eg);")
    v-container
      router-view(v-slot="{ Component }")
        keep-alive(include="HomeView")
          component(:is="Component")
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'
const list = useListStore()
const { notify } = storeToRefs(list)
const { toggleNotify } = list
</script>
