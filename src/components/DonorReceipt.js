import React from 'react'
import { Icon, Image, Statistic } from 'semantic-ui-react'

const photo = '/kids-celebrating.jpg'

const DonorReceipt = props => (
    <div>
        <Image src={photo} centered/>
        <div id="donorFooter">
            <div>
                <h3>#ShareYourService</h3>
            </div>
            <Icon className="socialMedia" name='facebook' size='large' />
            <Icon className="socialMedia" name='twitter square' size='large' />
            <Icon className="socialMedia" name='instagram' size='large' />
        </div>
        <h2 style={{textAlign: 'center'}}>Thanks {props.name}!</h2>
        <p style={{ textAlign: 'center' }}>Look at the impact your donation has on the world.</p>
        <Statistic.Group id="donorReceipt" widths='one'>
            <Statistic>
                <Statistic.Value>2,201</Statistic.Value>
                <Statistic.Label>Articles of Clothing</Statistic.Label>
            </Statistic>

            <Statistic>
                <Statistic.Value text>
                    Four<br />
                    Hundred Five
                </Statistic.Value>
                <Statistic.Label>Meals Served</Statistic.Label>
            </Statistic>

            <Statistic>
                <Statistic.Value>
                    <Icon name='car' />
                    1,015
                </Statistic.Value>
                <Statistic.Label>Rides Given</Statistic.Label>
            </Statistic>

            <Statistic>
                <Statistic.Value>
                    <Icon name='user circle outline' />
                    5,365
                </Statistic.Value>
                <Statistic.Label>Donors</Statistic.Label>
            </Statistic>
        </Statistic.Group>
    </div>
)

export default DonorReceipt