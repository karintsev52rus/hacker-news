import { List } from "antd"
import { AppComment } from "./AppComment"

const CommentsList: React.FC<{kids: number[]}> = ({kids})=>{

    return (
    <List 
    dataSource={kids} 
    renderItem={(kid: number)=>{
        return <AppComment id = {kid}/>
        }}
    />)
}

export {CommentsList}