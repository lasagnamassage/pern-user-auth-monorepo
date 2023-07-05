const db = require('./database')
const jwt = require('jsonwebtoken')
const secretkey = 'ej3813e13jdcmweq*jxs8^#^@*!sj' // not good, just for example

class User {
    static async findByEmail(email) {
        let results = await db.query(`SELECT emailaddress, password, firstname FROM users WHERE emailaddress=$1`, [email])
        if (results.rows.length === 0) {
            return []
        }
        return results.rows[0];
    }
    static async add(user) {
        let results = await db.query(`INSERT INTO users VALUES ($1, $2, $3, $4)`, [user.firstname,user.lastname, user.email, user.password])
        return results
    }
    static generateAuthToken(user) {
        let payload = {
            name: user.firstname,
            email: user.emailaddress
        }
        let token = jwt.sign(payload, secretkey, { expiresIn: '30d' })
        return token
    }
    static verifyToken(token) {
        if (typeof token !== 'string')
            return {error: `token not a string, its a ${typeof token}`}
        let verified = jwt.verify(token, secretkey)
        if (verified) {
            let decoded = jwt.decode(token)
            return decoded
        }
        else {
            return { error: 'invalid token' }
        }
    }
}

module.exports = User