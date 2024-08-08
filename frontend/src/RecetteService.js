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
export async function updateRecetteImage(recetteId, formData) {
    const response = await fetch(`/api/products/${recetteId}/image`, {
        method: "POST",
        headers: {
            ...session.getAuthHeaders()
        },
        body: formData
    });

    if (response.ok) {
        return;
    } else {
        throw new Error(`Impossible de modifier l'image de la recette ${recettetId}: ${response.status}`);
    }
}
