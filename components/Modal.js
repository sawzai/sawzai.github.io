export default {
    template: `
    <div>
        <h1>{{ header }}</h1>
        <h2>{{ textline }}</h2>
    </div>
    `,
    data() {
        return {
            header: 'My Modal header is here!'
        }
    },
    props: {
        textline: {
            default: () => 'My Modal Textline is here!'
        }
    }
};