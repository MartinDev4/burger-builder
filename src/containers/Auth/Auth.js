import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./Auth.css";
import * as actions from "../../store/actions/index";
import { updateObject, checkValidity } from "../../shared/utility";
import { authFirebase } from "../../firebase";

const auth = (props) => {
  const [authForm, setAuthForm] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "E-mail Address",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validation: {
        required: true,
        minLength: 8,
      },
      valid: false,
      touched: false,
    },
  });
  const [isSignup, setIsSignup] = useState(true);
  const [showEmailExistsModal, setShowEmailExistsModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [emailForPasswordReset, setEmailForPasswordReset] = useState("");
  const [isInputPassResetTouched, setIsInputPassResetTouched] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const { buildingBurger, authRedirectPath, onSetAuthRedirectPath } = props;

  useEffect(() => {
    if (!buildingBurger && authRedirectPath !== "/") {
      onSetAuthRedirectPath();
    }
  }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath]);

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(authForm, {
      [controlName]: updateObject(authForm[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[controlName].validation
        ),
        touched: true,
      }),
    });
    setAuthForm(updatedControls);
  };
  const passwordReset = (email) => authFirebase.sendPasswordResetEmail(email);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(authForm.email.value, authForm.password.value, isSignup);
  };

  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };

  const ifValid = () => {
    return checkValidity(emailForPasswordReset, {
      isEmail: true,
    });
  };

  const formElementsArray = [];
  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key],
    });
  }

  let form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => inputChangedHandler(event, formElement.id)}
    />
  ));

  if (props.loading) {
    form = <Spinner />;
  }
  useEffect(() => {
    if (props.error && props.error.message === "EMAIL_EXISTS") {
      setShowEmailExistsModal(true);
    }
    return () => {};
  }, [props.error]);

  let errorMessage = null;

  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }

  let authRedirect = null;
  if (props.isAuthenticated) {
    authRedirect = <Redirect to={props.authRedirectPath} />;
  }

  return (
    <div className={classes.Auth}>
      {authRedirect}
      {errorMessage}
      <h3 style={{ color: "#0030ab" }}>
        Enter required details to {isSignup ? "Register" : "Log in"}
      </h3>
      <Modal
        show={showEmailExistsModal}
        modalClosed={() => setShowEmailExistsModal(false)}
      >
        <h4>Email already exists!</h4>
        <h4>Maybe try loging in?</h4>
        <Button
          btnType="Success"
          clicked={() => {
            setShowEmailExistsModal(false);
            setIsSignup(false);
          }}
        >
          YES
        </Button>
        <Button
          btnType="Danger"
          clicked={() => {
            setShowEmailExistsModal(false);
            setIsSignup(true);
          }}
        >
          NO
        </Button>
      </Modal>
      <form onSubmit={submitHandler}>
        {form}
        <Button btnType="Success" stl={{ margin: "auto" }}>
          SUBMIT
        </Button>
      </form>
      <Button
        clicked={switchAuthModeHandler}
        btnType="Danger"
        stl={{ margin: "auto" }}
      >
        {isSignup ? "LOG IN" : "REGISTER"}
      </Button>
      <Modal
        show={showForgotPasswordModal}
        modalClosed={() => {
          setShowForgotPasswordModal(false);
          setIsEmailSent(false);
        }}
      >
        {isEmailSent ? (
          <div>
            <p style={{ color: "#4124bf" }}>
              If you entered your e-mail correctly check your inbox!
            </p>
            <Button
              btnType="Danger"
              clicked={() => {
                setShowForgotPasswordModal(false);
                setIsEmailSent(false);
                setIsInputPassResetTouched(false);
              }}
            >
              Close
            </Button>
          </div>
        ) : (
          <div>
            <h4>Enter your e-mail adress</h4>
            <Input
              elementType="input"
              changed={(event) => {
                setIsInputPassResetTouched(true);
                setEmailForPasswordReset(event.target.value);
              }}
              value={emailForPasswordReset}
              invalid={!ifValid()}
              shouldValidate={true}
              touched={isInputPassResetTouched}
            ></Input>
            <Button
              stl={ifValid() ? { color: "#2c93bf" } : { color: "#ccc" }}
              clicked={() => {
                passwordReset(emailForPasswordReset);
                setIsEmailSent(true);
                setEmailForPasswordReset("");
              }}
              disabled={!ifValid()}
            >
              Send
            </Button>
            <Button
              stl={{ color: "#bd1515" }}
              clicked={() => {
                setShowForgotPasswordModal(false);
                setIsInputPassResetTouched(false);
                setEmailForPasswordReset("");
              }}
            >
              Close
            </Button>
          </div>
        )}
      </Modal>
      <Button
        stl={{ width: "100%", margin: "auto" }}
        clicked={() => setShowForgotPasswordModal(true)}
      >
        Forgot password?
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    buildingBurger: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(auth);
