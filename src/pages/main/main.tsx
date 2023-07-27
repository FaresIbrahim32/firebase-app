import {getDocs,collection} from "firebase/firestore"
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";

export interface Posts {
    id:string,
    userid:string,
    title:string,
    username:string,
    description:string,
}
export const Main = ()=>{

    const [plist,setPlist] = useState<Posts[] | null>(null)
    
    const postsRef = collection(db,"posts");

    const getPosts= async ()=>{
        const data =  await getDocs(    postsRef)
        setPlist(data.docs.map((doc) =>({...doc.data(),id:doc.id})) as Posts[]);
    }

    useEffect(() =>{
        getPosts();
    },)
    return <div>
       {plist?.map((post)=><Post post={post}/>)}
    </div>
}