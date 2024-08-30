const request = require('supertest');
const app = require('./app');
const pool = require('./queries/DBPool.js');


describe("e2e tests", function () {

    let server;

    beforeAll(() => {
       server = app.listen(3000, () => console.log("Le serveur roule sur le port 3000"));
    })

    afterAll((done) => {
        server.close(done);
    })

    beforeEach(() => {
      jest.resetAllMocks();
    })

    test("Page Accueil", async () => {

          let expected = [
            {
              id: 'biscuit_chocolat',
              name: 'Biscuits aux pépites de chocolat',
              desc: 'Découvrez des cookies aux pépites de chocolat irrésistibles, parfaits pour combler vos envies de douceur...',
              image: '/images/biscuit_chocolat.jpeg'
            },
            {
              id: 'crèpe_yogourt',
              name: 'Crèpes aux yogourt grec',
              desc: 'Savourez des pancakes légers et moelleux, enrichis de yaourt grec pour une texture délicieusement tendre...',
              image: '/images/crèpe_yogourt.jpeg'
            },
            {
              id: 'Salade_caprese',
              name: 'Salade caprese',
              desc: 'Découvrez la fraîcheur de la salade Caprese, une entrée classique et élégante qui met en avant la simplicité des ingrédients...',
              image: '/images/Salade_caprese.jpeg'
            },
            {
              id: 'Salade_Quinoa',
              name: 'Salade de quinoa avec vinaigrette au citron',
              desc: "Cette salade de quinoa est légère et citronnée, idéale pour un excellent repas d'été...",
              image: '/images/Salade_Quinoa.jpeg'
            },
            {
              id: 'Saumon_citron_aneth',
              name: 'Saumon au citron et aneth',
              desc: "Savourez un saumon délicatement parfumé, cuit au four avec des tranches de citron et de l'aneth frais.",
              image: '/images/Saumon_citron_aneth.jpeg'
            },
            {
              id: 'Saute_legumes',
              name: 'Sauté de légumes',
              desc: 'Découvrez une recette savoureuse et rapide à réaliser avec un mélange de légumes frais sautés...',
              image: '/images/Saute_legumes.jpeg'
            },
            {
              id: 'soupe_poulet_legume',
              name: 'Soupe au poulet et légumes',
              desc: 'Savourez une soupe réconfortante et nourrissante, parfaite pour les jours frais...',
              image: '/images/soupe_poulet_legume.jpeg'
            },
            {
              id: 'Spaghetti_Carbonara',
              name: 'Spaghetti Carbonara',
              desc: 'Ce spaghetti à la carbonara est un plat de spaghettis « bacon et œuf » classique et très riche, idéal à servir en compagnie...',
              image: '/images/Spaghetti_Carbonara.jpeg'
            },
            {
              id: 'Tacos_Boeuf',
              name: 'Tacos au boeuf',
              desc: "Ces tacos au bœuf sont une option délicieuse et pratique pour un repas rapide. La viande de bœuf hachée est cuite avec des oignons et de l'ail, puis assaisonnée avec un mélange spécial pour tacos...",
              image: '/images/Tacos_Boeuf.jpeg'
            },
            {
              id: 'Tikka_Masala',
              name: 'Poulet Tikka Masala',
              desc: 'Poulet tikka masala simplifié avec cette recette au goût délicieux...',
              image: '/images/Tikka_Masala.jpeg'
            }
          ]

          const response = await request(app).get('/recettes');
          expect(response.status).toBe(200);
          expect(response.body).toStrictEqual(expected)
    })

    test("envoyer une note", async () => {
      const note = {
        id_recette: "biscuit_chocolat",
        id_utilisateur: "patate25",
        note: "3"
      }

      const response = await request(app)
      .post('/note')
      .send(note)
      .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
    })


    test("chercher une note", async () => {

        const response = await request(app).get('/note/'+ "biscuit_chocolat");
        expect(response.status).toBe(200);
        expect(response.body).toBe(3);
        pool.query('DELETE FROM note WHERE id_utilisateurs = $1', ['patate25']);
    })

    test("envoyer un commentaire", async () => {

      const envoiCommentaire = {
        id_recette: "biscuit_chocolat",
        id_utilisateur: "patate25",
        commentaire: "Superbe recette"
      }

      const response = await request(app)
      .post('/commentaire')
      .send(envoiCommentaire)
      .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      pool.query('DELETE FROM commentaires WHERE id_utilisateurs = $1', ['patate25']);
    })

    test("login avec bon credentials", async () => {
      const user = {
        id_utilisateur: "admin",
        motDePasse: "12345"
      }

      const response = await request(app)
      .get('/login')
      .set('Authorization', `Basic ${Buffer.from(`${user.id_utilisateur}:${user.motDePasse}`).toString('base64')}`)

      expect(response.status).toBe(200);
    })

    test("login avec mauvais credentials", async () => {
      const user = {
        id_utilisateur: "admin",
        motDePasse: "123"
      }

      const response = await request(app)
      .get('/login')
      .set('Authorization', `Basic ${Buffer.from(`${user.id_utilisateur}:${user.motDePasse}`).toString('base64')}`)

      expect(response.status).toBe(401);
    })

    test("Inscription", async () => {
      const user = {
        id_utilisateur: "patate_pouelle",
        nom: "bob gratton",
        motDePasse: "123",
        admin: false
      }

      const response = await request(app)
      .post('/inscription')
      .send(user)
      .set('Content-Type', 'application/json')

      expect(response.status).toBe(200);
      pool.query('DELETE FROM utilisateurs WHERE id_utilisateurs = $1', ['patate_pouelle']);
    })

    test("recette complète", async () => {
      const response = await request(app).get('/recettes/' + "crèpe_yogourt");

      expect(response.status).toBe(200);
    })

    test("fausse recette", async () => {
      const response = await request(app).get('/recettes/' + "patate_roti");

      expect(response.status).toBe(500);
    })

    test("fetch image", async () => {
      const response = await request(app).get('/recettes/images/' + "crèpe_yogourt");
      
      expect(response.status).toBe(200);
    })

    test("nouvelle recette", async () => {
      const newRecipe = {
        id: 'patate',
        nom_recette: 'patate roti',
        cuisson: 30,
        preparation: 20,
        portions: 4,
        description: 'Une recette test de patate roti',
        ingredients: [{ nom: 'patate', quantier: 100, mesure: 'g' }],
        etapes: [{ description: 'cuire patate' }]
    };

    const response = await request(app)
    .put('/recettes')
    .send(newRecipe)
    .set('Content-Type', 'application/json')

    expect(response.status).toBe(200);
    pool.query('DELETE FROM recettes WHERE id_recette = $1', ['patate']);
    })

})