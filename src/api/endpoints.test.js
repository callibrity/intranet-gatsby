import { getEmployeeResource } from '@api/endpoints';

describe('Api Endpoints', () => {
  it('getEmployee should return a valid string', () => {
    const str = getEmployeeResource;
    expect(typeof str).toEqual('string');
  });
});
