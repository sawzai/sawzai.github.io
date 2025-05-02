import { loadCSS } from './index.js'; // optional if you use dynamic CSS loading

export default {
  template: `
    <transition name="fade-overlay">
      <div v-if="visible" class="popup-overlay" @click.self="close">
        <transition name="slide-down">
          <div class="popup-box">
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
    return { visible: this.show };
  },
  watch: {
    show(val) { this.visible = val; },
    visible(val) {
      document.body.style.overflow = val ? 'hidden' : '';
      if (val) {
        document.addEventListener('keydown', this.handleKeydown);
      } else {
        document.removeEventListener('keydown', this.handleKeydown);
      }
    }
  },
  mounted() {
    loadCSS('https://sawzai.github.io/assets/popup.css', 'popup-css');
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit('update:show', false);
    },
    handleKeydown(e) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        this.close();
      }
    }
  }
};
