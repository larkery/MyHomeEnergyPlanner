var openbem = {

    apikey: "",

    'getlist':function()
    {
        var result = [];
        var apikeystr = ""; if (this.apikey!="") apikeystr = "?apikey="+this.apikey;

        $.ajax({ url: path+"assessment/list.json"+apikeystr, dataType: 'json', async: false, success: function(data) {result = data;} });

        if (result=="") result = [];
        return result;
    },
    
    'get': function(id)
    {
        var result = {};
        $.ajax({url: path+"assessment/get.json?id="+parseInt(id), async: false, success: function(data){result = data;} });
        return result;
    },
    
    'set': function(id,project)
    {
        var inputdata = {};
        for (z in project)
        {
            inputdata[z] = openbem.extract_inputdata(project[z]);
        }
        var result = {};
        $.ajax({ type: 'POST', url: path+"assessment/setdata.json", data: "id="+parseInt(id)+"&data="+JSON.stringify(inputdata), async: true, success: function(data){} });
    },
    
    'create':function(name,description)
    {
        var result = 0;
        $.ajax({ type: 'GET', url: path+"assessment/create.json", data: "name="+name+"&description="+description, async: false, success: function(data){result=data;} });
        return result;
    },
    
    'delete':function(id)
    {
        var result = 0;
        $.ajax({ type: 'GET', url: path+"assessment/delete.json", data: "id="+id, async: false, success: function(data){result=data;} });
        return result;
    },

    /*
    'getprojectdetails':function(project_id)
    {
        var result = {};
        var apikeystr = ""; if (this.apikey!="") apikeystr = "?apikey="+this.apikey;

        $.ajax({ url: path+"openbem/getprojectdetails.json", data: "project_id="+project_id, dataType: 'json', async: false, success: function(data) {result = data;} });

        if (result=="") result = {};
        return result;
    },

    'addproject':function(name,description)
    {
        var result = 0;
        $.ajax({ type: 'GET', url: path+"openbem/addproject.json", data: "name="+name+"&description="+description, async: false, success: function(data){result=data;} });
        return result;
    },

    'deleteproject':function(projectid)
    {
        var result = 0;
        $.ajax({ type: 'GET', url: path+"openbem/deleteproject.json", data: "projectid="+projectid, async: false, success: function(data){result=data;} });
        return result;
    },


    'get_scenarios':function(project_id)
    {
        var result = [];
        var apikeystr = ""; if (this.apikey!="") apikeystr = "?apikey="+this.apikey;

        $.ajax({ url: path+"openbem/getscenarios.json"+apikeystr, data: "project_id="+project_id, dataType: 'json', async: false, success: function(data) {result = data;} });

        if (result=="") result = [];
        return result;
    },

    'add_scenario':function(project_id,meta)
    {
        var result = 0;
        $.ajax({ type: 'GET', url: path+"openbem/addscenario.json", data: "project_id="+project_id+"&meta="+JSON.stringify(meta), async: false, success: function(data){result=data;} });
        return result;
    },

    'clone_scenario':function(project_id,scenario_id)
    {
        var result = 0;
        $.ajax({ type: 'GET', url: path+"openbem/clonescenario.json", data: "project_id="+project_id+"&scenario_id="+scenario_id, async: false, success: function(data){result=data;} });
        return result;
    },


    'delete_scenario':function(project_id,scenario_id)
    {
        var result = 0;
        $.ajax({ type: 'GET', url: path+"openbem/deletescenario.json", data: "project_id="+project_id+"&scenario_id="+scenario_id, async: false, success: function(data){result=data;} });
        return result;
    },

    'get_scenario':function(scenario_id)
    {
        var result = {};
        var apikeystr = ""; if (this.apikey!="") apikeystr = "?apikey="+this.apikey;

        $.ajax({ url: path+"openbem/getscenario.json"+apikeystr, data: "scenario_id="+scenario_id, dataType: 'json', async: false, success: function(data) {result = data;} });

        return result;
    },  

    'save_scenario':function(scenario_id,data)
    {
        var inputdata = openbem.extract_inputdata(data);
        var result = {};
        $.ajax({ type: 'POST', url: path+"openbem/savescenario.json", data: "scenario_id="+scenario_id+"&data="+JSON.stringify(inputdata), async: true, success: function(data){} });
        return result;
    },

    'get':function(building)
    {
        var result = {};
        $.ajax({ url: path+"openbem/getmonthly.json", dataType: 'json', data: "building="+building, async: false, success: function(data) {result = data;} });
        return result;
    },

    'save':function(building,data)
    {
        var result = {};
        $.ajax({ type: 'POST', url: path+"openbem/savemonthly.json", data: "building="+building+"&data="+JSON.stringify(data), async: true, success: function(data){} });
        return result;
    },

    'list':function()
    {
        var result = {};
        var apikeystr = ""; //if (feed.apikey!="") apikeystr = "?apikey="+feed.apikey;

        $.ajax({ url: path+"openbem/getlist.json"+apikeystr, dataType: 'json', async: false, success: function(data) {result = data;} });
        return result;
    },

    load: function()
    {
        var result = {};
        $.ajax({url: path+"openbem/load.json", async: false, success: function(data){result = data;} });
        return result;
    },
    
    save: function(data)
    {
        var inputdata = openbem.extract_inputdata(data);
        var result = {};
        $.ajax({ type: 'POST', url: path+"openbem/save.json", data: "data="+JSON.stringify(inputdata), async: true, success: function(data){} });
    },
    */
    
    extract_inputdata: function(data)
    {
        var inputdata = {};
        
        inputdata.scenario_name = data.scenario_name;

        inputdata.household = data.household;

        inputdata.region = data.region;
        inputdata.altitude = data.altitude
        inputdata.use_custom_occupancy = data.use_custom_occupancy;
        inputdata.custom_occupancy = data.custom_occupancy;

        inputdata.floors = [];
        for (z in data.floors) {
            inputdata.floors[z] = {name: data.floors[z].name, area: data.floors[z].area, height: data.floors[z].height};
        }

        inputdata.fabric = {
            thermal_bridging_yvalue: data.fabric.thermal_bridging_yvalue,
            elements: []
        };

        for (z in data.fabric.elements) {
            inputdata.fabric.elements[z] = {
                type: data.fabric.elements[z].type,
                name: data.fabric.elements[z].name,
                subtractfrom: data.fabric.elements[z].subtractfrom,
                l: data.fabric.elements[z].l,
                h: data.fabric.elements[z].h,
                area: data.fabric.elements[z].area,
                uvalue: data.fabric.elements[z].uvalue,
            };
            if (data.fabric.elements[z].description!=undefined) inputdata.fabric.elements[z].description = data.fabric.elements[z].description;
            if (data.fabric.elements[z].kvalue!=undefined) inputdata.fabric.elements[z].kvalue = data.fabric.elements[z].kvalue;
            if (data.fabric.elements[z].orientation!=undefined) inputdata.fabric.elements[z].orientation = data.fabric.elements[z].orientation;
            if (data.fabric.elements[z].overshading!=undefined) inputdata.fabric.elements[z].overshading = data.fabric.elements[z].overshading;
            if (data.fabric.elements[z].g!=undefined) inputdata.fabric.elements[z].g = data.fabric.elements[z].g;
            if (data.fabric.elements[z].gL!=undefined) inputdata.fabric.elements[z].gL = data.fabric.elements[z].gL;
            if (data.fabric.elements[z].ff!=undefined) inputdata.fabric.elements[z].ff = data.fabric.elements[z].ff;
        }

        // Ventilation
        inputdata.ventilation = {
            number_of_chimneys: data.ventilation.number_of_chimneys,
            number_of_openflues: data.ventilation.number_of_openflues,
            number_of_intermittentfans: data.ventilation.number_of_intermittentfans,
            number_of_passivevents: data.ventilation.number_of_passivevents,
            number_of_fluelessgasfires: data.ventilation.number_of_fluelessgasfires,
            
            air_permeability_test: data.ventilation.air_permeability_test,
            air_permeability_value: data.ventilation.air_permeability_value,
            
            dwelling_construction: data.ventilation.dwelling_construction,
            suspended_wooden_floor: data.ventilation.suspended_wooden_floor,
            draught_lobby: data.ventilation.draught_lobby,
            percentage_draught_proofed: data.ventilation.percentage_draught_proofed,
            number_of_sides_sheltered: data.ventilation.number_of_sides_sheltered,
            ventilation_type: data.ventilation.ventilation_type,
            system_air_change_rate: data.ventilation.system_air_change_rate,
            balanced_heat_recovery_efficiency: data.ventilation.balanced_heat_recovery_efficiency
        };
        
        
        // LAC
        inputdata.use_LAC = data.use_LAC;
        inputdata.LAC = {
            LLE: data.LAC.LLE,
            L: data.LAC.L,
            reduced_internal_heat_gains: data.LAC.reduced_internal_heat_gains
        };
        
        inputdata.use_generation = data.use_generation;
        inputdata.generation = data.generation;
        
        inputdata.currentenergy = {
            energyitems: data.currentenergy.energyitems,
            greenenergy: data.currentenergy.greenenergy
        };
        
        // Waterheating
        inputdata.use_water_heating = data.use_water_heating;
        inputdata.water_heating = {
            low_water_use_design: data.water_heating.low_water_use_design,
            instantaneous_hotwater: data.water_heating.instantaneous_hotwater,
            solar_water_heating: data.water_heating.solar_water_heating,
            pipework_insulated_fraction: data.water_heating.pipework_insulated_fraction,
            declared_loss_factor_known: data.water_heating.declared_loss_factor_known,
            manufacturer_loss_factor: data.water_heating.manufacturer_loss_factor,
            storage_volume: data.water_heating.storage_volume,
            temperature_factor_a: data.water_heating.temperature_factor_a,
            loss_factor_b: data.water_heating.loss_factor_b,
            volume_factor_b: data.water_heating.volume_factor_b,
            temperature_factor_b: data.water_heating.temperature_factor_b,
            community_heating: data.water_heating.community_heating,
            hot_water_store_in_dwelling: data.water_heating.hot_water_store_in_dwelling,
            contains_dedicated_solar_storage_or_WWHRS: data.water_heating.contains_dedicated_solar_storage_or_WWHRS,
            hot_water_control_type: data.water_heating.hot_water_control_type
        };
        
        inputdata.use_SHW = data.use_SHW;
        inputdata.SHW = {
            A: data.SHW.A,
            n0: data.SHW.n0,
            a1: data.SHW.a1,
            a2: data.SHW.a2,
            inclination: data.SHW.inclination,
            orientation: data.SHW.orientation,
            overshading: data.SHW.overshading,
            Vs: data.SHW.Vs,
            combined_cylinder_volume: data.SHW.combined_cylinder_volume
        };
        
        inputdata.use_appliancelist = data.use_appliancelist;
        inputdata.appliancelist = {list:[]};
        for (z in data.appliancelist.list) {
            inputdata.appliancelist.list[z] = {
                name: data.appliancelist.list[z].name,
                power: data.appliancelist.list[z].power,
                hours: data.appliancelist.list[z].hours
            }
        }
        
        // Temperature
        inputdata.temperature = {
            responsiveness: data.temperature.responsiveness,
            target: data.temperature.target,
            control_type: data.temperature.control_type,
            living_area: data.temperature.living_area
        };
        
        // Space heating
        inputdata.space_heating = {
            use_utilfactor_forgains: data.space_heating.use_utilfactor_forgains
        }

        // Energy systems
        inputdata.energy_systems = {}
        for (z in data.energy_systems) {
            inputdata.energy_systems[z] = [];
            
            for (i in data.energy_systems[z])
            {
                inputdata.energy_systems[z].push({
                    system: data.energy_systems[z][i].system,
                    description: data.energy_systems[z][i].description,
                    fraction: data.energy_systems[z][i].fraction,
                    efficiency: data.energy_systems[z][i].efficiency
                });
            }
            
        }
        
        // Fuels
        inputdata.fuels = data.fuels;
    
        return inputdata;
    }
}
