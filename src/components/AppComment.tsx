import { useEffect, useState} from "react"
import { CommentsList } from "./CommentsList"
import { getComment } from "../actions/dataActions"
import { IComment } from "../types/appTypes"
import Comment from "@ant-design/compatible/lib/comment"
import { Button } from "antd"

const AppComment: React.FC<{id: number, children?: React.FC}> = ({id})=>{

    const [commentData, setCommentData] = useState<undefined | IComment>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [showKids, setShowKids] = useState(false)

    useEffect(()=>{
        getComment(id)
      .then((data)=>{
        if (data instanceof Error){
          setError(true)
        } else {
          setCommentData(data)
        }
        setLoading(false)
      })
    }, [id])

    const handleCommentList = ()=>{
        setShowKids(!showKids)
    }

    return (
    <>
        {commentData && !loading && !error ?
        <Comment
        content = {commentData.text}
        author = {commentData.by}
        >
          {commentData.kids?
          <Button onClick={handleCommentList}>
            {commentData.kids.length} ответов 
          </Button>
          : null 
          }
          {commentData.kids && showKids?
          <>
            <CommentsList 
            kids = {commentData.kids}
            />
          </>
          : null
        }
        </Comment>
    : null}
    </>
    )
}

export {AppComment}