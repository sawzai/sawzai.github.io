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
    data() {
      return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
        countdownFinished: false,
        internalCdsize: this.cdsize,
        intervalId: null,
        units: {
          days: 'Days',
          hours: 'Hrs',
          minutes: 'Min',
          seconds: 'Sec'
        }
      };
    },
    props: {
      cdtimer: {
        type: Number,
        default: () => new Date().getTime() + 300000
      },
      cdsize: {
        type: String,
        default: 'medium'
      },
      responsive: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      computedCdsize() {
        return this.internalCdsize;
      }
    },
    methods: {
      updateTimer() {
        const targetDate = new Date(this.cdtimer);
        const diff = targetDate.getTime() - new Date().getTime();
  
        if (diff <= 0) {
          this.days = this.hours = this.minutes = this.seconds = '00';
          this.countdownFinished = true;
          clearInterval(this.intervalId);
          this.onCountdownFinish();
        } else {
          this.days = Math.floor(diff / 86400000).toString().padStart(2, '0');
          this.hours = Math.floor((diff % 86400000) / 3600000).toString().padStart(2, '0');
          this.minutes = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
          this.seconds = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
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
      this.updateTimer();
      this.intervalId = setInterval(this.updateTimer, 1000);
      if (this.responsive) {
        this.updateCdsize();
        window.addEventListener('resize', this.updateCdsize);
      }
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
      if (this.responsive) {
        window.removeEventListener('resize', this.updateCdsize);
      }
    }
  };
  