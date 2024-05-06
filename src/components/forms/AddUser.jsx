import React, { useState } from 'react';
import { Icon } from '../Icon';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddUser = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [address, setAddress] = useState('')
    const navigation = useNavigate()

    const addUser = async (e) => {
        e.preventDefault();

        if (!username || !email || !phone || !password || !file) {
            e.preventDefault();
            console.log("All fields are required");
            toast.error('Kindly fill all the inputs');
            return;
        }

        const formData = new FormData();
        formData.append('file', file)
        formData.append('username', username);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('password', password);
        formData.append('address', address);

        try {
            const response = await axios.post('https://viatuback.vercel.app/api/v2/user/createuser', formData);
            // console.log(response);
            console.log("User added successfully");
            toast.success('User added successfully');
            // Reset form fields after successful submission
            setUsername('');
            setEmail('');
            setPhone('');
            setPassword('');
            setFile(null);
            // Optionally navigate to another page after successful submission
            // navigation('/dashboard');
        } catch (error) {
            console.log("Error adding new user");
            console.log(error);
            toast.error('Error adding user');
        }
    };
    return (
        <div>
            <div className="flex-1 flex-col justify-start items-center w-full bg-black sm:py-10 py-6 md:px-16 px-6 md:space-y-12">
                <div className="justify-center items-center">
                    <h3 className="text-white font-poppins">Add New User</h3>
                </div>
                <form action="" method="POST" onSubmit={addUser} encType="multipart/form-data" >
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">FullName</label>
                    </div>
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="numeric" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                    </div>
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                    </div>
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="relative z-0 md:w-[70%] w-full mb-5 group">

                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                        <input onChange={(e) => setFile(e.target.files[0])} type="file" name="file" multiple class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" />
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

                    </div>
                    <div className="relative w-full justify-center items-center mb-5 group">
                        <button type="submit" className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md">Create User</button>
                    </div>
                </form>

            </div>
        </div>
    );

}

export default AddUser;
