angular.module('Clubtree').controller('JoinUs', [
    '$scope',
    '$http',
    function ($scope, $http) {
        $scope.loginToggle = function () {

            if ($("#signup").is(":visible")) {
                $("#login-image").css({"-webkit-filter": "none"});
                $("#signup").animate(
                    {width: "0%"}, 500
                );

                $("#login").animate(
                    { width: "100%" }
                , 500);

                // $("#login").slide
                $("#menuTextlogin").animate(
                    {top: "50%", left: "30%"}, 500
                );
                // $("#signup").animate(
                //     { width: "0%" }
                // );

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
        $scope.signupToggle = function () {

            if ($("#login").is(":visible")) {
                $("#signup-image").css({"-webkit-filter": "none"});
                $("#signup").animate(
                    { width: "100%" }
                );
                $("#menuTextsignup").animate(
                    {top: "50%", left: "70%"}
                );
                $("#back-button-signup").show();
                $(".signup-content").css({"display":"block"});
                $('#login').toggle();
                // $("#menuTextlogin").hide(300);
            }
            else {

            }
        };

        $scope.createMember = function (newMember) {
            var data = {
                firstName: newMember.firstName,
                lastName: newMember.lastName,
                email: newMember.email,
                password: newMember.password
            }
            $http.post('/members', data).then(console.log(data));
        };

        // $scope.backToggle = function () {
        //     if ($(''))
        // }

    }
]);
