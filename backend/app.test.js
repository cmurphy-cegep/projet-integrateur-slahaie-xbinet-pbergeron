const recetteQueries = require('./queries/RecetteQueries.js');

const pool = require('./queries/DBPool.js');

jest.mock('./queries/DBPool.js');

describe("Fetching all recettes", function () {
  test("get de la recette", async function () {
    pool.query.mockResolvedValue({
      rows: [
      {
        id_recette: 'biscuit_chocolat',
        nom_recette: 'Biscuits aux pépites de chocolat',
        description_courte: 'Découvrez des cookies aux pépites de chocolat irrésistibles, parfaits pour combler vos envies de douceur...',
        image: 'biscuit_chocolat.jpeg'
      },
      {
        id_recette: 'crèpe_yogourt',
        nom_recette: 'Crèpes aux yogourt grec',
        description_courte: 'Savourez des pancakes légers et moelleux, enrichis de yaourt grec pour une texture délicieusement tendre...',
        image: 'crèpe_yogourt.jpeg'
      },
      {
        id_recette: 'Salade_caprese',
        nom_recette: 'Salade caprese',
        description_courte: 'Découvrez la fraîcheur de la salade Caprese, une entrée classique et élégante qui met en avant la simplicité des ingrédients...',
        image: 'Salade_caprese.jpeg'
      },
      {
        id_recette: 'Salade_Quinoa',
        nom_recette: 'Salade de quinoa avec vinaigrette au citron',
        description_courte: "Cette salade de quinoa est légère et citronnée, idéale pour un excellent repas d'été...",
        image: 'Salade_Quinoa.jpeg'
      },
      {
        id_recette: 'Saumon_citron_aneth',
        nom_recette: 'Saumon au citron et aneth',
        description_courte: "Savourez un saumon délicatement parfumé, cuit au four avec des tranches de citron et de l'aneth frais.",
        image: 'saumon_citron_aneth.jpeg'
      },
      {
        id_recette: 'Saute_legumes',
        nom_recette: 'Sauté de légumes',
        description_courte: 'Découvrez une recette savoureuse et rapide à réaliser avec un mélange de légumes frais sautés...',
        image: 'saute_legumes.jpeg'
      },
      {
        id_recette: 'soupe_poulet_legume',
        nom_recette: 'Soupe au poulet et légumes',
        description_courte: 'Savourez une soupe réconfortante et nourrissante, parfaite pour les jours frais...',
        image: 'soupe_poulet_legume.jpeg'
      },
      {
        id_recette: 'Spaghetti_Carbonara',
        nom_recette: 'Spaghetti Carbonara',
        description_courte: 'Ce spaghetti à la carbonara est un plat de spaghettis « bacon et œuf » classique et très riche, idéal à servir en compagnie...',
        image: 'Spaghetti_Carbonara.jpeg'
      },
      {
        id_recette: 'Tacos_Boeuf',
        nom_recette: 'Tacos au boeuf',
        description_courte: "Ces tacos au bœuf sont une option délicieuse et pratique pour un repas rapide. La viande de bœuf hachée est cuite avec des oignons et de l'ail, puis assaisonnée avec un mélange spécial pour tacos...",
        image: 'Tacos_Boeuf.jpeg'
      },
      {
        id_recette: 'Tikka_Masala',
        nom_recette: 'Poulet Tikka Masala',
        description_courte: 'Poulet tikka masala simplifié avec cette recette au goût délicieux...',
        image: 'Tikka_Masala.jpeg'
      }
    ]})
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
    let recette = await recetteQueries.getAllRecettes();
    expect(recette).toStrictEqual(expected);
  });

  afterAll(async () => {
    pool.query.mockRestore();
  });
})

describe('fetching image', function () {

  test('fetching image with existing image', async function () {
    pool.query.mockResolvedValue({rows:['biscuit_chocolat.jpeg']});
    let image = 'biscuit_chocolat.jpeg';
    let result = recetteQueries.getRecetteImageContent()
  });
  afterAll(async () => {
    pool.query.mockRestore();
  });
})