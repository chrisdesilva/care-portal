import React, { useState } from 'react'
import AdminPage from './AdminPage'
import DonorPage from './DonorPage'
import FooterMenu from './FooterMenu'
import SignUpPage from './SignUpPage'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Homepage = () => {

    const [donor, setDonor] = useState(false)
    const [admin, setAdmin] = useState(false)
    const [showButtons, setShowButtons] = useState(true)
    const [showSignUp, setShowSignUp] = useState(false)
    const [showSignedUp, setShowSignedUp] = useState(false)

    const handleDonor = e => {
        setDonor(true)
        setAdmin(false)
        setShowButtons(false)
        setShowSignedUp(false)
        setShowSignUp(false)
    }

    const handleAdmin = e => {
        setAdmin(true)
        setDonor(false)
        setShowButtons(false)
        setShowSignedUp(false)
        setShowSignUp(false)
    }

    const handleHome = () => {
        setAdmin(false)
        setDonor(false)
        setShowButtons(true)
        setShowSignedUp(false)
        setShowSignUp(false)
    }

    const handleSignUpRedirect = () => {
        setAdmin(false)
        setDonor(false)
        setShowButtons(true)
        setShowSignUp(false)
        setShowSignedUp(true)
    }

    const handleSignUp = () => {
        setShowButtons(false)
        setShowSignUp(true)
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
            {showSignedUp && <Message success style={{textAlign: 'center'}}>
                <Message.Header>Thanks for signing up!</Message.Header>
                <p>Log in to donate today</p>
            </Message>}
            {showButtons && <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <h1>Welcome to <span id="donors">Donors</span><span id="list">List</span></h1>
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
                    <Message>
                        Want to make a difference? <Button onClick={handleSignUp}>Sign Up</Button>
                    </Message>
                </Grid.Column>
            </Grid>}
            { donor && <DonorPage />}
            { admin && <AdminPage />}
            { showSignUp && <SignUpPage handleSubmit={handleSignUpRedirect} />}
            <FooterMenu 
                home={handleHome}
            />
        </div>
    )

}

export default Homepage