context('API Testing', () => {
    it('Test 01', () => {
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/films',
        }).then((response) => {
            console.log(response);

            expect(response.status).to.eq(200);
            expect(response.body.results).to.have.length(6);
            expect(response.body.results[0]).to.have.property('title', 'A New Hope')
            expect(response.body.results[0]).to.have.property('episode_id', 4)

            return response.body.results[0].characters[0];

        }).then(firstCaracter => {
            cy.request({
                method: 'GET',
                url: firstCaracter
            }).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body.films).to.have.length.of.at.least(1);
                expect(response.body).to.have.property('hair_color')
            })
        })
    });
})