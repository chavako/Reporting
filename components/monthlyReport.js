angular.module('app').component('monthlyReport', {
    templateUrl: './components/monthlyReport.html',
    controller: MonthlyReport
});

function MonthlyReport(saveService){
    this.saveService = saveService;
    this.onMonthSelected();
}
MonthlyReport.prototype.onMonthSelected = function () {
    this.records = this.saveService.getByMonth(this.date);
    this.workingHours = this.getWorkingHours();
};

MonthlyReport.prototype.getWorkingHours=function () {
    var sum = 0;
     for(var key in this.records){
        sum+= this.compare(this.records[key], 'hours', true);
     }
    return sum;
};
MonthlyReport.prototype.getTotal = function () {
  return 186;
};

MonthlyReport.prototype.compare = function(record, format, floatValue){
    return moment(record.exit).diff(moment(record.entrance), format, floatValue);
}
