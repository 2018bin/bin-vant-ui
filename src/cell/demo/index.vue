<template>
  <demo-block :title="t('basicUsage')">
    <bin-cell-group>
      <bin-cell :title="t('cell')" :value="t('content')" />
      <bin-cell :title="t('cell')" :value="t('content')" :label="t('desc')" />
    </bin-cell-group>
  </demo-block>

  <demo-block :title="t('largeSize')">
    <bin-cell :title="t('cell')" :value="t('content')" size="large" />
    <bin-cell
      :title="t('cell')"
      :value="t('content')"
      size="large"
      :label="t('desc')"
    />
  </demo-block>

  <demo-block :title="t('showIcon')">
    <bin-cell :title="t('cell')" :value="t('content')" icon="location-o" />
  </demo-block>

  <demo-block v-if="!isWeapp" :title="t('valueOnly')">
    <bin-cell :value="t('content')" />
  </demo-block>

  <demo-block :title="t('showArrow')">
    <bin-cell :title="t('cell')" is-link />
    <bin-cell :title="t('cell')" is-link :value="t('content')" />
    <bin-cell
      :title="t('cell')"
      is-link
      arrow-direction="down"
      :value="t('content')"
    />
  </demo-block>

  <demo-block :title="t('router')">
    <bin-cell :title="t('urlRoute')" is-link url="/bint/mobile.html" />
    <bin-cell :title="t('vueRoute')" is-link to="index" />
  </demo-block>

  <demo-block :title="t('groupTitle')">
    <bin-cell-group :title="`${t('group')} 1`">
      <bin-cell :title="t('cell')" :value="t('content')" />
    </bin-cell-group>
    <bin-cell-group :title="`${t('group')} 2`">
      <bin-cell :title="t('cell')" :value="t('content')" />
    </bin-cell-group>
  </demo-block>

  <demo-block :title="t('useSlots')">
    <bin-cell :value="t('content')" is-link>
      <template #title>
        <span class="custom-title">{{ t('cell') }}</span>
        <bin-tag type="danger">{{ t('tag') }}</bin-tag>
      </template>
    </bin-cell>

    <bin-cell icon="shop-o" :title="t('cell')">
      <template #right-icon>
        <bin-icon name="search" class="search-icon" />
      </template>
    </bin-cell>
  </demo-block>

  <demo-block :title="t('verticalCenter')">
    <bin-cell
      center
      :title="t('cell')"
      :value="t('content')"
      :label="t('desc')"
    />
  </demo-block>
</template>

<script lang="ts">
 

const i18n = {
  'zh-CN': {
    cell: '单元格',
    valueOnly: '只设置 value',
    showIcon: '展示图标',
    showArrow: '展示箭头',
    largeSize: '单元格大小',
    group: '分组',
    groupTitle: '分组标题',
    router: '页面导航',
    urlRoute: 'URL 跳转',
    vueRoute: '路由跳转',
    useSlots: '使用插槽',
    verticalCenter: '垂直居中',
  },
  'en-US': {
    cell: 'Cell title',
    valueOnly: 'Value only',
    showIcon: 'Left Icon',
    showArrow: 'Link',
    largeSize: 'Size',
    group: 'Group',
    groupTitle: 'Group Title',
    router: 'Router',
    urlRoute: 'URL',
    vueRoute: 'Vue Router',
    useSlots: 'Use Slots',
    verticalCenter: 'Vertical center',
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
.demo-cell {
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
}
</style>
