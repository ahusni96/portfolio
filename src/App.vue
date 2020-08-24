<template>
  <v-app id="inspire">
    <!--
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Portfolio</v-toolbar-title>
    </v-app-bar>
    
    <v-navigation-drawer
      v-model="drawer"
      app
      permanent
      expand-on-hover
    >
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/activities">
          <v-list-item-action>
            <v-icon>mdi-certificate</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Activities</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/educations">
          <v-list-item-action>
            <v-icon>mdi-city</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Educations</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/experiences">
          <v-list-item-action>
            <v-icon>mdi-file-document-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Experiences</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/projects">
          <v-list-item-action>
            <v-icon>mdi-home-city</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/skills">
          <v-list-item-action>
            <v-icon>mdi-clipboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Skills</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/contact">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
    -->
    <v-main>
      <router-view></router-view>
    </v-main>
    <!--
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }} Made using Vue</span>
    </v-footer>
    -->
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: true,
    }),

    methods: {
      clickMe() {
        console.log("Oof")
      },
      toHome() {
        this.$router.push('/')
      }
    },
  }
</script>