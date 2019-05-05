import React from 'react'
import { Button, Form, Message, Input } from 'semantic-ui-react'

const SignUpPage = props => {
    return (
        <div id="container">
            <Form onSubmit={props.handleSubmit} id="adminForm" warning>
                <Message
                    info
                    header='Create an account'
                    list={[
                        'Enter a valid email address and a password',
                    ]}
                />
                <Form.Field
                    control={Input}
                    label="Email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                />
                <Form.Field
                    control={Input}
                    label="Password"
                    type="password"
                    placeholder="Enter a password"
                    required
                />
                <Form.Field
                    control={Input}
                    label="Confirm password"
                    type="password"
                    placeholder="Confirm your password"
                    required
                />
                <Button color="orange" type="submit">Create Account</Button>
            </Form>
        </div>
    )
}

export default SignUpPage