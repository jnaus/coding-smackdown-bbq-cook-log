var codingsmackdown = codingsmackdown || {};

codingsmackdown.PrepEvent = function() {
    var self = this;
    self.id = '';
    self.title = '';
    self.allDay = true;
    self.start = '';
    self.end = '';
    self.editable = true;
};

codingsmackdown.LogEntry = function() {
    var self = this;
    self.id = '';
    self.title = '';
    self.allDay = true;
    self.start = '';
    self.end = '';
    self.editable = true;
    self.event = new codingsmackdown.Event();
    self.preparation = null;
    self.cookingProcedure = null;
    self.weather = null;
    self.cookerLog = [];
    self.results = null;
};

codingsmackdown.Event = function() {
    var self = this;
    self.id = '';
    self.stateChampionship = false;
    self.contactName = '';
    self.contactPhone = '';
    self.contactEmail = '';
    self.website = '';
    self.prizeMoney = 0;
    self.certifiedJudgePercentage = 0;
    self.numberOfTeams = 0;
};

codingsmackdown.Preparation = function () {
    var self = this;
    self.id = '';
    self.date = '';
    self.meatType = '';
    self.brand = '';
    self.weight = 0;
    self.pricePerPound = 0;
    self.fresh = false;
    self.frozen = false;
    self.prepProcedureUsed = '';
    self.marinade  = '';
    self.rub = '';
    self.baste = '';
};

codingsmackdown.CookingProcedure = function() {
    var self = this;
    self.id = '';
    self.date = '';
    self.cookingProcedureUsed = '';
    self.targetCookerTemperature = 0;
    self.targetInternalTemperature = 0;
    self.fuelBrand = '';
    self.fuelType = '';
    self.fuelQuantityUsed = 0;
    self.woodType = '';
    self.woodQuantityUsed = 0;
    self.woodDry = false;
    self.woodSoaked = false;
    self.preCookComments = '';
};

codingsmackdown.Weather = function() {
    var self = this;
    self.id = '';
    self.date = '';
    self.weatherTemperature = 0;
    self.weatherWind = '';
    self.weatherCloudCover = '';
    self.weatherConditions = '';
};

codingsmackdown.CookerLog = function() {
    var self = this;
    self.id = '';
    self.dateTime = '';
    self.cooker = '';
    self.temperatureTop = 0;
    self.temperatureBottom = 0;
    self.temperatureMeat = 0;
    self.temperatureAir = 0;
    self.ventOnePercentOpen = 0;
    self.ventTwoPercentOpen = 0;
    self.ventThreePercentOpen = 0;
    self.turnMeat = false;
    self.basteMeat = false;
    self.addedFuel = false;
    self.addedWood = false;
    self.addedWater = false;
    self.comments = '';
};

codingsmackdown.Results = function() {
    var self = this;
    self.id = '';
    self.place = 0;
    self.score = 0;
    self.exteriorAppearance = '';
    self.apperanceScore = 0;
    self.smokeRingPenetration = '';
    self.tenderness = '';
    self.tendernessScore = 0;
    self.moisture = '';
    self.tasteScore = 0;
    self.flavor = '';
    self.aroma = '';
    self.comments = '';
    self.notesForFuturePreparation = '';
};


