<template>
<div>
  <demo-block :title="t('basicUsage')">
    <bin-action-bar>
      <bin-action-bar-icon
        icon="chat-o"
        :text="t('icon1')"
        @click="onClickIcon"
      />
      <bin-action-bar-icon
        icon="cart-o"
        :text="t('icon2')"
        @click="onClickIcon"
      />
      <bin-action-bar-icon
        icon="shop-o"
        :text="t('icon3')"
        @click="onClickIcon"
      />
      <bin-action-bar-button
        type="danger"
        :text="t('button2')"
        @click="onClickButton"
      />
    </bin-action-bar>
  </demo-block>

  <demo-block :title="t('iconBadge')">
    <bin-action-bar>
      <bin-action-bar-icon icon="chat-o" dot :text="t('icon1')" />
      <bin-action-bar-icon icon="cart-o" badge="5" :text="t('icon2')" />
      <bin-action-bar-icon icon="shop-o" badge="12" :text="t('icon3')" />
      <bin-action-bar-button type="warning" :text="t('button1')" />
      <bin-action-bar-button type="danger" :text="t('button2')" />
    </bin-action-bar>
  </demo-block>

  <demo-block v-if="!isWeapp" :title="t('customIconColor')">
    <bin-action-bar>
      <bin-action-bar-icon icon="chat-o" :text="t('icon1')" color="#ee0a24" />
      <bin-action-bar-icon icon="cart-o" :text="t('icon2')" />
      <bin-action-bar-icon icon="star" :text="t('collected')" color="#ff5000" />
      <bin-action-bar-button type="warning" :text="t('button1')" />
      <bin-action-bar-button type="danger" :text="t('button2')" />
    </bin-action-bar>
  </demo-block>

  <demo-block :title="t('customButtonColor')">
    <bin-action-bar>
      <bin-action-bar-icon icon="chat-o" :text="t('icon1')" />
      <bin-action-bar-icon icon="cart-o" :text="t('icon2')" />
      <bin-action-bar-button
        color="#be99ff"
        type="warning"
        :text="t('button1')"
      />
      <bin-action-bar-button
        color="#7232dd"
        type="danger"
        :text="t('button2')"
      />
    </bin-action-bar>
  </demo-block>
</div>
</template>

<script lang="ts">

import Toast from '../../toast';
import actionBarButton from '../../action-bar-button';
const i18n = {
  'zh-CN': {
    icon1: '客服',
    icon2: '购物车',
    icon3: '店铺',
    button1: '加入购物车',
    button2: '立即购买',
    iconBadge: '徽标提示',
    collected: '已收藏',
    clickIcon: '点击图标',
    clickButton: '点击按钮',
    customIconColor: '自定义图标颜色',
    customButtonColor: '自定义按钮颜色',
  },
  'en-US': {
    icon1: 'Icon1',
    icon2: 'Icon2',
    icon3: 'Icon3',
    button1: 'Button',
    button2: 'Button',
    iconBadge: 'Icon Badge',
    collected: 'Collected',
    clickIcon: 'Click Icon',
    clickButton: 'Click Button',
    customIconColor: 'Custom Icon Color',
    customButtonColor: 'Custom Button Color',
  },
};

export default {
  compoment:{
    // "bin-action-bar-button":actionBarButton
  },
  setup() {
    const t = (text) => {
      return i18n['zh-CN'][text];
    };
    const onClickIcon = () => Toast(t('clickIcon'));
    const onClickButton = () => Toast(t('clickButton'));
    return {
      t,
      onClickIcon,
      onClickButton,
    };
  },
};
</script>

<style lang="less">
.demo-action-bar {
  .bin-action-bar {
    position: relative;
    padding-bottom: 0;
  }
}
</style>
