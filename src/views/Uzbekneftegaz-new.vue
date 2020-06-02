<template xmlns:v-slot="v-slo//www.w3.org/1999/XSL/Transform">
    <v-container class="pr-xl-9 pl-xl-9 pr-lg-4 pl-lg-4">
        <p class="uzbekneftegaz-new-title mt-8">Hujjat yaratmoq</p>
        <div class="mt-4">
            <p class="chancellery-send-doc-paragraph"> Hujjat ko’rinishi<span class="nf-star">*</span></p>
            <v-autocomplete
                    outlined
                    class="nf-bor-radius mt-2"
                    :items="items"
                    dense
                    label="Исходящий документ"
            ></v-autocomplete>
            <p class="chancellery-send-doc-lable">Hujjat turi </p>
            <v-autocomplete
                    outlined
                    class="nf-bor-radius mt-2"
                    :items="items"
                    dense
                    label="Протокол"
            ></v-autocomplete>
            <p>Qo`shish</p>
            <v-radio-group class="chancellery-jurnal-radio" row v-model="radios">
                <v-radio label="Hujjat nomi" value="radio-1"></v-radio>
                <v-radio label="Boshqa hujjatga asosan" value="radio-2"></v-radio>
            </v-radio-group>
            <v-dialog
                    v-model="dialog"
                    width="700"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                            color="#0092c8"
                            dark
                            v-on="on"
                            class="uzbekneftegaz-new-btn pa-1 ma-2"
                    >
                        hujjatni tanlash
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title
                            class="headline uzbekneftegaz-new-modal-title"
                            primary-title
                    >
                        Tashkilot nomini to'liq kiriting
                    </v-card-title>
                    <div class="pr-4 pl-4">
                        <div>
                            <p class="chancellery-send-doc-paragraph">Rus tilidagi nomi <span class="nf-star">*</span></p>
                            <v-text-field
                                    dense
                                    outlined
                                    class="nf-bor-radius mt-2">
                            </v-text-field>
                        </div>
                        <div>
                            <p class="chancellery-send-doc-paragraph">O’zbeak tilidagi nomi <span class="nf-star">*</span></p>
                            <v-text-field
                                    dense
                                    outlined
                                    class="nf-bor-radius mt-2">
                            </v-text-field>
                        </div>
                    </div>
                    <div class="headline lighten-2 text-center">
                        <v-spacer></v-spacer>
                        <div>
                            <v-btn class="nf-bor-radius uzbekneftegaz-new-modal-btn white--text" color="#00a5e2" large>
                                saqlash
                            </v-btn>
                        </div>
                        <div>
                            <v-btn class="nf-bor-radius uzbekneftegaz-new-modal-btn mt-2 mb-4 white--text" color="#ff7d31" large>
                                bekor qilmoq
                            </v-btn>
                        </div>
                        <v-spacer></v-spacer>
                    </div>
                </v-card>
            </v-dialog>
            <v-dialog
                    v-model="dialog2"
                    width="700"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                            color="#ff7d31"
                            dark
                            v-on="on"
                            class="uzbekneftegaz-new-btn ma-1 pa-1"
                    >
                        asosiy hujjat
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title
                            class="headline uzbekneftegaz-new-modal-title"
                            primary-title
                    >
                        Qabul qiluvchilarni tanlang
                    </v-card-title>

                    <div class="pr-4 pl-4">
                        <div>
                            <v-text-field
                                    dense
                                    outlined
                                    label="Kiruvchi raqamni kiriting"
                                    class="nf-bor-radius">
                            </v-text-field>
                        </div>
                        <div class="text-center">
                            <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                                qo’shish
                            </v-btn>
                        </div>
                    </div>
                    <div class="headline lighten-2 text-center">
                        <v-spacer></v-spacer>
                        <v-btn class="nf-bor-radius white--text mt-2 mb-4" color="#ff7d31" large>
                            OK
                        </v-btn>
                        <v-spacer></v-spacer>
                    </div>
                </v-card>
            </v-dialog>
            <v-dialog
                    v-model="dialog3"
                    width="700"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                            color="#0092c8"
                            dark
                            v-on="on"
                            class="uzbekneftegaz-new-btn ml-1 pa-1"
                    >
                        qabul qiluvchini tanlang
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title
                            class="headline uzbekneftegaz-new-modal-title"
                            primary-title
                    >
                        Kiruvchi asos hujjatni qidirish
                    </v-card-title>
                    <v-card-text>
                        <div class="mt-3 uzbekneftegaz-new-top-btn">
                            <v-btn
                                    color="#fff"
                                    class="uzbekneftegaz-new-btn ma-1 nf-uzbekneftegaz-new-border pa-1"
                            >
                                kiruvchilar bo’yicha
                            </v-btn>
                            <v-btn
                                    class="uzbekneftegaz-new-btn ma-1 nf-uzbekneftegaz-new-border active pa-1"
                            >
                                Chiquvchilar bo’yicha
                            </v-btn>
                        </div>
                        <div class="mt-3">
                            <div>
                                <v-text-field
                                        dense
                                        outlined
                                        label="Kiruvchi raqamni kiriting"
                                        class="nf-bor-radius">
                                </v-text-field>
                            </div>
                            <div class="text-center">
                                <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                                    qidirish
                                </v-btn>
                            </div>
                            <p class="uzbekneftegaz-new-modal-desc mt-2">Kirish raqamini (yoki qismini) kiritib "Qidirish" tugmasini bosing</p>
                        </div>
                    </v-card-text>

                    <v-card-title
                            class="headline lighten-2"
                            primary-title
                    >
                        <v-spacer></v-spacer>
                        <v-btn class="nf-bor-radius ml-5 white--text" color="#ff7d31" large>
                            saqlash
                        </v-btn>
                        <v-spacer></v-spacer>
                    </v-card-title>
                </v-card>
            </v-dialog>
            <p class="mt-3 ">Ro’yhatga olish jurnali</p>
            <v-autocomplete
                    outlined
                    class="nf-bor-radius mt-2"
                    :items="items"
                    dense
                    label="Исходящее письмо-Исходящее письмо"
            ></v-autocomplete>
            <p class="mt-2 ">Raxbar indeksi</p>
            <v-autocomplete
                    outlined
                    class="nf-bor-radius mt-2"
                    :items="items"
                    dense
                    label="01"
            ></v-autocomplete>
            <v-row class="justify-space-between">
                <v-col md="6">
                    <p>Chiqish raqami</p>
                    <v-text-field
                            outlined
                            dense
                            class="nf-bor-radius per-input-element mt-2">
                    </v-text-field>
                </v-col>
                <v-col md="6">
                    <p>Chiquvchi sana</p>
                    <v-menu
                            v-model="menu2"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                    >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                    outlined
                                    dense
                                    v-model="date"
                                    readonly
                                    v-on="on"
                                    class="nf-bor-radius per-input-element mt-2">
                                >

                                <template v-slot:append>
                                    <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"
                                         xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1"
                                         x="0px" y="0px" viewBox="0 0 757.9 800"
                                         enable-background="new 0 0 757.9 800" xml:space="preserve">
		<path fill="#d9d9d9"
              d="M701.5,96.8h-62V55.3c0-30.5-25.3-55.3-56.4-55.3h-2.3c-31.1,0-56.4,24.7-56.4,55.3v41.5h-291V55.3    c0-30.5-25.3-55.3-56.4-55.3h-2.3c-31.1,0-56.4,24.7-56.4,55.3v41.5h-62C25.2,96.8,0,121.5,0,152.1v592.6    C0,775.3,25.2,800,56.4,800h645.1c31.1,0,56.4-24.7,56.4-55.3V152.1C757.9,121.5,732.6,96.8,701.5,96.8z M663.1,712.7H94.7V263.7    h568.4V712.7z M172,466.9h98.1c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9H172c-5,0-9,4-9,8.9V458C163,462.9,167,466.9,172,466.9z     M329.9,466.9H428c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9V458C320.9,462.9,324.9,466.9,329.9,466.9z     M487.8,466.9h98.1c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9V458C478.8,462.9,482.8,466.9,487.8,466.9z     M172,621.7h98.1c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9H172c-5,0-9,4-9,8.9v96.2C163,617.7,167,621.7,172,621.7z M329.9,621.7    H428c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9v96.2C320.9,617.7,324.9,621.7,329.9,621.7z M487.8,621.7h98.1    c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9v96.2C478.8,617.7,482.8,621.7,487.8,621.7z"/>
</svg>

                                </template>

                            </v-text-field>
                        </template>
                        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                </v-col>
            </v-row>
            <v-radio-group class="chancellery-jurnal-radio" v-model="radios">
                <v-radio label="DSP/XDFU" value="radio-1"></v-radio>
            </v-radio-group>
        </div>
        <div>
            <p class="chancellery-send-doc-paragraph">Hujjat nomi <span class="nf-star">*</span></p>
            <v-text-field
                    dense
                    outlined
                    class="nf-bor-radius mt-2">
            </v-text-field>
            <p class="chancellery-send-doc-paragraph">Qisqa mazmuni <span class="nf-star">*</span></p>
            <v-textarea
                    outlined
                    name="input-7-4"
                    label="Qisqa mazmuni"
                    class="nf-bor-radius uzbekneftegaz-new-textarea mt-2"
            ></v-textarea>
            <div class="">
                <v-spacer></v-spacer>
                <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                    Saqlash
                </v-btn>
                <v-btn class="nf-bor-radius ml-5 white--text" color="#ff7d31" large>
                    yopish
                </v-btn>
            </div>

        </div>
    </v-container>
</template>
<script>
    export default {

        data: () => ({
            date: new Date().toISOString().substr(0, 10),
            menu2: false,
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            radios: 'radio-1',
            dialog: false,
            dialog2: false,
            dialog3: false,

        }),
    };
</script>
