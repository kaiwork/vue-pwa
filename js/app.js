

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

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("./serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }

