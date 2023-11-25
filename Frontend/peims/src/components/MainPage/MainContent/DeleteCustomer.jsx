import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
const DeleteCustomer = () => {
    const [id, setId] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        // Lấy ID của người dùng từ URL
        const id = window.location.pathname.split('/')[2];
        setId(id);
    }, []);
    const handleClick = async () => {
        Swal.fire({
          title: 'Are you sure you want to delete your account?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          if (result.isConfirmed) {
            axios.post('http://localhost:8000/customer/delete', { id: id }).then((response) => {
              if (response.status === 200) {
                Swal.fire({
                  title: 'Deleted!',
                  text: response.data.message,
                  icon: 'success',
                }).then((result) =>{
                    if (result.isConfirmed) {
                        navigate("/")
                    }
                });
              } else {
                Swal.fire({
                  title: 'Error',
                  text: response.data.error,
                  icon: 'error',
                });
              }
            });
          }
        });
      };
      
      return <button onClick={handleClick} className="delete__customer">Delete Account</button>;
};

export default DeleteCustomer;
