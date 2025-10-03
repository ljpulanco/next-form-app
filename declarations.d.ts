// declarations.d.ts
declare module "react-signature-canvas" {
  import * as React from "react";

  export interface SignatureCanvasProps {
    penColor?: string;
    backgroundColor?: string;
    canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>;
    velocityFilterWeight?: number;
    minWidth?: number;
    maxWidth?: number;
    dotSize?: number | (() => number);
    throttle?: number;
    onBegin?: () => void;
    onEnd?: () => void;
    clearOnResize?: boolean;
  }

  export default class SignatureCanvas extends React.Component<
    SignatureCanvasProps
  > {
    clear(): void;
    isEmpty(): boolean;
    fromDataURL(base64: string): void;
    toDataURL(type?: string, encoderOptions?: number): string;
  }
}
