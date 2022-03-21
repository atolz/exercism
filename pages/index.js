import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Container from "../components/Container";
import { useState } from "react";
import { baseUrl } from "../axios/request";
import Table from "../components/Table";

export default function Home({ initTest, initTracks, initTotalPage, initTrackCounts, initNoTest }) {
  const [noTest, setNoTest] = useState(0);
  return (
    <div>
      <Head>
        <title>Exercism | Testimonials</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="https://dg8krxphbh767.cloudfront.net/meta/favicon-16x16.png" />

        {/* Style Links should be placed in pages/_document.js: App Wide */}

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> */}
      </Head>

      <main className="">
        <Header></Header>
        <Container>
          <div>
            <section className="grid place-items-center mb-[3.6rem]">
              <img src="/icons-svg/badge-mood-happy.svg" className="mt-[4.12rem]"></img>
              <h2 className="exe-h2  flex flex-wrap justify-center items-center mt-[1.32rem] translate-x-7">
                Testimonials I’ve left <span className="exe-count ml-[1.6rem]">{initNoTest}</span>
              </h2>
              <img className="mt-[2rem]" src="/icons-svg/wriggle.svg"></img>
            </section>
            <Table initTest={initTest} initTrackCounts={initTrackCounts} initTotalPage={initTotalPage} initTracks={initTracks} initNoTest={initNoTest}></Table>
          </div>
        </Container>
        {/* <input placeholder="Filter by exercise title" className="exe-search"></input>
        <select className="exe-select w-[34.8rem]" name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <h3>Test</h3> */}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  console.log("in get static props");
  const allTracks = (await baseUrl.get("/tracks")).data.tracks;
  const response = await baseUrl.get(`hiring/testimonials?order=newest_first`);
  const testimonials = response.data.testimonials.results;
  const userTracks = response.data.testimonials.tracks;
  const trackCounts = response.data.testimonials.track_counts;
  const noTest = response.data.testimonials.pagination.total_count;
  const totalPage = response.data.testimonials.pagination.total_pages;

  // Filter the tracks based on the user tracks
  const filtered = allTracks.filter((track, i) => {
    return userTracks.includes(track.slug);
  });
  const filteredTracks = filtered;
  console.log("no of test is", noTest);

  return {
    props: {
      initTest: testimonials,
      initTracks: filteredTracks,
      initTotalPage: totalPage,
      initTrackCounts: trackCounts,
      initNoTest: noTest,
    },
    revalidate: 10,
  };
}

// Get initial props
// export async function gip() {
//   console.log("in get static props");
//   const allTracks = (await baseUrl.get("/tracks")).data.tracks;
//   const response = await baseUrl.get(`hiring/testimonials?order=newest_first`);
//   const testimonials = response.data.testimonials.results;
//   const userTracks = response.data.testimonials.tracks;
//   const trackCounts = response.data.testimonials.track_counts;
//   const noTest = response.data.testimonials.pagination.total_count;
//   const totalPage = response.data.testimonials.pagination.total_pages;

//   // Filter the tracks based on the user tracks
//   const filtered = allTracks.filter((track, i) => {
//     return userTracks.includes(track.slug);
//   });
//   const filteredTracks = filtered;
//   console.log("no of test is", noTest);

//   return {
//     initTest: testimonials,
//     initTracks: filteredTracks,
//     initTotalPage: totalPage,
//     initTrackCounts: trackCounts,
//     initNoTest: noTest,
//   };
// }

// Home.getInitialProps = gip;
