import Head from "next/head";
import { Inter } from "next/font/google";
import { useAppSelector } from "@/utils/hooks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const user = useAppSelector((state) => state.user);

  return (
    <>
      <Head>
        <title>Project genie</title>
        <meta name="description" content="Project Management System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid">
          <div className="col-12">
            <div className="card">
              <h5>Project Genie</h5>
              <p>
                Welcome to your Project Genie Dashboard.
                <br /> Here&apos;s a quick look at recent updates on your
                submissions.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
