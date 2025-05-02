import { loadCSS } from './index.js';

export default {
  template: `
    <div v-if="visible" class="popup-overlay">
      <div class="popup-box">
        <button class="popup-close" @click="close">&times;</button>
        <h3 class="popup-title">{{ title }}</h3>
        <div class="popup-content">
          <slot />
        </div>
      </div>
    </div>
  `,
  props: {
    title: {
      type: String,
      default: 'Announcement'
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: this.show
    };
  },
  watch: {
    show(val) {
      this.visible = val;
    }
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit('update:show', false);
    }
  },
  mounted() {
    Promise.all([
      loadCSS('https://sawzai.github.io/assets/popup.css', 'footer-css')
    ]).catch(console.error);
  }
};
