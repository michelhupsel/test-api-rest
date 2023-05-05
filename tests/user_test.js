Feature('user');

Scenario('GET', ({ I }) => {
    I.sendGetRequest('/api/v3/user/michelsilva')
    I.seeResponseCodeIs(200)
    I.seeResponseValidByCallback(({ data, expect }) => {
        expect(data.username).to.be.equal('michelsilva')
    })
});

Scenario('POST cadastrar usuario', ({ I }) => {
    I.sendPostRequest('/api/v3/user', {
        "id": "1",
        "username": "michelsilva",
        "firstName": "Michel",
        "lastName": "Silva",
        "email": "michel@email.com",
        "password": "12345",
        "phone": "12345",
        "userStatus": "1"
    })
    I.seeResponseCodeIs(200)
    // I.seeResponseContainsJson({ "password": "12345" })
    I.seeResponseValidByCallback(({ data, expect }) => {
        I.sendGetRequest(`/api/v3/user/${data.username}`)
        I.seeResponseCodeIs(200)
        I.seeResponseValidByCallback(({data,expect})=>{
            expect(data.username).to.be.equal('michelsilva')
        })
    })
})