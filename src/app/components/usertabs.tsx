import React from 'react';
import Link from 'next/link';

export default function UserTabs() {
  return (
    <div className="flex mx-auto gap-2 tabs justify-center flex-wrap">
      <Link href="/profile" className="py-2 px-4 bg-primary rounded-full">
        Profile
      </Link>
      <Link href="/menu-items" className="py-2 px-4 bg-gray-300 rounded-full">
        Menu Items
      </Link>
      <Link href="/users" className="py-2 px-4 bg-gray-300 rounded-full">
        Users
      </Link>
      <Link href="/orders" className="py-2 px-4 bg-gray-300 rounded-full">
        Orders
      </Link>
    </div>
  );
}
