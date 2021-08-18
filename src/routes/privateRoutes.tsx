import {Route } from 'react-router-dom';
export default function PrivateRoute({ component: Comp, ...rest }: any) {
 
  return (
    <Route
      {...rest}
      render={(props:any) => {
        return (
          <Comp {...props} {...rest} />
        )
      }}
    />
  );
}