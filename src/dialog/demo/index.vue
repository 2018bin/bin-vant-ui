<template>
  <demo-block card :title="t('basicUsage')">
    <bin-button :text="t('alert1')" @click="onClickAlert" />
    <bin-button :text="t('alert2')" @click="onClickAlert2" />
    <bin-button :text="t('confirm')" @click="onClickConfirm" />
  </demo-block>

  <demo-block card :title="t('roundButton')">
    <bin-button :text="t('alert1')" @click="onClickRound" />
    <bin-button :text="t('alert2')" @click="onClickRound2" />
  </demo-block>

  <demo-block card :title="t('beforeClose')">
    <bin-button :text="t('beforeClose')" @click="onClickBeforeClose" />
  </demo-block>

  <demo-block card :title="t('componentCall')">
    <bin-button :text="t('componentCall')" @click="show = true" />
    <bin-dialog
      v-model="show"
      :title="t('title')"
      show-cancel-button
      :lazy-render="false"
      :closeOnClickOverlay="true"
    >
      <img :src="image" />
    </bin-dialog>
  </demo-block>
</template>

<script>
import { ref } from 'vue';
import Dialog from '..';

const i18n = {
  'zh-CN': {
    alert1: '提示弹窗',
    alert2: '提示弹窗（无标题）',
    confirm: '确认弹窗',
    beforeClose: '异步关闭',
    roundButton: '圆角按钮样式',
    componentCall: '组件调用',
    content: '代码是写出来给人看的，附带能在机器上运行',
  },
  'en-US': {
    alert1: 'Alert',
    alert2: 'Alert without title',
    confirm: 'Confirm dialog',
    beforeClose: 'Before Close',
    roundButton: 'Round Button Style',
    componentCall: 'Component Call',
  },
};

export default {
  setup() {
    const t = (text) => {
      return i18n['zh-CN'][text];
    };
    const show = ref(false);

    const onClickAlert = () => {
      Dialog.alert({
        title: t('title'),
        message: t('content'),
      });
    };

    const onClickAlert2 = () => {
      Dialog.alert({
        message: t('content'),
      });
    };

    const onClickRound = () => {
      Dialog.alert({
        theme: 'round-button',
        title: t('title'),
        message: t('content'),
      });
    };

    const onClickRound2 = () => {
      Dialog.alert({
        theme: 'round-button',
        message: t('content'),
      });
    };

    const onClickConfirm = () => {
      Dialog.confirm({
        title: t('title'),
        message: t('content'),
      });
    };

    const onClickBeforeClose = () => {
      const beforeClose = (action) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(action === 'confirm'), 1000);
        });

      Dialog.confirm({
        title: t('title'),
        message: t('content'),
        beforeClose,
      });
    };

    return {
      t,
      show,
      image: 'https://img01.yzcdn.cn/vant/apple-3.jpg',
      onClickAlert,
      onClickAlert2,
      onClickRound,
      onClickRound2,
      onClickConfirm,
      onClickBeforeClose,
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-dialog {
  img {
    box-sizing: border-box;
    width: 100%;
    padding: 25px 20px 0;
  }
}
</style>
