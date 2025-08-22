import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form action="">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="email"
            placeholder="Enter Name"
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="Password" className="w-full px-3 py-2 border" />
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Already Have an Acount</span>
        <button className="text-red-800" onClick={openLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Register
