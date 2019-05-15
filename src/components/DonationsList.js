import React, { useState } from 'react'
import { Button, Card, Header, Image, Modal, Rating, Statistic } from 'semantic-ui-react'
import AdminReceipt from './AdminReceipt'

const donors = [
    {
        name: 'Luis',
        description: 'Negotium sufficere posse recensentur in NASDAQ vadit ventre sursum. Perit! Non est amplius extra me existant. Non, manifeste tu scis nesciunt qui loquebantur, sic fiat mihi fila vobis ego sum nolite ingredi in periculo Skyler. Sum in periculo! Ut sagittis metus aperit ostium, et arbitraris me et habet? Non ego sum ille qui pulsat! ',
        email: 'Luis@hotmail.com',
        phone: '512-987-1543',
        rating: 5,
        donations: 123
    },
    {
        name: 'Jacob',
        description: 'Pergo coctione, et ego, et tu oblivisci Pinkman. Obliviscendum hoc unquam factum. Intelligamus hoc in sola SINGULTO multo aliter atque fructuosa negotium structura. Malo B. Option. ',
        email: 'Jacob@hotmail.com',
        phone: '512-987-1544',
        rating: 4,
        donations: 97
    },
    {
        name: 'Erin',
        description: 'Mauris a nunc occideritis me rectum. Videtur quod Ive facillimum, qui fecit vos. Potes me interficere, sine testibus et tunc manere in pauci weeks vel mensis vestigia Isai Pinkman et vos quoque illum occidere. Exercitium inutili option A. Videtur mihi quod autem est. ',
        email: 'Erin@hotmail.com',
        phone: '512-987-1545',
        rating: 5,
        donations: 564
    },
    {
        name: 'Chris',
        description: 'Ecce dabo Pinkman Isai OK? Sicut locutus est tibi, et datus est, et hic sine Semper consequat volumus ... et ille in urbe ista licet? Et infernus, ubi tu non Virginiae ornare vel ipsum. Ut enim Albuquerque et ille eum iure hic, et ego ducam te ad iustitiam. Quid dicis? ',
        email: 'Chris@hotmail.com',
        phone: '512-987-1546',
        rating: 3,
        donations: 6
    }
]

const DonationsList = props => {

    const [showReceipt, setShowReceipt] = useState(false)

    const showAdminReceipt = e => {
        e.preventDefault()
        setShowReceipt(true)
    }

    return (
        <div>
            <Button onClick={props.goBack} style={{margin:'auto'}}>Back</Button>
            <div id="donationList">
            {!showReceipt && <Card.Group>
                {donors.map( donor => {
                    return <Card>
                        <Card.Content>
                            <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                            <Card.Header>{donor.name}</Card.Header>
                            <Card.Meta>{props.donation}</Card.Meta>
                            <Card.Meta>{props.zipCode}</Card.Meta>
                            <Card.Description>
                                {donor.description}
                            </Card.Description>
                        </Card.Content>
                        <Modal closeIcon trigger={<Button color="teal">Details</Button>}>
                            <Modal.Header>{donor.name}</Modal.Header>
                            <Modal.Content image>
                                <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                                <Modal.Description>
                                    <Header>{props.donation}</Header>
                                    <p>{donor.description}</p>
                                    <p>{donor.email}</p>
                                    <p>{donor.phone}</p>
                                </Modal.Description>
                            </Modal.Content>
                            <Modal.Actions id="modalFooter">
                                <div id="modalStats">
                                    <Statistic color='orange'>
                                        <Statistic.Value>{donor.donations}</Statistic.Value>
                                        <Statistic.Label>Donations Completed</Statistic.Label>
                                    </Statistic>
                                </div>
                                <Rating icon='star' defaultRating={donor.rating} maxRating={5} />
                                <Button color="teal" onClick={showAdminReceipt}>Book Now</Button> 
                            </Modal.Actions>
                        </Modal>
                    </Card>
                })}
            </Card.Group>}
            { showReceipt && 
                <AdminReceipt
                    name={donors[0].name}
                    email={donors[0].email}
                    phone={donors[0].phone}
                    donation={props.donation}
                />
            }
        </div>
        </div>
    )
}

export default DonationsList