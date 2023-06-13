const { createApp } = Vue;

createApp({
    data() {

        return {
            emailsList: '',
        }
    },
    methods: {
        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (response) {
                    const result = response.data;
                    console.log(result.response);
                });
        }

    },

    created() {
        this.getRandomEmail();
    }
}).mount('#app');  