class Project {
    constructor(name) {
        this.name = name;
    }

    start() {
        console.log("Project " + this.name + " starting");
    }
}

class WebProject extends Project {
    constructor (name, technologies) {
        super(name);
        this.technologies = technologies;
    }

    info () {
        console.log(this.name + " uses " + arrayToString(this.technologies));
    }
}

function arrayToString(param) {
    return param;
}

var webJournal = new WebProject("FE Journal", "js");

webJournal.start();
webJournal.info();