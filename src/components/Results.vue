<template>
    <v-layout column align-center>
        <v-flex xs12 sm6 md6>
            <h1>Results</h1>
        </v-flex>
        <v-flex xs12 sm6 md6>
            <template v-if="results">
                <v-card>
                    <v-card-title>{{results.matches.length}}&nbsp; Matches found</v-card-title>
                    <v-list>
                        <template v-for="match in results.matches">
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <div class="overline mb-4">SDN: {{match.entry.sdnType}} <b>Score:
                                        {{match.score}}</b></div>
                                    <v-list-item-title class="mb-1">{{match.entry.firstName}}</v-list-item-title>
                                    <v-list-item-subtitle>{{match.entry.remarks}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider class="mx-4"></v-divider>
                        </template>
                    </v-list>
                </v-card>
            </template>
            <template v-else>
                <v-container style="height: 400px;">
                    <v-layout
                            align-content-center
                            justify-center
                            fill-height
                            wrap
                    >
                        <template v-if="loading">
                            <v-flex
                                    xs12
                                    subtitle-1
                                    text-center
                            >
                                Getting your results
                            </v-flex>
                            <v-flex xs6>
                                <v-progress-linear
                                        color="deep-purple accent-4"
                                        indeterminate
                                        rounded
                                        height="6"
                                ></v-progress-linear>
                            </v-flex>
                        </template>
                        <template v-else>
                            <v-flex
                                    xs12
                                    subtitle-1
                                    text-center
                            >
                                Search to see results
                            </v-flex>
                        </template>
                    </v-layout>
                </v-container>
            </template>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import KycModule from "@/store/modules/KycModule";

    export default Vue.extend({
        name: "Results",
        computed: {
            results() {
                return KycModule.results;
            },
            loading() {
                return KycModule.loading;
            }
        }
    });
</script>

<style scoped>

</style>
