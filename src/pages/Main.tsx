import { PostList } from "../components/PostList"
import { useAppDispatch } from "../store"
import { errorSelector, loadingSelector, storiesSelector, useTypedSelector, messageSelector } from "../store/selectors"
import { getStories } from "../store/thunks"
import { useCallback, useEffect } from "react"
import { Button, Spin, Space } from "antd"

const Main: React.FC = ()=>{

   const appDispatch = useAppDispatch()
   const stories = useTypedSelector(storiesSelector)
   const loading = useTypedSelector(loadingSelector)
   const error = useTypedSelector(errorSelector)
   const message = useTypedSelector(messageSelector)

   const refreshStoriesList = useCallback(()=>{
      appDispatch(getStories())
   }, [appDispatch])

   useEffect(()=>{
      if(!stories.length){
         refreshStoriesList()
      }
    }, [appDispatch, refreshStoriesList, stories.length])

   useEffect(()=>{
      const refreshInterval = setInterval(()=>{
         refreshStoriesList()
         console.log("refresh")
      }, 60000)
      
      return ()=>{
         clearInterval(refreshInterval)
      }
   }, [refreshStoriesList])

    
   
   return (
   <div className="page_container">
      <Space direction="vertical" size={[15, 15]}>
         <Button onClick = {refreshStoriesList} > Обновить </Button>
         {loading ? <Spin/> : null}
         {error ? message : <PostList stories={stories}/>}
      </Space>
   </div>
   )
   
}

export {Main}