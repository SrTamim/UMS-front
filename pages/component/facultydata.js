import Image from "next/image";

export default function FacultyLayout({ data }) {
  return (
    <>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID:
            </th>
            <th scope="col" class="px-6 py-3">
              Faculty id:
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Program
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
          <td class="px-6 py-4">{data.Fid}</td>
            <td class="px-6 py-4">{data.Fidd}</td>
            <td class="px-6 py-4">{data.Fname}</td>
            <td class="px-6 py-4"> {data.Fprogram}</td>
            <td class="px-6 py-4">{data.Fdep}</td>
            <td class="px-6 py-4">{data.Fnum}</td>
            <td class="px-6 py-4">{data.Faddress}</td>
            <td class="px-6 py-4">{data.Fdob}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
