import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    nationality: '',
    gender: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  //responsible for the changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // responsible for validation
  const handleValidation = () => {
    let errors = {};
    let valid = true;

    // First Name validation
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
      valid = false;
    }

    // Last Name validation
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
      valid = false;
    }

    // Email validation
    if (!formData.email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      valid = false;
    }

    // Age validation
    if (!formData.age) {
      errors.age = 'Age is required';
      valid = false;
    } else if (isNaN(formData.age)) {
      errors.age = 'Age must be a number ';
      valid = false;
    }

    // Gender validation
    if (!formData.gender) {
      errors.gender = 'Gender is required';
      valid = false;
    }

    // Nationality validation
    if (!formData.nationality) {
      errors.nationality = 'Nationality is required';
      valid = false;
    }

    // Phone Number validation
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
      valid = false;
    }
    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleValidation()) return;

    emailjs
      .sendForm('service_1', 'template_4ilx5ns', form.current, {
        publicKey: 'tb8lLmPgt8WvKHu0I',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-lg p-8 bg-white shadow-md rounded-md'>
        <h2 className='text-2xl font-semibold text-center text-gray-700'>
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} ref={form} className='mt-6'>
          <div className='mb-4'>
            <label
              htmlFor='First name'
              className='block text-sm font-medium text-gray-700'
            >
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className='w-full px-4  py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 label'
            />
            {errors.firstName && (
              <p className='text-red-500 text-sm mt-1'>{errors.firstName}</p>
            )}
          </div>

          <div className='mb-4'>
            <label
              htmlFor='Last name'
              className='block text-sm font-medium text-gray-700'
            >
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200'
            />
            {errors.lastName && (
              <p className='text-red-500 text-sm mt-1'>{errors.lastName}</p>
            )}
          </div>

          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200'
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
            )}
          </div>

          <div className='mb-4'>
            <label
              htmlFor='age'
              className='block text-sm font-medium text-gray-700'
            >
              Age
            </label>
            <input
              type='number'
              name='age'
              value={formData.age}
              onChange={handleChange}
              className=' age w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200'
            />
            {errors.age && (
              <p className='text-red-500 text-sm mt-1'>{errors.age}</p>
            )}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Gender</label>
            <select
              name='gender'
              value={formData.gender}
              onChange={handleChange}
              className='w-full p-3 border rounded-lg border-gray-300'
            >
              <option value=''>Select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
            </select>
            {errors.gender && (
              <p className='text-red-500 text-sm mt-1'>{errors.gender}</p>
            )}
          </div>

          <div className='mb-4'>
            <label
              htmlFor='First name'
              className='block text-sm font-medium text-gray-700'
            >
              Nationality
            </label>
            <input
              type='text'
              name='nationality'
              value={formData.nationality}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200'
            />
            {errors.nationality && (
              <p className='text-red-500 text-sm mt-1'>{errors.nationality}</p>
            )}
          </div>

          <div className='mb-4'>
            <label
              htmlFor='phone number'
              className='block text-sm font-medium text-gray-700'
            >
              Phone Number
            </label>
            <input
              type='text'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              className=' phone w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200'
            />
            {errors.phoneNumber && (
              <p className='text-red-500 text-sm mt-1'>{errors.phoneNumber}</p>
            )}
          </div>

          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200'
            />
            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>{errors.password}</p>
            )}
          </div>

          <div className='mb-4'>
            <label
              htmlFor='confirm password'
              className='block text-sm font-medium text-gray-700'
            >
              Confirm Password
            </label>
            <input
              type='password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200'
            />
            {errors.confirmPassword && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div className='text-center'>
            <button
              type='submit'
              className='w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
