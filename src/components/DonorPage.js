import React from 'react'

class DonorPage extends React.Component {

    state = {
        donation: '',
        descripton: '',
        name: '',
        email: '',
        phoneNumber: '',
        zipCode: '',
        file: ''
    }

    onDonationChange = e => {
        this.setState({
            donation: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <select onChange={this.onDonationChange}>
                        <option selected disabled>Donations</option>
                        <option disabled>Services-------</option>
                        <option value="transportation">Transportation</option>
                        <option value="cooking">Cooking</option>
                        <option value="cleaning">Cleaning</option>
                        <option value="handyman">Handyman</option>
                        <option value="auto">Auto Maintenance</option>
                        <option disabled>Goods-------</option>
                        <option value="furniture">Furniture</option>
                        <option value="food">Food</option>
                        <option value="clothing">Clothing</option>
                        <option value="toys">Toys</option>
                        <option value="childcare">Baby Products</option>
                    </select>
                    <textarea onChange="" placeholder="Describe your donation of goods or services"></textarea>
                    <input type="text" placeholder="Enter your name" />
                    <input type="email" placeholder="Enter your email address" />
                    <input type="text" placeholder="Enter your phone number" />
                    <input type="text" placeholder="Enter your zip code" />
                    <input type="file" placeholder="Upload your photo" />
                    <input type="submit" value="Submit" class="btn btn-primary" />
                </form>
            </div>
        )
    }
}

export default DonorPage