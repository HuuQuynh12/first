
import { useState} from "react";
import Change from "./change";

function View() {
    const listImages = [{
      image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=720",
      image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/90d22704-7f1a-44ad-924a-ecbdbb666db0.jpeg?im_w=720",
      image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/7fa4060d-60c1-44b0-921b-6958e7b200f1.jpeg?im_w=720",
      image4: "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/b7c698e2-6d20-4d2a-a933-4c3f9e36eac4.jpeg?im_w=720",
      image5: "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/2f6537e4-cd4f-44e1-8acb-6bf77011b0e5.jpeg?im_w=720",
      content:  "Cheomdangwahak-ro, Jeongeup-fzsi, Hàn Quốc",
      distance:"Cách 2.600km",
      date: "Ngày 19 - Ngày 30 tháng 11",
      price:"$80",
      },
      {
      image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/edf6ceca-3a20-4eac-b693-c354822cc09f.jpeg?im_w=720",
      image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/b31627a5-2bae-49b4-8b2d-3eec728f29e9.jpeg?im_w=720",
      image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/fd165bea-7b87-469a-ab30-5debd91493b4.jpeg?im_w=720",
      image4: "https://a0.muscache.com/im/pictures/miso/Hosting-788840888520285314/original/0217a037-1255-4d29-89bf-13f924051527.jpeg?im_w=720",
      content:  "Nha Trang",
      distance:"Cách 800km",
      date: "Ngày 19 - Ngày 20 tháng 11",
      price:"$50",
      },
      {
        image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-645915294944482016/original/00fefae2-6351-44c6-acd6-d25df5e36aad.png?im_w=720",
        image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-645915294944482016/original/c661951c-1188-4a54-839b-6683eee931a5.png?im_w=720",
        image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-645915294944482016/original/38939bd1-da23-4a50-a444-55f18c4cb9b3.png?im_w=720",
        image4: "https://a0.muscache.com/im/pictures/miso/Hosting-645915294944482016/original/2a931d3e-9482-4563-abb1-276ef8cf29e8.png?im_w=720",
        content:  "Ngũ Hành Sơn, Việt Nam",
        distance:"Cách 600km",
        date: "Ngày 01 - Ngày 06 tháng 11",
        price:"$81"
      },
      {
        image1:  "https://a0.muscache.com/im/pictures/miso/Hosting-875767667363587654/original/10c790ba-f1c9-4eb6-9e5b-95e68ed40beb.jpeg?im_w=720",
        image2:  "https://a0.muscache.com/im/pictures/miso/Hosting-875767667363587654/original/7d66d2d8-c7b7-4bd6-9856-c67da3ccee8e.jpeg?im_w=720",
        image3:  "https://a0.muscache.com/im/pictures/miso/Hosting-875767667363587654/original/2245d74b-a74f-4db0-a112-ec0f1cd2bab9.jpeg?im_w=720",
        image4: "https://a0.muscache.com/im/pictures/miso/Hosting-875767667363587654/original/0e4981e9-411d-4f60-af17-c7ac0c7853eb.jpeg?im_w=720",
        content:  "Sơn Trà, Việt Nam",
        distance:"Cách 1000km",
        date: "Ngày 12 - Ngày 18 tháng 11",
        price:"$90"
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
export default View;