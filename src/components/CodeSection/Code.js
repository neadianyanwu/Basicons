import React,{useState, Fragment} from 'react';
import { ArrowTopRight, CopyDuplicate} from "react-basicons";
import "./Code.css";


const HtmlCodeSnippet = () => {
  return (
    <Fragment>
      <div className="script">
        <h5>Add script to "head"</h5>
        <div className="script-code">
          <p style={{width: '100px'}}>{`<script async src="https://basicons.xyz/embed.js"></script>`}</p>
          <CopyDuplicate/>
        </div>
      </div>
      <div className="font">
        <h5>Font</h5>
        <div className="script-code">
          <p>{`<i class="bsc-icon-name"></i>`}</p>
          <CopyDuplicate />
        </div>
      </div>
    </Fragment>
  )
}

const ReactCodeSnippet = () => {
  return (
    <Fragment>
      <div className="import">
        <h5>Import</h5>
        <div className="script-code">
          <p>{`import {IconName} from 'basicons'`}</p>
          <CopyDuplicate/>
        </div>
      </div>
      <div className="font">
        <h5>Render</h5>
        <div className="script-code">
          <p>{`<IconName />`}</p>
          <CopyDuplicate />
        </div>
      </div>
    </Fragment>
  )
}

const DocumentationSnippet = () => {

  window.open("https://github.com/solomon-fibonacci/react-basicons#react-basicons", "_blank");
  return (
        <Fragment>
          <div className="doc">
            
          </div>
        </Fragment>
    
  )
}


const Code = () => {

  const [codeSnippet, setCodeSnippet] = useState('html')

  return (
    <div className="code-container">
        <h6 className="code-header">Code</h6>
        <nav className="code-content">
            <ul className="label">
              <li className={codeSnippet === "html" && 'active'} onClick={() => setCodeSnippet("html")}>
                <a href="#">HTML</a>
              </li>
              <li className={codeSnippet === "react" && 'active'} onClick={() => setCodeSnippet("react")}>
                <a href="#">React</a>
              </li>
              <li>
                <a href="#">Documentation <ArrowTopRight /></a>
              </li>
            </ul>
        </nav>
        <div className="scriptContainer">
          {/* {codeSnippet === "html" ? <HtmlCodeSnippet/> : <ReactCodeSnippet/>} */}
          {codeSnippet === "html" ? <HtmlCodeSnippet/> : (codeSnippet === "react" ? <ReactCodeSnippet/> : <DocumentationSnippet/>)}

        </div>
    </div>
  )
}

export default Code;



//codeSnippet === "html" && 'active' 
// true && 'active' -----> codesnippet is html. This will highlight the HTML tab when codesnippet is html
// false && 'active' -------> This will not highlight the HTML tab when codesnippet is html