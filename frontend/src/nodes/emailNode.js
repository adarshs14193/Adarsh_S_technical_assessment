// emailNode.js

import { BaseNode } from './BaseNode';



export const EmailNode = ({ id }) => {
    return (
        <BaseNode

            id={id}
            title="Email"
            inputs={[
                {
                    id: 'subject'
                },
                {
                    id: 'body'
                },
            ]}
            outputs={[
                {
                    id: 'sent'
                }]}
        >
            <span>Email Node</span>
        </BaseNode>
    )
}