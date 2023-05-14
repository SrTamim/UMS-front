export default function StudentLayout({ data }) {
  return (
    <>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID
            </th>
            <th scope="col" class="px-6 py-3">
              Student ID
            </th>
            <th scope="col" class="px-6 py-3">
              Student name
            </th>
            <th scope="col" class="px-6 py-3">
              Facilty
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
              Date of Birth
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">{data.Sid}</td>
            <td class="px-6 py-4">{data.Sidd}</td>
            <td class="px-6 py-4">{data.Sname}</td>
            <td class="px-6 py-4"> {data.Sprogram}</td>
            <td class="px-6 py-4">{data.Sdep}</td>
            <td class="px-6 py-4">{data.Snum}</td>
            <td class="px-6 py-4">{data.Saddress}</td>
            <td class="px-6 py-4">{data.Sdob}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
