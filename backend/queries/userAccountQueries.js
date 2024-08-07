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
        WHERE
            id_utilisateurs = $1`,
        [userId]
    );

    const row = result.rows[0];

    if (row) {
        return {
            userId: row.user_account_id,
            name: row.user_full_name,
            isAdmin: row.is_admin
        };
    }

    return undefined;
};
exports.getUserAccount = getUserAccount;

const createUserAccount = async (idUser, user, password_hash, password_salt) => {

        const result = await pool.query(
            `INSERT INTO utilisateurs (id_utilisateurs, nom_utilisateur, 
            password_hash, password_salt, admin) 
            VALUES ($1, $2, $3, $4, $5)`,
            [idUser, user, password_hash, password_salt, false]
        );
    
        return getUserAccount(idUser);
    

    
};
exports.createUserAccount = createUserAccount;