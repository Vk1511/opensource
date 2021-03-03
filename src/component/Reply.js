import React,{useState} from 'react'
import Modal from 'react-modal';
import data  from "../data/ReplyData";
import './Reply.css';


function Reply() {

    const [modalopen,setModalOpen] = useState(false);
    const [comment,setComment] = useState('');

    const openModal = () => {
        setModalOpen(!modalopen)
    }
    Modal.setAppElement('#root');

    const print = () => {
        var newCmnt =
            {
                "id":1,
                "newc": comment,
            }
       
    }

    return (
        <>
        <h3>hey</h3>
        <button onClick={openModal}>reply</button>
        
                <Modal isOpen={modalopen} className="reply_model">
                    <div className="head">
                        <div className="head_text">repiles to vishw kadu's post</div>
                        <button className="close_btn" onClick={openModal}><i className="fas fa-times" /></button>
                    </div>

                    <div className="heyman"> 
                    <div className="cmnt">
                        <img className="cmnt_pro" src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="avtar"/>
                        <div className="cmnt_data">
                            <div className="content">
                                <div className="name">Vishw Kadu</div>
                                <button className="dot" ><i className="fa fa-ellipsis-h dot" /></button>
                            </div>
                            <div className="actual_cmnt">
                                {data[0].comment}    
                            </div>
                        </div>
                    </div>

                    

                    {
                        data[1].reply.map((data,key) => {
                            return(
                                <div className="cmnt_re" key={key}>
                                    <div className="img"></div>
                                    <div className="vk">
                                        <img className="cmnt_pro" src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="avtar"/>
                                        <div className="cmnt_data">
                                            <div className="content">
                                                <div className="name">Vishw Kadu</div>
                                                <button className="dot" ><i className="fa fa-ellipsis-h dot" /></button>
                                            </div>
                                            <div className="actual_cmnt">
                                               {data.comment}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    
                    <div className="send_cmnt">
                        <div className="send_pro">
                            <img className="send_pro_pic" src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="avtar"/>
                        </div>
                        <div className="number">
                            <textarea className="textbox" placeholder="Enter Comment" onChange={(e) => setComment(e.target.value)} value={comment}/>
                        </div>
                        <div className="send_btn"><button disabled={comment==='' ? true : false} onClick={() => print()} >Post</button></div>
                    </div>
                </Modal>
                
        </>
    )
}

export default Reply
