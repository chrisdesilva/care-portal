import React from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import DonationsList from './DonationsList'

class AdminPage extends React.Component {

    state = {
        donation: '',
        zipCode: '',
        submitted: false
    }

    onDonationChange = e => {
        this.setState({
            donation: e.target.value
        })
    }

    onZipChange = e => {
        this.setState({
            zipCode: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            submitted: true
        })
    }

render(){
    return (
        <div>
            {!this.state.submitted &&
            <> 
            <h2>Enter a Zip Code and Choose a Service You Are Looking For</h2>
            <Form onSubmit={this.handleSubmit}>
                <Form.Field
                    onChange={this.onZipChange}
                    control={Input}
                    label="Zip"
                    placeholder="Enter your zip code"
                    required
                />
                <Form.Field required>
                    <label>Select Donation Type</label>
                    <select onChange={this.onDonationChange}>
                        <option selected disabled>----Services----</option>
                        <option value="transportation">Transportation</option>
                        <option value="cooking">Cooking</option>
                        <option value="cleaning">Cleaning</option>
                        <option value="handyman">Handyman</option>
                        <option value="auto">Auto Maintenance</option>
                        <option disabled>----Goods----</option>
                        <option value="furniture">Furniture</option>
                        <option value="food">Food</option>
                        <option value="clothing">Clothing</option>
                        <option value="toys">Toys</option>
                        <option value="childcare">Baby Products</option>
                    </select>
                </Form.Field>
                <Button type="submit" color="teal">Submit</Button>
            </Form>
            </>
            }
            {this.state.submitted && 
                <DonationsList 
                    zipCode={this.state.zipCode}
                    donation={this.state.donation}
                />
            }
        </div>
    )
}
}

export default AdminPage