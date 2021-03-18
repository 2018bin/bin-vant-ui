// Utils
import {
  ref,
  watch,
  Teleport,
  computed,
  onMounted,
  Transition,
  onActivated,
  onDeactivated,
  onBeforeUnmount,
  getCurrentInstance
} from 'vue';
import { createNamespace, isDef } from '../utils';

// Composition
import { useEventListener } from '@vant/use';
import { useExpose } from '../utils/composables/use-expose';
import { useLockScroll } from '../utils/composables/use-lock-scroll';
import { useLazyRender } from '../utils/composables/use-lazy-render';

// Components
import Icon from '../icon';
import Overlay from '../overlay';

const [createComponent, bem] = createNamespace('popup');

const context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],
  find(vm) {
    return this.stack.filter((item) => item.vm === vm)[0];
  },
};

export const popupSharedProps = {
  // whether to show popup
  modelValue: Boolean,
  // z-index
  zIndex: [Number, String],
  // transition duration
  duration: [Number, String],
  // teleport
  teleport: [String, Object],
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: null,
  // Initial rendering animation
  transitionAppear: Boolean,
  // whether to show overlay
  overlay: {
    type: Boolean,
    default: true,
  },
  // prevent body scroll
  lockScroll: {
    type: Boolean,
    default: true,
  },
  // whether to lazy render
  lazyRender: {
    type: Boolean,
    default: true,
  },
  // whether to close popup when overlay is clicked
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
};

