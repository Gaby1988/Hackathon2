import React, { useState, useEffect } from "react";
import PhoneDistpacthViewAllWithPrice from "../component/PhoneDistpacthViewAllWithPrice";
import api from "../services/api";
import HuaweiMate from "../assets/phone-img/Huawei-Mate20Pro.jpg";
import HuaweiP20 from "../assets/phone-img/Huawei-P20Pro.jpg";
import HuaweiP30 from "../assets/phone-img/Huawei-P30Pro.jpg";
import Iphone from "../assets/phone-img/Iphone-11.jpg";
import IphoneSe from "../assets/phone-img/Iphone-se.jpg";
import IphoneX from "../assets/phone-img/Iphone-x.jpg";
import OppoA92 from "../assets/phone-img/Oppo-A92.jpg";
import OppoFind from "../assets/phone-img/Oppo-FindX2Pro.jpg";
import OppoReno from "../assets/phone-img/Oppo-Reno5Pro.jpg";
import SamsungGalaxyNote9 from "../assets/phone-img/Samsung-GalaxyNote9.jpg";
import SamsungGalaxyS9 from "../assets/phone-img/Samsung-GalaxyS9.jpg";
import SamsungGalaxyS10 from "../assets/phone-img/Samsung-GalaxyS10e.jpg";
import XiaomiMi11 from "../assets/phone-img/Xiaomi-Mi11Lite.jpg";
import XiaomiPocoX3 from "../assets/phone-img/Xiaomi-PocoX3Pro.jpg";
import XiaomiRedmiNote11 from "../assets/phone-img/Xiaomi-RedmiNote11.jpg";

function PhoneView() {
  const arrayImgPhone = [
    Iphone,
    IphoneSe,
    IphoneX,
    SamsungGalaxyNote9,
    SamsungGalaxyS9,
    SamsungGalaxyS10,
    HuaweiMate,
    HuaweiP20,
    HuaweiP30,
    OppoA92,
    OppoFind,
    OppoReno,
    XiaomiMi11,
    XiaomiPocoX3,
    XiaomiRedmiNote11,
  ];
  const [data, setData] = useState([]);
  const [dataAll, setDataAll] = useState([]);

  const getData = () =>
    api.get("/phone").then((response) => {
      setData(response.data);
    });

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const dataMerge = data.map((item, index) => ({
        picture: arrayImgPhone[index],
        ...item,
      }));
      setDataAll(dataMerge);
    }
  }, [data]);
  return (
    <div className="phoneView">
      {dataAll.map((item) => (
        <PhoneDistpacthViewAllWithPrice item={item} key={item.id} />
      ))}
    </div>
  );
}
export default PhoneView;
