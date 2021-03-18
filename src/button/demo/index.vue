<template>
  <div>
    <demo-block :title="t('type')">
      <div class="demo-button-row">
        <bin-button type="primary">{{ t('primary') }}</bin-button>
        <bin-button type="success">{{ t('success') }}</bin-button>
        <bin-button type="default">{{ t('default') }}</bin-button>
      </div>
      <bin-button type="danger">{{ t('danger') }}</bin-button>
      <bin-button type="warning">{{ t('warning') }}</bin-button>
    </demo-block>

    <demo-block :title="t('plain')">
      <bin-button plain type="primary" :text="t('plain')" />
      <bin-button plain type="success" :text="t('plain')" />
    </demo-block>

    <demo-block :title="t('hairline')">
      <bin-button plain hairline type="primary" :text="t('hairlineButton')" />
      <bin-button plain hairline type="success" :text="t('hairlineButton')" />
    </demo-block>

    <demo-block :title="'disabled'">
      <bin-button disabled type="primary" :text="'disabled'" />
      <bin-button disabled type="success" :text="'disabled'" />
    </demo-block>

    <demo-block :title="'loadingStatus'">
      <bin-button loading type="primary" />
      <bin-button loading type="primary" loading-type="spinner" />
      <bin-button loading :loading-text="t('loadingText')" type="success" />
    </demo-block>

    <demo-block :title="t('shape')">
      <bin-button type="primary" square :text="t('square')" />
      <bin-button type="success" round :text="t('round')" />
    </demo-block>

    <demo-block :title="t('icon')">
      <bin-button type="primary" icon="plus" />
      <bin-button type="primary" icon="plus" :text="t('button')" />
      <bin-button
        plain
        type="primary"
        icon="https://img01.yzcdn.cn/vant/user-active.png"
        :text="t('button')"
      />
    </demo-block>

    <demo-block :title="t('size')">
      <bin-button type="primary" size="large">{{ t('large') }}</bin-button>
      <bin-button type="primary" size="normal">{{ t('normal') }}</bin-button>
      <bin-button type="primary" size="small">{{ t('small') }}</bin-button>
      <bin-button type="primary" size="mini">{{ t('mini') }}</bin-button>
    </demo-block>

    <demo-block :title="t('blockElement')">
      <bin-button type="primary" block>{{ t('blockElement') }}</bin-button>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('router')">
      <bin-button
        :text="t('urlRoute')"
        type="primary"
        url="/vant/mobile.html"
      />
      <bin-button :text="t('vueRoute')" type="primary" to="index" />
    </demo-block>

    <demo-block :title="t('customColor')">
      <bin-button color="#7232dd" :text="t('pure')" />
      <bin-button plain color="#7232dd" :text="t('pure')" />
      <bin-button
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        :text="t('gradient')"
      />
    </demo-block>
  </div>
</template>

<script lang="ts">


const i18n = {
  'zh-CN': {
    type: '按钮类型',
    size: '按钮尺寸',
    icon: '图标按钮',
    loading: '加载状态',
    shape: '按钮形状',
    default: '默认按钮',
    primary: '主要按钮',
    success: '成功按钮',
    danger: '危险按钮',
    warning: '警告按钮',
    large: '大号按钮',
    normal: '普通按钮',
    small: '小型按钮',
    mini: '迷你按钮',
    plain: '朴素按钮',
    square: '方形按钮',
    round: '圆形按钮',
    hairline: '细边框',
    hairlineButton: '细边框按钮',
    loadingText: '加载中...',
    router: '页面导航',
    urlRoute: 'URL 跳转',
    vueRoute: '路由跳转',
    customColor: '自定义颜色',
    pure: '单色按钮',
    gradient: '渐变色按钮',
    blockElement: '块级元素',
  },
  'en-US': {
    type: 'Type',
    size: 'Size',
    icon: 'Icon',
    loading: 'Loading',
    shape: 'Shape',
    default: 'Default',
    primary: 'Primary',
    success: 'Success',
    danger: 'Danger',
    warning: 'Warning',
    large: 'Large',
    normal: 'Normal',
    small: 'Small',
    mini: 'Mini',
    plain: 'Plain',
    square: 'Square',
    round: 'Round',
    hairline: 'Hairline',
    hairlineButton: 'Hairline',
    loadingText: 'Loading...',
    router: 'Router',
    urlRoute: 'URL',
    vueRoute: 'Vue Router',
    customColor: 'Custom Color',
    pure: 'Pure',
    gradient: 'Gradient',
    blockElement: 'Block Element',
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

.demo-button {
  background: @white;

  .bin-button {
    &--large {
      margin-bottom: @padding-md;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: @padding-md;
    }
  }

  .bin-doc-demo-block {
    padding: 0 @padding-md;
  }

  .bin-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: @padding-sm;
  }
}
</style>
