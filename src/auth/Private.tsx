import { Login } from "./Login";
import { ProfileProps } from "./Profile";
type PrivateProps = {
  isLoggedIN: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIN, component: Component }: PrivateProps) => {
  if (isLoggedIN) {
    return <Component name="Ashish" />;
  } else {
    return <Login />;
  }
};
