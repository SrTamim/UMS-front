export default function CourseLayout({ data }) {
  return (
    <>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID:
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Credit
            </th>
            <th scope="col" class="px-6 py-3">
              Room
            </th>
            <th scope="col" class="px-6 py-3">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">{data.Cid}</td>
            <td class="px-6 py-4">{data.Cname}</td>
            <td class="px-6 py-4"> {data.credit}</td>
            <td class="px-6 py-4">{data.room}</td>
            <td class="px-6 py-4">{data.time}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
