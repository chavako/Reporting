angular.module('app').factory('saveService', function($localStorage){
    return new SaveService($localStorage);
});
function SaveService($localStorage){

    this.list = $localStorage;
}

SaveService.prototype.saveEntrance = function(date){

    var key = moment(date).format("YYYY-MM");

     if(!this.list[key]){ // init month
       this.list[key] = {};
     }

    var dateKey = moment(date).format("YYYY-MM-DD");

    if(!this.list[key][dateKey]){ // init date in month
        this.list[key][dateKey] = {};
    }

    this.list[key][dateKey].entrance = date;
};
SaveService.prototype.saveExit = function(date){
    var key = moment(date).format("YYYY-MM");

    if(!this.list[key]){ // init month
        this.list[key] = {};
    }

    var dateKey = moment(date).format("YYYY-MM-DD");

    if(!this.list[key][dateKey]){ // init date in month
        this.list[key][dateKey] = {};
    }

    this.list[key][dateKey].exit = date;
};
SaveService.prototype.getByMonth = function(date){
    var key = moment(date).format("YYYY-MM");
    return this.list[key];
};
