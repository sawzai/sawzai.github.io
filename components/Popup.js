import { loadCSS } from './index.js';

export default {
  template: `
    <transition name="fade-overlay">
      <div v-if="visibleOuter" class="popup-overlay" @click.self="close">
          <transition name="slide-down">
            <div v-if="visible" class="popup-box">
              <button class="popup-close" @click="close">&times;</button>
              <h3 class="popup-title">{{ title }}</h3>
              <div class="popup-content">
                <slot />
              </div>
            </div>
          </transition>
      </div>
    </transition>
  `,
  props: {
    title: { type: String, default: 'Popup' },
    show: { type: Boolean, default: false }
  },
  data() {
    return {
      visible: false,
      visibleOuter: false
    };
  },
  watch: {
    show(val) {
      if (val) {
        this.visibleOuter = true;
        this.$nextTick(() => { this.visible = true; });
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', this.handleKeydown);
      } else {
        this.visible = false;
        document.body.style.overflow = '';
        document.removeEventListener('keydown', this.handleKeydown);
        setTimeout(() => { this.visibleOuter = false }, 200);
      }
    }
  },
  mounted() {
    loadCSS('https://sawzai.github.io/assets/popup.css', 'popup-css');
    if (this.show) {
      this.visibleOuter = true;
      this.visible = true;
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', this.handleKeydown);
    }
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
    document.body.style.overflow = '';
  },
  methods: {
    close() { this.$emit('update:show', false); },
    handleKeydown(e) { if (e.key === 'Escape' || e.key === 'Esc') this.close(); }
  }
};
