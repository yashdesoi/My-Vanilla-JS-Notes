class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(`${this.name} is logged in`);
        // Returning 'this' means that current instance of an object is returned. If nothing is explicitly returned, then undefined is returned implicitly.
        return this;
    }
    logout() {
        console.log(`${this.name} has logged out`);
        return this;
    }
    updateScore(points) {
        this.score += points;
        console.log(this.score);
        return this;
    }
}

let player = new Player('Yash');

console.log(player.name, player.score);

player
    .login()
    .updateScore(5)
    .updateScore(8)
    .logout();

console.log(player.name, player.score);

// If 'this' is not returned in those methods, then implicitly undefined would have returned. Therefore player.login() would have returned undefined, and undefined.updateScore(5) would have given an error.