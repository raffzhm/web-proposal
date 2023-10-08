

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../filejson/proposal.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const judulElement = document.getElementById("judul-proposal");
        const konsepElement = document.getElementById("konsep-proposal");
        const prodiElement = document.getElementById("prodi-proposal");


        // Populate HTML elements with user data
        judulElement.textContent = userData.Judul;
        konsepElement.textContent = userData.Konsep;
        prodiElement.textContent = userData.Prodi;


    } catch (error) {
        console.error('Error:', error);
    }
});