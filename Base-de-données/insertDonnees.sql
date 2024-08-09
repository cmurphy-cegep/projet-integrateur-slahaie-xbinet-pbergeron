DELETE FROM Recettes;
DELETE FROM ingrédients;
DELETE FROM liste_ingredient;
DELETE FROM etapes;
DELETE FROM liste_etapes;
DELETE FROM utilisateurs;

Insert INTO Recettes (id_recette, nom_recette, description_courte,
 description, temps_preparation, temps_cuisson, nb_portions, image)
 VALUES 
 ('Spaghetti_Carbonara', 'Spaghetti Carbonara', 'Ce spaghetti à la carbonara est un plat de spaghettis « bacon et œuf » classique et très riche, idéal à servir en compagnie...',
 'Ce spaghetti à la carbonara est un plat de spaghettis « bacon et œuf » classique et très riche, idéal à servir en compagnie. Cette recette constitue également une offre de brunch inhabituelle.',
 20, 20, 8, 'Spaghetti_Carbonara.jpeg'),
 ('Tikka_Masala', 'Poulet Tikka Masala', 'Poulet tikka masala simplifié avec cette recette au goût délicieux...',
 'Poulet tikka masala simplifié avec cette recette au goût délicieux : il suffit de faire mariner le poulet dans du yaourt et des épices, puis de mijoter dans une sauce à la tomate et à la crème. Servez avec du riz ou du pain pita chaud.',
 30, 50, 4, 'Tikka_Masala.jpeg'),
 ('Salade_Quinoa', 'Salade de quinoa avec vinaigrette au citron', 'Cette salade de quinoa est légère et citronnée, idéale pour un excellent repas d''été...',
 'Cette salade de quinoa est légère et citronnée, idéale pour un excellent repas d''été. Elle est facile à préparer et offre une nouvelle façon de déguster le quinoa. Le jus de lime ajoute une touche rafraîchissante à cette dernière.',
 20, 15, 6, 'Salade_Quinoa.jpeg'),
 ('Tacos_Boeuf', 'Tacos au boeuf', 'Ces tacos au bœuf sont une option délicieuse et pratique pour un repas rapide. La viande de bœuf hachée est cuite avec des oignons et de l''ail, puis assaisonnée avec un mélange spécial pour tacos...',
 'Ces tacos au bœuf sont une option délicieuse et pratique pour un repas rapide. La viande de bœuf hachée est cuite avec des oignons et de l''ail, puis assaisonnée avec un mélange spécial pour tacos. La garniture est ensuite servie dans des coquilles à tacos ou des tortillas. Vous pouvez personnaliser vos tacos avec une variété de garnitures telles que laitue râpée, tomates en dés, fromage, salsa et crème aigre. Parfait pour un repas convivial et plein de saveurs!',
 10, 20, 4, 'Tacos_Boeuf.jpeg'),
 ('Saute_legumes', 'Sauté de légumes', 'Découvrez une recette savoureuse et rapide à réaliser avec un mélange de légumes frais sautés...',
 'Découvrez une recette savoureuse et rapide à réaliser avec un mélange de légumes frais sautés. Cette préparation met en valeur la texture croquante des légumes tout en les enrobant d''une sauce délicieusement parfumée. Le résultat est un plat équilibré, parfait pour un repas léger ou comme accompagnement. Servez-le sur un lit de riz ou de nouilles pour un repas complet et satisfaisant.',
 10, 10, 6, 'saute_legumes.jpeg'),
 ('Saumon_citron_aneth', 'Saumon au citron et aneth', 'Savourez un saumon délicatement parfumé, cuit au four avec des tranches de citron et de l''aneth frais.',
 'Savourez un saumon délicatement parfumé, cuit au four avec des tranches de citron et de l''aneth frais. Ce plat simple mais élégant offre une combinaison parfaite de saveurs, où le saumon tendre est sublimé par la fraîcheur du citron et la douceur de l''aneth. Idéal pour un dîner léger et raffiné, il est également facile à préparer, faisant de chaque bouchée une véritable expérience gustative.',
 10, 25, 4, 'saumon_citron_aneth.jpeg'),
 ('Salade_caprese', 'Salade caprese', 'Découvrez la fraîcheur de la salade Caprese, une entrée classique et élégante qui met en avant la simplicité des ingrédients...',
 'Découvrez la fraîcheur de la salade Caprese, une entrée classique et élégante qui met en avant la simplicité des ingrédients. Composée de tomates mûres, de mozzarella crémeuse et de feuilles de basilic frais, elle est sublimée par un léger filet d''huile d''olive et un glaçage balsamique. Ce plat raffiné offre un équilibre parfait entre les saveurs sucrées, salées et acidulées, pour un goût authentique et délicat. Idéal pour une présentation sophistiquée lors de vos repas d''été ou d''occasion spéciale.',
 10, 10, 4, 'Salade_caprese.jpeg'),
 ('soupe_poulet_legume', 'Soupe au poulet et légumes', 'Savourez une soupe réconfortante et nourrissante, parfaite pour les jours frais...',
 'Savourez une soupe réconfortante et nourrissante, parfaite pour les jours frais. Cette soupe allie tendres morceaux de poulet aux légumes savoureux dans un bouillon riche et parfumé. La combinaison de légumes frais et de poulet tendre offre une expérience gustative chaleureuse et équilibrée, idéale pour une entrée réconfortante ou un plat principal léger. Chaque cuillerée est un mélange harmonieux de saveurs et de textures qui ravira les amateurs de plats faits maison.',
 25, 50, 4, 'soupe_poulet_legume.jpeg'),
 ('biscuit_chocolat', 'Biscuits aux pépites de chocolat', 'Découvrez des cookies aux pépites de chocolat irrésistibles, parfaits pour combler vos envies de douceur...',
 'Découvrez des cookies aux pépites de chocolat irrésistibles, parfaits pour combler vos envies de douceur. Ces biscuits classiques allient une texture croustillante à l''extérieur et moelleuse à l''intérieur, avec une généreuse quantité de pépites de chocolat fondantes. Chaque bouchée est un véritable délice sucré, idéal pour une pause gourmande ou pour partager avec des amis et la famille. Parfaits pour accompagner une tasse de thé ou de café, ces cookies feront le bonheur de tous les amateurs de pâtisseries maison.',
 20, 10, 48, 'biscuit_chocolat.jpeg'),
 ('crèpe_yogourt', 'Crèpes aux yogourt grec', 'Savourez des pancakes légers et moelleux, enrichis de yaourt grec pour une texture délicieusement tendre...',
 'Savourez des pancakes légers et moelleux, enrichis de yaourt grec pour une texture délicieusement tendre. Ces crêpes sont parfaites pour commencer la journée sur une note gourmande, offrant un goût légèrement acidulé et une richesse en protéines grâce au yaourt. Chaque pancake, doré à la perfection, se prête idéalement à toutes sortes de garnitures, des fruits frais aux sirops savoureux. Idéals pour un petit-déjeuner ou un brunch en famille, ces pancakes feront le bonheur des amateurs de douceurs matinaux.',
 5, 10, 4, 'crèpe_yogourt.jpeg');
 
 INSERT INTO ingrédients (id_ingrédients, nom_ingredient)
 VALUES ('Spaghetti', 'Spaghetti'),
 ('Pancetta', 'pancetta'),
 ('œufs', 'œufs larges'),
 ('Parmesan', 'fromage parmesan'),
 ('Ail', 'gousses d’ail'),
 ('Sel', 'Sel'),
 ('Poivre', 'Poivre'),
 ('Persil', 'Persil frais'),
 ('Poulet', 'poitrines de poulet'),
 ('Yogourt', 'yogourt grec'),
 ('Tikka_Masala', 'pâte de tikka masala'),
 ('Oignon', 'oignon'),
 ('Tomates_conserve', 'tomates en dés'),
 ('Creme_cuisson', 'crème à cuisson'),
 ('Coriandre', 'Coriandre fraîche'),
 ('Quinoa', 'Quinoa'),
 ('Eau', 'Eau'),
 ('Concombre', 'concombre'),
 ('Poivron', 'poivron'),
 ('Tomates_Cerises', 'tomates cerises'),
 ('Oignon_Rouge', 'oignon rouge'),
 ('Feta', 'fromage feta'),
 ('Huile_Olive', 'huile d''olive'),
 ('Citron', 'citron'),
 ('Boeuf', 'Boeuf Haché'),
 ('assaisonement', 'Assaisonement à tacos'),
 ('tacos', 'coquilles à tacos'),
 ('laitue', 'laitue'),
 ('tomate', 'tomate'),
 ('fromage', 'fromage'),
 ('salsa', 'salsa'),
 ('crème_sure', 'crème sûre'),
 ('legumes', 'légumes mixtes'),
 ('sauce_soya', 'sauce soya'),
 ('sauce_hoisin', 'sauce hoisin'),
 ('riz', 'riz'),
 ('saumon', 'saumon'),
 ('aneth', 'aneth'),
 ('mozzarella', 'mozzarella'),
 ('basilic', 'basilic'),
 ('glacage_balsamique', 'glaçage de balasamique'),
 ('carotte', 'carotte'),
 ('celeri', 'celeri'),
 ('bouillon_poulet', 'bouillon de poulet'),
 ('pois', 'pois vert'),
 ('laurier', 'feuille de laurier'),
 ('beurre', 'beurre'),
 ('sucre', 'sucre'),
 ('cassonade', 'cassonade'),
 ('farine', 'farine tout-usage'),
 ('poudre_pate', 'Poudre à pâte'),
 ('chocolat', 'pépites de chocolat'),
 ('lait', 'lait');
 


 INSERT INTO liste_ingredient (id_recette, id_ingrédients, quantite, mesure)
 VALUES ('Spaghetti_Carbonara', 'Spaghetti', 200, 'gramme'),
 ('Spaghetti_Carbonara', 'Pancetta', 100, 'gramme'),
 ('Spaghetti_Carbonara', 'œufs', 2, null),
 ('Spaghetti_Carbonara', 'Parmesan', 50, 'gramme'),
 ('Spaghetti_Carbonara', 'Ail', 2, null),
 ('Spaghetti_Carbonara', 'Sel', null, null),
 ('Spaghetti_Carbonara', 'Poivre', null, null),
 ('Spaghetti_Carbonara', 'Persil', null, null),
 ('Tikka_Masala', 'Poulet', 500, 'gramme'),
 ('Tikka_Masala', 'Yogourt', 200, 'gramme'),
 ('Tikka_Masala', 'Tikka_Masala', 2, 'cuillères à soupe'),
 ('Tikka_Masala', 'Oignon', 1, null),
 ('Tikka_Masala', 'Tomates_conserve', 400, 'gramme'),
 ('Tikka_Masala', 'Creme_cuisson', 200, 'millilitres'),
 ('Tikka_Masala', 'Coriandre', null, null),
 ('Tikka_Masala', 'Ail', 2, null),
 ('Salade_Quinoa', 'Sel', null, null),
 ('Salade_Quinoa', 'Quinoa', 1, 'tasse'),
 ('Salade_Quinoa', 'Eau', 2, 'tasse'),
 ('Salade_Quinoa', 'Concombre', 1, null),
 ('Salade_Quinoa', 'Poivron', 1, null),
 ('Salade_Quinoa', 'Tomates_Cerises', 1, 'tasse'),
 ('Salade_Quinoa', 'Oignon_Rouge', 60, 'millilitres'),
 ('Salade_Quinoa', 'Feta', 60, 'millilitres'),
 ('Salade_Quinoa', 'Huile_Olive', 60, 'millilitres'),
 ('Salade_Quinoa', 'Citron', 1, null),
 ('Salade_Quinoa', 'Poivre', null, null),
 ('Tacos_Boeuf', 'Boeuf', 500, 'gramme'),
 ('Tacos_Boeuf', 'Oignon', 1, null),
 ('Tacos_Boeuf', 'Ail', 2, null),
 ('Tacos_Boeuf', 'assaisonement', 1, 'sachet'),
 ('Tacos_Boeuf', 'Eau', 125, 'millilitres'),
 ('Tacos_Boeuf', 'tacos', null, null),
 ('Tacos_Boeuf', 'laitue', null, null),
 ('Tacos_Boeuf', 'tomate', null, null),
 ('Tacos_Boeuf', 'fromage', null, null),
 ('Tacos_Boeuf', 'salsa', null, null),
 ('Tacos_Boeuf', 'crème_sure', null, null),
 ('Saute_legumes', 'legumes', 2, 'tasses'),
 ('Saute_legumes', 'sauce_soya', 2, 'cuillères à soupe'),
 ('Saute_legumes', 'sauce_hoisin', 1, 'cuillères à soupe'),
 ('Saute_legumes', 'Huile_Olive', 1, 'cuillères à soupe'),
 ('Saute_legumes', 'Ail', 1, null),
 ('Saute_legumes', 'riz', null, null),
 ('Saumon_citron_aneth', 'saumon', 4, null),
 ('Saumon_citron_aneth', 'Citron', 1, null),
 ('Saumon_citron_aneth', 'aneth', 2, 'cuillères à soupe'),
 ('Saumon_citron_aneth', 'Huile_Olive', 2, 'cuillères à soupe'),
 ('Saumon_citron_aneth', 'Sel', null, null),
 ('Saumon_citron_aneth', 'Poivre', null, null),
 ('Salade_caprese', 'tomate', 4, null),
 ('Salade_caprese', 'mozzarella', 200, 'gramme'),
 ('Salade_caprese', 'basilic', null, null),
 ('Salade_caprese', 'glacage_balsamique', 2, 'cuillères à soupe'),
 ('Salade_caprese', 'Huile_Olive', 2, 'cuillères à soupe'),
 ('Salade_caprese', 'Sel', null, null),
 ('Salade_caprese', 'Poivre', null, null),
 ('soupe_poulet_legume', 'Poulet', 500, 'gramme'),
 ('soupe_poulet_legume', 'Oignon', 1, null),
 ('soupe_poulet_legume', 'carotte', 2, null),
 ('soupe_poulet_legume', 'celeri', 2, null),
 ('soupe_poulet_legume', 'Ail', 1, null),
 ('soupe_poulet_legume', 'bouillon_poulet', 1, 'litre'),
 ('soupe_poulet_legume', 'pois', 1, 'tasse'),
 ('soupe_poulet_legume', 'laurier', 1, null),
 ('soupe_poulet_legume', 'Sel', null, null),
 ('soupe_poulet_legume', 'Poivre', null, null),
 ('biscuit_chocolat', 'beurre', 1, 'tasse'),
 ('biscuit_chocolat', 'sucre', 1, 'tasse'),
 ('biscuit_chocolat', 'cassonade', 1, 'tasse'),
 ('biscuit_chocolat', 'œufs', 2, null),
 ('biscuit_chocolat', 'farine', 560, 'millilitres'),
 ('biscuit_chocolat', 'poudre_pate', 1, 'cuillère à thé'),
 ('biscuit_chocolat', 'Sel', 0.5, 'cuillère à thé'),
 ('biscuit_chocolat', 'chocolat', 1, 'tasse'),
 ('crèpe_yogourt', 'farine', 1, 'tasse'),
 ('crèpe_yogourt', 'sucre', 2, 'cuillères à soupe'),
 ('crèpe_yogourt', 'poudre_pate', 1, 'cuillère à soupe'),
 ('crèpe_yogourt', 'Sel', 0.5, 'cuillère à thé'),
 ('crèpe_yogourt', 'Yogourt', 1, 'tasse'),
 ('crèpe_yogourt', 'lait', 125, 'millilitres'),
 ('crèpe_yogourt', 'œufs', 1, null),
 ('crèpe_yogourt', 'beurre', 2, 'cuillère à soupe');


 INSERT INTO etapes (id_etape, description, ordre_etape)
 VALUES ('1-Spaghetti_Carbonara', 'Faites cuire les spaghettis selon les instructions du paquet. Égouttez, en réservant une tasse d''eau de cuisson des pâtes.',
 1),
 ('2-Spaghetti_Carbonara', 'Dans une poêle, faites cuire la pancetta jusqu''à ce qu''elle soit croustillante. Ajoutez l''ail et faites cuire encore une minute.',
 2),
 ('3-Spaghetti_Carbonara', 'Dans un bol, battez les œufs et le fromage Parmesan ensemble.',
 3),
 ('4-Spaghetti_Carbonara', 'Mélangez les pâtes chaudes avec la pancetta et l''ail. Retirez du feu et incorporez rapidement le mélange d''œufs, en ajoutant l''eau de cuisson réservée petit à petit jusqu''à ce que le mélange soit crémeux.',
 4),
 ('5-Spaghetti_Carbonara', 'Assaisonnez avec du sel et du poivre, garnissez de persil et servez.',
 5),
 ('1-Tikka_Masala', 'Faites mariner le poulet dans du yaourt et de la pâte tikka masala pendant au moins 1 heure.',
 1),
 ('2-Tikka_Masala', 'Faites cuire le poulet mariné dans une poêle chaude jusqu''à ce qu''il soit doré et bien cuit. Réservez.',
 2),
 ('3-Tikka_Masala', 'Dans la même poêle, faites revenir les oignons et l''ail jusqu''à ce qu''ils soient tendres.',
 3),
 ('4-Tikka_Masala', 'Ajoutez les tomates et laissez mijoter pendant 10 minutes. Incorporez la crème et remettez le poulet dans la poêle.',
 4),
 ('5-Tikka_Masala', 'Faites cuire encore 5 minutes. Garnissez de coriandre et servez avec du riz ou du naan.',
 5),
