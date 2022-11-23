import Head from "next/head";
import Image from "next/image";
import { RoadmapTimeLine } from "../Components/RoadMapTimeLine";
import SideNavigation from "../Components/SideNavigation";
import styles from "../styles/Home.module.css";

export const getServerSideProps = async (ctx) => {
  console.log(ctx);
  return {
    props: {},
  };
};
export default function Home() {
  const navMenu = ["Home", "Story", "NFT", "Roadmap", "About us"];

  return (
    <div className="flex h-screen flex-col border-4_ border-red-300 ">
      <Head>
        <title>DeBalance NFT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-1 bg-[#EFF5F5]">
        <div className="flex-1 border-4_ overflow-hidden h-[100vh] scroll-smooth border-green-500">
          <div className="sections-container flex flex-1 flex-col border-4_ border-orange-500 gap-4">
            <section
              id="Home"
              className="h-screen border-4_ border-blue-500 grid place-items-center"
            >
              Home
            </section>
            <section
              id="Story"
              className="h-screen border-4_ overflow-hidden overflow-y-auto border-blue-500 grid place-items-center isolate"
            >
              <div className="home-content-container lg:max-w-[90%] flex flex-wrap_ border-4_ relative">
                <section className="md:basis-3/4 lg:basis-1/2 lg:grow pl-4 mix-blend-exclusion font-extrabold md:font-normal bg-gradient-to-r from-[#EB6440] to-[#497174] bg-clip-text text-transparent bg-opacity-50_">
                  <h1 className="text-6xl text-[#EB6440] font-[PBCaps]">
                    DeBalance NFT
                  </h1>
                  <p className="text-lg md:text-[#497174] font-[VarelaR]">
                    DeBalance NFT adalah koleksi NFT serial yang berjalan diatas
                    jaringan blockchain Algorand. Proyek merupakan bagian dari
                    mega proyek MANDALIKA SERIES, sebuah proyek yang di inisiasi
                    oleh komunitas KawanCrypto, Lombok Blockchain Society,
                    Kawanduit, Enjoy Life Foundation dan Komunitas Pendidikan di
                    Lombok.
                  </p>
                  <br />
                  <p className="text-lg md:text-[#497174] font-[VarelaR] ">
                    Dalam proyek ini kami merilis 7500 karakter yang dirilis
                    sesuai volume berseri yang diwakili oleh karakter yang
                    berbeda beda. Setiap karakter diwakili oleh corak, warna,
                    desain dan tema yang berbeda sehingga masing masing memiliki
                    keunikan yang identic dengan kebudayan dan nilai nilai yang
                    berkembang di Lombok. Untuk menambah unsur FUN pada proyek
                    ini kami menyelipkan beberapa karakter yang benar benar
                    terbatas (limited edition).
                  </p>
                </section>
                <section className="md:relative absolute top-auto right-0 w-1/3 h-full bottom-auto md:block grow lg:grow-0 md:basis-1/3 z-[-1] basis-full">
                  <div className="nft-img-container overflow-hidden w-96 rounded-full absolute -top-60 -left-20">
                    <Image
                      src="/Images/NFTs/93.png"
                      alt="Picture of the author"
                      width={1000}
                      height={1000}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                  <div className="nft-img-container overflow-hidden w-72 rounded-full absolute top-0 -right-20">
                    <Image
                      src="/Images/NFTs/442.png"
                      alt="Picture of the author"
                      width={1000}
                      height={1000}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                  <div className="nft-img-container overflow-hidden w-52 rounded-full absolute top-40 left-20">
                    <Image
                      src="/Images/NFTs/497.png"
                      alt="Picture of the author"
                      width={1000}
                      height={1000}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                </section>
              </div>
            </section>
            <section
              id="Roadmap"
              className="h-screen border-4_ border-blue-500 place-items-center isolate overflow-hidden overflow-y-auto scrollbar-thumb-[#497174] scrollbar-thin scrollbar-thumb-rounded-full scroll-smooth p-4 hover:scrollbar-thumb-[#EB6440] active:dscrollbar-thumb-[#D6E4E5]"
            >
              <div className="flex flex-1 gap-2 flex-col items-center">
                <h1 className="sm:text-8xl text-6xl font-extrabold font-[VarelaR] text-center w-min text-[#497174]">
                  DeBalance NFT 2023
                </h1>
                <div className="roadmap-container flex w-full flex-col">
                  <RoadmapTimeLine data={[1, 2, 3, 5]} />
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* side nav */}
        <SideNavigation navMenu={navMenu} />
      </main>
      {/* <footer className="">just a footer</footer> */}
    </div>
  );
}
