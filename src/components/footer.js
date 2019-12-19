import React, { Component } from 'react';
import '../css/footer.css';
import { FaRegCopyright } from 'react-icons/fa';
import Mailto from 'react-protected-mailto'




class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="company">
                    <h4>
                        JenningsIII  
                    </h4>
                </div>
                <div className="year">
                    2020 <FaRegCopyright />
                </div>
                <div className="contact">
                    Email: <Mailto
                    email='jajenningsiii@gmail.com'
                    headers={
                        {subject:'PersiaJennings.com'}
                    }/>
                </div>
            </div>
        )
    }
}

export default Footer;