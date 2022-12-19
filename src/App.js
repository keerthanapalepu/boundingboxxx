import * as React from 'react';
import { Worker, LayerRenderStatus, Viewer,  SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import jumpToPagePlugin from './jump';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Canvas from './canva';
import {data} from './data';

const App = () => {
    const [box, setBox] = React.useState([]);
    const [index, setIndex] = React.useState(2);
    // const [plugins, setPlugins] = React.useState([]);
    React.useEffect(() => {
      let temp1 = []
      data.document.pages.map((page) => {
        let pageNumber = page.pageNumber;
        page.blocks.map((block) => {
            let coOrdinates = block.layout.boundingPoly.normalizedVertices;
            temp1.push({coOrdinates : coOrdinates, pageNumber : pageNumber});
        })
      })
    console.log(temp1);
    setBox([...temp1])
    }, [])
    
    const customCanvasPlugin = (index) => {
        const onCanvasLayerRender = (e) => {
            if (e.status !== LayerRenderStatus.DidRender) {
                return;
            }
        
            // console.log(e);
            const canvas = e.ele;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#CCC';
            console.log(index);
            var myPoints = [
                [box[index].coOrdinates[0].x, box[index].coOrdinates[0].y],
                [box[index].coOrdinates[1].x, box[index].coOrdinates[1].y],
                [box[index].coOrdinates[2].x, box[index].coOrdinates[2].y],
                [box[index].coOrdinates[3].x, box[index].coOrdinates[3].y]
              ];
        
              const width = canvas.width;
              
              const height = canvas.height;
              console.log(width, height);
                ctx.beginPath();
                ctx.moveTo(myPoints[0][0] * width, myPoints[0][1] * height);
                ctx.lineTo(myPoints[1][0] * width, myPoints[1][1] * height);
                ctx.lineTo(myPoints[2][0] * width, myPoints[2][1] * height);
                ctx.lineTo(myPoints[3][0] * width, myPoints[3][1] * height);
                ctx.closePath();
                ctx.stroke();
        };
        return {
            onCanvasLayerRender,
        };
    };

    
    
    let customCanvasPluginInstance = customCanvasPlugin(index);
    // React.useEffect(() => {
    //     console.log("updated")
    //     setPlugins([customCanvasPluginInstance, jumpToPagePluginInstance])
    // }, [index])
    // React.useEffect(() => {
    //     customCanvasPluginInstancen = customCanvasPlugin(index);
    // }, [index])
    
    const jumpToPagePluginInstance = jumpToPagePlugin();
    const { jumpToPage } = jumpToPagePluginInstance;
    // const [plugins, setPlugins] = React.useState([jumpToPagePluginInstance]);
    return (
    <>
    <div>
    <button
        style={{
            background: 'rgba(0, 0, 0, .1)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '16px',
            padding: '8px',
        }}
        onClick={() => {
            if(index !== 0){
                console.log(index);
                customCanvasPlugin(index)
            setIndex(index - 1)}
            jumpToPage(box[index].pageNumber - 1)}}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
    
    <button
        style={{
            background: 'rgba(0, 0, 0, .1)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '16px',
            padding: '8px',
        }}
        onClick={() => {
            if(index !== 155){
                console.log(index);
            setIndex(index + 1)}
            jumpToPage(box[index].pageNumber - 1)}}
    >
    <i className="fa-solid fa-arrow-down"></i>
    </button>
    </div>
    <div className="block-demo block-demo--border"
        style={{
            height: '65em',
            paddingLeft: '20rem',
            paddingRight: '10rem'
        }}
    >
    
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js`}>
      {/* <div id="container">
      <div id="pdf"> */}
          <Viewer fileUrl="https://demo-proreview.s3.amazonaws.com/Consultant+Agreement+-+Akhileshwar+Gurram_removed.pdf" defaultScale={SpecialZoomLevel.PageFit}   plugins={[customCanvasPluginInstance, jumpToPagePluginInstance]} />
          {/* </div> */}

            <Canvas/>
          {/* </div> */}
          </Worker> 
  
          </div>
</>
  )
};
export default App;

    // <div style={{margin : "auto", width: "70%"}}>
//https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf
// defaultScale={SpecialZoomLevel.PageFit}