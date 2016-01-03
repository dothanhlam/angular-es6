/**
 * Created by LamDo on 1/3/16.
 */
class Selectable {

    constructor() {
        this.restrict = 'A';
    }

    compile(tElement) {
        tElement.addClass('selectable');
    }

    link(scope, element, attrs) {
        var model = scope.$eval(attrs.selectable) || {};

        element.on('click', () => {
            scope.$apply(() => {
                element.toggleClass('selected');
                model.selected = !model.selected;
            });
        });
    }

}

register('app').directive('selectable', Selectable);

//# sourceMappingURL=selectable-compiled.js.map