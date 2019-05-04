import React from 'react'
import { Button, Form, Input, TextArea } from 'semantic-ui-react'
import DonorReceipt from './DonorReceipt'

class DonorPage extends React.Component {

    state = {
        donation: '',
        description: '',
        name: '',
        email: '',
        phoneNumber: '',
        zipCode: '',
        photoFile: '',
        submitted: false
    }

    onDonationChange = e => {
        this.setState({
            donation: e.target.value
        })
    }

    onDescriptionChange = e => {
        this.setState({
            description: e.target.value
        })
    }

    onNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }
    onEmailChange= e => {
        this.setState({
            email: e.target.value
        })
    }
    onPhoneChange = e => {
        this.setState({
            phoneNumber: e.target.value
        })
    }
    onZipChange = e => {
        this.setState({
            zipCode: e.target.value
        })
    }

    onChangePhoto = e => {
        this.setState({
            photoFile: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            submitted: true
        })
    }

    render() {
        return (
            <div>
                {!this.state.submitted && <Form onSubmit={this.handleSubmit}>
                    <Form.Field required>
                        <label>Select Donation Type</label>
                        <select onChange={this.onDonationChange}>
                            <option disabled>----Services----</option>
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
                    <Form.Field 
                        onChange={this.onDescriptionChange}
                        control={TextArea}
                        label="Description"
                        placeholder="Describe your donation of goods or services"
                        required
                    />
                    <Form.Field
                        onChange={this.onNameChange}
                        control={Input}
                        label="Name"
                        placeholder="Enter your name" 
                        required 
                    />
                    <Form.Field
                        onChange={this.onEmailChange}
                        control={Input}
                        label="Email"
                        placeholder="Enter your e-mail"
                        required
                    />
                    <Form.Field
                        onChange={this.onPhoneChange}
                        control={Input}
                        label="Phone"
                        placeholder="Enter your phone number"
                        required
                    />
                    <Form.Field
                        onChange={this.onZipChange}
                        control={Input}
                        label="Zip"
                        placeholder="Enter your zip code"
                        required
                    />
                    <Form.Field>
                        <label>Upload Photo</label>
                        <input type="file" id="file" onChange={this.onChangePhoto} />
                    </Form.Field>
                    <Button type="submit" color="orange">Submit</Button>
                </Form>}
                {this.state.submitted && 
                    <DonorReceipt 
                        name={this.state.name}
                    />
                }
            </div>
        )
    }
}

export default DonorPage