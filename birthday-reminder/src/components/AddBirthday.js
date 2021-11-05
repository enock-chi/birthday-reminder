import React from 'react'

export const AddBirthday = ({toggle}) => {
  return (
    <div className='form-container' style={{display: `${toggle ? 'none':'block'}` }}>
       <form className='form'>
          <div>
             <label className='lbl'>Name:</label>
             <input type='text' className='input'></input>
          </div>    
          <div>
             <label className='lbl'>Age:</label>
             <input type='text' className='input age'></input>
          </div>    
          <div>
             <input type='submit' className='input-submit'></input>
          </div>    
        </form>  
    </div>
  )
}

export default AddBirthday;
