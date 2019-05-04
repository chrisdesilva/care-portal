import React, { useState } from 'react'
import AdminPage from './AdminPage'
import DonorPage from './DonorPage'
import { Button } from 'semantic-ui-react'

const Homepage = () => {

    const [donor, setDonor] = useState(false)
    const [admin, setAdmin] = useState(false)
    const [showButtons, setShowButtons] = useState(true)

    const handleDonor = e => {
        setDonor(true)
        setAdmin(false)
        setShowButtons(false)
    }

    const handleAdmin = e => {
        setAdmin(true)
        setDonor(false)
        setShowButtons(false)
    }

    return (
        <div>
            <h1>CarePortal</h1>
            { showButtons && <h2>Click the appropriate button below to get started</h2>} 
            { showButtons && <Button color="orange" onClick={handleDonor}>I am a Donor</Button>}
            { showButtons && <Button color="teal" onClick={handleAdmin}>I am an Admin</Button>} 
            { donor && <DonorPage />}
            { admin && <AdminPage />}
        </div>
    )

}

export default Homepage