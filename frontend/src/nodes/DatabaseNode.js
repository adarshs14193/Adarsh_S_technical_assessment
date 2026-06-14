import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id }) => {
    return(
        <BaseNode
            id = {id}
            title="Database"
            inputs={[{
                id: 'query'
            }]}
            outputs={[{
                id : 'result'
            }]}
            >
                <span>Database Node</span>
            </BaseNode>
    )
}