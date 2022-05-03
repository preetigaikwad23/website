var app = angular.module('StripeDemo', ['ui.bootstrap.stripe-form'])

app.config(function ($httpProvider) {
    Stripe.setPublishableKey('pk_test_9UmoLTisWuQ6zpNwlHVpx9Oy');
});