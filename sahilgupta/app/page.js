import Image from "next/image";
import { SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { ProjectCard } from "@/components/ProjectCard";

const USERS_QUERY = `*[_type == "user"]{_id, firstName, lastName, age, location, countryCode, phone}`;


export default async function Home() {
  const users = await client.fetch(USERS_QUERY);

  return (
    <main>
      <ProjectCard/>
      {users.map((user) => (
        <div key={user._id}>
          <li >{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.age}</li>
          <li>{user.countryCode}</li>
          <li>{user.phone}</li>
        </div>
      ))}
    </main>
  );
}
