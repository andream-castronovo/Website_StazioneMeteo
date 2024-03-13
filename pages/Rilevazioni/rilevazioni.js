const staz = document.getElementById('stazioni')
const sens = document.getElementById('sensori')

const connectionString =  "Server=PC0128;Database=meteodb;Uid=ServerMeteoDBPascal;Pwd=MeteoPascalReading;";

const queryLocation = "SELECT DISTINCT Localita_Indirizzo FROM stazioni;"
localita = ['Cesena','Santarcangelo','Forlì','Faenza'] // SELECT DISTINCT Localita_Indirizzo FROM Stazioni;

localita.forEach((e) => {
    o = document.createElement("option")
    o.value = e
    o.appendChild(document.createTextNode(e))
    
    staz.append(
        o
    )
})

const querySensors = "SELECT DISTINCT GrandezzaFisica FROM grandezzafisica;"
sensori = ['Temperatura','Umidità','Pressione','Velocità pioggia'] // SELECT DISTINCT GrandezzaFisica FROM GrandezzaFisica;

sensori.forEach((e) => {
    o = document.createElement("option")
    o.value = e
    o.appendChild(document.createTextNode(e))
    
    sens.append(
        o
    )
})

data = fetch("./example.json")
srcBarKeydown = () => {
    console.log(data)
}


/*

SELECT 
    GrandezzaFisica.GrandezzaFisica, Rilevamenti.Dato,
    Stazioni.Localita_Indirizzo, Rilevamenti.DataOra
FROM Rilevamenti INNER JOIN
     SensoriInstallati ON SensoriInstallati.idSensoriInstallati = Rilevamenti.idSensoriInstallati INNER JOIN
     Stazioni ON Stazioni.idNomeStazione = SensoriInstallati.idNomeStazione INNER JOIN
     Sensori ON Sensori.idCodiceSensore = SensoriInstallati.idCodiceSensore INNER JOIN
     GrandezzaFisica ON GrandezzaFisica.idGrandezzaFisica = Sensori.idGrandezzaFisica
WHERE GrandezzaFisica.GrandezzaFisica = {0} AND Stazioni.Localita_Indirizzo = {1};

*/

