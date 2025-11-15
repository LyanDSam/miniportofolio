const proyekID = document.getElementById('projects');
let proyekData = [
    {
        nama: "Aplikasi To-Do List",
        deskripsi: "Aplikasi sederhana untuk mengelola tugas harian dengan fitur penambahan, pengeditan, dan penghapusan tugas.",
        gambar: "asset/to-do-list.jpg"
    },{
        nama: "BOOK ER",
        deskripsi: "Sebuah website pemesanan gor lapangan olahraga yang memudahkan pengguna untuk mencari dan memesan lapangan sesuai kebutuhan.",
        gambar: "asset/booker.jpg"
    }
];
Object.values(proyekData).forEach(value => {
    let container = document.createElement("div");
    container.className = "proyek-container";
    container.innerHTML = `
        <div class="each-proyek">
            <div class="img-proyek" style="background-image: url('${value.gambar}"')></div>
            <div class="content-open" onclick="toggleDescription()">
                <h3 class="judul-proyek">${value.nama}</h3>
                <h3 class="arrow">›</h3>
            </div>
            <p class="deskripsi-proyek">${value.deskripsi}</p>
        </div>
    `;
    const parent = proyekID;
    parent.appendChild(container);
});


document.querySelectorAll(".content-open").forEach(btn => {
    btn.addEventListener("click", () => {
        const desc = btn.nextElementSibling;
        desc.classList.toggle("open");

        if (desc.classList.contains("open")) {
        desc.style.maxHeight = desc.scrollHeight + "px";
        desc.style.opacity = 1;
        } else {
        desc.style.maxHeight = 0;
        desc.style.opacity = 0;
        }
    });
});
