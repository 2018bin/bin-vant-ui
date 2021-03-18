<template>
  <demo-block :title="t('basicUsage')">
    <bin-row>
      <bin-image width="100" height="100" :src="image" />
    </bin-row>
  </demo-block>

  <demo-block :title="t('fitMode')">
    <bin-row gutter="20">
      <bin-col v-for="fit in fits" span="8" :key="fit">
        <bin-image :fit="fit" width="100%" height="27vw" :src="image" />
        <div class="text">{{ fit }}</div>
      </bin-col>
    </bin-row>
  </demo-block>

  <demo-block :title="t('round')">
    <bin-row gutter="20">
      <bin-col v-for="fit in fits" span="8" :key="fit">
        <bin-image round :fit="fit" width="100%" height="27vw" :src="image" />
        <div class="text">{{ fit }}</div>
      </bin-col>
    </bin-row>
  </demo-block>

  <demo-block :title="t('loading')">
    <bin-row gutter="20">
      <bin-col span="8">
        <bin-image width="100%" height="27vw" />
        <div class="text">{{ t('defaultTip') }}</div>
      </bin-col>

      <bin-col span="8">
        <bin-image width="100%" height="27vw">
          <template #loading>
            <bin-loading type="spinner" size="20" />
          </template>
        </bin-image>
        <div class="text">{{ t('customTip') }}</div>
      </bin-col>
    </bin-row>
  </demo-block>

  <demo-block :title="t('error')">
    <bin-row gutter="20">
      <bin-col span="8">
        <bin-image width="100%" height="27vw" src="x" />
        <div class="text">{{ t('defaultTip') }}</div>
      </bin-col>

      <bin-col span="8">
        <bin-image width="100%" height="27vw" src="x">
          <template #error>{{ t('loadFail') }}</template>
        </bin-image>
        <div class="text">{{ t('customTip') }}</div>
      </bin-col>
    </bin-row>
  </demo-block>
</template>

<script lang="ts">
const i18n = {
  'zh-CN': {
    fitMode: '填充模式',
    round: '圆形图片',
    loading: '加载中提示',
    error: '加载失败提示',
    defaultTip: '默认提示',
    customTip: '自定义提示',
    loadFail: '加载失败',
  },
  'en-US': {
    fitMode: 'Fit Mode',
    round: 'Round',
    loading: 'Loading',
    error: 'Error',
    defaultTip: 'Default Tip',
    customTip: 'Custom Tip',
    loadFail: 'Load failed',
  },
};

export default {
  setup() {
    const t = (text) => {
      return i18n['zh-CN'][text];
    };

    return {
      t,
      image: 'https://img01.yzcdn.cn/vant/cat.jpeg',
      fits: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-image {
  overflow-x: hidden;
  background-color: @white;

  .bin-row {
    padding: 0 @padding-md;
  }

  .bin-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: @gray-7;
    font-size: 14px;
    text-align: center;
  }
}
</style>
