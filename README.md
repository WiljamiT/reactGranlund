## Granlund app

- Näytä toimistojen sijainnit kartalla

### to do:

- Muuta osoitteet koordinaateiksi Geocoding API:lla

Esim: https://maps.googleapis.com/maps/api/geocode/json?address=Prikaatinkatu+3,+Mikkeli,+Suomi&key=API_AVAIN...

Antaa JSON vastauksen: 

{
   "results" : 
   [
      {
         "address_components" : 
         [
            {
               "long_name" : "3",
               "short_name" : "3",
               "types" : 
               [
                  "street_number"
               ]
            },
            {
               "long_name" : "Prikaatinkatu",
               "short_name" : "Prikaatinkatu",
               "types" : 
               [
                  "route"
               ]
            },
            {
               "long_name" : "Mikkeli",
               "short_name" : "Mikkeli",
               "types" : 
               [
                  "locality",
                  "political"
               ]
            },
            {
               "long_name" : "Mikkeli",
               "short_name" : "Mikkeli",
               "types" : 
               [
                  "administrative_area_level_3",
                  "political"
               ]
            },
            {
               "long_name" : "Mikkeli",
               "short_name" : "Mikkeli",
               "types" : 
               [
                  "administrative_area_level_2",
                  "political"
               ]
            },
            {
               "long_name" : "Etelä-Savo",
               "short_name" : "Etelä-Savo",
               "types" : 
               [
                  "administrative_area_level_1",
                  "political"
               ]
            },
            {
               "long_name" : "Suomi",
               "short_name" : "FI",
               "types" : 
               [
                  "country",
                  "political"
               ]
            },
            {
               "long_name" : "50100",
               "short_name" : "50100",
               "types" : 
               [
                  "postal_code"
               ]
            }
         ],
         "formatted_address" : "Prikaatinkatu 3, 50100 Mikkeli, Suomi",
         "geometry" : 
         {
            "location" : 
            {
               "lat" : 61.681411,
               "lng" : 27.2606188
            },
            "location_type" : "ROOFTOP",
            "viewport" : 
            {
               "northeast" : 
               {
                  "lat" : 61.6827869302915,
                  "lng" : 27.2621112302915
               },
               "southwest" : 
               {
                  "lat" : 61.68008896970849,
                  "lng" : 27.2594132697085
               }
            }
         },
         "place_id" : "ChIJjY1xqQuhmkYRR3THnyybRuI",
         "plus_code" : 
         {
            "compound_code" : "",
            "global_code" : "9GH9M7J6+H6"
         },
         "types" : 
         [
            "street_address"
         ]
      }
   ],
   "status" : "OK"
}

- Lisää koordinaatit ym tietokantaan
- Luo bäkkäri ja hostaa verkkoon
- Fetchaa rojut UI
- Näytä sijainnit kartalla
- Näytä lisätietoja hoverilla



