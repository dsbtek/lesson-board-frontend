import React from 'react';

interface Props {
    children: React.ReactNode;
}

export default function BoardLayout({ children }: Props) {
    return (
        <div className="flex h-screen">
            <aside className="w-64 bg-blue-900 text-white p-4">
                Sidebar Navigation
            </aside>
            <main className="flex-1 bg-gray-100 p-6">{children}</main>
        </div>
    );
}
