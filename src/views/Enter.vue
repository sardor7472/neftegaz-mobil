<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="nf-access">
        <v-row align-center justify-center>
            <v-col class="offset-4" xl="4" lg="6">
                <div class="nf-enter-btn">
                    <v-btn
                            color="#00a5e2"
                            dark
                            class="nf-bor-radius"
                            x-large>
                    <span class="mr-2">
                <svg height="15" width="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 631.6 800" enable-background="new 0 0 631.6 800" xml:space="preserve">
                    <path fill="#fff" d="M13.7,0v150h103v-50h411.9v600H116.7v-50h-103v150h617.9V0H13.7z M201.2,515.7l73.3,71.3l192.3-187    L274.5,213l-73.3,71.3l67.1,65.2H0v100.9h268.3L201.2,515.7z"/>
            </svg>
                            </span>
                        Kirish
                    </v-btn>

                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import { required, maxLength } from "vuelidate/lib/validators";

    export default {

        validations: {
            user: {
                login: { required, maxLength: maxLength(6) },
                password: { required, maxLength: maxLength(6) }
            }
        },

        data: () => ({
            user: {
                login: "",
                password: ""
            },
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            radios: 'radio-1',
            headers: [
                {
                    text: '№', value: 'id'
                },
                {
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'temp', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' },
                { text: 'Iron (%)', value: 'iron' },
            ],
            desserts: [
                {
                    id: '1',
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',

                },
                {
                    id: '2',
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                },


            ],
        }),
        computed: {
            nameErrors() {
                const errors = [];
                if (!this.$v.user.login.$dirty) return errors;
                !this.$v.user.login.maxLength &&
                errors.push("Name must be at most 10 characters long");
                !this.$v.user.login.required && errors.push("Name is required.");
                return errors;
            },
            passwordErrors() {
                const errors = [];
                if (!this.$v.user.password.$dirty) return errors;
                !this.$v.user.password.required && errors.push("Password required");
                !this.$v.user.password.maxLength && errors.push("Password error");
                return errors;
            }
        },
        methods: {
            onSubmit() {
                this.$v.user.$touch();
            }
        },
        clear() {
            this.$v.$reset();
            this.name = "";
            this.password = "";
        }

    };
</script>
<style scoped>
    .nf-access{
        display: flex;
        align-items: center;
    }
</style>