export default {
    template: `
      <div class="countdown">
        <div class="countdown-timer">
            <div class="countdown-box days">
                <div class="countdown-number">{{ days }}</div>
                <div class="countdown-label">Days</div>
            </div>
            <div class="countdown-box hours">
                <div class="countdown-number">{{ hours }}</div>
                <div class="countdown-label">Hrs</div>
            </div>
            <div class="countdown-box minutes">
                <div class="countdown-number">{{ minutes }}</div>
                <div class="countdown-label">Min</div>
            </div>
            <div class="countdown-box seconds">
                <div class="countdown-number">{{ seconds }}</div>
                <div class="countdown-label">Sec</div>
            </div>
        </div>
      </div>
    `,
    data() {
        return {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
        }
    },
    props: {
        cdtimer: {
            type: Number, 
            default: () => new Date().getTime() + 300000
        }
    },
    methods: {
        updateTimer() {
            const targetDate = new Date(this.cdtimer);
            const diff = targetDate.getTime() - new Date().getTime(); 
            const oneSecond = 1000, oneMinute = 60 * oneSecond, oneHour = 60 * oneMinute, oneDay = 24 * oneHour;
            const days = Math.floor(diff / oneDay).toString().padStart(2, '0');
            const hours = Math.floor((diff % oneDay) / oneHour).toString().padStart(2, '0');
            const minutes = Math.floor((diff % oneHour) / oneMinute).toString().padStart(2, '0');
            const seconds = Math.floor((diff % oneMinute) / oneSecond).toString().padStart(2, '0');

            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
    },
    mounted() {
        setInterval(() => this.updateTimer(), 1000);
    }
};
