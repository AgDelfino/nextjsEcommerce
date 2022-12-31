// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Octocat",
      price: 200,
      image: "http://localhost:3000/img/octocat.webp",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.`,
    },
    {
      id: 1,
      title: "Mug",
      price: 50,
      image: "http://localhost:3000/img/mug.webp",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.`,
    },
    {
      id: 2,
      title: "Pullover",
      price: 500,
      image: "http://localhost:3000/img/pullover01.webp",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.`,
    },
    {
      id: 3,
      title: "Stickers Nº 1",
      price: 10,
      image: "http://localhost:3000/img/stickers01.webp",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.`,
    },
    {
      id: 4,
      title: "Stickers Nº 2",
      price: 10,
      image: "http://localhost:3000/img/stickers02.webp",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.`,
    },
    {
      id: 5,
      title: "T-Shirts Blue",
      price: 350,
      image: "http://localhost:3000/img/tshirt01.webp",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.`,
    },
    {
      id: 6,
      title: "T-Shirts Black",
      price: 350,
      image: "http://localhost:3000/img/tshirt02.webp",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.`,
    },
    {
      id: 7,
      title: "Coaster",
      price: 150,
      image: "http://localhost:3000/img/coaster01.webp",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.`,
    },
  ]);
}
