import React from 'react';
import axiosInstance from './axiosInstance';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
const RenderPost = ({ item }) => {
    const [username, setUsername] = useState('');
    const [likes, setLikes]=useState(item.likes)
    const navigate=useNavigate()

    useEffect(() => {
      const fetchData = async () => {
        if(item.user){const res = await axiosInstance.get("/user/"+item.user+"/")
        setUsername(res.data.username)
          }
        }
        fetchData()
    },[item]);

    const updateLikes=async (e)=>{
        e.preventDefault();
        await axiosInstance.patch("/likes/post/"+item.pk+"/")
        setLikes(likes+1)
      }
    
    const goToComments=(e)=>{
        e.preventDefault();
        console.log("before"+item.pk)
        navigate('/Comments_page',{state:{"pk":item.pk}})
      }
       
    
    return (
        <div className="post-container">
        <h2>{item.title}</h2>
        <Link to={"/Other_profile"} state={{"item":item}} style={{ textDecoration: 'none', display: 'inline-block', padding: '5px 10px', borderRadius: '5px', color:'black' }}>
  <p style={{ margin: '0', fontWeight: 'bold' }}>{username}</p>
</Link>
        <p style={{ color: '#888' }}>{item.date}</p>
        <img src={item.image} alt=''/>
        <p><strong>AI Generated:</strong> {item.caption}</p>
        <button className="like-button" onClick={updateLikes}>
      <FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: '5px' }} />
      {likes}
    </button>
        <button style={{ marginLeft: '10px' }}onClick={goToComments}>Comments</button>
      </div>
    );
  }
export default RenderPost;
