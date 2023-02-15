import React from 'react'

const manufacturer = () => {
    return (
        <div className="overflow-x-auto mt-20 max-w-2xl px-4 md:px-8 mx-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Name
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Date of manufacture
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Batch
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Status
                        </th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Corbevax
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/2020</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">1</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">In transit</td>
                        <td className="whitespace-nowrap px-4 py-2">
                            <a
                                href="#"
                                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                                View
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Sputnik V
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/2020</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">2</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Arrived</td>
                        <td className="whitespace-nowrap px-4 py-2">
                            <a
                                href="#"
                                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                                View
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Covaxin
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/2020</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">1</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Cold Storage</td>
                        <td className="whitespace-nowrap px-4 py-2">
                            <a
                                href="#"
                                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                                View
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default manufacturer