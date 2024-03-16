import { Fragment, PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
          {children}
    </Fragment>
  );
};

export default Providers;
