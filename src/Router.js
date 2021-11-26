import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
//import JustTrying from './components/JustTrying';

const RouterComponent = ()=>{
    return (
        <Router sceneStyle={{ paddingTop: 50 }}>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene 
                        initial
                        key="login" 
                        component={LoginForm} 
                        title="Please Login" 
                    />
                </Scene>
                <Scene key="main" >
                    <Scene 
                        rightTitle="Add"
                        onRight={()=>Actions.employeeCreate()}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees" 
                        
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeForm}
                        title="Create Employee"
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;