db = require("../config")

class Users{
    fetchUsers(req, res) {
        const query = `
        SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, profileUrl
        FROM Users;
        `;
        db.query(query, (err, results) =>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res) {
        const query = `
        SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileUrl
        FROM Users
        WHERE userID = ${req.params.id};
        `;

        db.query(query, (err, result) => {
            if (err) throw err
            res.join({
                status: res.statusCode,
                result
            })
        })
    }
    login(req, res) {

    }
    resgister(req, res) {
        
    }
    updateUser(req, res) {
        const query = `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `
        db.query(query, [res.body, res.params.id], (err) =>{
            if (err) throw err
            res.json({
                status: statusCode,
                msg: "A User's details has been updated"
            })
        })
    }
    deleteUser(req, res) {
        const query = `
        DELETE FROM Users
        WHERE userID = ${res.params.id};
        `
        db.query(query, (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "A User has been deleted"
            })
        })
    }
}

module.exports = Users