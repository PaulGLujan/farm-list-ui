const AirtablePlus = require('airtable-plus');

// BaseID, apiKey, and tableName can alternatively be set by environment variables
const airtable = new AirtablePlus({
    baseID: 'appqSf5jx9GWKg9DC',
    apiKey: 'key9CJdcEkG2Ymiur',
    tableName: 'Imported table 2',
});

export const getAllAirtableData = async () => {
    try {
        // Allows for api params to be passed in from Airtable api
        const response = await airtable.read({});

        const farms = [];
        const farmFoodTypes = []

        response.forEach(record => {
            const { Name, About, Contact, Type, WebsiteURL, ImageURL, Latitude, Longitude } = record.fields

            // Returns tag names if value is true.
            // Additional tag cells on Airtable must also be checkboxes for this to work.
            const Tags = Object.keys(record.fields).filter(k => record.fields[k] === true)

            farmFoodTypes.push(Type)
            farms.push({
                Name,
                About,
                Contact,
                Type,
                WebsiteURL,
                ImageURL,
                Tags,
                Coordinates: {
                    latitude: Latitude,
                    longitude: Longitude
                },
            })
        })

        // Filters types for unique values only.
        // Values used in components/FoodSelect.js
        const uniqueFarmFoodTypes = [...new Set(farmFoodTypes.flat())]

        return {
            farms, 
            uniqueFarmFoodTypes
        }
    }catch (err) {
        console.log(err)
    }
}
