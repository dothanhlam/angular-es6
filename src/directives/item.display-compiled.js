/**
 * Created by LamDo on 1/3/16.
 */
class ItemDisplayDirective {

    constructor() {
        this.template = '<div class="item-display-container"><item ng-repeat="item in items" model="item"></item></div>';
        this.restrict = 'E';
        this.replace = true;
        this.scope = {
            collection: '=',
            start: '='
        };
    }

    link(scope) {

        scope.$watch('start', value => {
            if (value) {
                scope.items = scope.collection;
            }
        });
    }
}

register('app').directive('itemDisplay', ItemDisplayDirective);

//# sourceMappingURL=item.display-compiled.js.map