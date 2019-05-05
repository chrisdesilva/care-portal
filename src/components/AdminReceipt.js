import React from 'react'
import { Feed, Message } from 'semantic-ui-react'

const events = [
    {
        date: '1 Hour Ago',
        image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
        meta: '512-987-1542',
        summary: 'Elliot scheduled a furniture drop-off for 5/16/19',
    },
    {
        date: '4 days ago',
        image: 'https://react.semantic-ui.com/images/avatar/small/helen.jpg',
        meta: '512-587-5856',
        summary: 'Helen scheduled a dinner for 5/7/19'
    },
    {
        date: '3 days ago',
        image: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
        meta: '512-658-9856',
        summary: 'Joe scheduled car maintenance for 5/9/19'
    },
    {
        date: '4 days ago',
        image: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg',
        meta: '512-854-8563',
        summary: 'Justen scheduled a clothing drop-off for 5/26/19'
    },
]

const AdminReceipt = props => {
    return (
        <div>
            <Message positive>
                <Message.Header>You booked {props.name} to help with {props.donation}</Message.Header>
                <p>
                    Email: {props.email}
                </p>
                <p>
                    Phone: {props.phone}
                </p>
            </Message>
            <Feed events={events} />
        </div>
    )
}

export default AdminReceipt