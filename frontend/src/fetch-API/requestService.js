const JWT = '';
const requestService = {
    get: async url => {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-auth-token': `Bearer ${JWT}`
            },
        });
        if (response.ok) {
            const data = await response.text();
            return { data, response };
        }
        const requestError = {
            status: response.status,
            statusText: response.statusText
        };
        return { requestError };
    },
    post: async (url, payload) => {
        const response = await fetch(url, {
            method: 'POST',
            redirect: 'follow',
            headers: {
                Authorization: `Bearer ${JWT}`
            },
            body: JSON.stringify(payload)
        });
        if (response.ok) {
            const data = await response.text();
            return { data, response };
        }
        const requestError = {
            status: response.status,
            statusText: response.statusText
        };
        return { requestError };
    },
    put: async (url, payload) => {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'x-auth-token': `Bearer ${JWT}`
            },
            body: JSON.stringify(payload)
        });
        if (response.ok) {
            const data = await response.json();
            return { data, response };
        }
        const requestError = {
            status: response.status,
            statusText: response.statusText
        };
        return { requestError };
    },
    delete: async url => {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'x-auth-token': `Bearer ${JWT}`
            }
        });
        if (response.ok) {
            const data = await response.json();
            return { data, response };
        }
        const requestError = {
            status: response.status,
            statusText: response.statusText
        };
        return { requestError };
    }
};

export default requestService;
