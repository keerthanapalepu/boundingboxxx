// import logo from './logo.svg';
// import './App.css';
// import Canvas from './canva';
// function App() {
//   let x, y;
//   const draw = (ctx, frameCount) => {
//     if (frameCount === 0 || frameCount % 100 === 0) {
//       x = 100 + Math.random() * 500;
//       y = 100 + Math.random() * 500;
//     }
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     ctx.fillStyle = "#000000";
//     ctx.beginPath();
//     ctx.arc(
//       x,
//       y,
//       20 * Math.sin(frameCount * 0.05) ** 2,
//       0,
//       2 * Math.PI * Math.sin(frameCount * 0.05) ** 2
//     );
//     ctx.fill();
//   };

//   return (
//         <Canvas draw={draw} width={window.innerWidth} height={window.innerHeight} />
//   );
// }

// export default App;



// import React, { useRef, useEffect } from 'react';

// function App() {
//   const canvas = useRef();
//   let ctx = null;

//   // initialize the canvas context
//   useEffect(() => {
//     // dynamically assign the width and height to canvas
//     const canvasEle = canvas.current;
//     canvasEle.width = canvasEle.clientWidth;
//     canvasEle.height = canvasEle.clientHeight;

//     // get context of the canvas
//     ctx = canvasEle.getContext("2d");
//   }, []);

//   useEffect(() => {
//     const r1Info = { x: 20, y: 30, w: 100, h: 50 };
//     const r1Style = { borderColor: 'red', borderWidth: 10 };
//     drawRect(r1Info, r1Style);

//     const r2Info = { x: 100, y: 100, w: 80, h: 150 };
//     drawRect(r2Info);

//     const r3Info = { x: 250, y: 80, w: 80, h: 120 };
//     drawFillRect(r3Info, { backgroundColor: 'green' });

//     const r4Info = { x: 200, y: 220, w: 100, h: 50 };
//     drawFillRect(r4Info);
//   }, []);

//   // draw rectangle
//   const drawRect = (info, style = {}) => {
//     const { x, y, w, h } = info;
//     const { borderColor = 'black', borderWidth = 1 } = style;

//     ctx.beginPath();
//     ctx.strokeStyle = borderColor;
//     ctx.lineWidth = borderWidth;
//     ctx.rect(x, y, w, h);
//     ctx.stroke();
//   }

//   // draw rectangle with background
//   const drawFillRect = (info, style = {}) => {
//     const { x, y, w, h } = info;
//     const { backgroundColor = 'black' } = style;

//     ctx.beginPath();
//     ctx.fillStyle = backgroundColor;
//     ctx.fillRect(x, y, w, h);
//   }

//   return (
//     <div className="App">
//       <h3>Draw a rectangle on Canvas - <a href="http://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
//       <canvas ref={canvas} width={window.innerWidth} height={window.innerHeight}></canvas>
//     </div>
//   );
// }

// export default App;

import * as React from 'react';
import { Worker, LayerRenderStatus, Viewer,  SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import jumpToPagePlugin from './jump';
import { pdfjs } from 'react-pdf';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
// import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

const App = () => {
    const message = 'customer@email.com';
    const customCanvasPlugin = () => {
        const onCanvasLayerRender = (e) => {
            // Return if the canvas isn't rendered completely
            if (e.status !== LayerRenderStatus.DidRender) {
                return;
            }
            // `e.ele` is the canvas element
            const canvas = e.ele;
            const ctx = canvas.getContext('2d');
            // const centerX = canvas.width / 2;
            // const centerY = canvas.height / 2;
            // const fonts = ctx.font.split(' ');
            // const fontSize = parseInt(fonts[0], 10);
            // ctx.textAlign = 'center';
            // // ctx.font = `${fontSize * e.scale * 2}px ${fonts[1]}`;
            ctx.fillStyle = '#CCC';
            // // ctx.fillText(message, centerX, 100);
            // ctx.fillRect(1263.627986, 751.516483, 100, 50);
            ctx.moveTo(12.684869766235352,7.604395598173141);
            ctx.lineTo(28.286689430475235,7.604395598173141);
            
            ctx.stroke();
//              var myPoints = [[12.12684869766235352,76.07604395598173141],[0.07604395598173141,0.07604395598173141],[0.286689430475235,0.08351648598909378],[0.12684869766235352,0.08351648598909378]]

// var minX,minY,maxX,maxY; 
// myPoints.forEach((p,i) => {
//    if(i === 0){ // if first point 
//       minX = maxX = p[0];
//       minY = maxY = p[1]; 
//    }else{
//       minX = Math.min(p[0],minX);
//       minY = Math.min(p[1],minY);
//       maxX = Math.max(p[0],maxX);
//       maxY = Math.max(p[1],maxY);
//    }
//  });
//  // now get the map width and heigth in its local coords
//  const mapWidth = maxX-minX;
//  const mapHeight = maxY-minY;
//  const mapCenterX = (maxX + minX) /2;
//  const mapCenterY = (maxY + minY) /2;
 
//  // to find the scale that will fit the canvas get the min scale to fit height or width
//  const scale = Math.min(canvas.width / mapWidth,canvas.height / mapHeight);
 
//  // Now you can draw the map centered on the cavas
//  ctx.beginPath();
//  myPoints.forEach(p => { 
//       ctx.lineTo(
//           (p[0] - mapCenterX) * scale + canvas.width /2 ,
//           (p[1] - mapCenterY) * scale + canvas.height / 2 
//       );
//  });
//  ctx.stroke();
        };
        return {
            onCanvasLayerRender,
        };
    };
    const customCanvasPluginInstance = customCanvasPlugin();
    // const pageNavigationPluginInstance = pageNavigationPlugin();
    // const { CurrentPageInput, GoToFirstPageButton, GoToLastPageButton, GoToNextPageButton, GoToPreviousPage } = pageNavigationPluginInstance;
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const jumpToPagePluginInstance = jumpToPagePlugin();
    const { jumpToPage } = jumpToPagePluginInstance;
    return (
    <>
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js`}>
    {/* <div
        style={{
            marginBottom: '16px',
        }}
    >
        <button
            style={{
                background: 'rgba(0, 0, 0, .1)',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '16px',
                padding: '8px',
            }}
            onClick={() => jumpToPage(1)}
        >
            Jump to page 2
        </button>
    </div>
    <div
        style={{
            border: '1px solid rgba(0, 0, 0, .3)',
            height: '750px',
        }}
    > */}
    {/* <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '50%',
                width: '60%'
            }}
        > */}
        
          <Viewer fileUrl="https://demo-proreview.s3.amazonaws.com/Consultant+Agreement+-+Akhileshwar+Gurram_removed.pdf"  plugins={[customCanvasPluginInstance]} />
          {/* </div>
          </div>  */}
          </Worker> 
</>
  )
};
export default App;

    // <div style={{margin : "auto", width: "70%"}}>
//https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf
// defaultScale={SpecialZoomLevel.PageFit}