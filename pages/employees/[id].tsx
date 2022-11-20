import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Description from "../../components/Description";
import Main from "../../components/Main";
import Title from "../../components/Title";
import { trpc } from "../../utils/trpc";

const Employee: NextPage = () => {
  const id = useRouter().query.id as string;
  const { data } = trpc.employee.find.useQuery({ id });

  return (
    <Main>
      <Title>{data ? data.name : "Loading..."}</Title>

      <Description>
        <Link href="/">Home</Link>
        <Link href="/employees">Employees</Link>
      </Description>

      {data ? (
        <ul>
          <li>
            Headshot:{" "}
            <Image
              src={data.imageUrl}
              alt="Headshot"
              width={200}
              height={200}
            />
          </li>
          <li>ID: {data.id}</li>
          <li>Title: {data.title}</li>
          <li>Supervisor: {data.supervisor}</li>
        </ul>
      ) : null}
    </Main>
  );
};

export default Employee;
