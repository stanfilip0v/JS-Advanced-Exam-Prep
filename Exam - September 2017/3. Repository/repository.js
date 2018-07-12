class Repository {
    constructor(props) {
        this.props = props;
        this.data = new Map();
        this.index = -1;
    }

    add(entity) {
        let propsKeys = Object.keys(this.props);
        let entityKeys = Object.keys(entity);

        for (let i = 0; i < propsKeys.length; i++) {
            if (propsKeys[i] !== entityKeys[i]) {
                throw new Error(`Property ${propsKeys[i]} is missing from the entity!`);
            }
        }
        for (let i = 0; i < entityKeys.length; i++) {
            if(typeof entity[entityKeys[i]] !== this.props[propsKeys[i]]) {
                throw new TypeError(`Property ${propsKeys[i]} is of incorrect type!`);
            }
        }

        this.index++;
        this.data.set(this.index, entity);
        return this.index;
    }

    get(id) {
        if(!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        return this.data.get(id);
    }

    update(id, entity) {
        if(!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        let propsKeys = Object.keys(this.props);
        let entityKeys = Object.keys(entity);

        for (let i = 0; i < propsKeys.length; i++) {
            if (propsKeys[i] !== entityKeys[i]) {
                throw new Error(`Property ${propsKeys[i]} is missing from the entity!`);
            }
        }
        for (let i = 0; i < entityKeys.length; i++) {
            if(typeof entity[entityKeys[i]] !== this.props[propsKeys[i]]) {
                throw new TypeError(`Property ${propsKeys[i]} is of incorrect type!`);
            }
        }

        this.data.set(id, entity);
    }

    del(id) {
        if(!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        this.data.delete(id);
    }

    get count() {
        return this.data.size;
    }
}
