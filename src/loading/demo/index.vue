<template>
  <div>
    <demo-block title="基础用法">
      <bint-loading />
       <bint-loading type="spinner" />
    </demo-block>

    <demo-block title="自定义颜色">
      <bint-loading color="#1989fa" />
      <bint-loading type="spinner" color="#1989fa" />
    </demo-block>

    <demo-block title="自定义大小">
      <bint-loading size="24" />
      <bint-loading type="spinner" size="24" />
    </demo-block>

    <demo-block title="加载文案">
      <bint-loading size="24px"> loading </bint-loading>
    </demo-block>

    <demo-block title="垂直排列">
      <bint-loading size="24px" vertical> loading </bint-loading>
    </demo-block>

    <demo-block title="自定义文本颜色">
      <bint-loading size="24px" vertical color="#0094ff"> loading </bint-loading>
      <bint-loading size="24px" vertical text-color="#0094ff">
        loading
      </bint-loading>
    </demo-block>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import loading from '../index';
export default {
  components: {
    'bint-loading': loading,
  },
  setup() {
    const state = reactive({
      show: false,
      showEmbedded: false,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-loading {
  background: @white;

  .bin-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}

</style>
