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
        const uniqueFarmFoodTypes = []

        response.forEach(record => {
            const { Business, Type, Website, Image } = record.fields

            // Returns tag names if value is true.
            // Additional tag cells on Airtable must also be checkboxes for this to work.
            const tags = Object.keys(record.fields).filter(k => record.fields[k] === true)

            const farmObj = {
                name: Business,
                type: Type[0],
                websiteURL: Website,
                imageURL: Image,
                tags
            }
            farms.push(farmObj)

            // Filters tags for unique values only.
            // Values used in components/FoodSelect.js
            if (!uniqueFarmFoodTypes.includes(farmObj.type)) { uniqueFarmFoodTypes.push(farmObj.type) }
        })
        return {
            farms, 
            uniqueFarmFoodTypes
        }
    }catch (err) {
        console.log(err)
    }
}
