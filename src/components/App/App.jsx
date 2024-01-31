import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import PageNotFound from "../PageNotFound/PageNotFound";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const handleLogin = ({ email, password }) => {
    // auth
    //   .authorize(email, password)
    //   .then((res) => {
    //     if (res.token) {
    //       localStorage.setItem('jwt', res.token);
    //       setLoggedIn(true);
    //       setEmail(email);
    //       navigate('/', { replace: true });
    //     }
    //   })
    //   .catch((err) => {
    //     handleRegStatusClick(false);
    //     console.log(err);
    //   });
  };

  const handleRegister = ({ email, password }) => {
    // auth
    //   .register(email, password)
    //   .then((data) => {
    //     if (data) {
    //       handleRegStatusClick(true);
    //       navigate('/signin', { replace: true });
    //     }
    //   })
    //   .catch((err) => {
    //     handleRegStatusClick(false);
    //     console.log(err);
    //   });
  };

  const handleSignOut = () => {
    // localStorage.removeItem('jwt');
    // setLoggedIn(false);
    // setEmail('');
    // navigate('/signin', { replace: true });
  };

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path='/' element={<Main />} />
          {/* <Route
            path='/signup'
            element={
              currentUser ? (
                <Navigate to='/' replace />
              ) : (
                <Register onRegister={handleRegister} />
              )
            }
          />
          <Route
            path='/signin'
            element={
              currentUser ? (
                <Navigate to='/' replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          /> */}
          <Route
            path='/signup'
            element={<Register onRegister={handleRegister} />}
          />
          <Route
            path='/signin'
            element={<Login onLogin={handleLogin} />}
          />
          <Route exact path='*' element={<PageNotFound />} />
        </Routes>
        {/* <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header email={email} onSignOut={handleSignOut} />

        <Routes>
          <Route
            path='/*'
            element={
              loggedIn ? (
                <Navigate to='/' replace />
              ) : (
                <Navigate to='/signin' replace />
              )
            }
          />
          <Route
            path='/'
            element={
              <ProtectedRoute
                element={Main}
                cards={cards}
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDeleteFormSubmit}
                onCardDeleteClick={handleCardDeleteClick}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path='/signup'
            element={<Register onRegister={handleRegister} />}
          />
          <Route path='/signin' element={<Login onLogin={handleLogin} />} />
        </Routes>

        {loggedIn && <Footer />}

        <InfoTooltip
          regStatus={regStatus}
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleAvatarFormSubmit}
          isLoading={isLoading}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleProfileFormSubmit}
          isLoading={isLoading}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceFormSubmit}
          isLoading={isLoading}
        />

        <PopupWithConfirm
          isOpen={isCardDeletePopupOpen}
          onClose={closeAllPopups}
          onCardDelete={handleCardDeleteFormSubmit}
          card={selectedCard}
          isLoading={isLoading}
        />

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider> */}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
