import React from "react";
import { useTransition } from "react-spring";
import {
  Redirect, Route, Switch, useLocation,
} from "react-router-dom";
import { AuthLogin } from "../../components/AuthLogin/AuthLogin";
import { AuthRegistration } from "../../components/AuthRegistration/AuthRegistration";
import { Container, Wrapper } from "./AuthStyle";
import { LOCAL_STORAGE, ROUTES } from "../../types/enums";

const Auth: React.FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, (loc) => loc.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(100%,0,0)", position: "absolute" },
  });

  if (localStorage.getItem(LOCAL_STORAGE.token)) {
    return <Redirect to={ROUTES.home} />;
  }

  return (
    <Wrapper>
      {transitions.map(({ item: loc, props, key }) => (
        <Container key={key} style={props}>
          <Switch location={loc}>
            <Route path={ROUTES.login} component={AuthLogin} />
            <Route path={ROUTES.registration} component={AuthRegistration} />
            <Redirect from={ROUTES.all} to={ROUTES.login} />
          </Switch>
        </Container>
      ))}
    </Wrapper>
  );
};

export { Auth };

// {/* <Wrapper>
// <Container>
//   <Switch>
//     <Route path="/auth/login" component={AuthLogin} />
//     <Route path="/auth/registration" component={AuthRegistration} />
//     <Redirect from="*" to="/auth/login" />
//   </Switch>
// </Container>
// </Wrapper> */}
