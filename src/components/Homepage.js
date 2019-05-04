import React from 'react'
import DonorPage from './DonorPage'

const Homepage = () => (
    <div>
        <h1>CarePortal</h1>
        <h2>Click the appropriate button below to get started</h2>
        <Button>I am a Donor</Button>
        <button>I am an Admin</button>
        <DonorPage />
    </div>
)

export default Homepage