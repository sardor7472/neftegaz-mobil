<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-container>
            <div class="mt-8">
                <ul class="uzbekneftegaz-profile-assistant-menu">
                    <template>
                        <v-sheet
                                class="mx-auto"
                                max-width="100%"
                        >
                            <v-slide-group show-arrows>
                                <v-slide-item
                                        v-for="(item, i) in links"
                                        :key="i"
                                        v-slot:default="{ active, toggle }"
                                >
                                <span :color="active ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0)'"
                                      :input-value="active"
                                      active-class="active"
                                      class="nf-document-menu-slider"
                                      @click="toggle">
                                    <span v-html="item.icon">
                                    </span>
                                {{ item.link }}
                                </span>
                                </v-slide-item>
                            </v-slide-group>
                        </v-sheet>
                    </template>
                </ul>
                <div class="nf-input-file mt-10">
                    <v-image-input
                            class="nf-input-file-main"
                            clearable
                            hideActions
                            uploadIcon="yangi rasm"
                            clearIcon="rasmni o’chirish"
                            image-format="jpeg"
                            overlayBorderColor="red"
                    />
                </div>
                <div>
                    <div>
                        <div>

                            <p>Ism</p>
                            <v-text-field
                                    dense
                                    outlined
                                    class="nf-bor-radius mt-2">
                            </v-text-field>
                            <p>Familiya</p>
                            <v-text-field
                                    dense
                                    outlined
                                    class="nf-bor-radius mt-2">
                            </v-text-field>
                            <p>Otasining ismi</p>
                            <v-text-field
                                    dense
                                    outlined
                                    class="nf-bor-radius mt-2">
                            </v-text-field>
                            <p>Tog`ilgan sana</p>
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
                            <p class="chancellery-send-doc-paragraph">Jins</p>
                            <v-autocomplete
                                    outlined
                                    class="nf-bor-radius mt-2"
                                    v-model="value"
                                    :items="items"
                                    dense
                                    label="Erkak"
                            ></v-autocomplete>
                            <p class="chancellery-send-doc-paragraph">Lavozi</p>
                            <v-autocomplete
                                    outlined
                                    class="nf-bor-radius mt-2"
                                    v-model="value"
                                    :items="items"
                                    dense
                                    label="Bosh mutaxassis"
                            ></v-autocomplete>
                        </div>
                        <div>
                            <p>Bo’linma</p>
                            <v-autocomplete
                                    outlined
                                    class="nf-bor-radius mt-2"
                                    v-model="value"
                                    :items="items"
                                    dense
                                    label="Qidruvlar bo’limi"
                            ></v-autocomplete>
                            <p>Yashash shahri</p>
                            <v-text-field
                                    dense
                                    outlined
                                    label=""
                                    class="nf-bor-radius mt-2">
                            </v-text-field>
                            <p>Yashash manzili</p>
                            <v-text-field
                                    dense
                                    outlined
                                    label=""
                                    class="nf-bor-radius mt-2">
                            </v-text-field>
                            <p>Ish telefoni</p>
                            <v-text-field
                                    dense
                                    outlined
                                    label=""
                                    class="nf-bor-radius mt-2">
                            </v-text-field>
                            <p>Mobil telefoni</p>
                            <v-text-field
                                    dense
                                    outlined
                                    label=""
                                    class="nf-bor-radius mt-2">
                            </v-text-field>
                            <p>Elektron manzili</p>
                            <v-text-field
                                    dense
                                    outlined
                                    label=""
                                    class="nf-bor-radius mt-2">
                            </v-text-field>
                            <div class="text-right">
                                <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                                    Saqlash
                                </v-btn>
                                <v-btn class="nf-bor-radius ml-5 white--text" color="#ff7d31" large>
                                    bekor qilish
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>
<script>
    export default {

        data: () => ({
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            date: new Date().toISOString().substr(0, 10),
            menu2: false,
            links:[
                {
                    icon: `<svg height="15" width="15" xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                     viewBox="0 0 600.1 800" enable-background="new 0 0 600.1 800" xml:space="preserve">
                                    <path fill="#00A5E2"
                                          d="M300.4,399.7c54.9,0,102.5-19.7,141.3-58.6c38.9-38.9,58.6-86.4,58.6-141.4c0-54.9-19.7-102.5-58.6-141.4    C402.8,19.5,355.3-0.2,300.4-0.2c-54.9,0-102.5,19.7-141.3,58.6c-38.9,38.9-58.5,86.4-58.5,141.4c0,54.9,19.7,102.5,58.6,141.4    C197.9,380,245.5,399.7,300.4,399.7z M598.9,644.1c-1-13.2-2.9-27.6-5.8-42.7c-2.9-15.3-6.7-29.7-11.2-43    c-4.7-13.7-11-27.2-18.8-40.1c-8.1-13.4-17.6-25.1-28.3-34.7c-11.2-10.1-24.9-18.1-40.7-24c-15.8-5.9-33.3-8.8-52-8.8    c-7.3,0-14.4,2.8-28.2,11.2c-8.4,5.2-18.3,11.2-29.3,17.8c-9.4,5.6-22.2,10.9-38,15.7c-15.4,4.7-31,7.1-46.4,7.1    c-15.4,0-31-2.4-46.4-7.1c-15.8-4.8-28.5-10.1-37.9-15.7c-10.9-6.6-20.8-12.5-29.4-17.8c-13.7-8.4-20.8-11.2-28.2-11.2    c-18.7,0-36.2,3-52,8.9c-15.8,5.9-29.5,14-40.7,24c-10.7,9.6-20.2,21.3-28.3,34.7c-7.8,12.9-14.1,26.4-18.8,40.1    c-4.5,13.2-8.3,27.7-11.2,43c-2.9,15.2-4.9,29.5-5.8,42.8C0.5,657,0,670.5,0,684c0,35.3,11.9,63.9,35.5,85    c23.3,20.8,54,31.3,91.4,31.3h346.5c37.4,0,68.2-10.5,91.4-31.3c23.5-21.1,35.5-49.7,35.5-85C600.4,670.4,599.9,657,598.9,644.1z"/>
                            </svg>`,
                    link: 'Asosiy ma’lumot'
                },
                {
                    icon: `<svg height="15" width="15" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                 viewBox="0 0 853 800" enable-background="new 0 0 853 800" xml:space="preserve">
                                 <path fill="#00A5E2"
                                       d="M150,587.5v53.2h104.4v-53.2H150z M598.6,587.5v53.2H703v-53.2H598.6z M752.9,693.8H548.6v-53.1H304.4    v53.1H100v-53.1H0V800h853V640.6h-100V693.8z M589.8,106.6v-0.9c0-58.1-44.5-105.3-99.1-105.3H362.4c-54.7,0-99.1,47.2-99.1,105.3    v0.9H0v481h100v-53.1h204.4v53.1h244.2v-53.1h204.4v53.1h100v-481H589.8z M539.8,106.6H313.2v-0.9c0-28.8,22-52.2,49.2-52.2h128.2    c27.1,0,49.2,23.4,49.2,52.2V106.6z"/>
                            </svg>`,
                    link: 'Ta\'lim va ish tajribasi'
                },
                {
                    icon: `<svg height="15" width="15" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                             viewBox="0 0 801.4 800" enable-background="new 0 0 801.4 800" xml:space="preserve">
                        <path fill="#00A5E2"
                              d="M788.9,350.4c-6.4-4.1-57-34.3-77.1-43.5l-24.9-60.1c7.4-19.9,21.5-75.6,23.7-85.3c2-9-0.7-18.3-7.2-24.8  l-38.9-38.9c-6.5-6.5-15.9-9.2-24.8-7.2c-7.3,1.7-64.5,16-85.3,23.7l-60.1-24.9c-8.8-19.2-38.2-68.6-43.5-77.1  C446,4.5,437.4-0.2,428.2-0.2h-55.1c-9.2,0-17.7,4.7-22.6,12.5c-4.1,6.4-34.3,57-43.5,77.1L247,114.3c-19.9-7.4-75.6-21.5-85.3-23.7  c-9-2-18.3,0.7-24.8,7.2l-38.9,38.9c-6.5,6.5-9.2,15.9-7.2,24.8c1.7,7.3,16,64.5,23.7,85.3l-24.9,60.1C70.4,315.6,21,345,12.5,350.4  C4.7,355.2,0,363.8,0,373V428c0,9.2,4.7,17.7,12.5,22.6c6.4,4,57,34.3,77.1,43.5l24.9,60.1c-7.4,19.9-21.5,75.6-23.7,85.3  c-2,9,0.7,18.3,7.2,24.8l38.9,38.9c6.5,6.5,15.9,9.2,24.8,7.2c7.3-1.7,64.5-16,85.3-23.7l60.1,24.9c8.8,19.2,38.2,68.6,43.5,77.1  c4.9,7.8,13.4,12.5,22.6,12.5h55.1c9.2,0,17.7-4.7,22.6-12.5c4-6.4,34.3-57,43.5-77.1l60.1-24.9c19.9,7.4,75.6,21.5,85.3,23.7  c9,2,18.3-0.7,24.8-7.2l38.9-38.9c6.5-6.5,9.2-15.9,7.2-24.8c-1.7-7.3-16-64.5-23.7-85.3l24.9-60.1c19.2-8.8,68.6-38.2,77.1-43.5  c7.8-4.9,12.5-13.4,12.5-22.6V373C801.4,363.8,796.7,355.2,788.9,350.4z M400.7,575.2c-96.3,0-174.7-78.4-174.7-174.7  c0-96.3,78.4-174.7,174.7-174.7c96.3,0,174.7,78.4,174.7,174.7C575.4,496.8,497,575.2,400.7,575.2z"/>
                        </svg>`,
                    link: 'Parolni o\'zgartirish'
                }
            ]
        }),

    };
</script>
