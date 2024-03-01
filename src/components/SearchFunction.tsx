import { useState } from "react";
import { tableData } from "../data";

export const SearchFunctionality = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Here"
        />
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>

        <tbody>
          {tableData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(search);
            })
            .map((items) => (
              <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.first_name}</td>
                <td>{items.last_name}</td>
                <td>{items.email}</td>
                <td>{items.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
