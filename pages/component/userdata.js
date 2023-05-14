import Image from "next/image";

export default function UserLayout({ data }) {
  return (
    <>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Address
            </th>
            <th scope="col" class="px-6 py-3">
              Picture
            </th>
          </tr>
        </thead>

        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">{data.name}</td>
            <td class="px-6 py-4">{data.email}</td>
            <td class="px-6 py-4">{data.address}</td>
            <td class="px-6 py-4">
              <Image
                src={"http:/localhost:3000/admin/getimage/" + data.filename}
                alt="me"
                width="50"
                height="50"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
