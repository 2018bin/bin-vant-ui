<template>
<div>
  <demo-block card :title="t('basicUsage')">
    <bin-button :text="t('title1')" @click="$toast(t('text'))" />
    <bin-button :text="t('title2')" @click="showLoadingToast()" />
    <bin-button :text="t('success')" @click="showSuccessToast" />
    <bin-button :text="t('fail')" @click="showFailToast" />
  </demo-block>

  <demo-block card v-if="!isWeapp" :title="t('customIcon')">
    <bin-button :text="t('customIcon')" @click="showIconToast" />
    <bin-button :text="t('customImage')" @click="showImageToast" />
    <bin-button :text="t('loadingType')"
      @click="showLoadingToast('spinner')"
    />
  </demo-block>

  <demo-block card v-if="!isWeapp" :title="t('customPosition')">
    <bin-button :text="t('positionTop')" @click="showTopToast" />
    <bin-button :text="t('positionBottom')" @click="showBottomToast" />
  </demo-block>

  <demo-block card :title="t('updateMessage')">
    <bin-button :text="t('updateMessage')"
      @click="showCustomizedToast"
    />
  </demo-block></div>
</template>

<script>
 
import Toast from '..';

const i18n = {
  'zh-CN': {
    fail: '失败提示',
    text: '提示内容',
    text2: '成功文案',
    text3: '失败文案',
    text4: (second) => `倒计时 ${second} 秒`,
    title1: '文字提示',
    title2: '加载提示',
    title3: '成功/失败提示',
    success: '成功提示',
    customIcon: '自定义图标',
    customImage: '自定义图片',
    loadingType: '自定义加载图标',
    positionTop: '顶部展示',
    updateMessage: '动态更新提示',
    positionBottom: '底部展示',
    customPosition: '自定义位置',
  },
};

export default {
  setup() {
   const t = (text) => {
      return i18n['zh-CN'][text];
    };

    const showLoadingToast = (loadingType) => {
      Toast.loading({
        forbidClick: true,
        message: t('loading'),
        loadingType,
      });
    };

    const showSuccessToast = () => {
      Toast.success(t('text2'));
    };

    const showFailToast = () => {
      Toast.fail(t('text3'));
    };

    const showTopToast = () => {
      Toast({
        message: t('positionTop'),
        position: 'top',
      });
    };

    const showBottomToast = () => {
      Toast({
        message: t('positionBottom'),
        position: 'bottom',
      });
    };

    const showIconToast = () => {
      Toast({
        message: t('customIcon'),
        icon: 'like-o',
      });
    };

    const showImageToast = () => {
      Toast({
        message: t('customImage'),
        icon: 'https://img01.yzcdn.cn/vant/logo.png',
      });
    };

    const showCustomizedToast = () => {
      const toast = Toast.loading({
        duration: 0,
        forbidClick: true,
        message: 3,
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
      
          toast.message = second;
        } else {
          clearInterval(timer);
          Toast.clear();
        }
      }, 1000);
    };

    return {
      t,
      showTopToast,
      showFailToast,
      showIconToast,
      showImageToast,
      showBottomToast,
      showLoadingToast,
      showSuccessToast,
      showCustomizedToast,
    };
  },
};
</script>
