import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#000000'
            var myPoints = [
                // [box[index].coOrdinates[0].x, box[index].coOrdinates[0].y],
                // [box[index].coOrdinates[1].x, box[index].coOrdinates[1].y],
                // [box[index].coOrdinates[2].x, box[index].coOrdinates[2].y],
                // [box[index].coOrdinates[3].x, box[index].coOrdinates[3].y]
                [0.12684869766235352, 0.07604395598173141],
                [0.286689430475235, 0.07604395598173141],
                [0.286689430475235, 0.08351648598909378],
                [0.12684869766235352, 0.08351648598909378]
              ];
        
              const width = 985;
              
              const height = 1280;
              console.log(width, height);
                context.beginPath();
                context.moveTo(myPoints[0][0] * width, myPoints[0][1] * height);
                context.lineTo(myPoints[1][0] * width, myPoints[1][1] * height);
                context.lineTo(myPoints[2][0] * width, myPoints[2][1] * height);
                context.lineTo(myPoints[3][0] * width, myPoints[3][1] * height);
                context.closePath();
                context.stroke();
  }, [])
  
  return <canvas id="gameCanvas" ref={canvasRef} {...props}/>
}

export default Canvas