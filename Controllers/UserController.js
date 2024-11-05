const User = require('./../Models/User');

function getUserInfo(req, resp){
    const Person = new User("Musawir","musawirbangash@hotmail.com","Developer");
    let message = `${Person.name} with email: 
                    ${Person.email} 
                    Role ${Person.type} Person Started Developing a MERN app`;
    resp.json(message);
}
module.exports = { getUserInfo }