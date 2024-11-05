const mongoose = require("mongoose");
class User {
    constructor(name, email, type) {
        this.name = name;
        this.email = email;
        this.type = type;
    }
}

module.exports = User;  // Correctly export the class