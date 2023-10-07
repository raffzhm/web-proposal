document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../filejson/rafi.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const namaElement = document.getElementById("npm-rafi");
        const kelasElement = document.getElementById("nama-rafi");
        const npmElement = document.getElementById("kelas-rafi");
        const kontakElement = document.getElementById("email-rafi");


        // Populate HTML elements with user data
        namaElement.textContent = userData.NPM;
        kelasElement.textContent = userData.Nama;
        npmElement.textContent = userData.Kelas;
        kontakElement.textContent = userData.Email;

    } catch (error) {
        console.error('Error:', error);
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../filejson/iqbal.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const namaElement = document.getElementById("npm-iqbal");
        const kelasElement = document.getElementById("nama-iqbal");
        const npmElement = document.getElementById("kelas-iqbal");
        const kontakElement = document.getElementById("email-iqbal");


        // Populate HTML elements with user data
        namaElement.textContent = userData.NPM;
        kelasElement.textContent = userData.Nama;
        npmElement.textContent = userData.Kelas;
        kontakElement.textContent = userData.Email;
    } catch (error) {
        console.error('Error:', error);
    }
});