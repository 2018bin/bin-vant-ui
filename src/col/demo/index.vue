<template>
  <demo-block :title="t('basicUsage')">
    <bin-row>
      <bin-col span="8">span: 8</bin-col>
      <bin-col span="8">span: 8</bin-col>
      <bin-col span="8">span: 8</bin-col>
    </bin-row>

    <bin-row>
      <bin-col span="4">span: 4</bin-col>
      <bin-col span="10" offset="4"> offset: 4, span: 10 </bin-col>
    </bin-row>

    <bin-row>
      <bin-col offset="12" span="12"> offset: 12, span: 12 </bin-col>
    </bin-row>
  </demo-block>

  <demo-block :title="t('title2')">
    <bin-row gutter="20">
      <bin-col span="8">span: 8</bin-col>
      <bin-col span="8">span: 8</bin-col>
      <bin-col span="8">span: 8</bin-col>
    </bin-row>
  </demo-block>

  <demo-block v-if="!isWeapp" :title="t('justify')">
    <bin-row justify="center">
      <bin-col span="6">span: 6</bin-col>
      <bin-col span="6">span: 6</bin-col>
      <bin-col span="6">span: 6</bin-col>
    </bin-row>

    <bin-row justify="end">
      <bin-col span="6">span: 6</bin-col>
      <bin-col span="6">span: 6</bin-col>
      <bin-col span="6">span: 6</bin-col>
    </bin-row>

    <bin-row justify="space-between">
      <bin-col span="6">span: 6</bin-col>
      <bin-col span="6">span: 6</bin-col>
      <bin-col span="6">span: 6</bin-col>
    </bin-row>

    <bin-row justify="space-around">
      <bin-col span="6">span: 6</bin-col>
      <bin-col span="6">span: 6</bin-col>
      <bin-col span="6">span: 6</bin-col>
    </bin-row>
  </demo-block>
</template>

<script lang="ts">
const i18n = {
  'zh-CN': {
    title2: '在列元素之间增加间距',
    justify: '对齐方式',
  },
  'en-US': {
    title2: 'Column Spacing',
    justify: 'Justify Content',
  },
};

export default {
  setup() {
    const t = (text) => {
      return i18n['zh-CN'][text];
    };
    return { t };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-col {
  background: @white;

  .bin-doc-demo-block {
    padding: 0 @padding-md;
  }

  .bin-doc-demo-block__title {
    padding-left: 0;
  }

  .bin-col {
    margin-bottom: 10px;
    color: @white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
