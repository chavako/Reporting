angular.module('app').component('clickthetime', {
    templateUrl: './components/clickthetime.html',
    controller: Clickthetime
});

function Clickthetime(saveService){
    this.message = "please select date and time";

    this.saveService = saveService;
}

Clickthetime.prototype.startDateOnSetTime = function(){
    var date = this.enteranceTime;
    this.saveService.saveEntrance(date);

};

Clickthetime.prototype.endDateOnSetTime = function(){
    var date = this.exitTime;
    this.saveService.saveExit(date);
};

//ignore the following code
function startDateBeforeRender ($dates) {
        if ($scope.dateRangeEnd) {
            var activeDate = moment($scope.dateRangeEnd);

            $dates.filter(function (date) {
                return date.localDateValue() >= activeDate.valueOf()
            }).forEach(function (date) {
                date.selectable = false;
            })
        }
    }

function endDateBeforeRender ($view, $dates) {
        if ($scope.dateRangeStart) {
            var activeDate = moment($scope.dateRangeStart).subtract(1, $view).add(1, 'minute');

            $dates.filter(function (date) {
                return date.localDateValue() <= activeDate.valueOf()
            }).forEach(function (date) {
                date.selectable = false;
            })
        }
    }
