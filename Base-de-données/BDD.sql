CREATE TABLE Recettes(
   id_recette VARCHAR(250),
   nom_recette VARCHAR(250),
   description_courte TEXT,
   description TEXT,
   temps_preparation INT,
   temps_cuisson INT,
   nb_portions INT,
   image TEXT,
   PRIMARY KEY(id_recette)
);

CREATE TABLE Ingrédients(
   id_ingrédients VARCHAR(250),
   nom_ingredient VARCHAR(250),
   PRIMARY KEY(id_ingrédients)
);

CREATE TABLE etapes(
   id_etape VARCHAR(250),
   description VARCHAR(250),
   ordre_etape INT,
   PRIMARY KEY(id_etape)
);

CREATE TABLE Utilisateurs(
   id_utilisateurs VARCHAR(250),
   nom_utilisateur VARCHAR(250),
   password_hash TEXT,
   password_salt TEXT,
   admin BOOLEAN,
   PRIMARY KEY(id_utilisateurs)
);

CREATE TABLE Commentaires(
   id_commentaire VARCHAR(250),
   commentaire TEXT,
   date_publication TIMESTAMP,
   id_recette VARCHAR(250),
   id_utilisateurs VARCHAR(250),
   PRIMARY KEY(id_commentaire),
   FOREIGN KEY(id_recette) REFERENCES Recettes(id_recette),
   FOREIGN KEY(id_utilisateurs) REFERENCES Utilisateurs(id_utilisateurs)
);

CREATE TABLE liste_ingredient(
   id_recette VARCHAR(250),
   id_ingrédients VARCHAR(250),
   quantite DECIMAL(15,2),
   mesure VARCHAR(250),
   PRIMARY KEY(id_recette, id_ingrédients),
   FOREIGN KEY(id_recette) REFERENCES Recettes(id_recette),
   FOREIGN KEY(id_ingrédients) REFERENCES Ingrédients(id_ingrédients)
);

CREATE TABLE liste_etapes(
   id_recette VARCHAR(250),
   id_etape VARCHAR(250),
   PRIMARY KEY(id_recette, id_etape),
   FOREIGN KEY(id_recette) REFERENCES Recettes(id_recette),
   FOREIGN KEY(id_etape) REFERENCES etapes(id_etape)
);

CREATE TABLE Note(
   id_recette VARCHAR(250),
   id_utilisateurs VARCHAR(250),
   note INT,
   PRIMARY KEY(id_recette, id_utilisateurs),
   FOREIGN KEY(id_recette) REFERENCES Recettes(id_recette),
   FOREIGN KEY(id_utilisateurs) REFERENCES Utilisateurs(id_utilisateurs)
);
