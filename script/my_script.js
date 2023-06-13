const { createApp } = Vue;

createApp({
    data() {

        return {
            emailsList: [],
        }
    },
    methods: {
        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const result = response.data;
                    console.log(result.response);
                    this.emailsList.push(result)
                });
        }


    },

    created() {
        for (let i = 0; i < 10; i++) {
            this.getRandomEmail();
        }

    }
}).mount('#app');  