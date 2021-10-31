import React from 'react';
import { useForm } from "react-hook-form";
import "../../form/index.css";


const Registration = () => {


    const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });
  const onSubmit = (data) => {
    fetch('https://gory-village-18910.herokuapp.com/HomeForm', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) =>{
   alert("succefully done")
    
    }
    );
  };

  return (
    <div className="amily_form text-dark">

    <h6 className="text-dark text-center">Application For Registration</h6>


    <form onSubmit={handleSubmit(onSubmit)}>

       <small>Image Link</small>
      <input
        placeholder="Image Link"
        {...register("img", {
          required: "this is a required",
          
        })}
      />
     
      
     <small>Owner Name</small>
      <input
        placeholder="Owner Name"
        {...register("ownerName", {
          required: "this is required",
          
        })}
      />
      

      
     
       <small htmlFor="email">User Phone Number</small>

       <input
        placeholder="01734*****"
        type="number"
        {...register("usernumber", {
          required: "this is required",
          pattern: {
        
            message: "Invalid phone Number"
          }
        })}
      />
      {errors.usernumber && <p>{errors.usernumber.message}</p>}

        <small htmlFor="resortName">resortName</small>
      <input
        placeholder="Resort Name"
        type="text"
        {...register("resortName", {
          required: "this is required",
         
        })}
      />


      <small htmlFor="amount">amount</small>

       <input
        placeholder="amount"
        type="text"
        {...register("amount", {
          required: "this is required",
         
        })}
      />

       <small htmlFor="address">address</small>

       <input
        placeholder="address"
        type="text"
        {...register("address", {
          required: "this is required",
         
        })}
      />
       <small htmlFor="details">details</small>

       <input
        placeholder="details"
        type="text"
        {...register("details", {
          required: "this is required",
         
        })}
      />
      





      <input type="submit" />
    </form>
    
    
    </div>
  );

    
            
      
};

export default Registration;










