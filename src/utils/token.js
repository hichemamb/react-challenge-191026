exports.getToken = () => localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUzYzgxMTkyLTg0ZDUtNDQxOS04ZmViLTNhYmY4ZGM2N2U2YyIsImlhdCI6MTU3MzQ4MTI2OSwiZXhwIjoxNjA1MDM4MTk1fQ.-rTJZoVOwHZdfwhEiHG-aMRxdz32dvl2z-no8d0iObg';

exports.setToken = (newToken) => localStorage.setItem('token',JSON.stringify(newToken));

exports.removeToken = () => localStorage.removeItem('token');