// Inicializar el mapa centrado en Aguascalientes 
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes 
 
// Añadir capa de OpenStreetMap 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {   maxZoom: 19, 
  attribution: '© OpenStreetMap' 
}).addTo(map); 

// Añadir un marcador en Aguascalientes capital 
var marker = L.marker([21.88234, -102.28259]).addTo(map); 
 
// Añadir un pop-up al marcador 
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup(); 

// Crear un ícono personalizado para "El Parián"
var iconParian = L.icon({
  iconUrl: 'https://e7.pngegg.com/pngimages/253/859/png-clipart-ultimate-spider-man-ultimate-marvel-logo-spider-man-heroes-logo.png', // Cambia esta ruta a la ubicación de tu ícono personalizado para "El Parián"
  iconSize: [38, 38], // Tamaño del ícono
  iconAnchor: [19, 38], // Punto del ícono que está anclado al marcador
  popupAnchor: [0, -38] // Punto donde se abrirá el popup en relación al ícono
});

// Coordenadas aproximadas de "El Parián" en Aguascalientes
var parianCoords = [21.8836, -102.2931];

// Añadir un marcador en "El Parián" con el ícono personalizado
var marcadorParian = L.marker(parianCoords, {icon: iconParian}).addTo(map);
marcadorParian.bindPopup("<b>El Parián</b><br>Un lugar emblemático de Aguascalientes.");


// Marcador en la Plaza de la Patria 
var plazaPatria = L.marker([21.88187, -102.29495]).addTo(map); 
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes."); 
 
// Marcador en el Museo Nacional de la Muerte 
var museoMuerte = L.marker([21.88417, -102.28878]).addTo(map); 
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único."); 

// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos var feriaSanMarcos = L.circle([21.87888, -102.29727], {   color: 'green',   fillColor: '#0f3',   fillOpacity: 0.5,   radius: 300 }).addTo(map); 
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes."); 

    var centroHistorico = L.polygon([ 
        [21.8821, -102.2935], 
        [21.8829, -102.2865], 
        [21.8797, -102.2860], 
        [21.8792, -102.2920] 
      ]).addTo(map); 
       
      centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial."); 
      
      var baseMaps = { 
        "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png') 
      }; 
       
      var overlayMaps = { 
        "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]), 
        "Feria de San Marcos": feriaSanMarcos, 
        "Centro Histórico": centroHistorico 
      }; 
       
      L.control.layers(baseMaps, overlayMaps).addTo(map); 
      