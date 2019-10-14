interface IAction {
    type: string
}

interface IListNode<T> {
    value: T;
    prev: IListNode<T> | null;
    next: IListNode<T> | null;
}

class ForwardsIterator implements IterableIterator<IAction> {
    constructor(private _currentActionNode: IListNode<IAction> | null) {

    }

    [Symbol.iterator](): IterableIterator<IAction> {
        return this;
    }

    next(): IteratorResult<IAction> {
        const current = this._currentActionNode;

        if (!current || !current.value) {
            return { value: null, done: true };
        }

        this._currentActionNode = current.next;

        return { value: current.value, done: false };
    }
}

const action1: IAction = { type: 'FIRST' };
const action2: IAction = { type: 'SECOND' };
const action3: IAction = { type: 'THIRD' };
const action4: IAction = { type: 'FOURTH' };

let actionNode1 : IListNode<IAction> = {
    value: action1,
    prev: null,
    next: null
};

let actionNode2 : IListNode<IAction> = {
    value: action2,
    prev: actionNode1,
    next: null
};

actionNode1.next = actionNode2;

let actionNode3 : IListNode<IAction> = {
    value: action3,
    prev: actionNode2,
    next: null
};

actionNode2.next = actionNode3;

let actionNode4 : IListNode<IAction> = {
    value: action4,
    prev: actionNode3,
    next: null
};

actionNode3.next = actionNode4;

const forwardsActionList = new ForwardsIterator(actionNode1);

let actions: string[] = [];

for(let action of forwardsActionList) {
    actions.push(action.type);
}

export default actions;