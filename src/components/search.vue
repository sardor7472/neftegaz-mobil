<template>
    <div class="mt-5">
        <div class="">
            <v-text-field
                    outlined
                    dense
                    label="Kalit so‘z"
                    class="nf-bor-radius per-input-element pr-6">
                <template v-slot:append>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1"
                         enable-background="new 0 0 515.558 515.558" height="20" viewBox="0 0 515.558 515.558"
                         width="25">
                        <path fill="#00a5e2"
                              d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/>
                    </svg>
                </template>

                <template  v-slot:append-outer>
                    <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" id="Capa_1"
                         enable-background="new 0 0 386.667 386.667" height="12" viewBox="0 0 386.667 386.667"
                         width="12">
                        <path fill="#ff7d31"
                              d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/>
                    </svg>
                </template>

            </v-text-field>
        </div>
        <div>
            <div class="uzbekneftegaz-received-btn-arrow">
                <template>
                    <div class="text-right">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        class="nf-bor-radius"
                                        dark
                                        color="#0092c8"
                                        v-on="on"
                                        large
                                >
                                    Qidirish
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                        v-for="(item, index) in items"
                                        :key="index"
                                        @click=""
                                >
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
        }),
    }
</script>