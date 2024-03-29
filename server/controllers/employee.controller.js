const  Employee= require('../models/employee');
const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) =>{

   const employees= await Employee.find();
   res.json(employees);
   
}
employeeCtrl.createEmployee= async (req, res) =>{
    const employee = new Employee(req.body);
    await employee.save();
   // console.log(employee);


    res.json('Empleado guardado');
    
 }

employeeCtrl.getEmployee=  async (req, res) =>{
    const employee = await Employee.findById(req.params.id);
   
   // console.log(req.params);


    res.json(employee);
    
 }


employeeCtrl.editEmployee= async (req, res) =>{

    const { id} =req.params;
    const employee ={
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
   await Employee.findByIdAndUpdate(id, {$set: employee}, {new:true});
    res.json({status: 'Employee Updated'})
}

employeeCtrl.deletesEmployee= async (req, res)=>{

    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee deleted'})
}
module.exports= employeeCtrl;