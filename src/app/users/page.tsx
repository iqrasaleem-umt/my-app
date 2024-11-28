'use client';

import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function UsersPage() {
  // State for managing user data
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
  ]);

  // Edit user handler
  const handleEdit = (id: number) => {
    const userToEdit = users.find((user) => user.id === id);
    if (!userToEdit) {
      alert("User not found!");
      return;
    }
    alert(`Editing user: ${userToEdit.name}`);
    // Replace alert with actual edit logic
  };

  // Delete user handler
  const handleDelete = (id: number) => {
    const userToDelete = users.find((user) => user.id === id);
    if (!userToDelete) {
      alert("User not found!");
      return;
    }

    if (confirm(`Are you sure you want to delete ${userToDelete.name}?`)) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    }
  };

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <div className="mt-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-100 rounded-lg mb-2 p-4 flex items-center gap-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 grow">
              {/* User Name */}
              <div className="text-gray-900 font-medium">{user.name}</div>
              {/* User Email */}
              <div className="text-gray-600">{user.email}</div>
            </div>
            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Edit Button */}
              <button
                className="text-blue-500 hover:text-blue-700"
                aria-label="Edit User"
                onClick={() => handleEdit(user.id)}
              >
                <FaEdit />
              </button>
              {/* Delete Button */}
              <button
                className="text-red-500 hover:text-red-700"
                aria-label="Delete User"
                onClick={() => handleDelete(user.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}