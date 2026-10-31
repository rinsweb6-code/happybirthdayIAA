const envelope = document.getElementById("envelope");

envelope.addEventListener("click", function() {

    if (envelope.classList.contains("open")) {
        return;
    }

    envelope.classList.add("open");

    // Tunggu animasi amplop selesai
    setTimeout(function() {

        // Pindah ke halaman pertama
        window.location.href = "hal1.html";

    }, 1800);

});