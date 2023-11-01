import { useState } from "react";
import Change from "./change";
const Pool = () => {
  
  const listImages = [{
    image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=720",
    image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/90d22704-7f1a-44ad-924a-ecbdbb666db0.jpeg?im_w=720",
    image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/7fa4060d-60c1-44b0-921b-6958e7b200f1.jpeg?im_w=720",
    image4: "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/b7c698e2-6d20-4d2a-a933-4c3f9e36eac4.jpeg?im_w=720",
    image5: "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/2f6537e4-cd4f-44e1-8acb-6bf77011b0e5.jpeg?im_w=720",
    content:  "Cheomdangwahak-ro, Jeongeup-fzsi, Hàn Quốc",
    distance:"Cách 2.600km",
    date: "Ngày 19 - Ngày 30 tháng 11",
    price:"$80"
    },
    {
    image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/edf6ceca-3a20-4eac-b693-c354822cc09f.jpeg?im_w=720",
    image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/b31627a5-2bae-49b4-8b2d-3eec728f29e9.jpeg?im_w=720",
    image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/fd165bea-7b87-469a-ab30-5debd91493b4.jpeg?im_w=720",
    image4: "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/0217a037-1255-4d29-89bf-13f924051527.jpeg?im_w=720",
    content:  "Nha Trang",
    distance:"Cách 800km",
    date: "Ngày 19 - Ngày 20 tháng 11",
    price:"$60"
    },
    {
      image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/edf6ceca-3a20-4eac-b693-c354822cc09f.jpeg?im_w=720",
      image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/b31627a5-2bae-49b4-8b2d-3eec728f29e9.jpeg?im_w=720",
      image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/fd165bea-7b87-469a-ab30-5debd91493b4.jpeg?im_w=720",
      image4: "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/0217a037-1255-4d29-89bf-13f924051527.jpeg?im_w=720",
      content:  "Cheomdangwahak-ro, Jeongeup-fzsi, Hàn Quốc",
      distance:"Cách 2.600km",
      date: "Ngày 19 - Ngày 30 tháng 11",
      price:"$80"
    },
    {
      image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/edf6ceca-3a20-4eac-b693-c354822cc09f.jpeg?im_w=720",
      image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/b31627a5-2bae-49b4-8b2d-3eec728f29e9.jpeg?im_w=720",
      image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/fd165bea-7b87-469a-ab30-5debd91493b4.jpeg?im_w=720",
      image4: "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/0217a037-1255-4d29-89bf-13f924051527.jpeg?im_w=720",
      content:  "Cheomdangwahak-ro, Jeongeup-fzsi, Hàn Quốc",
      distance:"Cách 2.600km",
      date: "Ngày 19 - Ngày 30 tháng 11",
      price:"$80"
    },
    {
      image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/edf6ceca-3a20-4eac-b693-c354822cc09f.jpeg?im_w=720",
      image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/b31627a5-2bae-49b4-8b2d-3eec728f29e9.jpeg?im_w=720",
      image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/fd165bea-7b87-469a-ab30-5debd91493b4.jpeg?im_w=720",
      image4: "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/0217a037-1255-4d29-89bf-13f924051527.jpeg?im_w=720",
      content:  "Cheomdangwahak-ro, Jeongeup-fzsi, Hàn Quốc",
      distance:"Cách 2.600km",
      date: "Ngày 19 - Ngày 30 tháng 11",
      price:"$80"
    },
    {
      image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/edf6ceca-3a20-4eac-b693-c354822cc09f.jpeg?im_w=720",
      image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/b31627a5-2bae-49b4-8b2d-3eec728f29e9.jpeg?im_w=720",
      image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/fd165bea-7b87-469a-ab30-5debd91493b4.jpeg?im_w=720",
      image4: "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/0217a037-1255-4d29-89bf-13f924051527.jpeg?im_w=720",
      content:  "Cheomdangwahak-ro, Jeongeup-fzsi, Hàn Quốc",
      distance:"Cách 2.600km",
      date: "Ngày 19 - Ngày 30 tháng 11",
      price:"$80"
    },
    {
      image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/edf6ceca-3a20-4eac-b693-c354822cc09f.jpeg?im_w=720",
      image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/b31627a5-2bae-49b4-8b2d-3eec728f29e9.jpeg?im_w=720",
      image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/fd165bea-7b87-469a-ab30-5debd91493b4.jpeg?im_w=720",
      image4: "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/0217a037-1255-4d29-89bf-13f924051527.jpeg?im_w=720",
      content:  "Cheomdangwahak-ro, Jeongeup-fzsi, Hàn Quốc",
      distance:"Cách 2.600km",
      date: "Ngày 19 - Ngày 30 tháng 11",
      price:"$80"
    },
    {
      image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/edf6ceca-3a20-4eac-b693-c354822cc09f.jpeg?im_w=720",
      image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/b31627a5-2bae-49b4-8b2d-3eec728f29e9.jpeg?im_w=720",
      image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/fd165bea-7b87-469a-ab30-5debd91493b4.jpeg?im_w=720",
      image4: "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/0217a037-1255-4d29-89bf-13f924051527.jpeg?im_w=720",
      content:  "Cheomdangwahak-ro, Jeongeup-fzsi, Hàn Quốc",
      distance:"Cách 2.600km",
      date: "Ngày 19 - Ngày 30 tháng 11",
      price:"$80"
    },
    {
      image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/edf6ceca-3a20-4eac-b693-c354822cc09f.jpeg?im_w=720",
      image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/b31627a5-2bae-49b4-8b2d-3eec728f29e9.jpeg?im_w=720",
      image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/fd165bea-7b87-469a-ab30-5debd91493b4.jpeg?im_w=720",
      image4: "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/0217a037-1255-4d29-89bf-13f924051527.jpeg?im_w=720",
      content:  "Cheomdangwahak-ro, Jeongeup-fzsi, Hàn Quốc",
      distance:"Cách 2.600km",
      date: "Ngày 19 - Ngày 30 tháng 11",
      price:"$80"
    },
    {
      image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/edf6ceca-3a20-4eac-b693-c354822cc09f.jpeg?im_w=720",
      image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/b31627a5-2bae-49b4-8b2d-3eec728f29e9.jpeg?im_w=720",
      image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/fd165bea-7b87-469a-ab30-5debd91493b4.jpeg?im_w=720",
      image4: "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/0217a037-1255-4d29-89bf-13f924051527.jpeg?im_w=720",
      content:  "Cheomdangwahak-ro, Jeongeup-fzsi, Hàn Quốc",
      distance:"Cách 2.600km",
      date: "Ngày 19 - Ngày 30 tháng 11",
      price:"$80"
    },
    {
      image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/edf6ceca-3a20-4eac-b693-c354822cc09f.jpeg?im_w=720",
      image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/b31627a5-2bae-49b4-8b2d-3eec728f29e9.jpeg?im_w=720",
      image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/fd165bea-7b87-469a-ab30-5debd91493b4.jpeg?im_w=720",
      image4: "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/0217a037-1255-4d29-89bf-13f924051527.jpeg?im_w=720",
      content:  "Cheomdangwahak-ro, Jeongeup-fzsi, Hàn Quốc",
      distance:"Cách 2.600km",
      date: "Ngày 19 - Ngày 30 tháng 11",
      price:"$80"
    },
    {
      image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/edf6ceca-3a20-4eac-b693-c354822cc09f.jpeg?im_w=720",
      image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/b31627a5-2bae-49b4-8b2d-3eec728f29e9.jpeg?im_w=720",
      image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/fd165bea-7b87-469a-ab30-5debd91493b4.jpeg?im_w=720",
      image4: "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/0217a037-1255-4d29-89bf-13f924051527.jpeg?im_w=720",
      content:  "Cheomdangwahak-ro, Jeongeup-fzsi, Hàn Quốc",
      distance:"Cách 2.600km",
      date: "Ngày 19 - Ngày 30 tháng 11",
      price:"$80"
    },
    {
      image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/edf6ceca-3a20-4eac-b693-c354822cc09f.jpeg?im_w=720",
      image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/b31627a5-2bae-49b4-8b2d-3eec728f29e9.jpeg?im_w=720",
      image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/fd165bea-7b87-469a-ab30-5debd91493b4.jpeg?im_w=720",
      image4: "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/0217a037-1255-4d29-89bf-13f924051527.jpeg?im_w=720",
      content:  "Cheomdangwahak-ro, Jeongeup-fzsi, Hàn Quốc",
      distance:"Cách 2.600km",
      date: "Ngày 19 - Ngày 30 tháng 11",
      price:"$80"
    },
  ];
   

      return (
        <>
        <div className="mt-36 ml-20 grid grid-cols-4 gap-4 ">
        {listImages.map( (item, index) =>
        <Change item = {item} index = {index}/>
        
        )}
        </div>
       </>
      );
}
export default Pool;