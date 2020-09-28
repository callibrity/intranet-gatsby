import path from "path";
import {Pact} from "@pact-foundation/pact";
import {getEmployee} from './serviceCalls';
import {eachLike, like} from '@pact-foundation/pact/dsl/matchers';
import { setJwt, removeJwt } from '@api/api';
import { set } from "lodash";

const provider = new Pact({
    consumer: 'IntranetFrontend',
    provider: 'EmployeeAPI',
    log: '../../pact/logs/pact.log',
    logLevel: 'warn',
    dir: '../../pact/pacts/',
    spec: 2
});

setJwt('PactTestJWTToken');

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
                    path: '/api/products'
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: like({
                        username: 'testUsername',
                        userEmail: 'testUserEmail',
                        userRole: 'testUserRole',
                      })
                }
            });
            const employee = await getEmployee('/employee')
            expect(employee).toStrictEqual({
                'username': 'testUsername',
                'userEmail': 'testUserEmail',
                'userRole': 'testUserRole',
              })
        })
    })
}