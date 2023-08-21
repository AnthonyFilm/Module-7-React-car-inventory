const token = 'cedf868a8251415107120d7de6c4e8dcef0932a0c541eb5f'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://flask-car-inventory.onrender.com/api/vehicles`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    getone: async (id: string) => {
        const response = await fetch(`https://flask-car-inventory.onrender.com/api/vehicles/${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    

    create: async (data: any={}) => {
        const response = await fetch(`https://flask-car-inventory.onrender.com/api/vehicles`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data:any = {}) => {
        // const response = await fetch(`http://127.0.0.1:5000/api/vehicles/${id}`,
        const response = await fetch(`https://flask-car-inventory.onrender.com/api/vehicles/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://flask-car-inventory.onrender.com/api/vehicles/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            
        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return;
    },
}
