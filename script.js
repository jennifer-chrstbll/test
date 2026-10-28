// Menunggu hingga dokumen selesaikan proses rendering
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("btn-click");
    const message = document.getElementById("msg");

    // Menambahkan Event Listener untuk responsivitas tombol
    button.addEventListener("click", function () {
        // Mengubah status elemen message dari tersembunyi menjadi terlihat
        if (message.classList.contains("hidden")) {
            message.classList.remove("hidden");
            button.innerText = "✨ Selesai Ditest!";
            button.style.background = "#059669";
        } else {
            message.classList.add("hidden");
            button.innerText = "✨ Klik Saya (Test JS)";
            button.style.background = "linear-gradient(135deg, #2563eb, #4f46e5)";
        }
    });
});