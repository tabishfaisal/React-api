import { useState, useEffect } from "react";
import axios from "axios";

export default function Posts(){
    const [blogPosts,setBlogPosts] = useState([]);
    const API_URL = `http://localhost:3000/bacheca`;

    useEffect(() => {
        const fetchBlogPosts = async () => { 
            try {
                const response = await axios.get(`${API_URL}`);
                    setBlogPosts(response.data.post);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            }
        };

        fetchBlogPosts();
    }, [API_URL]);

    return (
        <>
            {blogPosts.map((post)=>{
                <div key={post.id} >{post}</div>
            })}
        </>
    )

}