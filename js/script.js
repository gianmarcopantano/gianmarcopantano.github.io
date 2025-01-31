/*-----------------------------------------------sidebar----------------------------------------------*/
function openNav() {
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("main").style.display = "none";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display = "block";
}
/*----------------------------------------------------------------------------------------------------*/
/*-------------------------------------------tasto copia----------------------------------------------*/
// Funzione per copiare il valore del paragrafo negli appunti
function copyToClipboard(text) {
    // Usa la Clipboard API moderna
    navigator.clipboard.writeText(text)
        .then(function () {
            console.log("Testo copiato negli appunti");
        })
        .catch(function (err) {
            console.error("Errore nella copia: ", err);
        });
}
/*----------------------------------------------------------------------------------------------------*/