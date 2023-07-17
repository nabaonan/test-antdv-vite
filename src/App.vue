<!--
 * @Author: nbn
 * @Date: 2023-07-17 21:51:06
 * @LastEditors: nbn
 * @LastEditTime: 2023-07-17 23:22:48
 * @FilePath: /test-antdv-vite/src/App.vue
 * @Description: 
-->
<template>
  <a-space>
    <!-- <a-button @click="success">Success</a-button>
    <a-button @click="error">Error</a-button>
    <a-button @click="warning">Warning</a-button> -->



  </a-space>
  <a-float-button-group trigger="click" type="primary" :style="{ right: '24px' }">
    <template #icon>
      <CustomerServiceOutlined />
    </template>
    <a-float-button />
    <a-float-button>
      <template #icon>
        <CommentOutlined />
      </template>
    </a-float-button>
  </a-float-button-group>
  <a-float-button-group trigger="hover" type="primary">
    <template #icon>
      <CustomerServiceOutlined />
    </template>
    <a-float-button />
    <a-float-button>
      <template #icon>
        <CommentOutlined />
      </template>
    </a-float-button>
  </a-float-button-group>

  <a-watermark content="Ant Design Vue">
    <div style="height: 500px" />
  </a-watermark>

  <a-segmented v-model:value="value" :options="data" size="large" />
  <br />
  <br />
  <a-segmented v-model:value="value2" :options="data" />
  <br />
  <br />
  <a-segmented v-model:value="value3" :options="data" size="small" />
  <a-qrcode error-level="H" value="https://www.antdv.com" icon="https://www.antdv.com/assets/logo.1ef800a8.svg" />

  <a-space>
    <a-button ref="ref1">Upload</a-button>
    <a-button ref="ref2" type="primary">Save</a-button>
    <a-button ref="ref3">
      <EllipsisOutlined />
    </a-button>
  </a-space>

  <a-tag>Tag 1</a-tag>


  <a-tour v-model:current="current" :open="open" :steps="steps" @close="handleOpen(false)" />
  <a-button type="primary" @click="handleOpen(true)">Begin Tour</a-button>

  <a-watermark v-bind="model">
    <a-typography>
      <a-typography-paragraph>
        The light-speed iteration of the digital world makes products more complex. However, human
        consciousness and attention resources are limited. Facing this design contradiction, the
        pursuit of natural interaction will be the consistent direction of Ant Design.
      </a-typography-paragraph>
      <a-typography-paragraph>
        Natural user cognition: According to cognitive psychology, about 80% of external
        information is obtained through visual channels. The most important visual elements in the
        interface design, including layout, colors, illustrations, icons, etc., should fully
        absorb the laws of nature, thereby reducing the user&apos;s cognitive cost and bringing
        authentic and smooth feelings. In some scenarios, opportunely adding other sensory
        channels such as hearing, touch can create a richer and more natural product experience.
      </a-typography-paragraph>
      <a-typography-paragraph>
        Natural user behavior: In the interaction with the system, the designer should fully
        understand the relationship between users, system roles, and task objectives, and also
        contextually organize system functions and services. At the same time, a series of methods
        such as behavior analysis, artificial intelligence and sensors could be applied to assist
        users to make effective decisions and reduce extra operations of users, to save
        users&apos; mental and physical resources and make human-computer interaction more
        natural.
      </a-typography-paragraph>
    </a-typography>
    <img style="z-index: 10; width: 100%; max-width: 800px; position: relative"
      src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ" alt="示例图片" />
  </a-watermark>
  <a-watermark :height="30" :width="130"
    image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original">
    <div style="height: 500px" />
  </a-watermark>
  <a-tooltip placement="topLeft">
    <template #title>
      <span>prompt text</span>
    </template>
    <a-button>TL</a-button>
  </a-tooltip>

  <a-popover :overlay-inner-style="{ padding: 0 }">
    <template #content>
      <a-qrcode value="http://www.antdv.com" :bordered="false" />
    </template>
    <img width="100" height="100" src="https://aliyuncdn.antdv.com/logo.png" />
  </a-popover>
</template>
<script lang="ts" setup>
import { message } from 'ant-design-vue';
import { defineComponent, createVNode } from 'vue';


import { ref, reactive } from 'vue';
const data = reactive(['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']);
const value = ref(data[0]);
const value2 = ref(data[0]);
const value3 = ref(data[0]);
const current = ref(0);

const open = ref<boolean>(false);

const ref1 = ref(null);
const ref2 = ref(null);
const ref3 = ref(null);

const steps: TourProps['steps'] = [
  {
    title: 'Upload File',
    description: 'Put your files here.',
    cover: createVNode('img', {
      alt: 'tour.png',
      src: 'https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png',
    }),
    target: () => ref1.value && ref1.value.$el,
  },
  {
    title: 'Save',
    description: 'Save your changes.',
    target: () => ref2.value && ref2.value.$el,
  },
  {
    title: 'Other Actions',
    description: 'Click to see other actions.',
    target: () => ref3.value && ref3.value.$el,
  },
];


const handleOpen = (val: boolean): void => {
  open.value = val;
};
const text = ref('https://www.antdv.com/');

</script>

