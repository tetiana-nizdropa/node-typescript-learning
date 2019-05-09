const request = require('request-promise');

const getOptions = {
    uri: 'https://reqres.in/api/users?page=2',
    json: true

};

const postOptions = {
    method: 'POST',
    uri: 'https://reqres.in/api/users',
    form: {
        name: 'morpheus',
        job: 'leader'
    },
    json: true
};

const putOptions = {
    method: 'PUT',
    uri: 'https://reqres.in/api/users/2',
    form: {
        name: 'morpheus',
        job: 'zion resident'
    },
    json: true
};

const deleteOptions = {
    method: 'DELETE',
    uri: 'https://reqres.in/api/users/2',
    resolveWithFullResponse: true
};

async function executeRequest(options: object): Promise<object> {
    try {
        const response = await request(options);
        return response;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

async function executeDeleteRequest(options: object): Promise<object> {
    try {
        const response = await request(options);
        return response.statusCode;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

// TODO: DELETE message - response.statusCode behavior
executeDeleteRequest(deleteOptions)
    .then(response => console.log(response))
    .catch(error => console.error(error));

module.exports = {
    getOptions,
    postOptions,
    putOptions,
    deleteOptions,
    executeRequest
};
