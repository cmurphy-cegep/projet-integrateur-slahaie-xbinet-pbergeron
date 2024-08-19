const recetteQueries = require('./queries/RecetteQueries.js');

const pool = require('./queries/DBPool.js');

describe("Fetching recette", function () {
    let expecteRecette = {
        nom: 'Spaghetti Carbonara',
        image: '/images/Spaghetti_Carbonara.jpeg',
        tempsDePrep: 20,
        tempsDeCuit: 20,
        portion: 8,
        description: 'Ce spaghetti à la carbonara est un plat de spaghettis « bacon et œuf » classique et très riche, idéal à servir en compagnie. Cette recette constitue également une offre de brunch inhabituelle.',
        ingredients: [
          { nom: 'fromage parmesan', quantier: '50.00', mesure: 'gramme' },
          { nom: 'gousses d’ail', quantier: '2.00', mesure: null },
          { nom: 'œufs larges', quantier: '2.00', mesure: null },
          { nom: 'pancetta', quantier: '100.00', mesure: 'gramme' },
          { nom: 'Persil frais', quantier: null, mesure: null },
          { nom: 'Poivre', quantier: null, mesure: null },
          { nom: 'Sel', quantier: null, mesure: null },
          { nom: 'Spaghetti', quantier: '200.00', mesure: 'gramme' }
        ],
        etapes: [
          {
            description: "Faites cuire les spaghettis selon les instructions du paquet. Égouttez, en réservant une tasse d'eau de cuisson des pâtes.",
            ordre_etape: 1
          },
          {
            description: "Dans une poêle, faites cuire la pancetta jusqu'à ce qu'elle soit croustillante. Ajoutez l'ail et faites cuire encore une minute.",
            ordre_etape: 2
          },
          {
            description: 'Dans un bol, battez les œufs et le fromage Parmesan ensemble.',
            ordre_etape: 3
          },
          {
            description: "Mélangez les pâtes chaudes avec la pancetta et l'ail. Retirez du feu et incorporez rapidement le mélange d'œufs, en ajoutant l'eau de cuisson réservée petit à petit jusqu'à ce que le mélange soit crémeux.",
            ordre_etape: 4
          },
          {
            description: 'Assaisonnez avec du sel et du poivre, garnissez de persil et servez.',
            ordre_etape: 5
          }
        ]
      }

    beforeAll(function() {
      jest.mock("./queries/RecetteQueries", () => ({
        pool: {
          query: (a) => {
            if(a.includes('FROM Recettes')){
              return {
                rows: [
                  {
                    id_recette: 'Spaghetti_Carbonara',
                    nom_recette: 'Spaghetti Carbonara',
                    description_courte: 'Ce spaghetti à la carbonara est un plat de spaghettis « bacon et œuf » classique et très riche, idéal à servir en compagnie...',
                    description: 'Ce spaghetti à la carbonara est un plat de spaghettis « bacon et œuf » classique et très riche, idéal à servir en compagnie. Cette recette constitue également une offre de brunch inhabituelle.',
                    temps_preparation: 20,
                    temps_cuisson: 20,
                    nb_portions: 8,
                    image: 'Spaghetti_Carbonara.jpeg'
                  }
                ]}
            }else if(a.includes('FROM liste_ingredient')){
              return {
                rows: [
                {
                  id_recette: 'Spaghetti_Carbonara',
                  'id_ingrédients': 'Parmesan',
                  quantite: '50.00',
                  mesure: 'gramme',
                  nom_ingredient: 'fromage parmesan'
                },
                {
                  id_recette: 'Spaghetti_Carbonara',
                  'id_ingrédients': 'Ail',
                  quantite: '2.00',
                  mesure: null,
                  nom_ingredient: 'gousses d’ail'
                },
                {
                  id_recette: 'Spaghetti_Carbonara',
                  'id_ingrédients': 'œufs',
                  quantite: '2.00',
                  mesure: null,
                  nom_ingredient: 'œufs larges'
                },
                {
                  id_recette: 'Spaghetti_Carbonara',
                  'id_ingrédients': 'Pancetta',
                  quantite: '100.00',
                  mesure: 'gramme',
                  nom_ingredient: 'pancetta'
                },
                {
                  id_recette: 'Spaghetti_Carbonara',
                  'id_ingrédients': 'Persil',
                  quantite: null,
                  mesure: null,
                  nom_ingredient: 'Persil frais'
                },
                {
                  id_recette: 'Spaghetti_Carbonara',
                  'id_ingrédients': 'Poivre',
                  quantite: null,
                  mesure: null,
                  nom_ingredient: 'Poivre'
                },
                {
                  id_recette: 'Spaghetti_Carbonara',
                  'id_ingrédients': 'Sel',
                  quantite: null,
                  mesure: null,
                  nom_ingredient: 'Sel'
                },
                {
                  id_recette: 'Spaghetti_Carbonara',
                  'id_ingrédients': 'Spaghetti',
                  quantite: '200.00',
                  mesure: 'gramme',
                  nom_ingredient: 'Spaghetti'
                }
              ]
            }
            }else if(a.includes('FROM liste_etapes')){
              return { 
                rows: [
                  {
                    id_recette: 'Spaghetti_Carbonara',
                    id_etape: '1-Spaghetti_Carbonara',
                    description: "Faites cuire les spaghettis selon les instructions du paquet. Égouttez, en réservant une tasse d'eau de cuisson des pâtes.",
                    ordre_etape: 1
                  },
                  {
                    id_recette: 'Spaghetti_Carbonara',
                    id_etape: '2-Spaghetti_Carbonara',
                    description: "Dans une poêle, faites cuire la pancetta jusqu'à ce qu'elle soit croustillante. Ajoutez l'ail et faites cuire encore une minute.",
                    ordre_etape: 2
                  },
                  {
                    id_recette: 'Spaghetti_Carbonara',
                    id_etape: '3-Spaghetti_Carbonara',
                    description: 'Dans un bol, battez les œufs et le fromage Parmesan ensemble.',
                    ordre_etape: 3
                  },
                  {
                    id_recette: 'Spaghetti_Carbonara',
                    id_etape: '4-Spaghetti_Carbonara',
                    description: "Mélangez les pâtes chaudes avec la pancetta et l'ail. Retirez du feu et incorporez rapidement le mélange d'œufs, en ajoutant l'eau de cuisson réservée petit à petit jusqu'à ce que le mélange soit crémeux.",
                    ordre_etape: 4
                  },
                  {
                    id_recette: 'Spaghetti_Carbonara',
                    id_etape: '5-Spaghetti_Carbonara',
                    description: 'Assaisonnez avec du sel et du poivre, garnissez de persil et servez.',
                    ordre_etape: 5
                  }
                ]
              }
            }
          }
        }
      }));
    })

    test("Format de la recette", async function () {
      let recette = await recetteQueries.getRecetteComplete('Spaghetti_Carbonara');
      expect(recette).toStrictEqual(expecteRecette);
    });

    afterAll(function() {
      pool.end();
    })
});
