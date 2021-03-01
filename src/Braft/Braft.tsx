import styles from "./Braft.module.less"
import 'braft-editor/dist/index.css'
import  { useState } from 'react'
import BraftEditor from 'braft-editor'
// import { Input } from 'antd';
// const { TextArea } = Input;
const Braft =()=>{
    const [editorState,setEditorState]=useState<any>(BraftEditor.createEditorState(null))
        const handleChange=(editorState:any)=>{
            setEditorState(editorState)
        }       
    return (
        <div className={styles.braft}>
            <div className={
                styles.top
            }>
                <BraftEditor value={editorState} onChange={handleChange}/>
            </div>
                
        </div>
    )

}
export default Braft