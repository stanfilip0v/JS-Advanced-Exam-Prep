class Task {
    constructor(title, deadline) {
        if (!(deadline instanceof Date) || deadline < Date.now()) {
            throw new Error();
        }
        if (typeof title !== "string" || title === '') {
            throw new Error();
        }
        this.title = title;
        this.deadline = deadline;
        this.status = 'Open';
    }

    get title() {
        return this._title;
    }
    set title(title) {
        if (typeof title !== "string") {
            throw new Error();
        }
        this._title = title;
    }

    get deadline() {
        return this._deadline;
    }
    set deadline(deadline) {
        if (!(deadline instanceof Date) || deadline < Date.now()) {
            throw new Error();
        }
        this._deadline = deadline;
    }

    get isOverdue() {
        return this.deadline < Date.now() && this.status !== 'Complete';
    }

    get icon() {
        if(this.isOverdue) {
            if (this.status !== 'Complete') {
                return `\u26A0`;
            }
            else {
                return `\u2714`;
            }
        }
        else {
            if (this.status === 'In Progress') {
                return `\u219D`;
            }
            if (this.status === 'Open') {
                return `\u2731`;
            }
            if (this.status === 'Complete') {
                return `\u2714`
            }
        }
    }

    get rank() {
        if (this.isOverdue) {
            if (this.status !== 'Complete') {
                return 0;
            }
            else {
                return 3;
            }
        }
        else {
            if (this.status === 'In Progress') {
                return 1;
            }
            if (this.status === 'Open') {
                return 2;
            }
            if (this.status === 'Complete') {
                return 3;
            }
        }
    }

    static comparator(a, b) {
        let compare = a.rank - b.rank;
        if (compare === 0) {
            return a.deadline - b.deadline;
        }
        return compare;
    }

    toString() {
        if (this.rank === 0) {
            return `[${this.icon}] ${this.title} (overdue)`;
        }
        else if (this.rank === 1 || this.rank === 2) {
            return `[${this.icon}] ${this.title} deadline: ${this.deadline}`
        }
        else {
            return  `[${this.icon}] ${this.title}`;
        }
    }
}