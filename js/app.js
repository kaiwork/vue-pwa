

const data = [
    {
        "id": 1,
        "language":"python",
        "framework":"django",
        "skill": 4
    },
    {
        "id": 2,
        "language":"python",
        "framework":"django",
        "skill": 2
    },
    {
        "id": 3,
        "language":"python",
        "framework":"django",
        "skill": 4
    }
]

const app = new Vue({
    el: "#app",
    data() {
        return {
            isLoading: true,
            data,
            showDetailIcon: true,
            useTransition: true
        }
    },
    mounted() {
        this.isLoading = false;
        this.$buefy.toast.open('Welcome !')

    },
    methods: {
        clickMe() {
            this.$buefy.notification.open('Clicked!!')
        }
    }
})