export default createComponent({
  inheritAttrs: false,

  props: {
    ...popupSharedProps,
    round: Boolean,
    closeable: Boolean,
    transition: String,
    closeOnPopstate: Boolean,
    safeAreaInsetBottom: Boolean,
    position: {
      type: String,
      default: 'center',
    },
    closeIcon: {
      type: String,
      default: 'cross',
    },
    closeIconPosition: {
      type: String,
      default: 'top-right',
    },
  },

  emits: [
    'open',
    'close',
    'click',
    'opened',
    'closed',
    'update:modelValue',
    'click-overlay',
    'click-close-icon',
  ],
  setup(props, { emit, attrs, slots }) {
    let opened;
    let shouldReopen;
    const ctx=getCurrentInstance()

    const zIndex = ref();
    const popupRef = ref();

    const [lockScroll, unlockScroll] = useLockScroll(
      popupRef,
      () => props.lockScroll
    );

    const lazyRender = useLazyRender(() => props.modelValue || !props.lazyRender);
    const style = computed(() => {
      const style = {
        zIndex: context.zIndex + (props.zIndex ? props.zIndex : 0),
      };



      if (isDef(props.duration)) {
        const key =
          props.position === 'center'
            ? 'animationDuration'
            : 'transitionDuration';
        style[key] = `${props.duration}s`;
      }

      return style;
    });

    const open = () => {

      // if (!opened) {
        if (props.zIndex !== undefined) {
          context.zIndex = props.zIndex;
        }
        opened = true;
        lockScroll();
        zIndex.value = ++context.zIndex;
      // }
    };

    const close = () => {
      // if (opened) {
        opened = false;
        unlockScroll();
        emit('update:modelValue', false);
      // }
    };

    const onClickOverlay = () => {
      emit('click-overlay');

      if (props.closeOnClickOverlay) {
        close();
      }

    };
    const renderOverlay = () => {
      if (props.overlay) {
        console.log(zIndex.value)
        return (
          <Overlay
            show={props.modelValue}
            class={props.overlayClass}
            zIndex={zIndex.value}
            duration={props.duration}
            customStyle={props.overlayStyle}
            onClick={onClickOverlay}
          />
        );
      }
    };
    const onClickCloseIcon = (event) => {
      emit('click-close-icon', event);
      close();
    };

    const renderCloseIcon = () => {
      if (props.closeable) {
        return (
          <Icon
            role="button"
            tabindex="0"
            name={props.closeIcon}
            class={bem('close-icon', props.closeIconPosition)}
            onClick={onClickCloseIcon}
          />
        );
      }
    };

    const onClick = (event) => emit('click', event);
    const onOpened = () => emit('opened');
    const onClosed = () => emit('closed');

    const renderPopup = () => {
      const { round, position, safeAreaInsetBottom } = props;
      let customStyle

      if (!props.modelValue) {
        customStyle = Object.assign({ display: 'none' },style.value )
      } else {
        customStyle = style.value
      }
      customStyle.zIndex=zIndex.value
      console.log("Popup:" + zIndex.value)
      return (
        <div
          ref={popupRef}
          style={customStyle}
          class={bem({
            round,
            [position]: position,
            'safe-area-inset-bottom': safeAreaInsetBottom,
          })}
          onClick={onClick}
          {...attrs}
        >
          {slots.default?.()}
          {renderCloseIcon()}
        </div>
      );
    };

    const renderTransition = () => {
      const { position, transition, transitionAppear } = props;
      const name =
        position === 'center' ? 'bin-fade' : `bin-popup-slide-${position}`;

      return (
        <Transition
          name={transition || name}
          appear={transitionAppear}
          onAfterEnter={onOpened}
          onAfterLeave={onClosed}
        >
          {renderPopup()}
        </Transition>
      );
    };

    watch(
      () => props.modelValue,
      (value) => {
    
        if (value) {
          open();
          emit('open');
        } else {
          close();
          emit('close');
        }
      }
    );

    useExpose({ popupRef });

    useEventListener('popstate', () => {
      if (props.closeOnPopstate) {
        close();
        shouldReopen = false;
      }
    });

    onMounted(() => {
      if (props.modelValue) {
        open();
      }
    });

    onActivated(() => {
      if (shouldReopen) {
        emit('update:modelValue', true);
        shouldReopen = false;
      }
    });

    onDeactivated(() => {
      if (props.shmodelValueow) {
        close();
        shouldReopen = true;
      }
    });

    onBeforeUnmount(() => {
      if (opened) {
        unlockScroll();
      }
    });
    return () => {


      return (
        <div>{renderOverlay()}{renderPopup()}</div>



      );
    };
  },
  // setup(props, { emit, attrs, slots }) {
  //   let opened;
  //   let shouldReopen;

  //   const zIndex = ref();
  //   const popupRef = ref();

  //   const [lockScroll, unlockScroll] = useLockScroll(
  //     popupRef,
  //     () => props.lockScroll
  //   );

  //   const lazyRender = useLazyRender(() => props.modelValue || !props.lazyRender);

  //   const style = computed(() => {
  //     const style = {
  //       zIndex: zIndex.value,
  //     };
  //     if (!props.modelValue) {
  //       style['display'] = 'none'
  //     }


  //     if (isDef(props.duration)) {
  //       const key =
  //         props.position === 'center'
  //           ? 'animationDuration'
  //           : 'transitionDuration';
  //       style[key] = `${props.duration}s`;
  //     }

  //     return style;
  //   });

  //   const open = () => {
  //     if (!opened) {
  //       if (props.zIndex !== undefined) {
  //         context.zIndex = props.zIndex;
  //       }

  //       opened = true;
  //       lockScroll();
  //       zIndex.value = ++context.zIndex;
  //     }
  //   };

  //   const close = () => {
  //     if (opened) {
  //       opened = false;
  //       unlockScroll();
  //       emit('update:modelValue', false);
  //     }
  //   };

  //   const onClickOverlay = () => {
  //     emit('click-overlay');
  //     if (props.closeOnClickOverlay) {
  //       close();
  //     }
  //   };

  //   const renderOverlay = () => {
  //     if (props.overlay) {
  //       return (
  //         <Overlay
  //           show={props.modelValue}
  //           class={props.overlayClass}
  //           zIndex={zIndex.value}
  //           duration={props.duration}
  //           customStyle={props.overlayStyle}
  //           onClick={onClickOverlay}
  //         />
  //       );
  //     }
  //   };

  //   const onClickCloseIcon = (event) => {
  //     emit('click-close-icon', event);
  //     close();
  //   };

  //   const renderCloseIcon = () => {
  //     if (props.closeable) {
  //       return (
  //         <Icon
  //           role="button"
  //           tabindex="0"
  //           name={props.closeIcon}
  //           class={bem('close-icon', props.closeIconPosition)}
  //           onClick={onClickCloseIcon}
  //         />
  //       );
  //     }
  //   };

  //   const onClick = (event) => emit('click', event);
  //   const onOpened = () => emit('opened');
  //   const onClosed = () => emit('closed');

  //   const renderPopup = lazyRender(() => {
  //     const { round, position, safeAreaInsetBottom } = props;
  //     return (
  //       <div
  //         v-show={props.modelValue}
  //         ref={popupRef}
  //         style={style.value}
  //         class={bem({
  //           round,
  //           [position]: position,
  //           'safe-area-inset-bottom': safeAreaInsetBottom,
  //         })}
  //         onClick={onClick}
  //         {...attrs}
  //       >
  //         {slots.default?.()}
  //         {renderCloseIcon()}
  //       </div>
  //     );
  //   });

  //   const renderTransition = () => {
  //     const { position, transition, transitionAppear } = props;
  //     const name =
  //       position === 'center' ? 'bin-fade' : `bin-popup-slide-${position}`;

  //     return (
  //       <Transition
  //         name={transition || name}
  //         appear={transitionAppear}
  //         onAfterEnter={onOpened}
  //         onAfterLeave={onClosed}
  //       >
  //         {renderPopup()}
  //       </Transition>
  //     );
  //   };

  //   watch(
  //     () => props.modelValue,
  //     (value) => {
  //       if (value) {
  //         open();
  //         emit('open');
  //       } else {
  //         close();
  //         emit('close');
  //       }
  //     }
  //   );

  //   useExpose({ popupRef });

  //   useEventListener('popstate', () => {
  //     if (props.closeOnPopstate) {
  //       close();
  //       shouldReopen = false;
  //     }
  //   });

  //   onMounted(() => {
  //     if (props.modelValue) {
  //       open();
  //     }
  //   });

  //   onActivated(() => {
  //     if (shouldReopen) {
  //       emit('update:modelValue', true);
  //       shouldReopen = false;
  //     }
  //   });

  //   onDeactivated(() => {
  //     if (props.shmodelValueow) {
  //       close();
  //       shouldReopen = true;
  //     }
  //   });

  //   onBeforeUnmount(() => {
  //     if (opened) {
  //       unlockScroll();
  //     }
  //   });

  //   return () => {
  //     if (props.teleport) {
  //       return (
  //         <Teleport to={props.teleport}>
  //           {renderOverlay()}
  //           {renderTransition()}
  //         </Teleport>
  //       );
  //     }

  //     return (
  //       <>
  //         {renderOverlay()}
  //         {renderTransition()}
  //       </>
  //     );
  //   };
  // },
});
