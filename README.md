# Granlund App

- [Azure PostgreSQL](https://azure.microsoft.com/en-us/products/postgresql) DB, where office locations, data etc are stored
- [.NET server](https://dotnet.microsoft.com/en-us/) hosted on [Azure App Service](https://azure.microsoft.com/en-us/products/app-service)
- UI hosted on [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static)
- Display office locations on a map
- Provide detailed information about offices
- Show financial data
- Styled UI

## Additional Information

The application displays office locations based on their coordinates (latitude & longitude), as well as financial data.  
Addresses are converted into coordinates using a Geocoding API.

Example:  
`https://maps.googleapis.com/maps/api/geocode/json?address=Prikaatinkatu+3,+Mikkeli,+Suomi&key=API_AVAIN...`
