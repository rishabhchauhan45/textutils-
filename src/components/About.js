import React from 'react'

export default function About(props) {
   //const [myStyle,setMyStyle] = useState 
// ({
//color: 'black',
//  backgroundColor: 'white'
// })
 let myStyle = 
{
  color: props.mode ==='dark'?'white':'#042557',
  backgroundColor: props.mode ==='dark'?'#042743':'white',
  border: '2px solid',
 
} 

  
  return (
    <div className="container" style={myStyle}>
        <h1 className='my-3'> About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>
          Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        
        <strong>TextUtils is a completely free-to-use tool. </strong>Our goal is to provide a simple and accessible solution for managing your text. You will not be charged any fees to use any of the features. This tool is available for all students, writers, developers, and anyone else who needs to quickly modify their text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
  <strong>borowser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Here is the text for the "Browser Compatible" </strong>This TextUtils application is designed to work seamlessly across all modern web browsers. We have ensured that it runs perfectly on Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge. Our goal is to provide a consistent and reliable experience, whether you are accessing it from a desktop computer, a tablet, or your mobile phone.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}