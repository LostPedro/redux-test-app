import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene title="Please Login" key="login" component={LoginForm} />
          </Scene>
          <Scene key="main">
            <Scene
              initial
              rightTitle="Add"
              onRight={() => { Actions.employeeCreate(); }}
              title="Employees"
              key="employeeList"
              component={EmployeeList}
            />
            <Scene
              title="Create Employee"
              key="employeeCreate"
              component={EmployeeCreate}
            />
          </Scene>
        </Scene>
    </Router>
  );
};

export default RouterComponent;
