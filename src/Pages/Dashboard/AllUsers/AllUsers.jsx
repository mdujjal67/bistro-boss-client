import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const {refetch, data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    });


    const handleMakeAdmin = user => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })


    }


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        
                        if (res.data.deletedCount > 0) {
                            console.log(res)
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h3 className="text-3xl ">All Users {users.length}</h3>
                <h3 className="text-3xl ">Total Users</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-base-200">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>
                                    <button onClick={handleMakeAdmin} className="btn btn-ghost btn-sm  bg-orange-500">
                                        <FaUsers className="text-white text-lg"></FaUsers>
                                    </button>
                                </td>
                                <th>
                                    <button  onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-sm bg-red-500">
                                        <FaTrashAlt className="text-white"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;