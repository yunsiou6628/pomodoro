<template lang="pug">
v-row#settings
  v-col(cols="12")
    h1.text-center 設定
  v-col(cols="12")
    v-table(style="background: #FFB74D")
      thead
        tr
          th(style="font-size: 18px;") 名稱
          th(style="font-size: 18px;") 試聽
          th(style="font-size: 18px;") 選擇
      tbody
        tr(v-for="alarm in alarms")
          td {{ alarm.name }}
          td
            audio(controls :src="alarm.file" class="mx-1 my-3")
          td
            v-radio(v-model="selectedAlarm" :value="alarm.id" color="red")
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { selectedAlarm, alarms } = storeToRefs(settings)
</script>
