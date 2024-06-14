test.only("Adding a building ", async ({ request }) => {
    const jsonData = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../payload/createBuilding.json"), 'utf-8'));


    let responseCode = 400;
    let response;
    let responseData;
  
    do {

        // Selecting Random values for Geometry 
        jsonData.grossFloorArea = randomInteger(500, 5000);
        jsonData.usableFloorArea = randomInteger(500, jsonData.grossFloorArea);
        jsonData.facadeArea = randomInteger(500, jsonData.usableFloorArea);
        jsonData.roofArea = randomInteger(500, jsonData.facadeArea);
        jsonData.glazingArea = randomInteger(500, jsonData.roofArea);
        jsonData.groundFloorArea = randomInteger(500, jsonData.glazingArea);

        //Selecting random option in drop-down menus
        jsonData.currentConfiguration.heatingConfiguration.type = heatingConfiguration[randomInteger(0, 12)];
        jsonData.currentConfiguration.coolingConfiguration.type = coolingConfiguration[randomInteger(0, 3)];
        jsonData.currentConfiguration.facadeInsulationConfiguration.type = facadeInsulationConfiguration[randomInteger(0, 3)];
        jsonData.currentConfiguration.floorInsulationConfiguration.type = floorInsulationConfiguration[randomInteger(0, 3)];
        jsonData.currentConfiguration.roofInsulationConfiguration.type = roofInsulationConfiguration[randomInteger(0, 3)];
        jsonData.currentConfiguration.windowsConfiguration.type = windowsConfiguration[randomInteger(0, 3)];
        jsonData.currentConfiguration.ventilationConfiguration.type = ventilationConfiguration[randomInteger(0, 5)];
        jsonData.currentConfiguration.lightingConfiguration.type = lightingConfiguration[randomInteger(0, 4)];
        jsonData.currentConfiguration.pvConfiguration.type = pvConfiguration[randomInteger(0, 2)];
        jsonData.currentConfiguration.domesticHotWaterConfiguration.type = domesticHotWaterConfiguration[randomInteger(0, 4)];
        jsonData.currentConfiguration.domesticHotWaterConfiguration.type = domesticHotWaterConfiguration[randomInteger(0, 4)];

        //console.log("efficiencyDistrictHeating", efficiencyDistrictHeating);
        jsonData.currentConfiguration.efficiencyDistrictHeating = getRandomDecimal(0, 10);
       // console.log("efficiencyDistrictCooling", efficiencyDistrictCooling);
        jsonData.currentConfiguration.efficiencyDistrictCooling = getRandomDecimal(0, 10);



        //Naming the building
        jsonData.name = faker.company.name();

        fs.writeFileSync(path.resolve(__dirname, "../../payload/createBuilding.json"), JSON.stringify(jsonData, null, 2));

        //We are selection random buildingtypes here
        let payLoadData = payload


        // Select a random building type from the array
        const randomBuildingType = buildingTypes[Math.floor(Math.random() * buildingTypes.length)];
        payLoadData['buildingType'] = randomBuildingType;
        console.log("payloadData",payLoadData);
        response = await request.post('https://api.test.app.energynavigator.nl/v1.0/accounts/TestingAPI/buildings', {
            headers: {
                apiKey: token
            },
            data: payLoadData

        });
        responseCode = await response.status()
        responseData = await response.json()
    
        console.log(responseCode);
        console.log(responseData);
       
        await setTimeout(3000);
    } while(responseCode==400 && responseData.message =='No result found for the current asset configuration. The current object will not be saved. Contact the service-desk for a list of possible configurations.') 
    const buildings = jp.query(await response.json(), `$[:]`);
    responseData = await response.json();
    await expect(await response.status()).toBe(200 || 201)
})

