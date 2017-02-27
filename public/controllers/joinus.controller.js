var app = angular.module('Clubtree', []);

// JKAY DO NOT LOOK AT THIS

app.controller('JoinUs', [
    '$scope',
    function ($scope) {
        $scope.loginToggle = function() {
            if ($("#signup").is(":visible")) {
                $("#login").css({"-webkit-filter": "none"});
                $("#login").animate(
                    { width: "100%" }
                );
                $(".login-content").css({"display":"block"});
                $('#signup').toggle();
                // $("#menuTextlogin").hide(300);
            }
            else {
                // $("#login").animate(
                //     { width: "52%" }
                // );
                // $('#signup').toggle();

            }

        };
        $scope.signupToggle = function() {

            if ($("#login").is(":visible")) {
                $("#signup").css({"-webkit-filter": "none"});
                $("#signup").animate(
                    { width: "100%" }
                );
                $(".signup-content").css({"display":"block"});
                $('#login').toggle();
                // $("#menuTextlogin").hide(300);
            }
            else {
                // $("#login").animate(
                //     { width: "52%" }
                // );
                // $('#signup').toggle();

            }
            // $('#signup').toggle();
            // $("#menuTextlogin").hide(300);
        };
    }
]);
