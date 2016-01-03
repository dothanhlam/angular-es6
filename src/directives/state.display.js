/**
 * Created by LamDo on 1/3/16.
 */
class StateDisplayDirective {

    /*@ngInject*/
    constructor($interval, states) {
        this.template = '<div class="state-label">{{ prefix }} {{ currentState }}</div>';
        this.restrict = 'E';
        this.replace = true;
        this.scope = {
            start: '='
        };

        this.$interval = $interval;
        this.states = states;
    }

    link(scope) {

        scope.prefix = this.states.getPrefix();
        scope.currentState = this.states.getNextState();

        scope.$watch('start', (val) => {
            if (val) {
                this.$interval(() => scope.currentState = this.states.getNextState(), 3500);
            }
        });

    }
}
register('app').directive('stateDisplay', StateDisplayDirective);