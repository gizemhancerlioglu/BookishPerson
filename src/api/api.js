const api = user => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.email === 'gizem@gizem.com') {
                reject({ email: 'email already use.' })
            }

            resolve();
        }, 2000)
    })
};

module.exports = api;