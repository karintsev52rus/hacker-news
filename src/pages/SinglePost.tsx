import { useParams } from "react-router-dom"
import { Typography, Spin, Button , Space} from "antd"
import { useCallback, useEffect } from "react"
import Statistic from "antd/es/statistic/Statistic"
import { formateDate } from "../helpers/formatedData"
import { useAppDispatch } from "../store"
import { useTypedSelector, storySelector , errorSelector, messageSelector} from "../store/selectors"
import { getStoryPageData } from "../store/thunks"
import { CommentsList } from "../components/CommentsList"
import { loadingSelector } from "../store/selectors"

const SinglePost: React.FC = ()=>{

    const {postId} = useParams<{postId: string}>()
    const storyId = Number(postId)
    const appDispatch = useAppDispatch()
    const currentStory = useTypedSelector(storySelector)
    const loading = useTypedSelector(loadingSelector)
    const error = useTypedSelector(errorSelector)
    const message = useTypedSelector(messageSelector)

    const refreshStory = useCallback(()=>{
        appDispatch(getStoryPageData(storyId))
    }, [appDispatch, storyId])

    useEffect(()=>{
        if (!currentStory){
            refreshStory()
        }
    }, [appDispatch, currentStory, refreshStory])

    const {Title} = Typography

    return (
    <div className="page_container">
        {loading ? <Spin/> : null}
    {error ? message : null}
    {currentStory? 
    <Space direction = "vertical" size = {15}>
    <Title> {currentStory.title} </Title>
        <a href= {currentStory.url}> читать новость </a>
        <Statistic title="Дата" value={formateDate(currentStory.time)} />
        <Statistic title="Автор" value={currentStory.by} />
        {currentStory.kids ? 
        <>
        <Statistic title="Комментариев" value={currentStory.kids.length}/>
        <Button onClick = {refreshStory}> Обновить </Button>
        
        <CommentsList kids = {currentStory.kids} />
        </>
        : <Statistic title="Комментариев" value={0} /> }
    </Space> : null   
    }
    </div>
    )
}   


export {SinglePost}