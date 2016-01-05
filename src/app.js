/**
 * Created by LamDo on 1/3/16.
 */
var app = angular.module('app', []);

app.constant('config', {
    apiUrl: 'api/'
});


app.config((statesProvider) => {
    console.log('statesProvider', statesProvider)
    statesProvider.setPrefix('You are feeling');
});