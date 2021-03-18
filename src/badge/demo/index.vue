<template>
<div>
  <demo-block :title="t('basicUsage')">
    <bin-badge content="5">
      <div class="child" />
    </bin-badge>
    <bin-badge content="10">
      <div class="child" />
    </bin-badge>
    <bin-badge content="Hot">
      <div class="child" />
    </bin-badge>
    <bin-badge dot>
      <div class="child" />
    </bin-badge>
  </demo-block>

  <demo-block :title="t('max')">
    <bin-badge content="20" max="9">
      <div class="child" />
    </bin-badge>
    <bin-badge content="50" max="20">
      <div class="child" />
    </bin-badge>
    <bin-badge content="200" max="99">
      <div class="child" />
    </bin-badge>
  </demo-block>

  <demo-block :title="t('customColor')">
    <bin-badge content="5" color="#1989fa">
      <div class="child" />
    </bin-badge>
    <bin-badge content="10" color="#1989fa">
      <div class="child" />
    </bin-badge>
    <bin-badge dot color="#1989fa">
      <div class="child" />
    </bin-badge>
  </demo-block>

  <demo-block :title="t('customContent')">
    <bin-badge>
      <div class="child" />
      <template #content>
        <bin-icon name="success" class="badge-icon" />
      </template>
    </bin-badge>
    <bin-badge>
      <div class="child" />
      <template #content>
        <bin-icon name="cross" class="badge-icon" />
      </template>
    </bin-badge>
    <bin-badge>
      <div class="child" />
      <template #content>
        <bin-icon name="down" class="badge-icon" />
      </template>
    </bin-badge>
  </demo-block>

  <demo-block :title="t('standalone')">
    <bin-badge content="20" style="margin-left: 16px" />
    <bin-badge content="200" max="99" style="margin-left: 16px" />
  </demo-block>
</div>
</template>

<script lang="ts">
 

const i18n = {
  'zh-CN': {
    max: '最大值',
    standalone: '独立展示',
    customColor: '自定义颜色',
    customContent: '自定义徽标内容',
  },
  'en-US': {
    max: 'Max',
    standalone: 'Standalone',
    customColor: 'Custom Color',
    customContent: 'Custom Content',
  },
};

export default {
  setup() {
   const t=(text)=>{
       return i18n['zh-CN'][text]
    }
    return { t };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-badge {
  background-color: @white;

  .bin-badge__wrapper {
    margin-left: @padding-md;
  }

  .child {
    width: 40px;
    height: 40px;
    background: @gray-2;
    border-radius: 4px;
  }

  .badge-icon {
    display: block;
    margin-left: 0;
    font-size: 10px;
    line-height: 16px;
  }
}
</style>
