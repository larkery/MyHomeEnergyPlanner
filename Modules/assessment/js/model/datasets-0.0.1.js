
var datasets = {

    fuels: {
      'oil':{fuelcost:0.051, standingcharge: 0, co2factor: 0.298, primaryenergyfactor:1.10},
      'gas':{fuelcost:0.043, standingcharge: 0, co2factor: 0.216, primaryenergyfactor:1.22},
      'wood':{fuelcost:0.00, standingcharge: 0, co2factor: 0.019, primaryenergyfactor:1.04},
      'electric':{fuelcost:0.145, standingcharge: 0, co2factor: 0.519, primaryenergyfactor:3.07},
      'greenelectric':{fuelcost:0.145, standingcharge: 0, co2factor: 0.020, primaryenergyfactor:1.5},
      'electric-high':{fuelcost:0.155, standingcharge: 0, co2factor: 0.519, primaryenergyfactor:3.07},
      'electric-low':{fuelcost:0.07, standingcharge: 0, co2factor: 0.519, primaryenergyfactor:3.07},
    },
    
    regions: [
        "UK average",
        "Thames",
        "South East England",
        "Southern England",
        "South West England",
        "Severn Wales / Severn England", 
        "Midlands", 
        "West Pennines Wales / West Pennines England.", 
        "North West England / South West Scotland", 
        "Borders Scotland / Borders England", 
        "North East England", 
        "East Pennines", 
        "East Anglia", 
        "Wales", 
        "West Scotland", 
        "East Scotland", 
        "North East Scotland", 
        "Highland", 
        "Western Isles", 
        "Orkney", 
        "Shetland", 
        "Northern Ireland"
    ],

    table_u1: [
        [4.5,5.0,6.8,8.7,11.7,14.6,16.9,16.9,14.3,10.8,7.0,4.9],
        [5.1,5.5,7.4,9.3,12.6,15.4,17.8,17.8,15.1,11.6,7.6,5.5],
        [5.3,5.4,7.4,9.2,12.6,15.2,17.6,17.8,15.2,11.9,7.9,5.8],
        [5.5,5.7,7.5,9.2,12.6,15.2,17.4,17.6,15.1,11.8,8.1,5.9],
        [6.4,6.5,7.9,9.3,12.4,14.7,16.8,17.0,14.9,12.0,8.9,7.0],
        [5.4,5.7,7.5,9.2,12.6,15.2,17.4,17.3,14.9,11.5,8.0,5.9],
        [4.9,5.3,7.1,9.0,12.2,14.9,17.2,17.1,14.5,11.0,7.3,5.2],
        [5.1,5.5,7.0,8.9,12.0,14.5,16.6,16.5,14.1,10.9,7.6,5.4],
        [4.6,4.9,6.2,8.1,11.1,13.5,15.5,15.4,13.1,10.1,7.0,4.9],
        [4.3,4.7,6.1,7.9,10.7,13.4,15.5,15.4,13.0,9.8,6.6,4.6],
        [4.5,4.9,6.4,8.2,11.2,14.0,16.2,16.1,13.6,10.3,6.9,4.8],
        [4.5,5.0,6.8,8.7,11.7,14.6,16.9,16.9,14.3,10.8,7.0,4.9],
        [4.6,5.0,7.0,9.0,12.2,15.0,17.5,17.6,15.0,11.4,7.3,5.1],
        [5.7,5.8,7.3,8.9,12.0,14.3,16.4,16.3,14.2,11.2,8.2,6.2],
        [4.8,4.9,6.0,7.9,10.8,13.1,14.9,14.8,12.8,9.8,7.0,5.1],
        [4.1,4.4,5.7,7.7,10.6,13.2,15.2,15.0,12.7,9.4,6.3,4.3],
        [4.0,4.2,5.5,7.4,10.1,12.8,14.9,14.7,12.5,9.2,6.2,4.1],
        [4.4,4.3,5.5,7.4,10.2,12.5,14.5,14.4,12.3,9.2,6.5,4.5],
        [5.3,5.0,5.9,7.4,9.8,11.7,13.7,13.7,12.1,9.5,7.2,5.6],
        [4.9,4.5,5.2,6.9,9.1,11.2,13.3,13.6,11.9,9.3,6.9,5.2],
        [4.7,4.1,4.7,6.4,8.5,10.6,12.7,13.0,11.4,8.8,6.5,4.9],
        [5.2,5.4,6.8,8.3,11.1,13.4,15.4,15.2,13.2,10.2,7.4,5.5]
    ],

    // Table U2: Wind speed (m/s) for calculation of infiltration rate
    table_u2: [
        [5.4,5.1,5.1,4.5,4.1,3.9,3.7,3.7,4.2,4.5,4.8,5.1],
        [4.8,4.6,4.5,4.0,3.7,3.5,3.3,3.3,3.7,4.0,4.3,4.6],
        [4.2,4.0,4.0,3.5,3.2,3.0,2.9,2.9,3.3,3.5,3.7,4.0],
        [4.2,4.0,4.0,3.5,3.2,3.0,2.9,2.9,3.3,3.5,3.7,4.0],
        [7.1,6.8,6.8,5.9,5.5,5.2,5.0,5.0,5.6,6.1,6.4,6.8],
        [4.8,4.6,4.5,4.0,3.7,3.5,3.3,3.3,3.7,4.0,4.3,4.6],
        [4.8,4.6,4.5,4.0,3.7,3.5,3.3,3.3,3.7,4.0,4.3,4.6],
        [5.4,5.1,5.1,4.5,4.1,3.9,3.7,3.7,4.2,4.5,4.8,5.1],
        [6.0,5.7,5.7,5.0,4.6,4.4,4.2,4.2,4.7,5.1,5.4,5.7],
        [6.0,5.7,5.7,5.0,4.6,4.4,4.2,4.2,4.7,5.1,5.4,5.7],
        [6.0,5.7,5.7,5.0,4.6,4.4,4.2,4.2,4.7,5.1,5.4,5.7],
        [5.4,5.1,5.1,4.5,4.1,3.9,3.7,3.7,4.2,4.5,4.8,5.1],
        [5.4,5.1,5.1,4.5,4.1,3.9,3.7,3.7,4.2,4.5,4.8,5.1],
        [6.5,6.3,6.2,5.4,5.1,4.8,4.6,4.6,5.1,5.6,5.9,6.3],
        [6.5,6.3,6.2,5.4,5.1,4.8,4.6,4.6,5.1,5.6,5.9,6.3],
        [6.5,6.3,6.2,5.4,5.1,4.8,4.6,4.6,5.1,5.6,5.9,6.3],
        [7.1,6.8,6.8,5.9,5.5,5.2,5.0,5.0,5.6,6.1,6.4,6.8],
        [7.1,6.8,6.8,5.9,5.5,5.2,5.0,5.0,5.6,6.1,6.4,6.8],
        [7.7,7.4,7.3,6.4,6.0,5.7,5.4,5.4,6.0,6.6,7.0,7.4],
        [8.3,8.0,7.9,6.9,6.4,6.1,5.8,5.8,6.5,7.1,7.5,8.0],
        [8.9,8.6,8.5,7.4,6.9,6.5,6.2,6.2,7.0,7.6,8.0,8.6],
        [6.0,5.7,5.7,5.0,4.6,4.4,4.2,4.2,4.7,5.1,5.4,5.7]
    ],
    
    // Table U3: Mean global solar irradiance (W/m2) on a horizontal plane, and solar declination
    // Row corresponds to region id in SAP specification 0:UK average etc..
    // 2nd dimention row index corresponds to month
    table_u3: [
    [26,54,94,150,190,201,194,164,116,68,33,21],
    [29,55,99,153,192,214,204,177,124,73,39,23],
    [31,57,103,163,204,225,213,186,129,78,42,24],
    [33,59,105,162,207,225,213,190,132,77,43,26],
    [33,60,104,166,200,218,208,186,133,75,42,27],
    [31,57,100,157,198,218,208,184,128,72,40,24],
    [26,53,95,147,188,204,194,168,117,68,34,21],
    [23,51,93,144,189,196,186,159,110,63,30,19],
    [20,48,87,138,188,192,187,156,110,59,28,17],
    [21,47,85,135,182,186,178,149,103,57,28,16],
    [22,50,88,139,181,188,183,154,106,61,30,18],
    [26,54,94,150,190,201,194,164,116,68,33,21],
    [29,56,100,157,196,212,203,173,123,75,38,23],
    [26,53,98,152,195,209,198,172,117,67,33,21],
    [17,45,84,139,193,186,183,154,102,54,24,13],
    [17,45,81,133,185,187,177,146,99,52,24,12],
    [17,43,84,131,183,187,170,142,98,51,23,12],
    [15,41,82,134,184,181,163,140,97,48,21,11],
    [17,38,83,140,200,189,175,147,106,49,21,10],
    [16,42,81,144,202,199,178,141,102,49,19,9],
    [11,32,72,129,186,183,163,138,87,43,15,6],
    [23,49,89,139,190,188,175,152,107,61,29,17]
    ],
    

    // Index corresponds to month
    solar_declination: [-20.7,-12.8,-1.8,9.8,18.8,23.1,21.2,13.7,2.9,-8.7,-18.4,-23.0],

    // Table U4: Representative latitude
    // Index corresponds to region id in SAP specification 0:UK average etc..
    table_u4: [53.4,51.5,51.0,50.8,50.6,51.5,52.7,53.4,54.8,55.5,54.5,53.4,52.3,52.5,55.8,56.4,57.2,57.5,58.0,59.0,60.2,54.7],

    // Table U5: Constants for calculation of solar flux on vertical and inclined surfaces
    // 2nd dimention index: 0:North 1:NE/NW 2:East/West 3:SE/SW 4:South
    k: {
        1: [0.056,-2.85,-0.241,0.839,2.35],
        2: [-5.79,2.89,-0.024,-0.604,-2.97],
        3: [6.23,0.298,0.351,0.989,2.4],
        4: [3.32,4.52,0.604,-0.554,-3.04],
        5: [-0.159,-6.28,-0.494,0.251,3.88],
        6: [-3.74,1.47,-0.502,-2.49,-4.97],
        7: [-2.7,-2.58,-1.79,-2.0,-1.31],
        8: [3.45,3.96,2.06,2.28,1.27],
        9: [-1.21,-1.88,-0.405,0.807,1.83]
    },

    table_1a: [31,28,31,30,31,30,31,31,30,31,30,31],

    table_1c: [1.1,1.06,1.02,0.98,0.94,0.90,0.90,0.94,0.98,1.02,1.06,1.10],

    // Table 1d: Temperature rise of hot water drawn off (∆Tm, in K)
    table_1d: [41.2,41.4,40.1,37.6,36.4,33.9,30.4,33.4,33.5,36.3,39.4,39.9],

    // Primary circuit loss factors with solar heating 
    table_h4: [1.0,1.0,0.94,0.70,0.45,0.44,0.44,0.48,0.76,0.94,1.0,1.0],

    ratings: [
        {start:92, end:100, letter:'A', color:"#009a44"},
        {start:81, end:91, letter:'B', color:"#2dca73"},
        {start:69, end:80, letter:'C', color:"#b8f351"},
        {start:55, end:68, letter:'D', color:"#f5ec00"},
        {start:39, end:54, letter:'E', color:"#ffac4d"},
        {start:21, end:38, letter:'F', color:"#fd8130"},
        {start:1, end:20, letter:'G', color:"#fd001a"}
    ],
    
    energysystems: {
        'heatpump':{name:"Heatpump", efficiency:3.0, fuel: 'electric'},
        'greenheatpump':{name:"100% Green Electric Heatpump", efficiency:3.0, fuel: 'greenelectric'},
        'woodbatch':{name:"Wood batch boiler", efficiency:0.92, fuel: 'wood'},
        'woodpellet':{name:"Wood pellet boiler", efficiency:0.92, fuel: 'wood'},
        'woodstove':{name:"Wood stove", efficiency:0.87, fuel: 'wood'},
        'openwoodfire':{name:"Open wood fire", efficiency:0.25, fuel: 'wood'},

        'oilrangecooker':{name:"Oil range cooker", efficiency:0.55, fuel: 'oil'},
        'gasboiler':{name:"Gas boiler", efficiency:0.90, fuel: 'gas'},
        'oilboiler':{name:"Oil boiler", efficiency:0.85, fuel: 'oil'},

        'electricheater':{name:"Electric room heater", efficiency:1.0, fuel: 'electric'},
        'electricimmersion':{name:"Electric immersion heater", efficiency:1.0, fuel: 'electric'},

        'electric-high':{name:"High rate electric", efficiency:1.0, fuel: 'electric-high'},
        'electric-low':{name:"Low rate electric", efficiency:1.0, fuel: 'electric-low'},
        'electric':{name:"Electric", efficiency:1.0, fuel: 'electric'},
        'greenelectric':{name:"100% Green Electric", efficiency:1.0, fuel: 'greenelectric'},

        'other-wood':{name:"Other wood", efficiency:1.0, fuel: 'wood'},
        'other-oil':{name:"Other oil", efficiency:1.0, fuel: 'oil'},   
        'other-gas':{name:"Other gas", efficiency:1.0, fuel: 'gas'},
        'other-electric':{name:"Other electric", efficiency:1.0, fuel: 'electric'}
    }
}
