function generateCertificate() {
    const name = document.getElementById("name").value.trim().toUpperCase();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    const nameContainer = document.getElementById("name-container");
    nameContainer.innerText = name;

    const certificateContainer = document.getElementById("certificate-container");
    certificateContainer.style.display = "block";
}

function downloadCertificate() {
    const name = document.getElementById("name").value.trim().toUpperCase();
    const certificateContainer = document.querySelector(".certificate");

    html2canvas(certificateContainer).then(function (canvas) {
        // Convert the canvas image to a data URL
        const dataURL = canvas.toDataURL("image/png");

        // Create a temporary anchor element and set the download attribute
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = `${name}_certificate.png`;

        // Trigger a click on the anchor element to initiate the download
        link.click();
    });
}
