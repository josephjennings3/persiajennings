import React, { Component } from 'react';
import '../css/footer.css';
import { FaRegCopyright } from 'react-icons/fa';


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
                    Email:jajenningsiii@gmail.com
                </div>
            </div>
        )
    }
}

export default Footer;