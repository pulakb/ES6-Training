class Project {
    constructor(name) {
        this.name = name;
    }

    start() {
        console.log("Project " + this.name + " starting");
    }
}

var project = new Project("Journal");
project.start(); // "Project Journal starting"
