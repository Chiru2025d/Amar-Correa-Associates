"use client";

import Image from "next/image";
import styles from "./contact.module.css";

const teamMembers = [
  {
    name: "Amar Correa",
    role: "Advocate – Head Associate",
    phone: "+91 98451 13678",
    email: "amar.correa@acajuris.com",
    image: "/images/team1.png",
  },
  {
    name: "Shridevi M. Bhosale",
    role: "Advocate – Senior Associate",
    phone: "+91 77956 11707",
    email: "shridevi.b@acajuris.com",
    image: "/images/team3.png",
  },
  {
    name: "Yathish L Kumar",
    role: "Office Clerk",
    phone: "+91 98809 99559",
    image: "/images/Yathish L Kumar.png",
  },
];

export default function TeamContacts() {
  return (
    <aside className={styles.teamContacts}>
      {teamMembers.map((member, index) => (
        <div key={index} className={styles.teamCard}>

          {/* PROFILE IMAGE */}
          <div className={styles.teamImage}>
            <Image
              src={member.image}
              alt={member.name}
              width={60}
              height={60}
            />
          </div>

          {/* DETAILS */}
          <div className={styles.teamInfo}>
            <h4 className={styles.teamName}>{member.name}</h4>

            <p className={styles.teamRole}>{member.role}</p>
            <br></br> 

            {member.phone && (
              <p className={styles.teamContact}>
                Phone: {member.phone}
              </p>
            )}

            {member.email && (
              <p className={styles.teamContact}>
                Email: {member.email}
              </p>
            )}
          </div>

        </div>
      ))}
    </aside>
  );
}
