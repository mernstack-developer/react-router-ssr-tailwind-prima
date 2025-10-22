import React from 'react'

function login() {
  return (
    <div>
     <h1 className="text-3xl font-bold underline">
         Login Page
     </h1>
     <p className="mt-4 text-lg">
         Please enter your credentials to log in.
     </p>
     <form className="mt-6">
       <div className="mb-4">
         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
           Email Address
         </label>       
            <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
    />
    </div>
       <div className="mb-4">
         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
           Password
         </label>
         <input
           type="password"
           id="password"
           name="password"
           required
           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
         /> 
         </div>
         <button
           type="submit"
           className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
         >
           Log In
         </button>
     </form>
     <p className="mt-4 text-sm text-gray-600">
       Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register here</a>.
     </p>
     <p className="mt-2 text-sm text-gray-600">
       Forgot your password? <a href="/reset-password" className="text-blue-600 hover:underline">Reset it here</a>.
     </p>
     <p className="mt-2 text-sm text-gray-600">
       By logging in, you agree to our <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
     </p>
    <p className="mt-2 text-sm text-gray-600">
       If you encounter any issues, please contact our <a href="/support" className="text-blue-600 hover:underline">Support Team</a>.
     </p>
     <p className="mt-2 text-sm text-gray-600">
       Already logged in? <a href="/dashboard" className="text-blue-600 hover:underline">Go to Dashboard</a>.
     </p>
     <p className="mt-2 text-sm text-gray-600">
       Need help? Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a>.
     </p>
     <p className="mt-2 text-sm text-gray-600">
       Want to learn more about us? Check out our <a href="/about" className="text-blue-600 hover:underline">About Us</a> page.
     </p>
         </div>
  )
}

export default login
