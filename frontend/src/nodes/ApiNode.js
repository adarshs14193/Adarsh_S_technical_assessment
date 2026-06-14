//ApiNode. js

import { BaseNode } from "./BaseNode";

export const APINode = ({ id }) => {
    return (
        <BaseNode
            id={id}
            title="API"
            inputs={[
                { id: 'request' }
            ]}
            outputs={[{
                id: 'response'
            }]}
        >
            <span>API Node</span>
        </BaseNode>
    )
}