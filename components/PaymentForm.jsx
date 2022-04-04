import { TextField, LoadingButton, FormControl, InputLabel, FilledInput, InputAdornment } from '@mui/material'
import React,{useState} from 'react'
import SaveIcon from '@mui/icons-material/Save';
import ConvertToPdf from './ConvertToPdf';
import { useRecoilState } from 'recoil';
import { userStateValue } from '../Store/State';

const PaymentForm = () => {
    
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [payment, setPayment] = useState([])
    const [userState, setUserState] = useRecoilState(userStateValue)


    const handleSubmit = (e) => {
      e.preventDefault()

      setUserState({
        firstName,
        middleName,
        lastName,
        email,
        phoneNumber
      })
    }


  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 gap-7 px-10 bg-gray-50 pt-5 items-start h-screen">
        <div className='shadow-lg p-5 bg-white'>
            <h2 className="text-center my-5 uppercase font-[500] text-gray-600"
            >Input Client Details</h2>

            <form action="" className=' space-y-5' onSubmit={handleSubmit}>
          
                    <TextField required label="First Name"  type="text"  
                        className='input' focused 
                        onChange={(event) => setFirstName(event.target.value)}
                        value={firstName} />

                    <TextField  required  label="Middle Name" type="text"  
                        className='input' 
                        onChange={(event) => setMiddleName(event.target.value)} 
                        value={middleName}/>
                    
                    <TextField  required  label="Last Name" type="text" 
                        className='input' 
                        onChange={(event) => setLastName(event.target.value)}
                        value={lastName}/>

                    <TextField  required  label="Email" type="email" 
                        className='input' 
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}/>
                    
                    <TextField  required  label="Phone Number" type="text"  
                        className='input' 
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        value={phoneNumber}/>
                    
                  <button className=' rounded-md text-white font-[500] shadow-lg w-full text-center bg-blue-600 py-3' type='submit'>Save</button>
            
            </form>
        </div>


        <div className="bg-white">
            <div className="shadow-lg p-5">
              <h2 className="text-center my-5 uppercase font-[500] text-gray-600">
                 input Payment details
              </h2>


              <div className="flex items-center space-x-3">
                  <TextField  required  label="description" type="text"  
                     className='w-[70%]' />
                  <FormControl variant="filled">
                    <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                    <FilledInput
                      id="filled-adornment-amount"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  />
                  </FormControl>
    
              </div>

              <div className="">
                <button className='bg-blue-500 text-white w-32 rounded-md shadow-lg mt-5 py-2'
                >Add</button>
                
              </div>

            </div>
            

           { userState && (<div className="bg-white rounded-md shadow-lg p-5 ">
              <h2 className="text-center my-5 uppercase font-[500] text-gray-600">
                    View user Detailes
              </h2>

              <p className="">FULLNAME : {`${userState.firstName} ${userState.middleName} ${userState.lastName}`}</p>
              <p className="">Email : {userState.email}</p>
              <p className="">PHONE NUMBER : {userState.phoneNumber}</p>
              <button className="mt-5 rounded-md text-white font-[500] shadow-lg w-full text-center bg-blue-600 py-3">Save</button>
            </div>)}
              
        </div>
    </div>
  )
}

export default PaymentForm