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

    initialize() {
        if (sessionStorage.utilisateur) {
            this.utilisateur = sessionStorage.utilisateur;
        }
        if (sessionStorage.motDePasse) {
            this.motDePasse = sessionStorage.motDePasse;
        }
        if (this.id_utilisateur == null && this.utilisateur != null) {
            this.fetchUser().catch(err => console.error("L'authentification initiale a échouée: ", err));
        }
    },
    login(utilisateur, motDePasse) {
        this.setCredentials(utilisateur, motDePasse);
        return this.fetchUser();
    },
    setCredentials(utilisateur, motDePasse) {
        this.utilisateur = utilisateur;
        sessionStorage.utilisateur = utilisateur;
        this.motDePasse = motDePasse;
        sessionStorage.motDePasse = motDePasse;
    },
    clearCredentials() {
        this.utilisateur = null;
        sessionStorage.removeItem('utilisateur');
        this.motDePasse = null;
        sessionStorage.removeItem('motDePasse');
    },
    disconnect() {
        this.id_utilisateur = null;
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
            this.id_utilisateur = user;
            return user;
        } else {
            this.id_utilisateur = null;
            if (response.status === 401) {
                throw new AuthError(response.status, "Nom d'utilisateur ou mot de passe incorrect");
            } else {
                throw new AuthError(response.status, "Erreur lors de l'authentification: " + response.status);
            }
        }
    },
    getAuthHeaders() {
        if (this.utilisateur) {
            return {
                "Authorization": "Basic " + btoa(this.utilisateur + ":" + this.motDePasse),
                "X-Requested-With": "XMLHttpRequest"
            }
        } else {
            return {};
        }
    }
});

export default session;

session.initialize();