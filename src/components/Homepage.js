import React, { useState } from 'react'
import AdminPage from './AdminPage'
import DonorPage from './DonorPage'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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
        <div className="homePage">
            <style>
                {`
                    body > div,
                    body > div > div,
                    body > div > div > div.homePage {
                        height: 100%;
                    }
                `}
            </style>
            {showButtons && <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/careportal.png' /> Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />

                            {showButtons && <Button color="orange" onClick={handleDonor}>I am a Donor</Button>}
                            {showButtons && <Button color="teal" onClick={handleAdmin}>I am an Admin</Button>} 
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>}
            { donor && <DonorPage />}
            { admin && <AdminPage />}
        </div>
    )

}

export default Homepage