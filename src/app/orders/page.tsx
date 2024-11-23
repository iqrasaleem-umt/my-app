'use client';

import { useState } from 'react';
import { FaEdit, FaTrash, FaStar } from 'react-icons/fa';

export default function OrdersPage() {
  // State to manage orders, including email, important status, and order date
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: 'John Doe',
      email: 'johndoe@example.com',
      total: '$50.00',
      important: false,
      paid: true,
      date: '2024-11-01',
    },
    {
      id: 2,
      customer: 'Jane Smith',
      email: 'janesmith@example.com',
      total: '$30.00',
      important: true,
      paid: false,
      date: '2024-11-02',
    },
    {
      id: 3,
      customer: 'Alice Johnson',
      email: 'alicejohnson@example.com',
      total: '$75.00',
      important: false,
      paid: true,
      date: '2024-11-03',
    },
  ]);

  // Toggle "important" status
  const toggleImportant = (id: number) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, important: !order.important } : order
      )
    );
  };

  // Edit order handler
  const handleEdit = (id: number) => {
    const orderToEdit = orders.find((order) => order.id === id);
    if (!orderToEdit) {
      alert('Order not found!');
      return;
    }
    alert(`Editing order for: ${orderToEdit.customer}`);
    // Add logic for editing (e.g., opening a modal or navigating to a form)
  };

  // Delete order handler
  const handleDelete = (id: number) => {
    const orderToDelete = orders.find((order) => order.id === id);
    if (!orderToDelete) {
      alert('Order not found!');
      return;
    }
    if (confirm(`Are you sure you want to delete this order for ${orderToDelete.customer}?`)) {
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    }
  };

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className={`bg-gray-100 rounded-lg p-4 flex items-center justify-between ${
              order.important ? 'border-2 border-yellow-500' : ''
            }`}
          >
            {/* Order Info */}
            <div className="flex items-center gap-4">
              {/* Customer Name */}
              <div className="text-gray-900 font-medium">{order.customer}</div>
              {/* Customer Email */}
              <div className="text-gray-600">{order.email}</div>
            </div>
            {/* Order Details */}
            <div className="text-gray-600">
              {/* Date First */}
              <div>Date: {order.date}</div>
              {/* Total After Date */}
              <div>Total: {order.total}</div>
            </div>
            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Important Button */}
              <button
                className={`${
                  order.important ? 'text-yellow-500' : 'text-gray-500'
                } hover:text-yellow-700`}
                aria-label="Mark as Important"
                onClick={() => toggleImportant(order.id)}
              >
                <FaStar />
              </button>
              {/* Edit Button */}
              <button
                className="text-blue-500 hover:text-blue-700"
                aria-label="Edit Order"
                onClick={() => handleEdit(order.id)}
              >
                <FaEdit />
              </button>
              {/* Delete Button */}
              <button
                className="text-red-500 hover:text-red-700"
                aria-label="Delete Order"
                onClick={() => handleDelete(order.id)}
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
