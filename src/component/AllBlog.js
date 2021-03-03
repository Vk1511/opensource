import React,{useState,useEffect} from 'react'
import './AllBlog.css'
//import {Blog} from '../data/BlogData'
// import b2 from '../Data/b2.jpg'
// import b3 from '../Data/b3.jpg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Pill from './Pill'
// import { data } from 'jquery';


function AllBlog({cat}) {

    const [Blog, setBlog] = useState([]);

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://communitywebsite.herokuapp.com/blogs')
        .then(res => {
            // console.log(res)
            setBlog(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
        <>
            <Pill />
            <div className="containervk">
                <div className="container-cardvk">                  
                    {
                        Blog.filter(catd => catd.blogCategory.find(ele => ele === cat)).map((blog,key) => {                      
                            return(
                                <div className="cardvk" key={key}>
                                    <div className="thumbvk">
                                         <Link to="/"><img src="https://images.unsplash.com/photo-1609238642088-26031d126e37?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="card-thumb-img" /></Link>  
                                    </div>
                                    <div className="card-bodyvk">
                                    <div className="card-detailsvk">
                                            <ul className="card-detailsvk-ul">
                                                <li>{blog.blogCategory}</li>
                                            </ul>
                                        </div>
                                        <div className="card-titlevk">{blog.blogTitle}</div>
                                        
                                        <div className="card-contentvk">
                                            <p>{blog.blogContent}</p>
                                        </div>
                                        15 Dec • {blog.xMinsRead}Min Read
                                    </div>
                                </div>
                                )
                            })
                    }
                </div>
            </div>
        </>
    )          
         
}

export default AllBlog
