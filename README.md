<p align="center">
    <h1 align="center">REACTGRANLUND</h1>
</p>
<p align="center">
    <em><code>❯ REPLACE-ME</code></em>
</p>
<p align="center">
	<!-- local repository, no metadata badges. --></p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=default&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=default&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=default&logo=YAML&logoColor=white" alt="YAML">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=default&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=default&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Leaflet-199900.svg?style=default&logo=Leaflet&logoColor=white" alt="Leaflet">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=default&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

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
