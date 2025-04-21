// // ProtectedRoute.js
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
//   const { user } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         user.token && allowedRoles.includes(user.role) ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/" /> // หรือเส้นทางที่คุณต้องการ
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;
