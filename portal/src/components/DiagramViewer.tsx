import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

type DiagramViewerProps = {
  src: string;
  alt: string;
  // opcionales por si alguna vez querés overridear sin tocar el componente
  initialScale?: number;
  minScale?: number;
  maxScale?: number;
  wheelStep?: number;
  height?: number | string;
};

export default function DiagramViewer({
  src,
  alt,
  initialScale = 0.07,
  minScale = 0.07,
  maxScale = 10,
  wheelStep = 0.02,
  height = '80vh',
}: DiagramViewerProps) {
  return (
    <div className="diagram-viewport" style={{ height }}>
      <TransformWrapper
        initialScale={initialScale}
        minScale={minScale}
        maxScale={maxScale}
        limitToBounds={false}
        centerOnInit
        wheel={{ step: wheelStep }}
        doubleClick={{ mode: 'zoomIn' }}
        pinch={{ step: 0.2 }}
        panning={{ velocityDisabled: true }}
      >
        <TransformComponent
          wrapperStyle={{ width: '100%', height: '100%' }}
          contentStyle={{ width: 'fit-content', height: 'fit-content' }}
        >
          <img src={src} alt={alt} style={{ display: 'block', maxWidth: 'unset' }} />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
