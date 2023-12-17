import React from "react";
import '../boxes/style.css';

class Box extends React.Component{
    render(){
        return <section className={'div-box'}>
            <div className={'box-one'}>
                <p>Secondary Column</p>
            </div>
            <div className={'box-content'}>
                <p>Content Here</p>
            </div>
            <div className={'box-content'}>
                <p>Content Here</p>
            </div>
        </section>
    }
}


export default Box