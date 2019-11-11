class Auth {
    constructor() {
        this.authentification = localStorage.getItem('token') || false;
    }

    setToken(newToken) {
        this.authentification = localStorage.setItem('token', JSON.stringify(newToken));
    }

    getToken() {
        // add you're token with postman ;)
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUzYzgxMTkyLTg0ZDUtNDQxOS04ZmViLTNhYmY4ZGM2N2U2YyIsImlhdCI6MTU3MzQ4MTI2OSwiZXhwIjoxNjA1MDM4MTk1fQ.-rTJZoVOwHZdfwhEiHG-aMRxdz32dvl2z-no8d0iObg'
        //return this.authentification;
    }

    removeToken() {
        this.authentification = null;
        localStorage.removeItem('token');
    }
}
module.exports = new Auth();