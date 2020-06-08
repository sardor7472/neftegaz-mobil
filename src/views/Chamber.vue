<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container class="pt-4">
        <div class="mt-2">
            <div class="">
                <div class="appeal-blog">
                    <p class="appeal-title">Hisob palatasi topshiriqlari</p>
                    <v-btn class="nf-bor-radius mt-8 white--text" color="#00a5e2" large>
                        Eksport
                        <span class="ml-2">
                             <svg height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                  viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve"
                                  class="left-bar-icon"><path fill="#fff" d="M740.3,527.3c-32.6,0-59.1,26.2-59.1,58.5V677h-563v-91.2c0-32.3-26.4-58.5-59-58.5    c-32.6,0-59.1,26.2-59.1,58.5v149.7c0,32.3,26.4,58.5,59.1,58.5h681.1c32.6,0,59-26.2,59-58.5V585.8    C799.4,553.5,772.9,527.3,740.3,527.3z M189.9,251.9h97.2v290.3c0,24.8,20.6,44.9,46.1,44.9h133.2c25.5,0,46.1-20.1,46.1-44.9    V251.9h97.2c8.5,0,16.2-5,19.5-12.7c3.3-7.7,1.5-16.5-4.6-22.4l-207-201.5c-9.8-9.6-25.8-9.6-35.6,0L175,216.9    c-6,5.9-7.8,14.7-4.5,22.4C173.7,246.9,181.4,251.9,189.9,251.9z"></path></svg>
                        </span>
                    </v-btn>
                </div>
            </div>
        </div>
        <div class="mt-10">
            <v-text-field
                    outlined
                    dense
                    label="Raqami bo’yicha"
                    class="nf-bor-radius per-input-element mt-1">
                <template v-slot:append>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1"
                         enable-background="new 0 0 515.558 515.558" height="20" viewBox="0 0 515.558 515.558"
                         width="25">
                        <path fill="#00a5e2"
                              d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/>
                    </svg>
                </template>
            </v-text-field>
        </div>
        <div>
            <v-text-field
                    outlined
                    dense
                    label="Hujjat tarkibi bo’yicha"
                    class="nf-bor-radius per-input-element mt-1">
                <template v-slot:append>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1"
                         enable-background="new 0 0 515.558 515.558" height="20" viewBox="0 0 515.558 515.558"
                         width="25">
                        <path fill="#00a5e2"
                              d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/>
                    </svg>
                </template>
            </v-text-field>
        </div>
        <div class="text-right">
            <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                Qidirish
            </v-btn>
        </div>
        <template>
            <v-data-table
                    outline
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1 nf-calendar-table mt-12"
                    hide-default-footer
            >
                <template v-slot:item="{ item }">
                    <tr
                            :key="item.id"
                            @click="$router.push({name: 'chancellery-jurnal', params: {cardId: item.id}})"
                            class="tr-class">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>
                            {{ item.calories }}
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </template>
        <template>
            <div class="text-center">
                <v-pagination
                        v-model="page"
                        :length="6"
                        class="mt-5"
                ></v-pagination>
            </div>
        </template>
    </v-container>
</template>
<script>
    export default {
        data: () => ({
            page: 1,
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
            ],
            desserts: [
                {
                    id: '1',
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
                {
                    id: '2',
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
            ],
        }),
    };
</script>
