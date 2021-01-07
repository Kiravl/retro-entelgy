export class PaisService
{
    async get() {
        const rspns = await fetch('https://restcountries.eu/rest/v2/lang/es', {method: 'GET'});
        return await rspns.json();
    }
}