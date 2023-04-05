import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { getError, getIsLoading } from 'redux/selectors';
// import { ContactForm } from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
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

export default function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getIsRefreshingUser);

  useEffect(() => {
    dispatch(getCurrentUser());
    // console.log('getting...');
  }, [dispatch]);

  return (
    !isRefreshingUser && (
      <Layout>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          {/* <PrivateRoute path="/contacts">
          <Contacts />
        </PrivateRoute> */}
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          />
        </Routes>
        {/* <h1>Phonebook</h1>
      <ContactForm /> */}
        {/* <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ContactList /> */}
      </Layout>
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
