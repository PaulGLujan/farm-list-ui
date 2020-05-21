export const getAllAirtableData = async () => {
    try {
        const farms = [];
        const farmFoodTypes = [];

        // AWS farmlist-api-prod-list endpoint
        const response = await fetch('https://h71hu4fqxd.execute-api.us-west-2.amazonaws.com/prod/farms', { method: 'POST' })
        const data = await response.json()

        data.forEach(record => {
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
