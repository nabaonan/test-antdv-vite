<!--
 * @Author: nabaonan
 * @Date: 2023-08-14 15:38:56
 * @LastEditors: nabaonan
 * @LastEditTime: 2023-11-21 11:00:11
 * @FilePath: /test-antdv-vite/src/App.vue
 * @Description: 
-->
<template>
    <a-app>

      <a-flex gap="middle" vertical>
        <a-radio-group v-model:value="value">
          <a-radio value="horizontal">horizontal</a-radio>
          <a-radio value="vertical">vertical</a-radio>
        </a-radio-group>
        <a-flex :vertical="value === 'vertical'">
          <div
            v-for="(item, index) in new Array(4)"
            :key="item"
            :style="{ ...baseStyle, background: `${index % 2 ? '#1677ff' : '#1677ffbf'}` }"
          />
        </a-flex>
      </a-flex>
    </a-app>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { CSSProperties } from 'vue';
const value = ref('horizontal');
const baseStyle: CSSProperties = {
  width: '25%',
  height: '54px',
};
</script>

