import image from "@/images/case/case-details-img-1.jpg";

export const cases = [
  {
    id: 1,
    image: "Bilişim ve Yapay Zeka Hukuku.png",
    /*image2: "case-3-1.jpg",*/
    title: "Bilişim ve Yapay Zeka \nHukuku",
  },
  {
    id: 2,
    image: "Gayrimenkul ve İnşaat Hukuku.png",
    /*image2: "case-3-2.jpg",*/
    title: "Gayrimenkul ve İnşaat \nHukuku",
  },
  {
    id: 3,
    image: "iş ve sosyal güvenlik hukuku.png",
    /*image2: "case-3-3.jpg",*/
    title: "İş ve Sosyal Güvenlik \nHukuku",
  },
  {
    id: 4,
    image: "Kişisel Verilerin Korunması Hukuku.png",
    title: "Kişisel Verilerin Korunması \nHukuku",
  },
  {
    id: 5,
    image: "Telekomünikasyon, Medya ve Eğlence Hukuku.png",
    title: "Medya ve Eğlence \nHukuku",
  },
  {
    id: 6,
    image: "Sağlık Hukuku.png",
    title: "Sağlık \nHukuku",
  },
  {
    id: 7,
    image: "Şirket ve Sözleşmeler Hukuku.png",
    title: "Şirket ve Sözleşmeler \nHukuku",
  },
  {
    id: 8,
    image: "Telekomünikasyon, Medya ve Eğlence Hukuku.png",
    title: "Telekomünikasyon \nHukuku",
  },
  {
    id: 9,
    image: "Girişimcilik ve Start-up Hukuku.png",
    title: "Girişimcilik ve Start-up \nHukuku",
  },
  {
    id: 10,
    image: "İcra ve İflas Hukuku.png",
    title: "İcra ve İflas \nHukuku",
  },
  {
    id: 11,
    image: "E-Ticaret, Fintek ve Ödeme Hizmetler.png",
    title: "E-Ticaret, Fintek ve Ödeme \nHizmetleri",
  },
  {
    id: 12,
    image: "Blockchain ve Kripto Para.png",
    title: "Blockchain ve Kripto Para",
  },
  {
    id: 13,
    image: "Yabancılar ve Vatandaşlık Hukuku.png",
    title: "Yabancılar ve Vatandaşlık \nHukuku",
  },
  {
    id: 14,
    image: "Reklam Hukuku.png",
    title: "Reklam \nHukuku",
  },
];

export const caseOne = {
  tagline: "Çalışma Alanlarımız",
  title: "Çalışma Alanlarımız",
  cases,
};

export const similarCase = {
  tagline: "more works",
  title: "Similar Cases",
  cases: cases.slice(3, 6),
};

export const caseDetailsPage = {
  image,
  clientName: "Jessica Brown",
  category: "Marketing, Consulting",
  date: "20 October, 2022",
  title: "Marketing Advice",
  text1:
    "Gelişen bilişim teknolojisi ile birlikte yapay zekanın oluşumu, faaliyet alanının genişlemesi akabinde gündeme tartışılması gereken yeni hukuki meseleler de gelmiştir.",
  text2:
    "Köksal & Partners olarak bu dinamik alana hızla uyum sağlıyor ve müvekkillerimize en etkin şekilde hukuki desteği sağlıyoruz.",  
  points: [
    "Is your van a little old and tired.",
    "Lorem Ipsum is simply dummy text.",
    "When an unknown printer took.",
    "Has survived not only five centuries.",
    "The leap into electronic typesetting.",
  ],
};
