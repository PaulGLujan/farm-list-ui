import axios from 'axios';

const getAirtableData = async () => {
    try {
        const headers = {
            Authorization: 'Bearer key9CJdcEkG2Ymiur',
            'Content-Type': 'application/json'
        };
        const response_foodsTable = await axios(
            'https://api.airtable.com/v0/appDk0v3oHfD3Bjf6/Food%20Items?maxRecords=3&view=Grid%20view&maxRecords=100',
            { headers }
        );
        const dataReceived = response_foodsTable.data.records;

        const listOfFoodsToSet = [];
        dataReceived.map(item => {
            if (item['fields']['Name']) {
                listOfFoodsToSet.push(item['fields']['Name']);
            }
        });

        const uniqueFoodTypes = [...new Set(listOfFoodsToSet)]
        return uniqueFoodTypes;
    } catch (err) {
        alert(err);
    }
};

export { getAirtableData };
