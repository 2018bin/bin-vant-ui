import { PropType, Transition, CSSProperties } from 'vue';
import { noop, isDef, preventDefault, createNamespace } from '../utils';
import { useLazyRender } from '../utils/composables/use-lazy-render';

const [createComponent, bem] = createNamespace('overlay');

export default createComponent({
  props: {
    show: Boolean,
    zIndex: [Number, String],
    duration: [Number, String],
    className: null,
    customStyle: Object as PropType<CSSProperties>,
    lockScroll: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, { slots }) {
    const lazyRender = useLazyRender(() => props.show);

    const preventTouchMove = (event: TouchEvent) => {
      preventDefault(event, true);
    };

    const renderOverlay = () => {
      let customStyle = props.customStyle?props.customStyle:{}
      if (props.zIndex) {
        customStyle = Object.assign(customStyle, { zIndex: props.zIndex })
      }
  
      if (!props.show) {
        customStyle = Object.assign(customStyle, { display: 'none' })
      }
      const style: CSSProperties = customStyle


      if (isDef(props.duration)) {
        style.animationDuration = `${props.duration}s`;
      }
 
     
      return (
        <div
         
          style={style}
          class={[bem(), props.className]}
          onTouchmove={props.lockScroll ? preventTouchMove : noop}
        >
          {slots.default?.()}
        </div>
      );
    };

    return () => <div class="bin-fade">{renderOverlay()}</div>;
  },
});
