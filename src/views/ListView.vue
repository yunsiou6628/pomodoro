<template lang="pug">
v-row#list
  v-col(cols='12')
    h1 待辦事項
  v-col(cols='12')
    v-text-field(
      variant="underlined"
      v-model="newItem"
      append-icon="mdi-plus"
      :rules="[required]"
      @click:append="onInputSubmit"
      @keydown.enter='onInputSubmit'
    )
    v-table(style="background: #FFB74D;")
      thead
        tr
          th(style="font-size: 18px;") 名稱
          th(style="font-size: 18px;") 操作
      tbody
        tr(v-if="items.length === 0")
          td.text-center(colspan="2") 沒有資料
        tr(v-for="(item, i) in items")
          td
            v-text-field(v-if="item.edit" v-model="item.model" autofocus)
            span(v-else) {{ item.name }}
          td
            span(v-if="item.edit")
              v-btn(icon variant="outlined" flat color="fff" size="small" class="mx-1" @click="confirmEditItem(i)")
                v-icon mdi-check
              v-btn(icon variant="outlined" flat color="fff" size="small" class="mx-1" @click="cancelEditItem(i)")
                v-icon mdi-undo
            span(v-else)
              v-btn(icon variant="outlined" flat color="#fff" size="small" class="mx-1 my-3" @click="editItem(i)")
                v-icon mdi-pencil
              v-btn(icon variant="outlined" flat color="fff" size="small" class="mx-1 my-3" @click="delItem(i)")
                v-icon mdi-delete
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'

const newItem = ref('')
const required = value => {
  return !!value
}

const list = useListStore()
const { items } = storeToRefs(list)
const { addItem, delItem, editItem, confirmEditItem, cancelEditItem } = list

const onInputSubmit = () => {
  const valid = required(newItem.value)
  if (!valid) return
  addItem(newItem.value)
  newItem.value = ''
}
</script>
