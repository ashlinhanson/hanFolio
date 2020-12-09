import React from "react";
import "./styles/index.css";

const Contact = () => {

    return(
    
    <div className="container-contact">
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <div className="page-header"/>
                    <div className="col-sm-12">
                        <div className="card mt-4">
                            <div className="card-body-contact">
                                <p className="card-text">
                                    <div className="container-sm col-sm-12" id="contactContent">
                                        <h1>Lets Connect!</h1>
                                            <p id="contactP">
                                                I would love to hear from you!
                                                <br/>
                                                <br/>
                                                {/* <!--Contact list--> */}
                                                <div className="list">
                                                <h4 id="listTitle"><strong>Ways to reach me :</strong></h4>
                                                    <ul>
                                                    <br/>
                                                        <li className="listItems">Email : <a href="mailto:ashlinhanson@gmail.com" className="links">ashlinhanson@gmail.com</a></li>
                                                        <br/>
                                                        <li className="listItems">Phone : (512)704-5368</li>
                                                        <br/>
                                                        <li className="listItems"><a href="https://www.linkedin.com/in/ashlihanson/" className="links" target="_blank">LinkedIn</a></li>
                                                        <br/>
                                                        <li className="listItems"><a href="https://github.com/ashlinhanson" className="links" target="_blank">GitHub</a></li>
                                                        <br/>
                                                        <li className="listItems"><a href="../../resume.pdf" class="links" target="_blank">Resume</a></li>
                                                    </ul>
                                                </div>
                                            </p>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>

    )
}

export default Contact;