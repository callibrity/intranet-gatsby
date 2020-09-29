import path from 'path';
import axios from 'axios';
import { Pact } from '@pact-foundation/pact';
import { eachLike, like } from '@pact-foundation/pact/dsl/matchers';
import { setJwt, removeJwt } from '@api/api';
import { set } from 'lodash';
import { getEmployee } from './serviceCalls';



const provider = new Pact({
  consumer: 'IntranetFrontend',
  provider: 'EmployeeAPI',
  port: 1234,
  log: 'pact/logs/pact.log',
  logLevel: 'warn',
  dir: 'pact/pacts/',
  spec: 2,
});

setJwt('eyJhbGciOiJSUzI1NiIsImtpZCI6IjJjNmZhNmY1OTUwYTdjZTQ2NWZjZjI0N2FhMGIwOTQ4MjhhYzk1MmMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTA4NDg1OTQyNDcwOS10azg3NDVrMWQwYm5xZnZsbXNvYTBqM3VvNWJrbTl1bi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwODQ4NTk0MjQ3MDktdGs4NzQ1azFkMGJucWZ2bG1zb2EwajN1bzVia205dW4uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTMxMzYwNzQzNDQzNzQ5NDUxNjEiLCJoZCI6ImNhbGxpYnJpdHkuY29tIiwiZW1haWwiOiJjb2xsaW4uam9obnNvbkBjYWxsaWJyaXR5LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiV3U5WGNZdUhaaG5qbXJtRVNndjlTQSIsIm5hbWUiOiJDb2xsaW4gSm9obnNvbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHakxwX0FoT2FwZERic19yS1VCLU1YN24wVXoyRmhVOWxhMHVLUVg9czk2LWMiLCJnaXZlbl9uYW1lIjoiQ29sbGluIiwiZmFtaWx5X25hbWUiOiJKb2huc29uIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2MDEzODIxODksImV4cCI6MTYwMTM4NTc4OSwianRpIjoiZjYzMmY4ZTZjNTE5MTNmNzQzYTcxYTkyNmZjZDMyMmJjYzM4YmVhZCJ9.BpgyDdPFC5lYlYui3pbFDDX1JkpaJHz9DcjfPS07X7VkaI-JJPDORHTbKjUrhwni1jPr8v3yf1oWcyrxQe0omlBk16i48HrclwPeGOYiTrfqj6qm_uCS6OtCllBPtA59x4yvKR7sBkHv5wazcLwkYmTb8Lj4K2iLEI0uR7iXWwYDwbOAnpuJWc6CS0wpUP8uT_jIIgKZ1CSK9QaU4Ku_wp6f3hl-U2_2S341DAsOnh68woZrYdU12o3uNcDt2eXtzu_XpHS1zyyQlKzWAyOXlaQFXsTf1uvsSQZJuLj4hkDnPrwcm7oF5pFEAAlXM2gw0vx3IxFEsCBLirw17dFoQg');

describe('Pact testing', () => {
  beforeAll(() => provider.setup());
  afterEach(() => provider.verify());
  afterAll(() => provider.finalize());

  describe('getting details for the employee who makes the request', () => {
    test('employee exists', async () => {
      await provider.addInteraction({
        state: 'Employee Exists',
        uponReceiving: 'get requested employees details',
        withRequest: {
          method: 'GET',
          path: '/employee',
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: like({
            first_name: 'Collin', last_name: 'Johnson', role: 'Account Manager',
          }),
        },
      });
      console.log('mockService baseUrl from pact ', provider.mockService.baseUrl);
      const employee = await getEmployee({ url: provider.mockService.baseUrl });
      expect(employee).toStrictEqual({ 'first_name': 'Collin', 'last_name': 'Johnson', 'role': 'Account Manager' });
    });
  });
});
