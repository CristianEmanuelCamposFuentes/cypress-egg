context('API Testing', () => {
    it('Test 01', () => {
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/films',
        }).then((response) => {
            console.log(response);

            // Verificaciones iniciales
            expect(response.status).to.eq(200);
            expect(response.body.results).to.have.length(6);
            expect(response.body.results[0]).to.have.property('title', 'A New Hope');
            expect(response.body.results[0]).to.have.property('episode_id', 4);

            // Obtener el primer personaje
            return response.body.results[0].characters[0];
        }).then(firstCharacter => {
            // Prueba para el primer personaje
            cy.request({
                method: 'GET',
                url: firstCharacter
            }).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('hair_color');

                // Prueba para cada planeta asociado al primer film
                response.body.films.forEach(film => {
                    cy.request({
                        method: 'GET',
                        url: film
                    }).then(filmResponse => {
                        expect(filmResponse.status).to.eq(200);
                        expect(filmResponse.body).to.have.property('title');
                    });
                });
            });
        });
    });
});

context('API Testing - Star Wars API', () => {
    it('Test 01 - Validate People/2 Endpoint', () => {
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people/2/'
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('skin_color', 'gold');
            expect(response.body.films).to.have.lengthOf(6);
        });
    });

    it('Test 02 - Validate Second Movie Endpoint', () => {
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people/2/'
        }).then((response) => {
            const secondMovieUrl = response.body.films[1]; // Assuming films array is zero-based
            cy.request({
                method: 'GET',
                url: secondMovieUrl
            }).then((movieResponse) => {
                expect(movieResponse.status).to.eq(200);
                // Validate release date format
                expect(movieResponse.body.release_date).to.match(/^\d{4}-\d{2}-\d{2}$/);
                // Validate response includes characters, planets, starships, vehicles, and species
                expect(movieResponse.body).to.include.keys('characters', 'planets', 'starships', 'vehicles', 'species');

                // Validate response includes all of the keys
                expect(movieResponse.body).to.have.all.keys('characters', 'planets', 'starships', 'vehicles', 'species', 'created', 'director', 'edited', 'episode_id', 'opening_crawl', 'producer', 'release_date', 'title', 'url');

                // Validate each element includes more than 1 element
                Object.values(movieResponse.body).forEach(element => {

                    if (Array.isArray(element)) {
                        expect(element).to.have.lengthOf.at.least(2);
                    }
                    // expect(element).to.be.an('array').and.to.have.lengthOf.at.least(2);
                });
            });
        });
    });

    it('Test 03 - Validate First Planet in Last Film', () => {
        // Assuming last film is /films/6/
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/films/6/'
        }).then((filmResponse) => {
            const firstPlanetUrl = filmResponse.body.planets[0];
            cy.request({
                method: 'GET',
                url: firstPlanetUrl
            }).then((planetResponse) => {
                expect(planetResponse.status).to.eq(200);
                // Validate gravity and terrains matching exact values using fixtures
                cy.fixture('planetData.json').then((planetData) => {
                    expect(planetResponse.body.gravity).to.eq(planetData.gravity);
                    expect(planetResponse.body.terrain).to.eq(planetData.terrain);
                });
                // Grab the URL element on the response
                const planetUrl = planetResponse.body.url;
                // Request the URL and validate the response being exactly the same
                cy.request({
                    method: 'GET',
                    url: planetUrl
                }).then((secondPlanetResponse) => {
                    expect(secondPlanetResponse.status).to.eq(200);
                    expect(secondPlanetResponse.body).to.deep.eq(planetResponse.body);
                });
            });
        });
    });

    it('Test 04 - Validate /films/7/ Endpoint (404)', () => {
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/films/7/',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});
