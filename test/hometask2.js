import request from "../config/common";
const faker = require('faker');

import { expect } from "chai";


describe('Checking different Methods',()=>{

    describe('GET',()=>{
        it('checking GET api',async()=>{
            return request.get('api/users?page=2').then(async (res)=>{
                expect(res._body.total_pages).to.be.eq(2);
                expect(res._body.data.length).to.be.equal(6)
                expect(res.status).to.be.eq(200);
            })
            
        })
    })

    describe('POST',()=>{
        it('create user',async()=>{
            const data = {
                "name": faker.name.firstName(),
                "job": faker.name.jobType()

            }
            const pres = await request.post('api/users').send(data);
            console.log(await pres.body);
            expect(pres.body.name).to.be.eq(data.name);
            expect(pres.body.job).to.be.eq(data.job);
        })
    })

    describe('PUT',()=>{
        it('updates the data',async()=>{
            const data = {
                "name":faker.name.firstName(),
                "job" : faker.name.jobType()
            }
            const res = await request.put('api/users/2').send(data);
            expect(res.body.name).to.be.eq(data.name);
            expect(res.body.job).to.be.eq(data.job);
        })
    })
    describe.only('DELETE',()=>{
        it('deletes a data field',async()=>{
            return request
            .delete('users/2').then(res=>{
                expect(res.status).to.be.eq(204);
            })
        })
    })
})




