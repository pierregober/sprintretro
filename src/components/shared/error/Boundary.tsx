import React from "react";

class SiteError extends React.Component<{}, { hasError: Readonly<{}> }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error, errorInfo: React.ErrorInfo) {
    console.trace({ error });
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      //TODO: Create a Toast Provider for chakra
      alert(`Seems we encountered an error processing that request
          "We are working diligently to correct this. Please continue using the app in the mean time.`);
    }

    //HACK: This React 18 update is breaking the error boundary
    //@ts-ignore
    return this.props.children;
  }
}
export default SiteError;
