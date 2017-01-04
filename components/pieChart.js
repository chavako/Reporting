angular.module("app").directive(
    "reactPieChart",
    function (ReactPieChart) {
        // Return the directive configuration object.
        return ({
            link: link,
            scope: {
                workingHours: "=",
                total: "=",
            }
        });
        function link(scope, element, attributes) {
            scope.$watch("workingHours", renderReactElement);

            function renderReactElement() {
                var props = {
                    slices: [
                        {color: '#218916', value: scope.workingHours},
                        {color: '#82767a', value: scope.total}
                    ]
                };
                React.render(
                    React.createElement(ReactPieChart, props),
                    element[0]
                );

            }
        }
    });
