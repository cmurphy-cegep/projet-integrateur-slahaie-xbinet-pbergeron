import { reactive } from "vue";

class AuthError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}

const session = reactive({
    id_utilisateur: null,
    utilisateur: null,
    motDePasse: null,
    admin: null,

    initialize() {
        if (sessionStorage.id_utilisateur) {
            this.id_utilisateur = sessionStorage.id_utilisateur;
        }
        if (sessionStorage.motDePasse) {
            this.motDePasse = sessionStorage.motDePasse;
        }
        if (sessionStorage.admin) {
            this.admin = sessionStorage.admin;
        }
        if (this.id_utilisateur == null && this.utilisateur != null) {
            this.fetchUser().catch(err => console.error("L'authentification initiale a échouée: ", err));
        }
    },
    login(id_utilisateur, motDePasse) {
        this.setCredentials(id_utilisateur, motDePasse);
        return this.fetchUser();
    },

    inscription(user) {
        this.setCredentials(user.idUser, user.motDePasse);
        return this.createUser(user);
    },

    setCredentials(id_utilisateur, motDePasse) {
        this.id_utilisateur = id_utilisateur;
        sessionStorage.id_utilisateur = id_utilisateur;
        this.motDePasse = motDePasse;
        sessionStorage.motDePasse = motDePasse;
    },
    clearCredentials() {
        this.id_utilisateur = null;
        sessionStorage.removeItem('id_utilisateur');
        this.motDePasse = null;
        sessionStorage.removeItem('motDePasse');
        this.admin = null;
        sessionStorage.removeItem('admin');
    },
    disconnect() {
        this.id_utilisateur = null;
        this.admin = null;
        this.clearCredentials();
    },
    async fetchUser() {
        const response = await fetch("/api/login", {
            method: "GET",
            headers: {
                ... this.getAuthHeaders()
            }
        });

        if (response.ok) {
            const user = await response.json();
            this.admin = user.admin;
            const utilisateur = {
                id_utilisateur: this.id_utilisateur,
                admin: this.admin
            }
            sessionStorage.admin = this.admin;
            return utilisateur;
        } else {
            this.clearCredentials();
            this.id_utilisateur = null;
            this.admin = null;
            this.motDePasse = null;
            if (response.status === 401) {
                throw new AuthError(response.status, "Nom d'utilisateur ou mot de passe incorrect");
            } else {
                this.clearCredentials();
                this.id_utilisateur = null;
                this.admin = null;
                this.motDePasse = null;
                throw new AuthError(response.status, "Erreur lors de l'authentification");
            }
        }
    },
    async createUser(user) {
        const response = await fetch("/api/inscription", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            const user = await response.json();
            console.log(response);
            const utilisateur = {
                id_utilisateur: this.id_utilisateur,
                admin: user
            }
            return utilisateur;
        } else {
            throw new Error(response.status, "Erreur lors de la création de compte");
        }
    },

    getAuthHeaders() {
        if (this.id_utilisateur) {
            return {
                "Authorization": "Basic " + btoa(this.id_utilisateur + ":" + this.motDePasse),
                "X-Requested-With": "XMLHttpRequest"
            }
        } else {
            return {};
        }
    }
});

export default session;

session.initialize();