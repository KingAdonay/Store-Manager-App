import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FlatList } from 'react-native';
import ListItem from './ListItem';
import {employeesFetch } from '../actions';

class EmployeeList extends Component {
    UNSAFE_componentWillMount(){
        this.props.employeesFetch();

        //this.createDataSource(this.props);
    }

    // UNSAFE_componentWillReceiveProps(nextProps){
    //     this.createDataSource(nextProps);
    // }

    // createDataSource({ employees }){
    //     const ds = new FlatList.Data({
    //         rowHasChanged: (r1, r2) => r1 !== r2
    //     });
        
    //     this.dataSource = ds.cloneWithRows(employees);
    // }

    renderRow(employee){
        return <ListItem employee={employee}/>
    }

    render(){
        console.log(this.props.employees);
        return (
            <FlatList
                data={this.props.employees}
                extraData={this.props.employees}
                renderItem={this.renderRow}
            />
        );
    };
}

const mapStateToProps = state => {
    const employees=_.map(state.employees, (val, uid)=>{
        return {...val, uid};
    });
    console.log(state.employees);
    console.log(employees);
    return {employees};
};

export default connect (mapStateToProps, {employeesFetch})(EmployeeList);