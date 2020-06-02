<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container class="nf-access">
    <v-layout align-center justify-center>
      <v-flex xl4 lg6 xs12 sm8 md8>
        <v-card class="elevation-8 mt-10">
          <v-toolbar flat>
            <v-toolbar-title>
                        <span>
                          <svg height="15" width="15" xmlns="http://www.w3.org/2000/svg"
                               xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                               viewBox="0 0 631.6 800" enable-background="new 0 0 631.6 800" xml:space="preserve">
                    <path fill="#00A5E2"
                          d="M13.7,0v150h103v-50h411.9v600H116.7v-50h-103v150h617.9V0H13.7z M201.2,515.7l73.3,71.3l192.3-187    L274.5,213l-73.3,71.3l67.1,65.2H0v100.9h268.3L201.2,515.7z"/>
            </svg>
                         </span>
              Kirish
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form">
              <p>Foydalinuvchi ismi <span class="nf-star">*</span></p>
              <v-text-field
                      outlined
                      dense
                      label="Foydalanuvchi ismini kiriting"
                      type="text"
                      :error-messages="nameErrors"
                      :counter="6"
                      :error="$v.user.login.$error"
                      required
                      v-model="user.login"
                      class="nf-bor-radius per-input-element mt-1">
                >
              </v-text-field>
              <p>Parol <span class="nf-star">*</span></p>
              <v-text-field
                      outlined
                      dense
                      id="password"
                      label="Parolni kirirting"
                      :error="$v.user.password.$error"
                      type="password"
                      :error-messages="passwordErrors"
                      :counter="6"
                      required
                      v-model="user.password"
                      class="nf-bor-radius per-input-element mt-1">
                >
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="nf-bor-radius" large color="#00a5e2" dark @click="onSubmit">

              Kirish
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import {required, maxLength} from "vuelidate/lib/validators";

  export default {

    validations: {
      user: {
        login: {required, maxLength: maxLength(6)},
        password: {required, maxLength: maxLength(6)}
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
        {text: 'temp', value: 'calories'},
        {text: 'Fat (g)', value: 'fat'},
        {text: 'Carbs (g)', value: 'carbs'},
        {text: 'Protein (g)', value: 'protein'},
        {text: 'Iron (%)', value: 'iron'},
        {text: 'Iron (%)', value: 'iron'},
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
