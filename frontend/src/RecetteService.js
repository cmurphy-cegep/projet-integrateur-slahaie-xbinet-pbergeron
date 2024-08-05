/**
 * @returns
 */
export async function fetchRecette() {
    const response = await fetch('/api/recettes');

    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Impossible de récupérer la liste des recettes");
    }
};