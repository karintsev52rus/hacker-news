import { useEffect, useState } from "react"
import { Link} from "react-router-dom"
import { Flex } from "antd"
import { getStory } from "../actions/dataActions"
import { IStory } from "../types/appTypes"
import { formateDate } from "../helpers/formatedData";
import { setCurrentStory } from "../store/storyReducer"
import { useAppDispatch } from "../store"



const PostListItem: React.FC<{id: number}> = ({id})=>{

    const [storyData, setStoryData] = useState<undefined | IStory>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const appDispatch = useAppDispatch()

    useEffect(()=>{
      getStory(id)
      .then((data)=>{
        if (data instanceof Error){
          setError(true)
        } else {
          setStoryData(data)
        }
        setLoading(false)
      })
    }, [id])

    const setStory = ()=>{
      appDispatch(setCurrentStory(storyData))
    }

    return (
    <>
    { storyData && !loading && !error ?
    <Flex>
    <div style={{minWidth: "600px"}}>
    <Link to = {`/posts/${id}`} onClick = {setStory}>
        {storyData.title}
    </Link>
    </div>
    <div style={{minWidth: "150px"}}>{storyData.by}</div>
    <div style={{minWidth: "30px"}}>{storyData.score}</div>
    <div style={{minWidth: "150px"}}>{formateDate(storyData.time)}</div>
    </Flex>
     : null
    }
    </>)
}

export {PostListItem}