('1-Salade_Quinoa', 'Faites cuire le quinoa dans l''eau selon les instructions du paquet. Laissez refroidir.',
1),
('2-Salade_Quinoa', 'Mélangez le quinoa avec les légumes et le fromage feta.',
2),
('3-Salade_Quinoa', 'Fouettez ensemble l''huile d''olive, le jus de citron, le sel et le poivre. Versez sur la salade et mélangez.',
3),
('1-Tacos_Boeuf', 'Faites cuire le bœuf avec les oignons et l''ail jusqu''à ce qu''il soit bien doré. Égouttez l''excès de graisse.',
1),
('2-Tacos_Boeuf', 'Ajoutez l''assaisonnement pour tacos et l''eau. Laissez mijoter jusqu''à ce que le mélange épaississe.',
2),
('3-Tacos_Boeuf', 'Servez dans des coquilles à tacos avec vos garnitures préférées.',
3),
('1-Saute_legumes', 'Faites chauffer l''huile d''olive dans une poêle. Ajoutez l''ail et faites cuire pendant 30 secondes.',
1),
('2-Saute_legumes', 'Ajoutez les légumes et faites-les sauter jusqu''à ce qu''ils soient croquants et tendres.',
2),
('3-Saute_legumes', 'Incorporez la sauce soja et la sauce hoisin. Faites cuire pendant encore une minute.',
3),
('4-Saute_legumes', 'Servez sur du riz ou des nouilles.',
4),
('1-Saumon_citron_aneth', 'Préchauffez le four à 180°C (350°F).',
1),
('2-Saumon_citron_aneth', 'Disposez le saumon sur une plaque de cuisson. Arrosez d''huile d''olive et assaisonnez avec du sel et du poivre.',
2),
('3-Saumon_citron_aneth', 'Garnissez de tranches de citron et d''aneth.',
3),
('4-Saumon_citron_aneth', 'Enfournez pendant 15-20 minutes, jusqu''à ce que le saumon soit bien cuit.',
4),
('1-Salade_caprese', 'Disposez les tranches de tomate et de mozzarella sur une assiette en les alternant.',
1),
('2-Salade_caprese', 'Garnissez de feuilles de basilic.',
2),
('3-Salade_caprese', 'Arrosez d''huile d''olive et de glaçage balsamique. Assaisonnez avec du sel et du poivre.',
3),
('1-soupe_poulet_legume', 'Faites revenir les oignons, les carottes, le céleri et l''ail dans une casserole jusqu''à ce qu''ils soient tendres.',
1),
('2-soupe_poulet_legume', 'Ajoutez le poulet et faites cuire jusqu''à ce qu''il ne soit plus rosé.',
2),
('3-soupe_poulet_legume', 'Versez le bouillon de poulet, ajoutez la feuille de laurier et portez à ébullition. Réduisez le feu et laissez mijoter pendant 20 minutes.',
3),
('4-soupe_poulet_legume', 'Incorporez les pois et faites cuire encore 5 minutes. Assaisonnez avec du sel et du poivre.',
4),
('1-biscuit_chocolat', 'Préchauffez le four à 180°C (350°F).',
1),
('2-biscuit_chocolat', 'Mélangez le beurre, le sucre et la cassonade ensemble. Incorporez les œufs.',
2),
('3-biscuit_chocolat', 'Mélangez la farine, la poudre à pâte et le sel. Ajoutez les pépites de chocolat.',
3),
('4-biscuit_chocolat', 'Mélangez les ingrédients secs avec les ingrédients humides',
4),
('5-biscuit_chocolat', 'Déposez des cuillerées de pâte sur une plaque de cuisson. Faites cuire pendant 10 à 12 minutes.',
5),
('1-crèpe_yogourt', 'Mélangez la farine, le sucre, la poudre à pâte et le sel dans un bol.',
1),
('2-crèpe_yogourt', 'Dans un autre bol, combinez le yaourt, le lait, l''œuf et le beurre fondu.',
2),
('3-crèpe_yogourt', 'Incorporez les ingrédients humides aux ingrédients secs jusqu''à ce que le mélange soit juste combiné.',
3),
('4-crèpe_yogourt', 'Faites cuire les pancakes sur une poêle chaude jusqu''à ce que des bulles se forment, puis retournez-les et faites cuire jusqu''à ce qu''ils soient dorés.',
4);


 INSERT INTO liste_etapes (id_recette, id_etape)
 VALUES ('Spaghetti_Carbonara', '1-Spaghetti_Carbonara'),
 ('Spaghetti_Carbonara', '2-Spaghetti_Carbonara'),
 ('Spaghetti_Carbonara', '3-Spaghetti_Carbonara'),
 ('Spaghetti_Carbonara', '4-Spaghetti_Carbonara'),
 ('Spaghetti_Carbonara', '5-Spaghetti_Carbonara'),
 ('Tikka_Masala', '1-Tikka_Masala'),
 ('Tikka_Masala', '2-Tikka_Masala'),
 ('Tikka_Masala', '3-Tikka_Masala'),
 ('Tikka_Masala', '4-Tikka_Masala'),
 ('Tikka_Masala', '5-Tikka_Masala'),
 ('Salade_Quinoa', '1-Salade_Quinoa'),
 ('Salade_Quinoa', '2-Salade_Quinoa'),
 ('Salade_Quinoa', '3-Salade_Quinoa'),
 ('Tacos_Boeuf', '1-Tacos_Boeuf'),
 ('Tacos_Boeuf', '2-Tacos_Boeuf'),
 ('Tacos_Boeuf', '3-Tacos_Boeuf'),
 ('Saute_legumes', '1-Saute_legumes'),
 ('Saute_legumes', '2-Saute_legumes'),
 ('Saute_legumes', '3-Saute_legumes'),
 ('Saute_legumes', '4-Saute_legumes'),
 ('Saumon_citron_aneth', '1-Saumon_citron_aneth'),
 ('Saumon_citron_aneth', '2-Saumon_citron_aneth'),
 ('Saumon_citron_aneth', '3-Saumon_citron_aneth'),
 ('Saumon_citron_aneth', '4-Saumon_citron_aneth'),
 ('Salade_caprese', '1-Salade_caprese'),
 ('Salade_caprese', '2-Salade_caprese'),
 ('Salade_caprese', '3-Salade_caprese'),
 ('soupe_poulet_legume', '1-soupe_poulet_legume'),
 ('soupe_poulet_legume', '2-soupe_poulet_legume'),
 ('soupe_poulet_legume', '3-soupe_poulet_legume'),
 ('soupe_poulet_legume', '4-soupe_poulet_legume'),
 ('biscuit_chocolat', '1-biscuit_chocolat'),
 ('biscuit_chocolat', '2-biscuit_chocolat'),
 ('biscuit_chocolat', '3-biscuit_chocolat'),
 ('biscuit_chocolat', '4-biscuit_chocolat'),
 ('biscuit_chocolat', '5-biscuit_chocolat'),
 ('crèpe_yogourt', '1-crèpe_yogourt'),
 ('crèpe_yogourt', '2-crèpe_yogourt'),
 ('crèpe_yogourt', '3-crèpe_yogourt'),
 ('crèpe_yogourt', '4-crèpe_yogourt');

 INSERT INTO utilisateurs (id_utilisateurs, nom_utilisateur, password_hash, password_salt, admin)
 VALUES ('admin', 'admin', 'ukokHmbBGOnibmWklbgCnPfHjaIujFGvM6Rp8zhjQ+WPoLdkyzYrw/g6FN14wLQHWcMD6qW0cRuycyBWIKH7EQ==',
 '7juvH7yAXDRxpHzakmJSXg==', true),
 ('patate25', 'Bob Gratton', 'alpfSi7SgIWTS3FHGgmrC7kej3Uq7x+2eEbd4CbuZl8VNGHFDaewNXnHQ2MKgc2AokeNsurYE8p7UDTtppuiaw==',
 'JwVATh3rRC3VnXzNo0/0ZA==', false);

