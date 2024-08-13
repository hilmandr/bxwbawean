import React from "react";
import Container from "~/components/common/container";
import HeadingTitle from "~/components/common/heading";
export default function PeranFungsiPage() {
  return (
    <>
      <HeadingTitle className=" z-20">
        <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner-1.JPG')] bg-cover bg-center shadow-lg ">
          <div className=" w-full h-[480px] bg-black/60 absolute z-0"></div>
          <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
            <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
              Peran dan Fungsi
            </h1>
            <p className=" text-white mt-2 text-center lg:text-base text-sm max-w-md lg:max-w-3xl">
              Peran dan Fungsi
            </p>
          </div>
        </div>
      </HeadingTitle>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center mb-20 mt-10">
          {/* <h1 className=" text-4xl font-semibold text-center">
            Jadwal Penerbangan Perintis Dari & Ke Bandara Harun Thohir
          </h1> */}
          <div className=" flex flex-col w-full items-center justify-center">
            <div className=" flex flex-col w-full py-10 border-b">
              <h1 className=" font-semibold text-2xl">Peran Bandar Udara</h1>
              <p className=" text-base pt-2">
                Bandar udara memiliki peran sebagai :
              </p>
              <ul className=" text-justify list-disc text-base leading-relaxed pl-5">
                <li>
                  Simpul dalam jaringan transportasi sesuai hierarkinya, yaitu
                  titik pertemuan beberapa jaringan dan rute angkutan udara;
                </li>
                <li>
                  Pintu gerbang kegiatan perekonomian dalam upaya pemerataan
                  pembangunan, pertumbuhan dan stabilitas ekonomi, serta
                  keselarasan pembangunan nasional dan pembangunan daerah yang
                  ditetapkan dengan memeperhatikan ketentuan rencana tata ruang
                  wilayah nasional, rencana tata ruang wilayah provinsi, dan
                  rencana tata ruang wilayah kabupaten/kota;
                </li>
                <li>
                  Tempat kegiatan alih moda transportasi merupakan tempat
                  perpindahan moda transportasi udara ke moda transportasi lain
                  atau sebaliknya dalam bentuk interkoneksi antarmoda pada
                  simpul transportasi yang ditetapkan dengan memperhatikan
                  ketentuan sistem transportasi nasional;
                </li>
                <li>
                  Pendorong dan penunjang kegiatan industri dan/atau
                  perdagangan, dimaksudkan agar keberadaan Bandar Udara dapat
                  memudahkan transportasi ke dan dari wilayah di sekitarnya
                  dalam rangka pendorong dan penunjang kegiatan industri,
                  perdagangan, dan/atau pariwisata dalam menggerakkan dinamika
                  pembangunan nasional serta keterpaduan dengan sektor
                  pembangunan lainnya dan ditetapkan dengan memperhatikan
                  ketentuan Rencana Pengembangan Ekonomi Nasional;
                </li>
                <li>
                  Pembuka isolasi daerah, pengembangan daerah perbatasan, dan
                  penanganan bencana dimaksudkan agar keberadaan Bandar Udara
                  dapat membuka daerah terisolir karena kondisi geografis
                  dan/atau karena sulitnya moda transportasi lain, penghubung
                  daerah perbatasan dalam rangka mempertahankan wilayah Negara
                  Kesatuan Republik Indonesia, serta kemudahan dalam penanganan
                  bencana alam pada wilayah tertentu dan sekitarnya yang
                  ditetapkan dengan memperhatikan ketentuan mengenai pembangunan
                  daerah tertinggal, ketentuan di bidang pertahanan negara,
                  ketentuan di bidang pengelolaan daerha perbatasan, dan
                  ketentuan di bidang penanggulangan bencana;
                </li>
                <li>
                  Prasarana memperkukuh Wawasan nusantara dan kedaulatan negara
                  merupakan titik-titik lokasi Bandar Udara di wilayah nusantara
                  saling terhubungkan dalam suatu jaringan dan rute penerbangan
                  sehingga dapat mempersatukan wilayah untuk kedaulatan Negara
                  Kesatuan Republik Indonesia dengan memperhatikan ketentuan di
                  bidang keamanan dan pertahanan negara.
                </li>
              </ul>
              <p className=" text-sm pt-4">
                Sumber: Undang Undang No 1 Tahun 2009 Tentang Penerbangan dan
                Peraturan Menteri Perhubungan Nomor PM 39 Tahun 2019 tentang
                Tatanan Kebandarudaraan Nasional
              </p>
            </div>
            <div className=" flex flex-col w-full py-10">
              <h1 className=" font-semibold text-2xl">Fungsi Bandar Udara</h1>
              <p className=" text-base pt-2 text-justify">
                Berdasarkan fungsinya maka bandar udara merupakan tempat
                penyelenggaraan kegiatan pemerintahan dan/atau pengusahaan.
                Sebagai tempat penyelenggaraan pemerintahan maka bandar udara
                merupakan tempat unit kerja instansi pemerintah dalam
                menjalankan tugas dan fungsinya terhadap masyarakat sesuai
                dengan ketentuan peraturan perundang-undangan dalam urusan
                antara lain:
              </p>
              <ul className=" text-justify list-decimal text-base leading-relaxed pl-5">
                <li>Pembinaan kegiatan penerbangan;</li>
                <li>Kepabeanan;</li>
                <li>Keimigrasian;</li>
                <li>Kekarantinaan.</li>
              </ul>
              <p className=" text-base pt-2">
                Bandar udara sebagai tempat penyelenggaraan kegiatan pengusahaan
                maka bandar udara merupakan tempat usaha bagi:
              </p>
              <ul className=" text-justify list-decimal text-base leading-relaxed pl-5">
                <li>
                  Unit Penyelenggara Bandar Udara atau Badan Usaha Bandar Udara;
                </li>
                <li>Badan Usaha Angkutan Udara; dan</li>
                <li>
                  Badan Hukum Indonesia atau perorangan melalui kerjasama dengan
                  Unit Penyelenggara Bandar Udara atau Badan Usaha Bandar Udara;
                </li>
              </ul>
              <p className=" text-sm pt-4">
                Sumber: Undang Undang No 1 Tahun 2009 Tentang Penerbangan dan
                Peraturan Menteri Perhubungan Nomor PM 39 Tahun 2019 tentang
                Tatanan Kebandarudaraan Nasional
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
