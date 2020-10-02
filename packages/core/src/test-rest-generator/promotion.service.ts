import { CalculationApi, Percent } from './generated/calculation';
import { transaction } from './promotion-data';
import { buildAxiosRequestConfig } from '../http-client';
import { AxiosRequestConfig } from 'axios';


  export async function getPromotion(): Promise<Percent> {
    const token = "ask the team";

    // const calculationApi = new CalculationApi({
    //   basePath: 'https://sandbox.api.sap.com/sapomnichannelpromotionpricing/calculation'
    // });
    //
    // return calculationApi
    //   .calculateViaRestWithTenant('oppsapihub', transaction, {
    //     headers: {
    //       apikey: token
    //     }
    //   })
    //   .then(response => {
    //     return response.data.PriceCalculateBody![0].ShoppingBasket
    //       .LineItem[0].Sale!.RetailPriceModifier![0].Percent!;
    //   });

    // build AxiosRequestConfig from e.g., destination by using sdk core
    const requestConfig: AxiosRequestConfig =  await buildAxiosRequestConfig({destinationName: 'VLAB'}, { method: 'post'});
    // set basePath from the AxiosRequestConfig
    const calculationApi = new CalculationApi({ basePath: requestConfig.baseURL});
    // use AxiosRequestConfig as options
    return calculationApi
      .calculateViaRestWithTenant('oppsapihub', transaction, {
        // TODO type: any, additional wrapper function or modify the generated file?
        ...requestConfig,
        headers: {
          apikey: token
        }
      })
      .then(response => {
        return response.data.PriceCalculateBody![0].ShoppingBasket
          .LineItem[0].Sale!.RetailPriceModifier![0].Percent!;
      });
  }

