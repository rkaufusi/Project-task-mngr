import React from 'react'
import Unassigned from './components/Unassigned.js'
import Todo from './components/Todo'
import Done from './components/Done'

const App = () => {
    return (
        <div>
            <Unassigned/>
            <Todo/>
            <Done/>
        </div>
    )
}

export default App
