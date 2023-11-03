import List from "antd/es/list"
import { PostListItem } from "./PostListItem";

const PostList: React.FC<{stories: number[]}> = ({stories})=>{
    return (
      <>
      <List
      bordered
      dataSource={stories}
      renderItem={(item) => (
        <List.Item>
          <PostListItem id = {item} />
        </List.Item>
      )}>
      </List>
    </>
    )
    
    
}
export {PostList}