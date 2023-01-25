import React from "react";

function ScreenSelector({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const options = React.Children.toArray(children);

  return (
    <React.Fragment>
      {window.innerWidth > 992 ? options[0] : options[1]}
    </React.Fragment>
  );
}
export default ScreenSelector;
