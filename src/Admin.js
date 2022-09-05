import React from "react";
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import { signUpSchema } from "./Schemas";
import "./route.css";


const initialValues ={
    name:"",
    mobile:"",
    email:"",
    password:""
};
 function Admin(){
   const {values , errors , touched,  handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit : (values) =>{
            console.log(values);
        },

    });
        // console.log(errors);
     return(
        <>
        <header>
            <nav className="navbar">
                {/* <ul> */}
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/User'>User</Link></li>
                    <li><Link to='/Admin'>Admin</Link></li>
                 {/* </ul> */}
            </nav>
            
        </header>
        <hr/>
        <div className="form_block">
        <h2> Welcome to Admin Login page</h2>
        <form onSubmit={handleSubmit}>
            <label>Name : </label><br/>
            <input name="name" type="text" placeholder="Enter your name" 
            value={values.name} onChange={handleChange} onBlur={handleBlur}/><br/>
            {errors.name && touched.name ? (<p className="form-error">{errors.name}</p>) : null}
            
    
            <label>Mobile Number : </label><br/> 
            <input name="mobile" type="number" placeholder="Enter Number"  
            value={values.mobile} onChange={handleChange} onBlur={handleBlur}/><br/>
            {errors.mobile && touched.mobile ? (<p className="form-error">{errors.mobile}</p>) : null}
            
            <label>Email : </label><br/>
            <input name="email" type="email" placeholder="Enter email" 
            value={values.email} onChange={handleChange} onBlur={handleBlur}/><br></br>
            {errors.email && touched.email ? (<p className="form-error">{errors.email}</p>) : null}
            
            <label>Password : </label><br/>
            <input name="password" type="password" placeholder="Enter Password" 
            value={values.password} onChange={handleChange} onBlur={handleBlur}/><br/>
            {errors.password && touched.password ? (<p className="form-error">{errors.password}</p>) : null}
            <br/>
            <button>Register</button>
            </form>
            </div>
        </>
    );
 }
 export default Admin;