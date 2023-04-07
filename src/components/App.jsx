import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentUser } from 'redux/auth/operations';
import { getIsRefreshingUser } from 'redux/auth/selectors';
import Layout from './Layout/Layout';
import AppBar from './AppBar/AppBar';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import Contacts from 'pages/Contacts';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

// import { ThemeProvider, createTheme } from '@mui/material';

// const theme = createTheme({
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           // variant: 'outlined',
//           fontSize: '1rem',
//           border: '1px solid',
//           size: 'small',
//         },
//       },
//     },
//   },
// });

export default function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getIsRefreshingUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingUser && (
      // <ThemeProvider theme={theme}>
      <Layout>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          />
        </Routes>
        <ToastContainer autoClose={1000} />
      </Layout>
      // </ThemeProvider>
    )
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};
