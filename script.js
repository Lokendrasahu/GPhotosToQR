const albums = [
    {
        name: "lokendra❤vijaylaxmi",
        url: "https://photos.app.goo.gl/zsK4Q77oRUHNNUBd7",
        thumbnail: "https://lh3.googleusercontent.com/pw/AP1GczMyAbyjxOQfhoj7tVM7CHZOplyTjDyD9aQcbfo5YNVRHUmkzboOaPH77cubr-hFK8Wg0W3Iasggcjihcw5LhCTd3SfFR1xI-LiHvdHuTQY23f3VP5DbPzsoG6uq_XYgCdFdfJRqpjk-jC5FJXwNrA_0=w411-h616-s-no-gm?authuser=0"
    },
     {
         name: "private Album",
         url: "https://photos.app.goo.gl/rVHbjuQz9pTp4iS3A",
         thumbnail: "https://lh3.googleusercontent.com/pw/AP1GczO0CtWBvJQOu1FS3gnWVBbiS130a_h18mazLuUHLv7VqtuHmnqtV0Flc9RfklDugjBAjVno69TJg7J854TU19D_WNLpEqojhhBQysA5szXEBPNHl0WIGZ16HKy2dROm1lZTQmAj5BWPEfrhpmQ-pbjN=w905-h616-s-no-gm?authuser=0"
     }
];

// Function to generate QR Code
function generateQRCode(url) {
    return `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(url)}`;
}

// Function to display albums
function displayAlbums() {
    const container = document.getElementById("albums");
    container.innerHTML = "";

    albums.forEach(album => {
        const div = document.createElement("div");
        div.classList.add("album");

        div.innerHTML = `
            <img src="${album.thumbnail}" alt="${album.name}">
            <h3>${album.name}</h3>
            <img class="qr-code" src="${generateQRCode(album.url)}" alt="QR Code">
            <a href="${album.url}" target="_blank">📂 Open Album</a>
        `;

        container.appendChild(div);
    });
}

// Function to filter albums
function filterAlbums() {
    const search = document.getElementById("search").value.toLowerCase();
    const filteredAlbums = albums.filter(album => album.name.toLowerCase().includes(search));
    
    document.getElementById("albums").innerHTML = "";

    filteredAlbums.forEach(album => {
        const div = document.createElement("div");
        div.classList.add("album");

        div.innerHTML = `
            <img src="${album.thumbnail}" alt="${album.name}">
            <h3>${album.name}</h3>
            <a href="${album.url}" target="_blank">📂 Open Album</a>
            <br>
            <img class="qr-code" src="${generateQRCode(album.url)}" alt="QR Code">
        `;

        document.getElementById("albums").appendChild(div);
    });
}

// Load albums on page load
document.addEventListener("DOMContentLoaded", displayAlbums);
