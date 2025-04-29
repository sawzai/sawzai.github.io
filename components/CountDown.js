import { loadCSS } from 'https://sawzai.github.io/components/index.js';

export default {
    template: `
      <div :class="['countdown', computedCdsize]">
        <div v-if="!countdownFinished" class="countdown-timer">
          <div v-for="(label, unit) in units" :key="unit" :class="['countdown-box', unit]">
            <div class="countdown-number">{{ getUnitValue(unit) }}<div v-if="computedCdsize==='small'"> {{ unit[0] }}</div></div>
            <div v-if="computedCdsize!=='small'" class="countdown-label">{{ label }}</div>
          </div>
        </div>
        <div v-else class="countdown-finished">Countdown Finished</div>
      </div>
    `,
    props: {
      cdtimer: { type: Number, default: () => Date.now() + 300000 }, // Default 5 minutes
      cdsize: { type: String, default: 'medium' },
      responsive: { type: Boolean, default: true }
    },
    data() {
      return {
        days: '00', hours: '00', minutes: '00', seconds: '00',
        countdownFinished: false,
        internalCdsize: this.cdsize,
        intervalId: null,
        units: { days: 'Days', hours: 'Hrs', minutes: 'Min', seconds: 'Sec' }
      };
    },
    computed: {
      computedCdsize() {
        return this.internalCdsize;
      }
    },
    methods: {
      updateTimer() {
        const diff = new Date(this.cdtimer) - Date.now();
        if (diff <= 0) {
          this.days = this.hours = this.minutes = this.seconds = '00';
          this.countdownFinished = true;
          clearInterval(this.intervalId);
          this.onCountdownFinish();
        } else {
          this.days = String(Math.floor(diff / 86400000)).padStart(2, '0');
          this.hours = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
          this.minutes = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
          this.seconds = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
        }
      },
      updateCdsize() {
        this.internalCdsize = window.innerWidth < 600 ? 'small' : this.cdsize;
      },
      onCountdownFinish() {
        // Custom logic for when the countdown finishes
      },
      getUnitValue(unit) {
        return this[unit];
      }
    },
    mounted() {
      Promise.all([
        loadCSS('https://sawzai.github.io/assets/CountDown.css', 'CountDown-css'),
      ])
      .then(() => {
        this.updateTimer();
        this.intervalId = setInterval(this.updateTimer, 1000);
        if (this.responsive) {
          this.updateCdsize();
          window.addEventListener('resize', this.updateCdsize);
        }
      })
      .catch(error => console.error('Error during loading:', error));
    },
    beforeUnmount() {
      clearInterval(this.intervalId);
      if (this.responsive) {
        window.removeEventListener('resize', this.updateCdsize);
      }
    }
  };
