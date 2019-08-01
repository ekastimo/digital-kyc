import {Action, getModule, Module, Mutation, MutationAction, VuexModule} from 'vuex-module-decorators';
import store from '@/store';
import {search} from '@/utils/apiUtils';
const apiKey = process.env.VUE_APP_OFAC_API_KEY;
export const baseUrl = 'http://search.ofac-api.com/api/v1';
export interface IQuery {
    name: string
}

@Module({
    store,
    name: 'crm',
    dynamic: true,
    namespaced: true
})
class KycModule extends VuexModule {

    public results: any = null;
    public loading: boolean = false;

    @Action
    public async doSearch(payload: IQuery): Promise<any> {
        const request = {...payload, apiKey};
        this.startLoading();
        const data = await search<any>(baseUrl, request);
        if (data && data !== 'Authorization Failed') {
            this.onResults(data);
        } else {
            console.error('Failed: ', data);
            console.log("Make sure you have the right API key and that its loaded from the .env file");
            this.onFailed();
        }
    }

    @MutationAction
    public resetModule(): any {
        return {results: null, loading: false};
    }


    @Mutation
    public startLoading() {
        this.results = null;
        this.loading = true;
    }

    @Mutation
    public onFailed() {
        this.loading = false;
    }

    @Mutation
    public onResults(payload: any) {
        this.results = payload;
        this.loading = false;
    }

}

export default getModule(KycModule);
