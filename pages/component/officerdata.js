import Image from "next/image";

export default function OfficerLayout({ data }) {
  return (
    <>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID:
            </th>
            <th scope="col" class="px-6 py-3">
              Officer id
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Department
            </th>
            <th scope="col" class="px-6 py-3">
              Number
            </th>
            <th scope="col" class="px-6 py-3">
              Address
            </th>
            <th scope="col" class="px-6 py-3">
              DOB
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">{data.Oid}</td>
            <td class="px-6 py-4">{data.Oidd}</td>
            <td class="px-6 py-4">{data.Oname}</td>
            <td class="px-6 py-4">{data.Odep}</td>
            <td class="px-6 py-4">{data.Onum}</td>
            <td class="px-6 py-4">{data.Oaddress}</td>
            <td class="px-6 py-4">{data.Odob}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
