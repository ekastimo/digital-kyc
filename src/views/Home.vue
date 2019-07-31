<template>

    <v-container>
        <v-layout
                wrap
        >
            <v-flex xs12 md3>
                <SearchForm @result="onResult"/>
            </v-flex>
            <v-divider class="mx-4 my-5" v-if="$vuetify.breakpoint.xsOnly"></v-divider>
            <v-flex xs12 md9>
                <Results/>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script lang="ts">
    import Vue from "vue";
    import SearchForm from "@/components/SearchForm.vue";
    import Results from "@/components/Results.vue";

    export default Vue.extend({
        components: {SearchForm, Results},
        data: () => ({
            results: null
        }),
        methods: {
            onResult(results: any) {
                this.results = results;
            }
        }
    });
</script>
