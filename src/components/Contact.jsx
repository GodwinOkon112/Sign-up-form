import { useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    age: '',
    nationality: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handling = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const dataArranged=()=>{
    return [`First name: ${data.firstname} \nLast name: ${data.lastname} \nEmail: ${data.email} \nAge: ${data.age} \nNationality: ${data.nationality} \nPhone number: ${data.phoneNumber} \nPassword: ${data.password} \nConfirm password: ${data.confirmPassword}`];
  }

  const downloadToText = () => {
    const element = document.createElement('a');
    const file = new Blob([dataArranged()], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'output.txt';
    element.click();
  };

  const fileAttachment=(e)=>{
    const file = new Blob([dataArranged()], { type: 'text/plain' });
    //fie attachment
    const formData = new FormData()
    formData.append('file', file, 'formdata.txt')
    formData.append('message', dataArranged())
     emailjs
       .sendForm('service_q4thcd7', 'template_jvrlt0b', e.target, {
         publicKey: 'n02jbfSD4DHfFy5ZK',
       })

     
      
       
       .then(
         (result) => {
           console.log('SUCCESS!', result.text);
         },
         (error) => {
           console.log('FAILED...', error.text);
         }
       );
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    downloadToText() ;
    fileAttachment(e)  
  };

  return (
    <>
      <div className=' flex justify-center items-center py-[4rem]'>
        <div className='flex sm:w-[72%] w-[80%] sm:flex-row  flex-col rounded-[4rem]  '>
          <form
            onSubmit={submit}
            action=''
            className='bg-white py-6 px-6  text-[1.2rem] rounded-xl xl:rounded-r-[0rem] flex flex-col  m-auto flex-grow w-[100%] '
          >
            <h1 className='font-bold text-[2.5rem]  text-center mb-10'>
              Sign Up
            </h1>
            <div className='md:flex  flex-wrap px-2 gap-[2rem]  gap-y-4 items-center'>
              <div className='w-[100%] xl:w-[45%]  md:w-[47%] '>
                <p className='font-medium text-[1.3rem] pb-2 xl:text-[1.3rem] sm:text-[1.7rem]'>
                  First Name
                </p>
                <input
                  type='text'
                  name='firstname'
                  id=''
                  required
                  value={data.firstname}
                  onChange={handling}
                  className='border-b-2  w-[100%] pt-2 pl-1 mb-7  outline-none'
                  placeholder='Enter your first name'
                />
              </div>

              <div className='w-[100%] xl:w-[45%] md:w-[47%]'>
                <p className='font-medium text-[1.3rem] pb-2 xl:text-[1.3rem] sm:text-[1.7rem]'>
                  Last Name
                </p>
                <input
                  type='text'
                  name='lastname'
                  value={data.lastname}
                  onChange={handling}
                  className='border-b-2  w-[100%] pt-1  mb-7 outline-none'
                  id=''
                  required
                  placeholder='Enter your last name'
                />
              </div>

              <div className='w-[100%] xl:w-[45%] md:w-[47%]'>
                <p className='font-medium text-[1.3rem] pb-2 xl:text-[1.3rem] sm:text-[1.7rem]'>
                  Email
                </p>
                <input
                  type='email'
                  name='email'
                  value={data.email}
                  onChange={handling}
                  className='border-b-2  w-[100%] pt-2 pl-1 mb-7 outline-none'
                  id=''
                  required
                  placeholder='Enter your email address'
                />
              </div>

              <div className='w-[100%] xl:w-[45%] md:w-[47%]'>
                <p className='font-medium text-[1.3rem] pb-2 xl:text-[1.3rem] sm:text-[1.7rem]'>
                  Age
                </p>
                <input
                  type='number'
                  name='age'
                  value={data.age}
                  onChange={handling}
                  className='border-b-2  w-[100%] pt-2 pl-1 mb-7 outline-none'
                  id=''
                  required
                  placeholder='Enter your age'
                />
              </div>

              <div className='w-[100%] xl:w-[45%] md:w-[47%]'>
                <p className='font-medium text-[1.3rem] pb-2 xl:text-[1.3rem] sm:text-[1.7rem]'>
                  Nationality
                </p>
                <input
                  type='text'
                  name='nationality'
                  value={data.nationality}
                  onChange={handling}
                  className='border-b-2  w-[100%] pt-2 pl-1 mb-7 outline-none'
                  id=''
                  required
                  placeholder='Enter your nationality'
                />
              </div>

              <div className='w-[100%] xl:w-[45%] md:w-[47%]'>
                <p className='font-medium text-[1.3rem] pb-2 xl:text-[1.3rem] sm:text-[1.7rem]'>
                  Phone Number
                </p>
                <input
                  type='number'
                  name='phoneNumber'
                  value={data.phoneNumber}
                  onChange={handling}
                  className='border-b-2  w-[100%] pt-2 pl-1 mb-7 outline-none'
                  id=''
                  required
                  placeholder='Enter your phone number'
                />
              </div>

              <div className='w-[100%] xl:w-[45%] md:w-[47%]'>
                <p className='font-medium text-[1.3rem] pb-2 xl:text-[1.3rem] sm:text-[1.7rem]'>
                  Password
                </p>
                <input
                  type='password'
                  name='password'
                  value={data.password}
                  onChange={handling}
                  className='border-b-2  w-[100%] pt-2 pl-1 mb-7 outline-none'
                  id=''
                  required
                  placeholder='Enter your password'
                />
              </div>

              <div className='w-[100%] xl:w-[45%] md:w-[47%]'>
                <p className='font-medium text-[1.3rem] pb-2 xl:text-[1.3rem] sm:text-[1.7rem]'>
                  Confirm Password
                </p>
                <input
                  type='password'
                  name='confirmPassword'
                  value={data.confirmPassword}
                  onChange={handling}
                  className='border-b-2  w-[100%] pt-2 pl-1 mb-7 outline-none'
                  id=''
                  required
                  placeholder='Confirm password'
                />
              </div>
            </div>

            <div className='text-center mt-8'>
              <button
                type='submit'
                className=' w-[100%] px-[5rem] py-2 bg-blue-900 text-white '
              >
                Submit
              </button>
            </div>
          </form>
          <div className='bg-blue-900 flex-grow-0 w-[100%] xl:flex hidden rounded-xl xl:rounded-l-[0rem]  '></div>
        </div>
      </div>
    </>
  );
};
export default Contact;
