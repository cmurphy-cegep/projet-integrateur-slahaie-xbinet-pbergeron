const pool = require('./DBPool');

const getLoginByUserAccountId = async (userAccountId) => {
    const result = await pool.query(
        `SELECT id_utilisateurs, password_hash, password_salt, admin
         FROM utilisateurs
         WHERE id_utilisateurs = $1`,
        [userAccountId]
    );

    const row = result.rows[0];
    if (row) {
        return {
            id_utilisateur: row.id_utilisateurs,
            password_hash: row.password_hash,
            password_salt: row.password_salt,
            admin: row.admin
        };
    }
    return undefined;
};
exports.getLoginByUserAccountId = getLoginByUserAccountId;

const getUserAccount = async (userId) => {
    const result = await pool.query(
        `SELECT id_utilisateurs, nom_utilisateur, admin 
        FROM utilisateurs
        WHERE id_utilisateurs = $1`,
        [userId]
    );

    const row = result.rows[0];
    if (row) {
        return {
            id_utilisateur: row.id_utilisateurs,
            nom_utilisateur: row.nom_utilisateur,
            admin: row.admin
        }
    } else {
        return undefined;
    }


};
exports.getUserAccount = getUserAccount;

const createUserAccount = async (idUser, user, password_hash, password_salt) => {

    await pool.query(
        `INSERT INTO utilisateurs (id_utilisateurs, nom_utilisateur, 
        password_hash, password_salt, admin) 
        VALUES ($1, $2, $3, $4, $5)`,
        [idUser, user, password_hash, password_salt, false]
    );

    return {
        id_utilisateur: idUser,
        utilisateur: user,
        admin: false
    }
};
exports.createUserAccount = createUserAccount;