const recetteQueries = require('./queries/RecetteQueries.js');

describe("Fetching recette", function () {

    let expectRecette = {
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

    test("Format de la recette", async function () {
        let recette = await recetteQueries.getRecetteComplete('Spaghetti_Carbonara');
        expect(recette.nom).toBe('Spaghetti Carbonara');
    });
});