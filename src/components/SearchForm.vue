<template>
    <v-layout column align-center>
        <v-flex xs12>
            <label class="headline">Search Form</label>
        </v-flex>
        <v-form
                ref="form"
                v-model="valid"
        >
            <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    @keyup.enter="submit"
                    label="Name"
                    required
            ></v-text-field>
            <v-btn
                    color="warning"
                    class="mr-4"
                    @click="reset"
                    small
                    outlined
                    :disabled="loading"
            >
                Clear
            </v-btn>

            <v-btn
                    color="success"
                    @click="submit"
                    small
                    outlined
                    :disabled="loading"
            >
                Search
            </v-btn>
        </v-form>
    </v-layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import KycModule from "@/store/modules/KycModule";

    export type VForm = Vue & { validate: () => boolean, reset: () => boolean }
    export default Vue.extend({
        name: "SearchForm",
        data: () => ({
            valid: true,
            name: "",
            nameRules: [
                (v: any) => !!v || "Name is required"
            ]
        }),
        methods: {
            async submit() {
                if (this.form.validate()) {
                    const {name} = this;
                    await KycModule.doSearch({name});
                }
            },
            reset() {
                this.form.reset();
                KycModule.resetModule();
            }
        },
        computed: {
            loading() {
                return KycModule.loading;
            },
            form(): VForm {
                return this.$refs.form as VForm;
            }
        }
    });
</script>

<style scoped>

</style>
