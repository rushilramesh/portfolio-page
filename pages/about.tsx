import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import { SocialIcon } from "react-social-icons";
import { connectToDatabase } from "../utils/mongodb";

const About = ({
  user,
}: {
  user: {
    name: string;
    email: string;
    job: string;
    twitter: string;
    facebook: string;
    linkedin: string;
    github: string;
  };
}) => {
  const fitnus = [
    "JavaScript",
    "React Native",
    "Git",
    "Node.js",
    "Redux",
    "Firebase",
  ];
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <div className="container height-screen justify-center text-center mt-16 flex flex-col">
        <h1 className="font-mono text-4xl font-bold mb-4">About Me</h1>
        <main className="flex flex-col sm:overflow-x-scroll sm:flex-row-reverse sm:m-12 shadow-2xl">
          <div className="w-full sm:max-w-sm p-8 bg-gradient-to-t from-red-200 via-red-200 to-yellow-200">
            <Image
              src="/images/displayPhoto.jpeg"
              alt="Profile Picture"
              width={190}
              height={250}
              className="rounded-full mb-4"
            />
            <h1 className="text-center text-4xl font-semibold mt-8 mb-4">
              {user.name}
            </h1>
            <h2 className="text-center text-xl">{user.job}</h2>

            <div className="text-justify text-lg px-2 my-12">
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <div className="flex items-center my-6 space-x-4 ">
                <SocialIcon network="email" bgColor="#FD3838" />
                <a className="hover:underline" href={user.email}>
                  {user.email}
                </a>
              </div>

              <div className="flex items-center my-6 space-x-4 ">
                <SocialIcon network="twitter" />
                <a className="hover:underline" href={user.twitter}>
                  Twitter
                </a>
              </div>

              <div className="flex items-center my-6 space-x-4 ">
                <SocialIcon network="linkedin" bgColor="#FD3838" />
                <a className="hover:underline" href={user.linkedin}>
                  linkedIn
                </a>
              </div>

              <div className="flex items-center my-6 space-x-4 ">
                <SocialIcon network="github" />
                <a className="hover:underline" href={user.github}>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="w-full bg-gray-100 text-justify px-16 py-12">
            <div>
              <h2 className="font-bold text-2xl uppercase py-2 text-indigo-600">
                Profile
              </h2>
              <p>
                Hello, Rushil Here! I'm an undergraduate student at NUS and a
                self-taught web developer. I have experience in frontend
                frameworks such as React and static side generators such as
                Next.js. I'm familiar with the use of CSS frameworks like
                TailwindCSS to streamline the styling process of my projects. I
                also have experience in cross-platform mobile app development
                with React Native Check out some of my work{" "}
                <a
                  href={user.github}
                  className="text-blue-500 underline hover:text-gray-600"
                >
                  here
                </a>
                !
              </p>
              <br />
              <p>
                I am highly motivated in expanding my horizons day by day for
                better performance, testing and user experience. I thrive in a
                team environment and I'm always looking forward to new
                challenges. I spend whatever little of my free time posting on{" "}
                <Link href="./blog">
                  <a className="text-blue-500 underline hover:text-gray-600">
                    my blog
                  </a>
                </Link>
                .
              </p>
            </div>
            <hr className="mt-8 mb-8" />
            <div>
              <h2 className="font-bold text-2xl uppercase py-2 text-indigo-600">
                Projects
              </h2>
              <div>
                <h3 className="font-bold text-xl mt-3 mb-4">FitNUS</h3>
                <section className="mb-4">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    May - Aug 2021
                  </div>
                  <div className="lg:inline-block lg:w-10/12 w-full">
                    Cross-Platform Mobile Application
                  </div>
                </section>
                <section className="mb-4">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Overview:
                  </div>
                  <div className="lg:inline-block lg:w-9/12 w-full">
                    FitNUS is a mobile fitness application that integrates a
                    variety of workout plans with locations across NUS. FitNUS
                    aims to encourage students to adopt a balanced and healthy
                    lifestyle filled with sport and exercise. Check out my{" "}
                    <a
                      href="https://drive.google.com/file/d/1xP0PjLizXTWxZAIFVNSadMqZn4bphCP0/view?usp=sharing"
                      className="text-blue-500 underline hover:text-gray-600"
                    >
                      demo video
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://github.com/rushilramesh/FitNUS"
                      className="text-blue-500 underline hover:text-gray-600"
                    >
                      github repo
                    </a>
                    .
                  </div>
                </section>
                <section className="mb-4">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Description:
                  </div>
                  <div className="lg:inline-block lg:w-9/12 w-full">
                    The application has three key features. The 'workout logger'
                    allows users to start a workout session, with support for
                    static exercises such as deadlifts, as well as a run
                    feature. The second feature is the 'tracker', that displays
                    workout statistics and allows the user to set goals and
                    track their progress. The 'Exercise Jio' feature allows
                    users to create group workouts that other users can join.
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Tools:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 space-x-4 w-full">
                    {fitnus.map((skill) => {
                      return (
                        <span className="rounded bg-indigo-200 px-3 py-1">
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </section>
              </div>
              <hr className="mt-8 mb-8" />
              <div>
                <h2 className="font-bold text-2xl uppercase py-2 text-indigo-600">
                  Education
                </h2>
                <h3 className="mb-4">National University of Singapore</h3>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Aug 2020 - May 2024:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    Bachelor of Computing (hons.) in Computer Science
                  </div>
                </section>
                <h3 className="mb-4">Anglo-Chinese School (Independent)</h3>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Jan 2012 - Nov 2017:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    International Baccalaureate Diploma Programme
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { db } = await connectToDatabase();
  const res = await db.collection("users").findOne({});
  const user = JSON.parse(JSON.stringify(res));

  return {
    props: {
      user,
    },
  };
};

export default About;
