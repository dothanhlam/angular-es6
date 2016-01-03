/**
 * Created by LamDo on 1/3/16.
 */
class AppController {

    /*@ngInject*/
    constructor($scope, itemsService, thingFactory) {
        this.items = [];
        this.selection = [];

        itemsService.getItems().then( result =>  this.items = result );

        $scope.$watch('vm.items', () => {
            this.selection = this.items.filter(item => item.selected);
        }, true);

        this.makeThing = () => { thingFactory.newThing() };


        this.$inject = ['$scope', 'itemService', 'Thing'];
    }
}

register('app').controller('AppController', AppController);
