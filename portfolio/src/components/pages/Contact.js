import React from "react";
import pdf from "../../assets/resume.pdf";

const Contact = () => {

    return(
        <div>
        <div className="container" id="contactContent">
            <div className="row rounded">
            <h1 className="mx-auto">Lets Connect!</h1>
            </div>
                    {/* <!--Contact list--> */}
            <div className="row">
                {/* <h4 id="listTitle"><strong>Ways to reach me :</strong></h4> */}
                    <ul className="list-group list-group-flush mx-auto col-sm-6 rounded">
                        <li className="list-group-item">Email : <a href="mailto:ashlinhanson@gmail.com" className="links">ashlinhanson@gmail.com</a></li>
                        <li className="list-group-item">Phone : (512)704-5368</li>
                        <li className="list-group-item"><a href="https://www.linkedin.com/in/ashlihanson/" className="links" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li className="list-group-item"><a href="https://github.com/ashlinhanson" className="links" target="_blank" rel="noreferrer">GitHub</a></li>
                        <li className="list-group-item"><a href={pdf} className="links" target="_blank" rel="noreferrer">Resume</a></li>
                    </ul>
            </div>

        </div>
    </div>

    )
}

export default Contact;