<template>
    <v-navigation-drawer
            v-model="options.model"
            :clipped="options.clipped"
            :floating="options.floating"
            @click.stop="primaryDrawer.model = !primaryDrawer.model"
            app
            overflow
            width="300"
            color="#0083b3"
    >
        <div class="d-flex">
            <v-btn class="mt-6 hidden-xl-and-up" text small color="#0083b3" @click="sidebarChangeView">
                <span>
            <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 492 492"
                 style="enable-background:new 0 0 492 492;" xml:space="preserve">
                    <path fill="#fff"
                          d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788    C492,219.198,479.172,207.418,464.344,207.418z"/>
            </svg>
        </span>
            </v-btn>
            <div class="left-bar-select-blog">
                <div class="left-bar-select">
                    <v-select
                            color="#000"
                            class="side-bar-select"
                            :items="langs"
                            :label="$i18n.locale"
                            single-line
                            v-model="$i18n.locale"
                    >
                    </v-select>
                </div>
                <div class="left-bar-select">
                    <v-select
                            color="#000"
                            class="side-bar-select"
                            :items="years"
                            label="2020"
                            single-line
                    >
                    </v-select>
                </div>
            </div>
        </div>
        <v-list>
            <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                    dark
            >
                <router-link to="/">
                    <v-list-item>
                        <v-list-item-icon>
                        <span>
                            <svg class="left-bar-icon" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                 viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve">
                                    <path fill="#fff"
                                          d="M786.6,363.8L665.5,241.7V100.6c0-25.5-20.5-46.2-45.8-46.2c-25.3,0-45.8,20.7-45.8,46.2v48.7l-90.2-90.9    c-44.6-44.9-122.1-44.8-166.6,0.1L14.4,363.8c-17.9,18.1-17.9,47.3,0,65.3c17.9,18.1,46.9,18.1,64.8,0l302.7-305.3    c9.9-9.9,27.3-9.9,37.1,0l302.8,305.4c9,9,20.7,13.5,32.4,13.5c11.7,0,23.5-4.5,32.4-13.5C804.4,411.1,804.4,381.9,786.6,363.8z     M416.4,211.4c-8.8-8.9-23-8.9-31.8,0L118.3,479.9c-4.2,4.2-6.6,10-6.6,16.1v195.8c0,46,36.9,83.2,82.5,83.2h131.9V569.1h148.9    V775h131.9c45.6,0,82.5-37.3,82.5-83.2V496c0-6-2.4-11.8-6.6-16.1L416.4,211.4z"/>
                            </svg>
                        </span>
                        </v-list-item-icon>
                        <v-list-item-title>Asosiy</v-list-item-title>
                    </v-list-item>
                </router-link>
                <router-link to="/uzbekneftegaz-new">
                    <v-list-item>
                        <v-list-item-icon>
                        <span>
                            <svg class="left-bar-icon" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                 viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve">
                            <path fill-rule="evenodd" clip-rule="evenodd" fill="#fff"
                                  d="M736.6,470.6H470.4V737c0,34.7-28.2,62.9-62.9,62.9h-15.3  c-34.7,0-62.9-28.2-62.9-62.9V470.6H63.1C28.3,470.6,0,442.3,0,407.5v-14.9c0-34.9,28.3-63.1,63.1-63.1h266.2V63.1  c0-34.7,28.2-62.9,62.9-62.9h15.3c34.7,0,62.9,28.2,62.9,62.9v266.4h266.2c34.9,0,63.1,28.3,63.1,63.1v14.9  C799.7,442.3,771.5,470.6,736.6,470.6z"/>
                            </svg>
                        </span>
                        </v-list-item-icon>
                        <v-list-item-title>Hujjat yaratmoq</v-list-item-title>
                    </v-list-item>
                </router-link>
                <v-list-item>
                    <v-list-item-icon>
                        <span>
                            <svg class="left-bar-icon" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                 viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve">
                                    <path fill="#fff"
                                          d="M741,527.2c-32.6,0-59.1,26.2-59.1,58.5V677H118.7v-91.2c0-32.3-26.4-58.5-59.1-58.5    c-32.6,0-59.1,26.2-59.1,58.5v149.7C0.5,767.8,27,794,59.6,794H741c32.6,0,59.1-26.2,59.1-58.5V585.7    C800,553.4,773.6,527.2,741,527.2z M382.5,589.5c9.8,9.7,25.8,9.7,35.7,0l207-205.1c6-6,7.8-15,4.6-22.8    c-3.3-7.8-10.9-12.9-19.5-12.9H513V53.1c0-25.2-20.6-45.7-46.1-45.7H333.7c-25.5,0-46.1,20.4-46.1,45.7v295.6h-97.2    c-8.5,0-16.2,5.1-19.5,12.9c-3.3,7.8-1.5,16.8,4.5,22.8L382.5,589.5z"/>
                            </svg>
                        </span>
                    </v-list-item-icon>
                    <v-list-item-title>Kelib tushgan</v-list-item-title>
                </v-list-item>
                <router-link to="/appeal">
                    <v-list-item>
                        <v-list-item-icon>
                        <span>
                            <svg class="left-bar-icon" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                 viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve">
                                    <path fill="#fff"
                                          d="M740.3,527.3c-32.6,0-59.1,26.2-59.1,58.5V677h-563v-91.2c0-32.3-26.4-58.5-59-58.5    c-32.6,0-59.1,26.2-59.1,58.5v149.7c0,32.3,26.4,58.5,59.1,58.5h681.1c32.6,0,59-26.2,59-58.5V585.8    C799.4,553.5,772.9,527.3,740.3,527.3z M189.9,251.9h97.2v290.3c0,24.8,20.6,44.9,46.1,44.9h133.2c25.5,0,46.1-20.1,46.1-44.9    V251.9h97.2c8.5,0,16.2-5,19.5-12.7c3.3-7.7,1.5-16.5-4.6-22.4l-207-201.5c-9.8-9.6-25.8-9.6-35.6,0L175,216.9    c-6,5.9-7.8,14.7-4.5,22.4C173.7,246.9,181.4,251.9,189.9,251.9z"/>
                            </svg>
                        </span>
                        </v-list-item-icon>
                        <v-list-item-title>Murojaat</v-list-item-title>
                    </v-list-item>
                </router-link>
                <v-list-item>
                    <v-list-item-icon>
                        <span>
                            <svg class="left-bar-icon" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                 viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve">
                            <path fill-rule="evenodd" clip-rule="evenodd" fill="#fff"
                                  d="M632.5,802.5H177.7c-48.9,0-88.7-36.4-88.7-81.2V81.8  c0-44.8,39.8-81.1,88.7-81.1h190.6c-6.3,16.4-4.7,11.1-4.7,180.2c0,83.4,74.2,151.3,165.5,151.3c181.1,0,174.2,1.5,192.2-4.3v393.4  C721.2,766.1,681.4,802.5,632.5,802.5z M405.1,422.7c-58.3,0-105.5,47.2-105.5,105.5s47.2,105.5,105.5,105.5  c58.3,0,105.5-47.2,105.5-105.5S463.4,422.7,405.1,422.7z M693.8,282H529.1c-61,0-110.6-45.4-110.6-101.2V25.7  c0-22.4,29.9-33.6,47-17.6l247.9,231.2C730.4,255.2,718.1,282,693.8,282z"/>
                            </svg>
                        </span>
                    </v-list-item-icon>
                    <v-list-item-title>Mening hujjatlarim</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <span>
                       <svg class="left-bar-icon" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                            id="Layer_1" x="0px" y="0px" viewBox="0 0 800 800" enable-background="new 0 0 800 800"
                            xml:space="preserve">

                            <path fill="#fff"
                                  d="M527.1,280.8h164.4c24.2,0,36.5-26.8,19.5-42.6L463.6,7.6c-17.1-16-46.9-4.9-46.9,17.5v154.8    C416.7,235.5,466.2,280.8,527.1,280.8z M527.1,330.8c-91,0-165.1-67.7-165.1-151c0-168.8-1.6-163.4,4.7-179.8H176.5    C127.7,0.1,88,36.4,88,81v638.1c0,44.7,39.7,81,88.5,81h453.8c48.8,0,88.5-36.3,88.5-81V326.6    C700.9,332.3,707.8,330.8,527.1,330.8z"/>
                    </svg>
                        </span>
                    </v-list-item-icon>
                    <v-list-item-title>Mening bo’limim hujjatlari</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <span>
                            <svg class="left-bar-icon" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                 viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve">
                            <path fill="#fff"
                                  d="M783.5,375.7L40.7,25c-11.8-5.5-25.9-2.2-34.2,8.2C-1.7,43.5-2,58.3,5.9,69l244.3,333.2L5.9,735.5  c-7.9,10.7-7.6,25.5,0.6,35.9c5.5,7.1,13.8,10.9,22.2,10.9c4.1,0,8.1-0.9,11.9-2.7l742.8-350.8c10.2-4.8,16.6-15.1,16.6-26.5  S793.6,380.5,783.5,375.7z"/>
                            </svg>
                        </span>
                    </v-list-item-icon>
                    <v-list-item-title>Yuborilgan</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <span>
                            <svg class="left-bar-icon" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                 viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve">
                            <path fill="#fff"
                                  d="M635.3,0.2H167.4c-45.1,0-81.8,34.5-81.8,76.9v646c0,42.4,36.7,76.9,81.8,76.9h467.9  c45.1,0,81.8-34.5,81.8-76.9v-646C717.1,34.7,680.4,0.2,635.3,0.2z M420.4,544h-34c-13.8,0-24.9-10.5-24.9-23.4v-22.2  c0-12.9,11.1-23.4,24.9-23.4h34c13.7,0,24.9,10.5,24.9,23.4v22.2C445.3,533.6,434.2,544,420.4,544z M445.3,637.1v22.2  c0,12.9-11.2,23.4-24.9,23.4h-34c-13.8,0-24.9-10.5-24.9-23.4v-22.2c0-12.9,11.1-23.4,24.9-23.4h34  C434.2,613.7,445.3,624.1,445.3,637.1z M420.4,405.4H222.6c-13.8,0-24.9-10.5-24.9-23.4v-22.2c0-12.9,11.1-23.4,24.9-23.4h197.8  c13.7,0,24.9,10.5,24.9,23.4v22.2C445.3,394.9,434.2,405.4,420.4,405.4z M256.6,544h-34c-13.8,0-24.9-10.5-24.9-23.4v-22.2  c0-12.9,11.1-23.4,24.9-23.4h34c13.8,0,24.9,10.5,24.9,23.4v22.2C281.6,533.6,270.4,544,256.6,544z M281.6,637.1v22.2  c0,12.9-11.2,23.4-24.9,23.4h-34c-13.8,0-24.9-10.5-24.9-23.4v-22.2c0-12.9,11.1-23.4,24.9-23.4h34  C270.4,613.7,281.6,624.1,281.6,637.1z M222.6,202.8c-13.8,0-24.9-10.5-24.9-23.4v-46.3c0-12.9,11.1-23.4,24.9-23.4h357.5  c13.8,0,24.9,10.5,24.9,23.4v46.3c0,12.9-11.1,23.4-24.9,23.4H222.6z M525.2,637.1c0-12.9,11.1-23.4,24.9-23.4h34  c13.8,0,24.9,10.5,24.9,23.4v22.2c0,12.9-11.1,23.4-24.9,23.4h-34c-13.8,0-24.9-10.5-24.9-23.4V637.1z M584.2,544h-34  c-13.8,0-24.9-10.5-24.9-23.4v-22.2c0-12.9,11.1-23.4,24.9-23.4h34c13.8,0,24.9,10.5,24.9,23.4v22.2  C609.1,533.6,597.9,544,584.2,544z M584.2,405.4h-34c-13.8,0-24.9-10.5-24.9-23.4v-22.2c0-12.9,11.1-23.4,24.9-23.4h34  c13.8,0,24.9,10.5,24.9,23.4v22.2C609.1,394.9,597.9,405.4,584.2,405.4z"/>
                            </svg>
                        </span>
                    </v-list-item-icon>
                    <v-list-item-title>Hisob palatasi</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
    export default {
        props: ["options", "group"],
        data: () => ({
            langs: [
                {
                    text: "Ўзбек тили",
                    value: "uz"
                },
                {
                    text: "Русский язык",
                    value: "ru"
                },
                {
                    text: "English language",
                    value: "en"
                }
            ],
            years: ['2021', '2022', '2023', '2024'],
        }),
        computed: {
            selectedLanguage() {
                return this.langs.find(lang => lang.value === this.$i18n.locale);
            }
        },
        methods: {
            setLocale(locale) {
                this.$i18n.locale = locale;
            },
            sidebarChangeView() {
                this.options.model = !this.options.model;
            }
        }
    };
</script>
<style scoped lang="scss">
    .left-bar-select-blog {
        margin-left: auto;
        display: flex;
        justify-content: space-between;
        width: 200px;
        margin-right: 10px;
    }

    .side-bar-select {
        width: 80px !important;
        color: #fff;
    }

    .left-bar-icon {
        width: 18px;
        height: 18px;
    }

    .nf-burger-icon {
        path {
            fill: #fff;
        }
    }
</style>
