import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Comp, ...rest }: any) {
  const isLogined = localStorage.getItem('login');
  return (
    <Route
      {...rest}
      render={(props:any) => {
        return isLogined ? (
          <Comp {...props} {...rest} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
}