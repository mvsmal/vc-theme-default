var storefrontApp = angular.module('storefrontApp');
storefrontApp.component('vcCustomerReview', {
    transclude: true,
    templateUrl: 'themes/assets/js/customer-review/customer-review.tpl.html',
    bindings: {
        productId: '@',
    },
    controller: ['customerReviewService', function (customerReviewService) {
        var ctrl = this;
        ctrl.error = false;
        ctrl.authorNickname = '';
        ctrl.content = '';
        ctrl.reviewSent = false;


        ctrl.submit = function (event) {
            if (!ctrl.form.$valid) {
                // return;
            }

            event.stopPropagation();
            ctrl.processing = true;
            customerReviewService.postReview({
                authorNickname: ctrl.authorNickname,
                content: ctrl.content,
                productId: ctrl.productId
                }).then(function () {
                    ctrl.processing = false;
                    ctrl.reviewSent = true;
                }, function () {
                    ctrl.processing = false;
                    ctrl.error = true;
                });
        }
    }]
});
