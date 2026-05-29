'use client'

import Link from "next/link"
import {useQuery} from "@tanstack/react-query";
import apiRouter from "@/api/router";

export default function AdminUsersPage() {
    const { data } = useQuery({
        queryKey: ['getUsers'],
        queryFn: apiRouter.users.getUsers,
    })

    return (
        <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-800">
        <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                Administrator
                </p>
                <h1 className="mt-2 text-3xl font-bold text-slate-900">
                Manage Users
                </h1>
                <p className="mt-2 text-slate-600">
                View, add, edit, and delete users.
                </p>
            </div>

            <Link
                href="/administrator/users/add"
                className="rounded-xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-sky-800"
            >
                + Add User
            </Link>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-4">
                <h2 className="text-lg font-semibold text-slate-900">User List</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                    <tr>
                    <th className="px-6 py-4 font-semibold">Name</th>
                    <th className="px-6 py-4 font-semibold">Email</th>
                    <th className="px-6 py-4 font-semibold">Role</th>
                    <th className="px-6 py-4 text-right font-semibold">Actions</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                    {data?.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4">{user.name}</td>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">{user.type_id}</td>
                        <td className="px-6 py-4 text-right flex justify-end gap-2">
                        <Link
                            href={`/administrator/users/edit/${user.id}`}
                            className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                        >
                            Edit
                        </Link>
                        <button className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-100">
                            Delete
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </main>
    )
}