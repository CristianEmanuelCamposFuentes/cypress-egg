describe('Predictor de edad', () => {
    const endpoint = 'https://api.agify.io'
    const oUrl = 'https://api.agify.io?name=juan';

    it('Verificar la data devuelta', () => {
        const parametro = 'name';
        const name = 'juan';

        cy.request(`${endpoint}?${parametro}=${name}`).then((respuesta) => {
            console.log(respuesta);
            cy.wait(10000);
        })
    });
})