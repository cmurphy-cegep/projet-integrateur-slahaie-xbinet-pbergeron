DELETE FROM Recettes;
DELETE FROM ingrédients;
DELETE FROM liste_ingredient;
DELETE FROM etapes;
DELETE FROM liste_etapes;

Insert INTO Recettes (id_recette, nom_recette, description_courte,
 description, temps_preparation, temps_cuisson, nb_portions, image)
 VALUES 
 ('Spaghetti_Carbonara', 'Spaghetti Carbonara', 'Ce spaghetti à la carbonara est un plat de spaghettis « bacon et œuf » classique et très riche, idéal à servir en compagnie...',
 'Ce spaghetti à la carbonara est un plat de spaghettis « bacon et œuf » classique et très riche, idéal à servir en compagnie. Cette recette constitue également une offre de brunch inhabituelle.',
 20, 20, 8, 'spaghetti_carbonara.jpg'),
 ('Tikka_Masala', 'Poulet Tikka Masala', 'Poulet tikka masala simplifié avec cette recette au goût délicieux...',
 'Poulet tikka masala simplifié avec cette recette au goût délicieux : il suffit de faire mariner le poulet dans du yaourt et des épices, puis de mijoter dans une sauce à la tomate et à la crème. Servez avec du riz ou du pain pita chaud.',
 30, 50, 4, 'poulet_tikka_masala.jpg'),
 
 INSERT INTO ingrédients (id_ingrédients, nom_ingredient)
 VALUES ('Spaghetti', 'Spaghetti'),
 ('Pancetta', 'pancetta en dés'),
 ('œufs', 'œufs larges'),
 ('Parmesan', 'fromage parmesan râpé'),
 ('Ail', 'gousses d’ail émincé'),
 ('Sel', 'Sel'),
 ('Poivre', 'Poivre'),
 ('Persil', 'Persil frais'),
 ('Poulet', 'poitrines de poulet en cubes'),
 ('Yogourt', 'yogourt grec'),
 ('Tikka_Masala', 'pâte de tikka masala'),
 ('Oignon', 'oignon finement haché'),
 ('Tomates_conserve', 'tomates en dés'),
 ('Creme_cuisson', 'crème à cuisson'),
 ('Coriandre', 'Coriandre fraîche')

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
 ('Tikka_Masala', 'Coriandre' null, null),
 ('Tikka_Masala', 'Ail', 2, null)

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
 ('4-Tikka_Masala', '4.	Ajoutez les tomates et laissez mijoter pendant 10 minutes. Incorporez la crème et remettez le poulet dans la poêle.',
 4),
 ('5-Tikka_Masala', '5.	Faites cuire encore 5 minutes. Garnissez de coriandre et servez avec du riz ou du naan.',
 5)

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
 ('Tikka_Masala', '5-Tikka_Masala')

