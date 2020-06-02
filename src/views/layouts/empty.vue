<template>
  <v-app id="sandbox">
    <v-app-bar class="elevation-1" height="75" :clipped-left="primaryDrawer.clipped" app>
      <v-spacer></v-spacer>
      <v-toolbar-title class="ml-4">
        <router-link to="/" tag="span" class="pointer">
          <img src="@/assets/images/logo.png" alt=""/>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <div class="nf-access">
        <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>
<script>
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
    }
  };
</script>

<style scoped lang="scss">


  .nf-header-select{
    display: flex;
    align-items: center;
    margin-right: 55px;
    .theme--light.v-input{
      width: 100px;
      margin-right: 40px;
    }
    &-person{
      display: flex;
      align-items: center;
    }
    &-person-icon{
      margin-right: 14px;
      width: 30px;
      height: 30px;
      background: #ff7d30;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      svg{
        path{
          fill: #fff;
        }
      }
    }
  }
  .main-left-burger {
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
    .main-left-burger {
      display: block;
    }
  }


</style>
