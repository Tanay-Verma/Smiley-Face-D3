import { arc } from 'd3';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;

const mouthArc = arc()
  .innerRadius(90)
  .outerRadius(100)
  .startAngle(0)
  .endAngle(Math.PI * 2);

function App() {
  return (
    <>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <circle
            cx={centerX}
            cy={centerY}
            r={centerY - strokeWidth / 2}
            fill="yellow"
            stroke="black"
            stroke-width="10"
          />
          <circle
            cx={centerX - eyeOffsetX}
            cy={centerY - eyeOffsetY}
            r={eyeRadius}
          />
          <circle
            cx={centerX + eyeOffsetX}
            cy={centerY - eyeOffsetY}
            r={eyeRadius}
          />
          <path d={mouthArc} />
        </g>
      </svg>
    </>
  );
}

export default App;
