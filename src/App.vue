<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>DIGITAL</span>
                <span class="font-weight-light">KYC</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                    text
                    href="https://www.laboremus.ug/"
                    target="_blank"
            >
                <span class="mr-2">About US</span>
            </v-btn>
        </v-app-bar>
        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "App"
    });
</script>
