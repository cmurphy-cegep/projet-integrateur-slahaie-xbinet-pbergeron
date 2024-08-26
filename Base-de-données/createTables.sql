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

CREATE TABLE commentaires(
   id_commentaire integer primary key generated always as identity,
   commentaire TEXT,
   date_publication TIMESTAMP,
   id_recette VARCHAR(250),
   id_utilisateurs VARCHAR(250),
   FOREIGN KEY(id_recette) REFERENCES Recettes(id_recette) ON DELETE CASCADE,
   FOREIGN KEY(id_utilisateurs) REFERENCES Utilisateurs(id_utilisateurs) ON DELETE CASCADE
);

CREATE TABLE liste_ingredient(
   id_recette VARCHAR(250),
   id_ingrédients VARCHAR(250),
   quantite DECIMAL(15,2),
   mesure VARCHAR(250),
   PRIMARY KEY(id_recette, id_ingrédients),
   FOREIGN KEY(id_recette) REFERENCES Recettes(id_recette) ON DELETE CASCADE,
   FOREIGN KEY(id_ingrédients) REFERENCES Ingrédients(id_ingrédients) ON DELETE CASCADE
);

CREATE TABLE liste_etapes(
   id_recette VARCHAR(250),
   id_etape TEXT,
   PRIMARY KEY(id_recette, id_etape),
   FOREIGN KEY(id_recette) REFERENCES Recettes(id_recette) ON DELETE CASCADE,
   FOREIGN KEY(id_etape) REFERENCES etapes(id_etape) ON DELETE CASCADE
);

CREATE TABLE Note(
   id_recette VARCHAR(250),
   id_utilisateurs VARCHAR(250),
   note INT,
   PRIMARY KEY(id_recette, id_utilisateurs),
   FOREIGN KEY(id_recette) REFERENCES Recettes(id_recette) ON DELETE CASCADE,
   FOREIGN KEY(id_utilisateurs) REFERENCES Utilisateurs(id_utilisateurs) ON DELETE CASCADE
);
