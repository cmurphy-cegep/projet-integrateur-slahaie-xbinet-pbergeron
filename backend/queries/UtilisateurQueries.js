const pool = require('./DBPool');

const getLoginByUserAccountId = async (id_utilisateur) => {
    const result = await pool.query(
        `SELECT user_account_id, password_hash, password_salt, user_full_name, is_active, is_admin
         FROM user_account
         WHERE user_account_id = $1`,
        [id_utilisateur]
    );

    const row = result.rows[0];
    if (row) {
        return {
            id_utilisateur: row.id_utilisateur,
            utilisateur: row.utilisateur,
            motDePasseHash: row.motDePasseHash,
            motDePasseSalt: row.motDePasseSalt,
            admin: row.admin
        };
    }
    return undefined;
};
exports.getLoginByUserAccountId = getLoginByUserAccountId;

const getUserAccount = async (id_utilisateur, client) => {
    const result = await (client || pool).query(
        `SELECT user_account_id, user_full_name, is_active, is_admin 
        FROM user_account
        WHERE
            user_account_id = $1`,
        [id_utilisateur]
    );

    const row = result.rows[0];

    if (row) {
        return {
            id_utilisateur: row.id_utilisateur,
            utilisateur: row.utilisateur,
            motDePasseHash: row.motDePasseHash,
            motDePasseSalt: row.motDePasseSalt,
            admin: row.admin
        };
    }

    return undefined;
};
exports.getUserAccount = getUserAccount;