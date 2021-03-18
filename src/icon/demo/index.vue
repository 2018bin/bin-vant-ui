<template>
  <div>
      <demo-block :title="t('basicUsage')">
       
<bin-icon name="cart-o" color="#1989fa" />
        
            <!-- <bin-icon :name="demoImage" /> -->
 
      </demo-block>

  
   

  </div>
</template>

<script>
import icons from '@vant/icons';
import { ref } from 'vue';

import { RED } from '../../utils/constant';


// from https://30secondsofcode.org
function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}

const i18n = {
  'zh-CN': {
    title: '图标列表',
    badge: '徽标提示',
    basic: '基础图标',
    copied: '复制成功',
    outline: '线框风格',
    filled: '实底风格',
    demo: '用法示例',
    color: '图标颜色',
    size: '图标大小',
  },
  'en-US': {
    title: 'Icon List',
    badge: 'Show Badge',
    basic: 'Basic',
    copied: 'Copied',
    outline: 'Outline',
    filled: 'Filled',
    demo: 'Demo',
    color: 'Icon Color',
    size: 'Icon Size',
  },
};

export default {
  setup() {
 const t = (text) => {
      return i18n['zh-CN'][text];
    };
 

    return {
      t,
       
      icons,
      demoIcon: 'chat-o',
      demoImage: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-icon {
  font-size: 0;

  &-list {
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
    padding-top: 10px;
  }

  &-notify {
    font-size: 13px;
  }

  .bin-col {
    display: inline-block;
    float: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    span {
      display: block;
      height: 36px;
      margin: -4px 0 4px;
      padding: 0 5px;
      color: @gray-7;
      font-size: 12px;
      line-height: 18px;
    }

    &:active {
      background-color: @active-color;
    }
  }

  .van-icon {
    margin: 16px 0 16px;
    color: @text-color;
    font-size: 32px;
  }

  .bin-tab__pane {
    width: auto;
    margin: 20px;
    background-color: #fff;
    border-radius: 12px;
  }
}
</style>
