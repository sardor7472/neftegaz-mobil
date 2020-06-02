<template>
    <v-app id="sandbox">
        <left-sidebar
                :options="primaryDrawer"
                :group.sync="group"
        />
        <v-app-bar class="elevation-1" height="75" :clipped-left="primaryDrawer.clipped" app>
            <v-app-bar-nav-icon
                    class="nf-header-burger-wrap"

                    v-if="primaryDrawer.type !== 'permanent'"
                    @click.stop="primaryDrawer.model = !primaryDrawer.model"
                    @click="primaryDrawer.mini = false"
            />
            <v-spacer></v-spacer>
            <v-toolbar-title class="">
                <router-link to="/" tag="span" class="pointer">
                    <img src="@/assets/images/logo.png" alt=""/>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
                    icon
                    @click.stop="drawer = !drawer"
            >
                <v-icon>mdi-apps</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer
                v-model="drawer"
                app
                right
        >
            <v-list-item class="mt-3">
                <v-list-item-content>
                    <v-list-item-title class="main-right-sidebar-title">Bildirishnomalar</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title>Kelib tushgan</v-list-item-title>
                    <v-list-item-subtitle><span class="main-right-sidebar-text">Приказ №13</span></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title>Hujjat yuborildi</v-list-item-title>
                    <v-list-item-subtitle>
                        <span class="main-right-sidebar-text">Протокол</span>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-navigation-drawer>
        <v-content>
            <router-view></router-view>
        </v-content>
        <v-footer :inset="footer.inset" app>
            <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>
<script>
    import LeftSidebar from "../../components/cabinet/LeftSidebar";
    export default {
        name: "App",
        data: () => ({
            drawer: false,
            group: "",
            primaryDrawer: {
                model: null,
                mini: true
            },
            footer: {
                inset: true
            },
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            years: ['2021', '2022', '2023', '2024'],

        }),
        methods: {},
        components: {
            LeftSidebar
        }
    };
</script>

<style scoped lang="scss">
    .nf-header-select {
        display: flex;
        align-items: center;
        margin-right: 55px;

        .theme--light.v-input {
            width: 100px;
            margin-right: 40px;
        }

        &-person {
            display: flex;
            align-items: center;
        }

        &-person-icon {
            margin-right: 14px;
            width: 30px;
            height: 30px;
            background: #ff7d30;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;

            svg {
                path {
                    fill: #fff;
                }
            }
        }
    }
    .nf-header-burger-wrap {
        display: none;
    }
    .main-right-sidebar-text {
        color: #0092c8;
    }
    .main-right-sidebar-title {
        font-size: 26px;
    }
    .pointer {
        cursor: pointer;
    }
    .controls {
        position: relative;
    }
    @media screen and (max-width: 1263px) {
        .nf-header-burger-wrap {
            display: block;
        }
    }
</style>
