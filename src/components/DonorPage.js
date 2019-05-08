import React from 'react'
import { Button, Form, Input, Message, TextArea } from 'semantic-ui-react'
import DonorReceipt from './DonorReceipt'
import Nav from './Nav'

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
            <div id="container">
            <Nav />
                {!this.state.submitted && <Form id="donorForm" onSubmit={this.handleSubmit}>
                    <Message info>
                        <Message.Header>Fill out the donor form below</Message.Header>
                        <p>Add your information and we'll follow up within 48 hours.</p>
                    </Message>
                    <Form.Field required>
                        <label>Select Donation Type</label>
                        <select onChange={this.onDonationChange}>
                            <option selected disabled>----Services----</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Cooking">Cooking</option>
                            <option value="Cleaning">Cleaning</option>
                            <option value="Handyman">Handyman</option>
                            <option value="Auto">Auto Maintenance</option>
                            <option disabled>----Goods----</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Food">Food</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Toys">Toys</option>
                            <option value="Baby Products">Baby Products</option>
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
                    <Form.Field
                        onChange={this.onChangePhoto}
                        label="Upload Photo"
                        control={Input}
                        type="file"
                    />
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