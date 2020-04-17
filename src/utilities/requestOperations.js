const AirtablePlus = require('airtable-plus');

// BaseID, apiKey, and tableName can alternatively be set by environment variables
const airtable = new AirtablePlus({
    baseID: 'app8yNh5HiXXbpXRe',
    apiKey: 'AIRTBABLE_API_KEY',
    tableName: 'suppliers'
});

export const getAllAirtableData = async () => {
    try {
        // Allows for api params to be passed in from Airtable api
        const response = await airtable.read({});

        const farms = [];
        const farmFoodTypes = [];

        response.forEach(record => {
            const {
                Name,
                About,
                Contact,
                Type,
                WebsiteURL,
                ImageURL,
                Latitude,
                Longitude
            } = record.fields;

            // Returns tag names if value is true.
            // Additional tag cells on Airtable must also be checkboxes for this to work.
            const Tags = Object.keys(record.fields).filter(
                k => record.fields[k] === true
            );

            farmFoodTypes.push(Type);
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
                }
            });
        });

        return {
            farms,
            // Filters types for unique values only.
            farmFoodTypes: [...new Set(farmFoodTypes.flat())]
        };
    } catch (err) {
        console.log(err);
    }
};
