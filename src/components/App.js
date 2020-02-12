import React, { useState } from 'react'

import ResourceList from './ResourceList'
import UserList from './UserList'

const App = () => {
    const [resource, setResource] = useState('posts')
    return (
        <div>
            <div>
                <button 
                    onClick={() => setResource('Posts')}
                >
                    Posts
                </button>
                <button 
                    onClick={() => setResource('Todos')}
                >
                    Todos
                </button>
            </div>
            <UserList />
            <ResourceList resource={resource} />
        </div>
    )
}

export default App