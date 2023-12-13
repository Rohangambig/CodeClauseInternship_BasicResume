import './App.css';

function App() {
  return (
    <div className="App">
      <div className='nav'>
          <div className='navcontainer1'>
              <h1>Rohan Ganapati Ambig</h1>
              <p>( Frontend developer )</p>
          </div>
          <div className='navcontainer2'>
              <p>Email : <span><a href='mailto:rohanambig585@gmail.com'>rohanambig585@gmail.com</a></span></p>
              <p>Contact number : <span>+91 11111111</span></p>
              <p>LinkedIn : <span><a href=' '>LinkedIn</a></span></p>
              <p>Github : <span><a href=' '>Github</a></span></p>
          </div>
      </div>

      <div className='summary'>
        <h1>Summary</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula ex at lacus tincidunt, a porttitor ligula auctor. Duis sollicitudin nisl metus, sed maximus tellus faucibus placerat. Aenean quis eros sed velit tempor eleifend. Mauris quis aliquet eros. Morbi aliquam quam id semper dapibus. Nullam id eros et odio eleifend mollis quis vel diam.</p>
      </div>

      <div className='Edu'>
        <h1>Education</h1>
        <div className='marks'>
            <div className='Degree'>
              <p>Bachelor of engineering - computer sceince and engineering </p>
              <p>Bachelor of engineering - computer sceince and engineering </p>
              <p>Bachelor of engineering - computer sceince and engineering </p>
            </div>
            <div className='Year'>
              <p>2021 </p>
              <p>2019</p>
              <p>2021</p>
            </div>
            <div className='percent'>
              <p>CGPA : 8.8</p>
              <p>Percentage : 93.66</p>
              <p>Percentage : 92</p>
            </div>
        </div>
      </div>

      <div className='LastContainer'>
        <div className='Project'>
          <h1>Projects</h1>
          <div className='Project1'>
            <p><span>Topic name</span><br></br>Praesent vestibulum metus id bibendum porta. Mauris egestas pellentesque enim a faucibus. Proin vehicula/</p>
            <p><span>Topic name</span><br></br>Praesent vestibulum metus id bibendum porta. Mauris egestas pellentesque enim a faucibus. Proin vehicula/</p>
            <p><span>Topic name</span><br></br>Praesent vestibulum metus id bibendum porta. Mauris egestas pellentesque enim a faucibus. Proin vehicula/</p>
            <p><span>Topic name</span><br></br>Praesent vestibulum metus id bibendum porta. Mauris egestas pellentesque enim a faucibus. Proin vehicula/</p>
            <p><span>Topic name</span><br></br>Praesent vestibulum metus id bibendum porta. Mauris egestas pellentesque enim a faucibus. Proin vehicula/</p>
            <p><span>Topic name</span><br></br>Praesent vestibulum metus id bibendum porta. Mauris egestas pellentesque enim a faucibus. Proin vehicula/</p>
            <p><span>Topic name</span><br></br>Praesent vestibulum metus id bibendum porta. Mauris egestas pellentesque enim a faucibus. Proin vehicula/</p>
          </div>
        </div>

        <div style={{'margin-left':'10px'}}>
          <div className='Skills'>
            <h1>Skills</h1>
            <ul>
              <li>C</li>
              <li>Java</li>
              <li>Python3</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React js</li>
              <li>Datebase : Firebase</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div className='Skills'>
             <h1>Certificate</h1>
             <ul>
              <li>CodeSoft webdevelopment internship (1 month)</li>
              <li>IonIdea internship (1 month )</li>
              <li>Web Development ( CSI Workshop )</li>
              <li>React Js Certificate by SimpleLearn</li>
              <li>Python Certificate ( Open weaver )</li>
            </ul>
          </div>

          <div className='Skills'>
            <h1>Hobbies</h1>
            <ul>
              <li>Swimming</li>
              <li>Bike Ride</li>
              <li>Chess</li>
              <li>Cricket</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
