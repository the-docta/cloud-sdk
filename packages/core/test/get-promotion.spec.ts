/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import { PercentActionEnum } from '../src/test-rest-generator/generated/calculation';
import { getPromotion } from '../src/test-rest-generator/promotion.service';
import { setTestDestination } from '@sap-cloud-sdk/test-util';

describe('test', () => {

  it('should pass', async () => {
    setTestDestination({name: 'VLAB', url: 'https://sandbox.api.sap.com/sapomnichannelpromotionpricing/calculation'})
    const promotion = await getPromotion();
    expect(promotion.value).toBe(10);
    expect(promotion.Action).toBe(PercentActionEnum.Subtract);
  });
});
