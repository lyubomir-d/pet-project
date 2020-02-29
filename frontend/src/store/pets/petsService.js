import requestService from "../../fetch-API/requestService";
import URLS from "../../fetch-API/servicesLinksConsts";

const petsService = {
    getPetCollection: async () => {
        const backResponse = await requestService.get(
           `${URLS.BASE}/api/pets`
        );
        const { response, data, requestError } = backResponse;

        if(response) {
            return data;
        } else {
            throw requestError;
        }
    }
};

export default petsService;

