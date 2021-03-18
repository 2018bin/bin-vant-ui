<template>
<div>
  <demo-block card :title="t('basicUsage')">
    <bin-button :text="t('buttonBasic')" is-link @click="showBasic = true" />
    <bin-popup v-model="showBasic" :style="{ padding: '30px 50px' }">
      {{ t('content') }}
    </bin-popup>
  </demo-block>

  <demo-block card :title="t('position')">
    <bin-button :text="t('buttonTop')" is-link @click="showTop = true" />
    <bin-button :text="t('buttonBottom')" is-link @click="showBottom = true" />
    <bin-button :text="t('buttonLeft')" is-link @click="showLeft = true" />
    <bin-button :text="t('buttonRight')" is-link @click="showRight = true" />

    <bin-popup
      v-model="showTop"
      position="top"
      :style="{ height: '30%' }"
    />
    <bin-popup
      v-model="showBottom"
      position="bottom"
      :style="{ height: '30%' }"
    />
    <bin-popup
      v-model="showLeft"
      position="left"
      :style="{ width: '30%', height: '100%' }"
    />
    <bin-popup
      v-model="showRight"
      position="right"
      :style="{ width: '30%', height: '100%' }"
    />
  </demo-block>

  <demo-block card :title="t('closeIcon')">
    <bin-button :text="t('closeIcon')" is-link @click="showCloseIcon = true" />
    <bin-button :text="t('customCloseIcon')"
      is-link
      @click="showCustomCloseIcon = true"
    />
    <bin-button :text="t('customIconPosition')"
      is-link
      @click="showCustomIconPosition = true"
    />

    <bin-popup
      v-model="showCloseIcon"
      closeable
      position="bottom"
      :style="{ height: '30%' }"
    />
    <bin-popup
      v-model="showCustomCloseIcon"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '30%' }"
    />
    <bin-popup
      v-model="showCustomIconPosition"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '30%' }"
    />
  </demo-block>

  <demo-block card :title="t('roundCorner')">
    <bin-button :text="t('roundCorner')"
      is-link
      @click="showRoundCorner = true"
    />
    <bin-popup
      v-model="showRoundCorner"
      round
      position="bottom"
      :style="{ height: '30%' }"
    />
  </demo-block>

  <demo-block card v-if="!isWeapp" :title="t('teleport')">
    <bin-button :text="t('teleport')" is-link @click="showGetContainer = true" />
    <bin-popup
      v-model="showGetContainer"
      teleport="body"
      :style="{ padding: '30px 50px' }"
    />
  </demo-block>
</div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
 
const i18n = {
  'zh-CN': {
    position: '弹出位置',
    buttonBasic: '展示弹出层',
    buttonTop: '顶部弹出',
    buttonBottom: '底部弹出',
    buttonLeft: '左侧弹出',
    buttonRight: '右侧弹出',
    teleport: '指定挂载节点',
    roundCorner: '圆角弹窗',
    closeIcon: '关闭图标',
    customCloseIcon: '自定义图标',
    customIconPosition: '图标位置',
  },
  'en-US': {
    position: 'Position',
    buttonBasic: 'Show Popup',
    buttonTop: 'From Top',
    buttonBottom: 'From Bottom',
    buttonLeft: 'From Left',
    buttonRight: 'From Right',
    teleport: 'Get Container',
    roundCorner: 'Round Corner',
    closeIcon: 'Close Icon',
    customCloseIcon: 'Custom Icon',
    customIconPosition: 'Icon Position',
  },
};

export default {
  setup() {
    const t = (text) => {
      return i18n['zh-CN'][text];
    };
    const state = reactive({
      showBasic: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showCloseIcon: false,
      showRoundCorner: false,
      showGetContainer: false,
      showCustomCloseIcon: false,
      showCustomIconPosition: false,
    });

    return {
      ...toRefs(state),
      t,
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-popup {
  .bin-row {
    margin-bottom: @padding-md;
  }

  .bin-button {
    margin-left: @padding-md;
  }
}
</style>
