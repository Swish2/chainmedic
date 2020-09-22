import React,{useState} from 'react'



const Modal = ({isFooter,width,children,title, isOpen,close,overflow,isLine})=>{


    return(

        <>
            <div className="modal-wrapper" style={{width:width+'%', right: isOpen ? '0':'-100%'}}>
                <div className="modal">
                    <div className="modal-header" style={{borderBottom:isLine ? '1px solid #E2E2E2':'none'}}>
                        <p>{title ? title:"No header"}</p>
                        <img src="/icons/close.svg" className="close" onClick={(e)=>close(false)}/>
                    </div>
                    <div className="modal-body" style={{height:isFooter ? "82%":'91%', overflow: overflow ? 'auto':'hidden'}}>
                        {
                            React.Children.map(children,(child,i)=>{
                                if(child.type.name != 'ModalFooter'){
                                    return child
                                }
                            })
                        }
                    </div>
                    {
                        isFooter ?
                        <div className="modal-footer">
                            {
                                React.Children.map(children,(child,i)=>{
                                    if(child.type.name == 'ModalFooter'){
                                        return child
                                    }
                                })
                            }
                        </div>:''
                    }
                    

                </div>
            </div>
     
        <style jsx>{`
            .modal-wrapper{
                padding-top:60px;
                position:fixed;
                top:0;
                bottom:0;
                right:0;
                width:50%;
                z-index:50;
                transition: right .5s ease-in-out;
            }

            .modal{
                display:flex;
                width:100%;
                background-color:white;
                position:absolute;
                right:0;
                flex-direction:column;
                height:90%;
                box-shadow: -30px 4px 50px rgba(0, 0, 0, 0.15);
            }

            .modal-body{
                display:flex;
                flex-direction:column;
                height:100%;
                overflow:auto;
            }

            .modal-body::-webkit-scrollbar {
                width: 5px;
            }

        /* Track */
            .modal-body::-webkit-scrollbar-track {
                background-color:#ffffff; 
                border-radius: 10px;
            }
            
            /* Handle */
            .modal-body::-webkit-scrollbar-thumb {
                background: #E1E1E1; 
                border-radius: 10px;
            }

            .modal-header{
                height:60px;
                display:flex;
                align-items:center;
                padding: 0 20px 0 40px;
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                justify-content:space-between
            }

            .modal-footer{
                border-top: 1px solid #E2E2E2;
                display:flex;
                align-items:center;
                height:60px;
                padding: 0 20px 0 40px;
            }
            
            .close{
                cursor:pointer;
            }
        `}</style>
        </>
    )
}



const ModalFooter = ({children})=>{

    return(
        <>
        {children}
        </>
    )
}
export {Modal, ModalFooter};