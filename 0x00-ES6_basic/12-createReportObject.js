import createEmployeesObject from './11-createEmployeesObject';

createEmployeesObject();

export default function createReportObject(employeesList) {
  const returnObject = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  return returnObject;
}
