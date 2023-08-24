import { DataProduct } from "./data-product.const";

export interface DataProductFinal {
  id: string;
  srcImgRemoveBg: { src: string; width: number; height: number };
  srcImg: { src: string; width: number; height: number };
  data: DataProduct;
}
export const DATA_PRODUCT_FINAL = [
  {
    id: 1,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang3-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang3-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "3.1",
      ingredient:
        "<p>- Nitrosomonas sp (min) 1x107 cfu/kg</p>\n    <p>- Nitrobacter sp (min) 1.782.108 UI</p>\n    <p>- Bacillus subtilis (min) 1x109 cfu/kg</p>\n    <p>- Bacillus licheniformis (min) 1x109 cfu/kg</p>\n    <p>- Bacillus megaterium (min) 1x109 cfu/kg</p>\n    <p>- Saccharomyces cerevisiae (min) 2x10¹0 cfu/kg</p>\n    <p>- Độ ẩm (max) 10%</p>\n    <p>- Cát sạn (max) 3%</p>\n    <p>- Chất cấm, kháng sinh, Ethoxyquin không có</p>",
      uses: "<p>- Giảm ô nhiễm đáy ao, phân hủy nhanh thức ăn dư thừa, phân tôm cá ở đáy ao.</p>\n    <p>- Giảm hàm lượng các loại khí độc NH3, H2S, NO2 trong ao nuôi.</p>\n    <p>- Kìm hãm vi sinh vật gây bệnh, tạo thêm nguồn vi khuẩn có lợi trong ao nuôi </p>",
      dosage:
        " <p>- Trước khi thả giống 3-5 ngày: 300g/10.000m³ nước.</p>\n    <p>- Tôm từ 1-2 tháng tuổi: 300g/5.000m³ nước, định kỳ 5-7 ngày một lần.</p>\n    <p>- Tôm trên 2 tháng tuổi: 300g/3.000m³ nước, định kỳ 5-7 ngày một lần.</p>\n    <p>- Trường hợp ao nuôi có nồng độ khí độc cao: 300g/1.000-3.000m³ nước.</p>\n    <p>- Hòa sản phẩm với nước sạch, tạt đều.</p>",
      nameProduct: "MP NANO",
    },
  },
  {
    id: 2,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang3-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang3-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "3.2",
      ingredient:
        " <p>- Bacillus sp (min) 1x10<sup>8</sup> cfu/kg</p>\n    <p>- Bacillus pumilus (min) 1x10<sup>9</sup> cfu/kg</p>\n    <p>- Saccharomyces spp (min) 1x10<sup>9</sup> cfu/kg</p>\n    <p>- Nitrobacter spp (min) 1x10<sup>9</sup> cfu/kg</p>\n    <p>- Nitrosomonas spp (min) 1x10<sup>9</sup> cfu/kg</p>  \n    <p>- Độ ẩm (max) 10%</p>\n    <p>- Cát sạn (max) 3%</p>\n    <p>- Chất mang (Dextrose) vừa đủ 1kg</p>\n    <p>- Chất cấm, kháng sinh, Ethoxyquin không có</p>",
      uses: " <p>- Sạch nhớt ao bạt, sạch bùn đen đáy ao.</p>\n    <p>- Chuyên xử lý đáy ao, từ dòng Nitro đặc hiệu làm giảm ngay nồng độ khí độc\n      NH3, NO2....trong ao nuôi.</p>\n    <p>- Chủng vi sinh đậm đặc sẽ phân hủy nhanh thức ăn dư thừa, mùn bã hữu cơ,\n      màng chất béo, làm môi trường ao luôn sạch.</p>\n    <p>- Ức chế vi sinh vật gây bệnh, tạo điều kiện để vi sinh vật có lợi phát triển, từ đó\n      giảm thiểu rủi ro dịch bệnh có thể xảy ra.</p>",
      dosage:
        "   <p>- Trước khi thả giống 3 ngày: 300g/7.000m³ nước.</p>\n    <p>- Tôm từ 1-2 tháng tuổi: 300g/5.000m³ nước, định kỳ 5-7 ngày một lần.</p>\n    <p>- Tôm trên 3 tháng tuổi: 300g/3.000m³ nước, định kỳ 5-7 ngày một lần.</p>\n    <p>- Để tăng hoạt tính của BIOMAX, nên ngâm 1 gói BIOMAX với 5kg mật rỉ đường,\n      pha loãng. (Chạy sục khí trước khi tạt 2 tiếng)</p>\n    <p>- Tránh sử dụng thuốc và hóa chất diệt khuẩn trong thời gian ít nhất 1 ngày trước\n      và sau khi sử dụng BIOMAX.</p>",
      nameProduct: "BIO MAX",
    },
  },
  {
    id: 3,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang4-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang4-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "4.1",
      ingredient:
        "<p>- Bacillus subtilis (min) 1x10<sup>9</sup> cfu</p>\n    <p>- Bacillus pumilus (min) 1x10<sup>9</sup> cfu</p>\n    <p>- Bacillus megaterium (min) 1x10<sup>9</sup> cfu</p>\n    <p>- Bacillus amyloliquefaciens (min) 1x10<sup>9</sup> cfu</p>\n    <p>- Amylase (max) 570 UI/g</p>\n    <p>- Protease (max) 138 UI/g</p>\n    <p>- Chất mang (Dextrose) vừa đủ 1kg</p>\n    <p>- Chất cấm, kháng sinh, Ethoxyquin không có</p>",
      uses: "    <p>- Làm sạch các chất dơ bẩn, lơ lửng trong ao, duy trì ổn định màu nước, khống\n    chế tảo độc phát triển.</p>\n  <p>- Luôn giữ môi trường sạch sẽ, tôm khỏe mạnh và phát triển tốt, không cần sử\n    dụng vi sinh xử lý khác.</p>\n  <p>- Luôn giữ môi trường sạch sẽ, tôm khỏe mạnh và phát triển tốt, không cần sử\n    dụng vi sinh xử lý khác.</p>\n  <p>- Luôn giữ môi trường sạch sẽ, tôm khỏe mạnh và phát triển tốt, không cần sử\n    dụng vi sinh xử lý khác.</p>",
      dosage:
        "  <p>- Dùng 454g/5.000-7.000m³ nước, định kỳ 7 ngày một lần.</p>\n    <p>- Khi đáy ao và nước quá bẩn, xanh đen, đậm đặc dùng 454g/3.000m³. Dùng\n      lúc 12-13 giờ chiều khi trời nắng.</p>\n    <p>- Tôm trên 3 tháng tuổi: 300g/3.000m³ nước, định kỳ 5-7 ngày một lần.</p>\n    <p>- Giảm tảo, ổn định màu nước, làm sạch môi trường: dùng lúc 9-11 giờ sáng.</p>\n    <p>- Hòa sản phẩm với nước sạch, tạt đều khắp ao.</p>",
      nameProduct: "MP BIO CLEAR",
    },
  },
  {
    id: 4,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang4-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang4-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "4.2",
      ingredient:
        " Bacillus subtilis (min) 1x10<sup>9</sup>cfu\n    <p>- Bacillus licheniformis (min) 1x10<sup>9</sup>cfu </p>\n    <p>- Amylase (min) 30.000 UI </p>\n    <p>- Protease (min) 70.000 UI </p>\n    <p>- Độ ẩm (max) 10% </p>\n    <p>- Chất mang (Dextrose) vừa đủ 1kg </p>\n   ",
      uses: " <p>- Diệt tảo nhanh, hạn chế sự phát triển của tảo xanh, tảo đỏ và rong rêu trong\n    ao nuôi.</p>\n  <p>- Cắt tảo theo cơ chế sinh học không làm tôm-cá bị sốc.</p>\n  <p>- Làm giảm tảo nhanh, giảm bọt, giảm nhớt. Phân hủy chất thải hữu cơ ở đáy\n    ao, ổn định màu nước.</p>",
      dosage:
        "  <p>- Dùng định kỳ để giảm bớt tảo già và làm sạch nước: 500g/5.000-7.000m³\n    nước, 7 ngày một lần vào lúc 9-10 giờ sáng.</p>\n  <p>Dùng trong trường hợp tảo xanh quá dày: 500g/5.000m³ nước, vào lúc 12-13\n    giờ chiều.</p>\n  <p>Dùng trong trường hợp tảo đỏ: 500g/5.000m³ nước, vào lúc 6-8 giờ tối.</p>\n  <p>Hòa sản phẩm với nước sạch, tạt đều khắp ao, chạy quạt 2 giờ trước khi sử\n    dụng</p>",
      nameProduct: "NANO ZIM",
    },
  },
  {
    id: 5,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang5-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang5-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "5.1",
      ingredient:
        "   <p>- Bacillus subtilis (min) 1x10<sup>9</sup> cfu/kg</p>\n    <p>- Bacillus licheniformis (min) 1x10<sup>9</sup> cfu/kg</p>\n    <p>- Bacillus megaterium (min) 1x10<sup>9</sup> cfu/kg</p>\n    <p>- Saccharomyces cerevisiae (min) 1x10<sup>9</sup> cfu/kg</p>\n    <p>- Nitrosomonas spp (min) 1x10<sup>9</sup> cfu/kg</p>\n    <p>- Độ ẩm (max) 10%</p>\n    <p>- Cát sạn (max) 3%</p>\n    <p>- Cát sạn (max) 3%</p>\n    <p>- Chất mang (Dextrose) vừa đủ 1kg</p>\n    <p>- Chất cấm, kháng sinh, Ethoxyquin không có</p>",
      uses: "   <p>- Sạch bọt, nhớt nước ao, làm trong nước ao nuôi.</p>\n    <p>- Làm sạch bùn đen ở đáy ao, ổn định môi trường.</p>\n    <p>- Chuyên xử lý đáy ao, từ dòng Nitro đặc hiệu làm giảm ngay nồng độ khí độc\n      NH3, NO2....trong ao nuôi.</p>\n    <p>- Chủng vi sinh đậm đặc sẽ phân hủy nhanh thức ăn dư thừa, mùn bã hữu cơ,\n      màng chất béo, làm môi trường ao luôn sạch.</p>\n    <p>- Ức chế vi sinh vật gây bệnh, tạo điều khiện để vi sinh vật có lợi phát triển, từ đó\n      giảm thiểu rủi ro dịch bệnh có thể xảy ra.</p>",
      dosage:
        "<p>- Trước khi thả giống 3 ngày: 300g/10.000m³ nước.</p>\n    <p>- Tôm từ 1-2 tháng tuổi: 300g/5.000-7.000m³ nước, định kỳ 5-7 ngày một lần.</p>\n    <p>- Tôm trên 2 tháng tuổi: 300g/5.000m³ nước, định kỳ 5-7 ngày một lần.</p>",
      nameProduct: "BIOPOLD",
    },
  },
  {
    id: 6,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang5-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang5-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "5.2",
      ingredient:
        " <p>- Rhodopseudomonas (min) 1 x 10<sup>8</sup> cfu/ml </p>\n    <p>- Rhodobacter (min) 1 x 10<sup>8</sup> cfu/ml</p>\n    <p>- Dung môi (nước cất) vừa đủ 1 lít</p>\n    <p>- Cát sạn (max) 3%</p>\n    <p>- Chất cấm, kháng sinh, Ethoxyquin không có</p>",
      uses: " <p>- Phân hủy thức ăn dư thừa, phân tôm cá ở đáy ao.</p>\n    <p>- Giảm khí độc H2S trong ao nuôi.</p>\n    <p>- Tạo thêm nguồn vi khuẩn có lợi trong ao nuôi</p>\n    <p>- Làm sạch nước ổn định môi trường trong quá trình nuôi.</p>",
      dosage:
        "  <p>- Trước khi thả giống 3-5 ngày: 2 lít/5.000m3 nước.</p>\n    <p>- Tôm từ 1-2 tháng tuổi: 2 lít/3.000m3 nước. 7-10 ngày/lần</p>\n    <p>- Tôm trên 2 tháng tuổi: 2 lít/2.000m3 nước. 5-7 ngày/lần</p>\n    <p>Tôm trên 2 tháng tuổi: 2 lít/2.000m3 nước. 5-7 ngày/lần</p>",
      nameProduct: "BIO RHODO",
    },
  },
  {
    id: 7,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang6-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang6-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "6.1",
      ingredient:
        " <p>- Protein (min) 433.009mg</p>\n    <p>- Lysine (min) 224.592mg</p>\n    <p>- Methionine (min) 211.319mg</p>\n    <p>- Vitamin B1 (min) 41.700mg</p>\n    <p>- Vitamin D3 (min) 6.843.417 UI</p>\n    <p>- Phụ gia (Dextrose) 1kg</p>\n    <p>- Độ ẩm (max) 10%</p>\n    <p>- Chất cấm, kháng sinh, Ethoxyquin không có</p>",
      uses: "<p>- Chất cấm, kháng sinh, Ethoxyquin</p>\n    <p>- Ngăn chặn hội chứng chết sớm do bệnh gan trên tôm sú, tôm thẻ chân trắng.</p>\n    <p>- Ngăn chặn tình trạng tôm trống ruột, trống bao tử (EHP).</p>\n    <p>- Cung cấp Vitamin và các chất cần thiết cho sự phát triển của tôm-cá.</p>\n    <p>- Tăng cường miễn dịch, giúp chống oxy hóa và hạn chế các bệnh do virus, vi\n      khuẩn gây ra.</p>\n    <p>- Chặn đứng hiện tượng teo gan, vàng gan, sưng gan, trắng gan, hoại tử gan.</p>",
      dosage:
        "  <p>- Sử dụng định kỳ (bổ sung) 3-4g/kg thức ăn.</p>\n    <p>- Khi tôm-cá giảm ăn, môi trường thay đổi, mới bị bệnh: tăng liều lượng gấp đôi.</p>",
      nameProduct: "MP HEPATICS",
    },
  },
  {
    id: 8,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang6-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang6-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "6.2",
      ingredient:
        "<p>- Sorbitol (min-max) 180.000-211.000 mg/p>\n    <p>- Vitamin E (min-max) 50.000-63.100 mg</p>\n    <p>- Vitamin C (min-max) 80.000-107.000 mg</p>\n    <p>- Methionine (min-max) 80.000-105.000 mg</p>\n    <p>- Dung môi (nước cất) vừa đủ 1000 ml</p>\n    <p>- Kháng sinh, Ethoxyquin không có</p>\n    <p>- Thành phần nguyên liệu: Sorbitol, Vitamin E, Vitamin C, Methionine</p>",
      uses: " <p>- Bổ sung các vitamin, acid amin và sorbitol vào khẩu phần ăn cho tôm làm tăng\n    khả năng hấp thụ thức ăn, giúp tôm tăng trọng nhanh.</p>\n  <p>- Tăng cường chức năng gan, tái tạo tế bào gan.</p>\n  <p>- Phòng hoại tử gan.</p>\n  <p>- Khử độc tố gan, bổ gan, giải độc gan, tăng cường chức năng gan tụy.</p>\n  <p>- Kích thích tôm ăn mạnh, chống còi.</p>\n  <p>- Khống chế các loại vi khuẩn, virus như vi bào tử, ký sinh trùng.</p>",
      dosage:
        "  <p>- Tăng sức đề kháng, khống chế các vi khuẩn, virus, ngừa bệnh gan tụy sau khi\n    thả tôm được 10 ngày 1 lit 3.000m³-5.000m³ nước.</p>\n  <p>- Tôm có hiện tương gan xấu (tôm có màng mủ, gan teo, sưng gan, hoại tử gan,\n    da xanh vỏ mềm giảm ăn) sử dụng 1 lít 3.000m³ nước. </p>\n  <p>- Kết hợp trộn cho ăn 3-5ml/kg thức ăn cho ăn liên tục cho tới khi khỏi bệnh.\n    Lưu ý: Hòa với 20 lít nước, tạt trực tiếp xuống ao nuôi vào buổi chiều mát hoặc\n    sáng sớm.</p>",
      nameProduct: "LIVER AQUA",
    },
  },
  {
    id: 9,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang7-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang7-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "7.1",
      ingredient:
        "<p>- Sorbitol (min-max) 180-211g/lit</p>\n    <p>- Vitamin E (min-max) 50-63.1g/lit</p>\n    <p>- Vitamin C (min-max) 80-107g/lit</p>\n    <p>- Methionine (min-max) 80-105g/lit</p>\n    <p>- Dung môi (nước cất) vừa đủ 1000 ml</p>\n    <p>- Chất cấm, kháng sinh, ethoxyquin không có</p>",
      uses: " <p>- Bổ sung các Vitamin, Acid amin và sorbitol vào khẩu phần ăn cho tôm làm tăng\n    khả năng hấp thụ thức ăn, giúp tôm tăng trọng nhanh.</p>\n  <p>- Tăng cường chức năng gan.</p>",
      dosage:
        "<p>- Dùng 2-3ml cho 1kg thức ăn. Ngày cho ăn một lần trong suốt thời gian nuôi.\n    </p>\n    <p>- Khi tôm chậm lớn, gan yếu, bị còi, để kích thích tôm ăn nhiều, dùng 5ml cho\n      1kg thức ăn.</p>",
      nameProduct: "NEW OGANIC",
    },
  },
  {
    id: 10,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang7-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang7-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "7.2",
      ingredient:
        "<p>- Lactobacillus acidophilus (min) 1x10<sup>8</sup> cfu</p>\n    <p>- Saccharomyces ceresiviae (min) 1x10<sup>8</sup> cfu</p>\n    <p>- Độ ẩm (max) 10%</p>\n    <p>- Chất đệm (Dextrose) 1kg</p>",
      uses: " <p>- Ức chế vi khuẩn gây bệnh, phòng và trị phân trắng hiệu quả.</p>\n    <p>- Cung cấp chất dinh dưỡng cần thiết cho sự sinh trưởng và phát triển của\n      tôm-cá, giúp tôm cá mau lớn. Tăng sức kháng bệnh, giảm hàm lượng đạm thừa\n      trong phân, không gây ô nhiễm môi trường nước.</p>\n    <p>- Chặn đứng hiện tượng xuất huyết đường ruột, trống ruột, sưng mủ ở đốt cuối\n      đường ruột.</p>\n    <p>- Là giải pháp số một về bệnh phân trắng-phân lỏng-phân đứt khúc. </p>",
      dosage:
        "  <p>- Đường ruột yếu, thời tiết thay đổi, môi trường không ổn định cho ăn 5-7g/kg\n    thức ăn.\n  </p>\n  <p>- Trộn sản phẩm với một lượng nước vừa đủ, phun đều lên bề mặt thức ăn.</p>",
      nameProduct: "MP ECOZYME",
    },
  },
  {
    id: 11,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang8-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang8-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "8.1",
      ingredient:
        "           <p>- Lypara 1.400 UI</p>\n    <p>- Amylaza 2.600 UI</p>\n    <p>- Proteaza 2.900 UI</p>\n    <p>- Lacto Bacillus Sprogenes 0,25x10<sup>8</sup> cfu</p>\n    <p>- Phụ gia vừa đủ</p>",
      uses: "<p>- Cung cấp các vi sinh vật có lợi giúp cân bằng hệ men tiêu hóa đường ruột. Gia\n    tăng khả năng chuyển hóa các chất dinh dưỡng cần thiết cho sự phát triển của\n    tôm.</p>\n  <P>Đặc biệt là cạnh tranh và ức chế các vi khuẩn có hại, phòng bệnh phân trắng\n    xuất hiện.</P>",
      dosage:
        " <p>- Trộn định kỳ 3ml/1kg thức ăn trong suốt vụ nuôi.</p>\n    <p>- Trong quá trình tôm bị nhiễm khuẩn đường ruột, trộn 5ml/1kg thức ăn, ngày 4\n      lần. Không trộn chung với các loại thuốc khác.</p>",
      nameProduct: "BIO ACMIN",
    },
  },
  {
    id: 12,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang8-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang8-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "8.2",
      ingredient:
        " <p>- Lactobacillus acidophilus (min) 1,8x107 cfu/ml</p>\n    <p>- Bacillus subtilis (min) 2,2x106 cfu/ml</p>\n    <p>- Dung môi (nước cất) vừa đủ 1.000ml</p>",
      uses: "  <p>- Bổ sung MP LACTO trong bữa ăn cho tôm-cá hàng ngày giúp tăng cường sức\n    đề kháng của tôm đối với hệ tiêu hóa bằng cách bổ sung các vi sinh vật có lợi,\n    ức chế vi sinh vật gây ra các bệnh đường ruột như Vibrio Parahaemolyticus và\n    Vibrio vunificus, từ đó tăng khả năng ức chế các hiện tượng về đường ruột như:\n    phân lỏng, đứt khúc, trống đường ruột, phân trắng....</p>\n  <p>- Nâng cao khả năng tiêu hóa, hấp thụ dưỡng chất của thủy vật nuôi.</p>\n  <p>- Cải thiện tăng trọng, tránh thất thoát thức ăn.</p>",
      dosage:
        "  <p>- Dùng 3-5ml trộn với 1kg thức ăn thường xuyên trong quá trình nuôi để ổn định\n    đường ruột.</p>\n  <p>- Trường hợp tôm-cá đang hồi phục khi gặp các hiện tượng xấu về đường ruột,\n    nên bổ sung 10-15ml MP LACTO/1kg thức ăn để bổ sung vi sinh vật có lợi vào\n    hệ tiêu hóa.</p>",
      nameProduct: "MP LACTO",
    },
  },
  {
    id: 15,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang10-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang10-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "10.1",
      ingredient:
        " <p>- Potassium Diformate 90%</p>\n    <p>- Chất đệm vừa đủ 1.000 g</p>",
      uses: " <p>- Sử dụng ACID OGANIC, hệ tiêu hóa của thủy vật nuôi như tôm, cá sẽ được bổ\n    sung một lượng muối của Acid Formic tạo điều kiện để vi sinh vật có lợi trong hệ\n    tiêu hóa phát triển tốt. Gây ra ức chế làm tiêu giảm các vi khuẩn gây bệnh, từ đó\n    nâng cao khả năng phòng các loại bệnh đường ruột.</p>\n  <P>- Cân bằng ổn định pH đường ruột.</P>\n  <p>- Bổ sung ACID OGANIC là một biện pháp quan trọng để tăng đề khả năng hấp\n    thụ thức ăn trên tôm, cá.</p>\n  <p>- Phòng các bệnh về xuất huyết đường ruột, đốm đỏ, lở loét (trên cá), cụt đuôi,\n    mòn vây.</p>\n  <p>Tăng khả năng phòng bệnh phân trắng trên tôm.</p>",
      dosage:
        "<p>- Sử dụng định kỳ 5g ACID OGANIC cho 1kg thức ăn trong các bữa hằng ngày\n    cho tôm, cá.</p>\n  <p>- Trường hợp tôm nhiễm khuẩn đường ruột ở mức độ cao, bổ sung từ 10-15g\n    ACID OGANIC cho kg thức ăn để kìm hãm và tiêu diệt vi khuẩn gây bệnh trong\n    đường ruột..</p>",
      nameProduct: "ACID OGANIC",
    },
  },
  {
    id: 16,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang10-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang10-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "10.2",
      ingredient:
        "    <p>- K (Dạng KCl) (min-max) 130-150 g</p>\n    <p>- Na (Dạng NaHCO3) (min-max) 50-70 g</p>\n    <p>- Mg (Dạng MgSO4 (min - max) 10-11 g</p>\n    <p>- Độ ẩm (max) 10%/p>\n    <p>- Cát sạn (max) 3%</p>\n    <p>- Chất mang (CaCO3) vừa đủ 1kg</p>",
      uses: "  <p>- Làm ổn định môi trường, giữ ấm cho cơ thể lúc nhiệt độ xuống thấp, dễ dàng\n    hấp thụ, cung cấp các khoáng chất cần thiết cho tôm trong quá trình lột xác.\n    Nhanh cứng vỏ, phòng vi khuẩn virus xâm nhập...</p>\n  <p>- Cân bằng hệ sinh thái trong ao nuôi, thuận lợi cho vi sinh vật có lợi phát triển,\n    tạo trùn chỉ, ốc gạo, tăng cường thức ăn tự nhiên cho tôm.</p>",
      dosage:
        "<p>- Lúc thời tiết thay đổi hay vào những chu kỳ lột xác đại trà dùng 10 kg cho\n    4.000-5.000m³.</p>\n  <p>- Tôm mềm vỏ, sau chu kỳ trị bệnh dùng 10kg cho 2.000m³.</p>\n  <p>- Hòa sản phẩm với 30L nước sạch, tạt đều khắp ao, mở quạt nước khi sử dụng.</p>",
      nameProduct: "CANXI SUPER",
    },
  },
  {
    id: 17,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang11-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang11-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "11.1",
      ingredient:
        " <p>- Vitamin B1 (min) 83.491 mg</p>\n    <p>- Vitamin D3 (min) 502.959 UI</p>\n    <p>- Dicalcium Phosphate (min-max) 60.000 - 73.192 mg</p>\n    <p>- CuSO4 (min-max) 35.000 - 43.056 mg</p>\n    <p>- NaCl (min-max) 2-2,80%</p>\n    <p>- Cát sạn (Khoáng không tan trong axit HCl 10%) (max) 0,1%</p>\n    <p>- Dung môi (nước cất) vừa đủ 1 lít</p>\n    <p>- Kháng sinh, Ethoxyquin không có</p>",
      uses: "   <p>- Cung cấp khoáng chất và các Acid Amin thiết yếu cho tôm, cá phát triển tốt,\n    bổ gan, bổ máu, chống còi</p>\n  <p>- Giúp tôm, cá ăn mạnh, tăng tỷ lệ sống, thúc đẩy tôm lột xác đồng loạt, nhanh\n    cứng vỏ.</p>\n  <p>Tránh hiện tượng cong thân, đục cơ, co giật…</p>",
      dosage:
        "     <p>- Bổ sung đầy đủ khoáng chất, và các chất dinh dưỡng ăn 3-5ml/kg thức ăn\n    ngày 1 lần.</p>\n  <p>- Cứng vỏ, chắc thịt, tránh hiện tượng cong thân đuc cơ 5-10ml/kg thức ăn.</p>\n  <p>- Tạt trực tiếp xuống ao 1 lít/2.000-3.000m³ giúp tôm nhanh cứng vỏ.</p>",
      nameProduct: "CANXI P",
    },
  },
  {
    id: 18,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang11-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang11-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "11.2",
      ingredient:
        "   <p>- SiO2 (min-max) 2-2.84%</p>\n    <p>- Dicalciphosphate (min-max) 180.000-220.671mg</p>\n    <p>- Magensium sulfate (min-max) 35.000-42.421mg</p>\n    <p>- KCl (min-max) 200.000-357.000mg</p>\n    <p>- Chất mang (CaCO3) vừa đủ 1kg</p>",
      uses: " <p>- CANXIUM bổ sung đầy đủ khoáng chất cần thiết, giúp tôm nhanh lột xác, cứng\n    vỏ.</p>\n  <p>- CANXIUM bổ sung đầy đủ khoáng chất cần thiết, giúp tôm nhanh lột xác, cứng\n    vỏ.</p>\n  <p>- Cân bằng hệ sinh thái trong ao nuôi, thuận lợi cho vi sinh vật có lợi phát triển,\n    tạo trùn chỉ, thức ăn tự nhiên cho tôm.</p>",
      dosage:
        " <p>- Sử dụng 10kg cho 5.000-7.000 m3, định kỳ 7-10 ngày một lần.</p>\n    <p>- Sử dụng 10kg cho 3.000-5.000 m3, giúp tôm cứng vỏ và kích thích tôm lột\n      xác</p>\n    <p>- Sử dụng 10kg cho 3.000-4.000 m3, giảm hiện tượng cong thân đục cơ.</p>\n    <p>Chú ý:</p>\n    <p>- Đối với hiện tượng cong thân, sử dụng lúc 12-13 giờ. Nên bổ sung thêm vào\n      khẩu phần ăn sản phẩm CANXI P để tăng hiệu quả của CANXIUM</p>",
      nameProduct: "CANXIUM",
    },
  },
  {
    id: 19,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang12-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang12-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "12.1",
      ingredient:
        " <p>- K (từ KCl) (min-max) 130.000-150.000mg</p>\n    <p>- Na (từ NaHCO3) (min-max) 50.000-70.000mg</p>\n    <p>- Mg (từ MgSO4) (min-max) 10.000-11.000mg</p>\n    <p>- KCl (min-max) 200.000-357.000mg</p>\n    <p>- Độ ẩm (max) 10%</p>\n    <p>- Cát sạn (max) 3%</p>\n    <p>- Chất mang (CaCO3) vừa đủ 1kg</p>\n    <p>- Chất cấm, kháng sinh, Ethoxyquin không có</p>",
      uses: "   <p>- PROMIX 10 là sản phẩm khoáng tạt cao cấp, bổ sung đầy đủ khoáng chất cần\n    thiết, giúp tôm nhanh lột xác cứng vỏ</p>\n  <p>- CANXIUM bổ sung đầy đủ khoáng chất cần thiết, giúp tôm nhanh lột xác, cứng\n    vỏ.</p>\n  <p>- Ngăn ngừa hội chứng cong thân - đục cơ trên tôm.</p>\n  <p>- Giúp cân bằng hệ sinh thái trong ao nuôi. Tạo trùn chỉ, thức ăn tự nhiên cho\n    tôm, tạo môi trường thuận lợi để vi sinh vật có lợi phát triển</p>",
      dosage:
        "   <p>- Dùng 10kg PROMIX 10 cho 5.000-7.000 m³, định kỳ 7-10 ngày một lần.</p>\n    <p>- Để giúp tôm cứng vỏ, kích thích lột xác, dùng 5kg PROMIX 10 cho\n      4.000-6.000 m³.</p>\n    <p>- Giúp ngăn ngừa hiện tượng cong thân-đục cơ, dùng 5kg PROMIX 10 cho\n      3.000-4.000 m³. Dùng lúc 12-13 giờ trưa.</p>\n    <p>- Hòa sản phẩm với nước sạch, tạt đều khắp ao, mở quạt nước khi sử dụng.</p>",
      nameProduct: "PROMIX 10",
    },
  },
  {
    id: 20,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang12-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang12-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "12.2",
      ingredient:
        " <p>- Natri bicarbonate (min-max) 90-99%</p>\n    <p>- Độ ẩm (max) 10%</p>\n    <p>- Cát sạn (max) 3%</p>\n    <p>- Chất cấm, kháng sinh, Ethoxyquin không có</p>",
      uses: "  <p>- SODAMIX ONE tăng kiềm nhanh, giúp tôm nhanh cứng vỏ, kháng bệnh tốt.</p>\n    <p>- Ổn định môi trường vào mùa mưa, cân bằng hệ sinh thái trong ao nuôi.</p>\n    <p>- Tạo môi trường thuận lợi cho vi sinh vật có lợi phát triển.</p>",
      dosage:
        " <p>- Dùng 10kg SODAMIX ONE cho 5.000-7.000 m3. Định kỳ 7-10 ngày một lần.</p>\n    <p>- Dùng 10kg SODAMIX ONE cho 4.000-5.000 m3. Giúp tôm cứng vỏ và kích\n      thích tôm lột xác, ổn định độ kiềm.</p>\n    <p>- Dùng 10kg SODAMIX ONE cho 3.000-4.000 m3 khi độ kiềm thấp.</p>\n    <p>- Hòa sản phẩm với nước sạch, tạt đều khắp ao, mở quạt nước khi sử dụng.</p>",
      nameProduct: "SODAMIX ONE",
    },
  },
  {
    id: 21,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang13-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang13-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "13.1",
      ingredient:
        "   <p>- EDTA 2Na (min) 10%</p>\n    <p>- Chất mang (bột talc) vừa đủ 100%</p>\n    <p>- Cát sạn (max) 2%</p>\n    <p>- Chất cấm, kháng sinh, Ethoxyquin không có</p>",
      uses: " <p>- Khử tất cả các độc tố kim loại trong ao, phèn. Trung hòa các loại hóa chất trong\n    ao nuôi.</p>\n  <p>- Hấp thụ các loại khí độc như NH3, H2S, NO2… Đặc biệt rất hiệu quả vào mùa\n    mưa khi lượng phù sa, phèn trên bờ ao trôi xuống.</p>\n  <p>- Giúp môi trường ao nuôi luôn ổn định.</p>",
      dosage:
        " <p>- Sử dụng 1kg EDTA cho 2.000-3.000m³. Định kỳ 7-10 ngày/lần.</p>\n    <p>- Khi môi trường biến động, nhiều phèn và khí độc trong ao, sử dụng 1kg EDTA\n      cho 1.000-2.000m³.</p>",
      nameProduct: "EDTA VM",
    },
  },
  {
    id: 22,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang13-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang13-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "13.2",
      ingredient:
        "<p>- Vitamin C (min-max) 5.000-10.000mg</p>\n    <p>- Acid Citric (min-max) 50.000-100.000mg</p>\n    <p>- Chất mang vừa đủ 100%</p>\n    <p>- Cát sạn (max) 2%</p>\n    <p>- Chất cấm, kháng sinh, Ethoxyquin không có</p>",
      uses: "<p>- Giảm Stress cho tôm, cá khi thời tiết xấu và thay đổi đột ngột.</p>\n    <p>- Giúp tôm mau lột xác hồi phục sức khỏe nhanh sau khi lột xác.</p>\n    <p>- Cải thiện môi trường ao nuôi nhanh chóng, giảm hệ số chuyển đổi thức ăn.</p>",
      dosage:
        " <p>- Chuẩn bị thả tôm, cá tạt 1kg cho 1.000-2.000m³. Giúp đàn tôm, cá đạt tỷ lệ\n    sống cao.</p>\n  <p>- Tạt 1 kg cho 2.000m³, khi trời nắng gắt hặc mưa nhiều.</p>\n  <p>- Khi tôm nổi đầu hoặc có dấu hiệu giảm ăn tạt 1kg cho 1.000 m³.</p>\n  <p>Lưu ý: Dùng cho ao nuôi trước khi chuẩn bị thả tôm và khi thời tiết thay đổi rất\n    hiệu quả.</p>",
      nameProduct: "C TẠT",
    },
  },
  {
    id: 23,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang14-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang14-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "14.1",
      ingredient:
        "<p>- Sodium Percardbonate (min) 10%</p>\n    <p>- Chất mang vừa đủ 100%</p>\n    <p>- Cát sạn (max) 2%</p>\n    <p>- Chất cấm, kháng sinh, Ethoxyquin không có</p>",
      uses: "<p>- Cung cấp một lượng Oxy cực lớn trong ao nuôi tôm. Kịp thời đưa Oxy xuống\n    phân bố khắp ao tạo Oxy ngăn ngừa tôm nổi đầu</p>\n  <p>- Đặc biệt vào những lúc thời tiết khắc nghiệt, khí độc nhiều. Tôm lột xác, nổi đầu\n    do thiếu Oxy, dùng OXY GEN tạt xuống cấp cứu tôm rất hiệu quả.\n  </p>",
      dosage:
        "  <p>- Lượng oxy thấp (D.O = 2-3ppm): Dùng 0,5kg cho 1.000-2.000m³.</p>\n    <p>- Lượng oxy (D.O&#60;2ppm): Dùng 1kg cho 1.000m³.</p>\n    <p>- Cấp cứu tôm nổi đầu: Dùng 1,5kg cho 1.000m³.</p>",
      nameProduct: "OXY GEN",
    },
  },
  {
    id: 24,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang14-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang14-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "14.2",
      ingredient:
        "  <p>- Yucca Schidigera (min) 30%</p>\n    <p>- Vitamin C 8%</p>\n    <p>- Ascorbic Acid 10%</p>\n    <p>- Chất mang vừa đủ 100% </p>",
      uses: "<p>- Cấp cứu tôm nổi đầu, chống sốc khi môi trường biến động.</p>\n    <p>- Hấp thụ khí độc, tăng cường oxy cho ao nuôi.</p>\n    <p>- Giúp tôm tăng sức đề kháng, tăng tỷ lệ sống, giảm thiểu dịch bệnh, phục hồi\n      sức khỏe nhanh sau khi lột xác.</p>",
      dosage:
        "     <p>- Trước khi thả 30 phút sử dụng: 3kg cho 5.000m³ nước.</p>\n    <p>- Sử dụng khi hàm lượng khí độc cao: 3kg cho 3.000m³ nước.</p>\n    <p>- Cấp cứu tôm nổi đầu: 3kg cho 3.000m³ nước.</p>\n    <p>- Sử dụng định kỳ 15 ngày một lần: 1kg cho 3.000m³ nước.</p>",
      nameProduct: "YUCCA C",
    },
  },
  {
    id: 25,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang15-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang15-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "15.1",
      ingredient:
        "<p>- Saponin (Dịch cây yucca Schidigera) (min-max) 100.000-108.247mg</p>\n    <p>- Dung môi (nước cất) vừa đủ 1.000ml</p>\n    <p>- Chất cấm, kháng sinh, ethoxyquin không có</p>",
      uses: " <p>- Chuyên gia hấp thụ các loại khí độc trong ao nuôi như NH3, H2S, NO2. Ổn định\n    môi trường, cấp cứu tôm, cá nổi đầu.</p>",
      dosage:
        "<p>- Sử dụng định kỳ: 1.000ml/3.000-5.000m³, 15 ngày/lần.</p>\n    <p>- Cấp cứu tôm nổi đầu: 1.000ml/3.000m³.</p>",
      nameProduct: "YUCCA US",
    },
  },
  {
    id: 26,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang15-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang15-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "15.2",
      ingredient:
        " <p>- SiO2 (min-max) 65-90%</p>\n    <p>- Al2O3 (min-max) 0,02-0,1%</p>\n    <p>- Ca (CaO) (min-max) 0,1-0,5%</p>\n    <p>- MgO (min-max) 0,03-0,1%</p>\n    <p>- Độ ẩm (max) 10%</p>",
      uses: "<p>- Hấp thụ các loại khí độc tích tụ ở đáy ao như NH3, NO2, H2S, CH4…</p>\n    <p>- Giảm tỷ trọng kim loại nặng, độc hại trong ao nuôi.</p>\n    <p>- Phân hủy xác tảo, các chất lơ lửng trong ao nuôi, giúp cân bằng môi trường\n      nước, ổn định độ pH.</p>\n    <p>Cải thiện chất lượng nước ao, ổn định màu nước, tăng lượng oxy hòa tan trong\n      nước.</p>",
      dosage:
        "<p>- Đối với ao nuôi tôm, trong 2 tháng đầu dùng 1kg/1000m³, định kỳ 10-15\n    ngày/lần.</p>\n  <p>- Sử dụng cho 2-3 tháng cuối dùng 2-3kg/ 1000m³, định kỳ 10-15 ngày/lần.</p>\n  <p>- Giảm hàm lượng Amonia trong ao dùng 3-5kg/1000m³.Giảm hàm lượng Amonia trong ao dùng 3-5kg/1000m³.\n  </p>",
      nameProduct: "ZEO VS",
    },
  },
  {
    id: 27,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang16-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang16-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "16.1",
      ingredient:
        " <p>- Benkalkonium chloride (min) 500.000mg</p>\n    <p>- Dung môi (nước cất) vừa đủ 1.000ml</p>",
      uses: "<p>- Diệt các loại vi khuẩn, nguyên sinh động vật, trong nước bể, ao nuôi.</p>\n    <p>- Giảm hiện tượng đứt râu, mòn đuôi, đen mang, sưng mang, hồng mang…</p>\n    <p>- Diệt các loại tảo độc, tảo lam, tảo đỏ, tảo phát sáng…</p>\n    <p>- Kích thích tôm lột xác đồng loạt.</p>\n    <p>- Sát trùng dụng cụ nuôi trồng thủy sản.</p>",
      dosage:
        "  <p>- Giảm tảo trong ao, làm sạch váng nhớt sử dụng BKC 1 lít dùng cho 3.000 m3</p>\n    <p>- Diệt khuẩn khi đang nuôi: dùng BKC 1 lít dùng cho 2.000 m3</p>\n    <p>- Định kỳ: dùng BKC 1 lít dùng cho 3.000-5.000 m3</p>\n    <p>- Nên sử dụng lúc trời nắng, sục khí trong quá trình sử dụng.</p>\n    <p>- Pha loãng sản phẩm với nước, tạt đều xuống ao rồi mở máy quạt nước cho sản\n      phẩm phát tán đều xuống ao.</p>\n    <p>Chú ý: Sản phẩm có tác dụng trong 36h - 48h, sau thời gian này mới sử dụng\n      sản phẩm men vi sinh.</p>",
      nameProduct: "BKC",
    },
  },
  {
    id: 28,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang16-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang16-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "16.2",
      ingredient:
        " <p>- PVP Iodine (min) 55.000 mg.</p>\n    <p>- Dung môi (nước cất) vừa đủ 1000ml</p>",
      uses: "  <p>- IODINE có tác dụng sát trùng phổ rộng diệt khuẩn cực mạnh, tiêu diệt vi khuẩn\n    gây hại, nấm nguyên sinh động vật, thường xuất hiện trong nước ao nuôi gây hại\n    cho tôm, cá đặc biệt không gây biến động môi trường.</p>",
      dosage:
        "                <p>- Diệt khuẩn ban đầu, xử lý ao lắng cấp nước trong quá trình nuôi: dùng 1 lit IODINE cho 2000-3000 m3\n    nước</p>\n  <p>- Diệt khuẩn ao nuôi: dùng 1 lít IODINE cho 6000-8000 m3 định kỳ 7-10 ngày một lần</p>\n  <p>- Trong trường hợp ao nuôi trong vùng dịch chúng ta cần dùng 1 lít IODINE cho 3000-5000 m3 nước</p>\n  <p>- Pha loãng sản phẩm với nước, tạt đều xuống ao. Sử dụng vào buổi tốim.</p>\n  <p>Chú ý: Sản phẩm có tác dụng trong 36-48h, sau thời gian này mới sử dụng sản phẩm men vi sinh</p>",
      nameProduct: "IODINE",
    },
  },
  {
    id: 29,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang17-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang17-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "17.1",
      ingredient:
        "  <p>- Glutaraldehyde (min) 200.000 mg</p>\n    <p>- Dung môi (nước cất) vừa đủ 1.000 ml</p>",
      uses: " <p>- WINV8 giúp ngăn ngừa hội chứng chết sớm ở tôm giai đoạn 14 đến 60 ngày\n    tuổi.</p>\n  <p>- Hiệu quả cao với hiện tượng hoại tử gan tụy, sưng gan, vàng gan, bộng nước ở\n    gan, teo gan.</p>",
      dosage:
        "  <p>- Tôm nhiễm khuẩn gan: Dùng 1 lít WINV8 cho 3.000-4.000 m³ nước, liên tục\n    trong 2 ngày một lần</p>\n  <p>- Diệt khuẩn khi đang nuôi: Dùng 1 lít WINV8 cho 4.000-5.000 m³ nước, định\n    kỳ 7-10 ngày một lần.</p>\n  <p>Chú ý: </p>\n  <p>Pha loãng với nước ao nuôi và tạt đều khắp ao.</p>\n  <p>Chạy quạt khi sử dụng thuốc.</p>\n  <p>Thời gian sử dụng: Sáng sớm hoặc chiều mát.</p>\n  <p>Sản phẩm có tác dụng trong 36h - 48h, sau thời gian này mới sử dụng sản\n    phẩm men vi sinh.</p>",
      nameProduct: "WNV8",
    },
  },
  {
    id: 30,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang17-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang17-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "17.2",
      ingredient:
        "   <p>- Postassium monopersulfate 50%</p>\n    <p>- Organic acid 5%</p>\n    <p>- Sodium hexameta phosphate 25%</p>\n    <p>- Sodium dodecyl benzene sulphonate 10%</p>\n    <p>- Dung môi (nước cất) vừa đủ 1000ml</p>\n    <p>- Kháng sinh, Ethoxyquin không có</p>\n    <p>- Thành phần nguyên liệu: Sorbitol, Vitamin E, Vitamin C, Methionine.</p>",
      uses: "    <p>- Xử lý và sát trùng nước trong ao nuôi tôm cá, ức chế vi sinh vật gây bệnh.</p>\n    <p>- Tiêu diệt virus, vi khuẩn, nấm, nguyên sinh động vật gây bệnh trên tôm, cá.</p>\n    <p>- Trị bệnh đốm đen, mòn râu, cụt đuôi, đen mang…</p>\n    <p>- Phòng bệnh đốm trắng trong vùng dịch.</p>",
      dosage:
        "  <p>- Xử lý và sát trùng nước trong ao nuôi tôm cá, ức chế vi sinh vật gây bệnh.</p>\n    <p>- Tiêu diệt virus, vi khuẩn, nấm, nguyên sinh động vật gây bệnh trên tôm, cá.</p>\n    <p>- Trị bệnh đốm đen, mòn râu, cụt đuôi, đen mang…</p>\n    <p>- Phòng bệnh đốm trắng trong vùng dịch.</p>",
      nameProduct: "WIN MAX",
    },
  },
  {
    id: 31,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang18-anh1.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang18-anh1.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "18.1",
      ingredient:
        "<p>- Na (Sodium chloride) (min-max) 200.000-900.000 mg</p>\n    <p>- Dung môi (nước cất) vừa đủ 1lít</p>",
      uses: "<p>- Giúp loại bỏ vi khuẩn có hại trong môi trường ao nuôi.</p>\n    <p>- Xử lý tôm đóng rong, khói đèn, mòn phụ bộ.</p>",
      dosage:
        " <p>- Xử lý ban đầu để thả giống: 1 lít/4.000-5.000 m³</p>\n    <p>- Định kỳ: 1 lít/6.000-8.000 m³</p>\n    <p>- Hỗ trợ diệt khuẩn làm sạch ao nuôi khi đang thả tôm, cá: 1 lít/ 3.000-4.000\n      m³.</p>\n    <p>Chú ý: Sản phẩm có tác dụng trong 36h - 48h, sau thời gian này mới sử dụng\n      sản phẩm men vi sinh.</p>",
      nameProduct: "WIN KONG",
    },
  },
  {
    id: 32,
    srcImgRemoveBg: {
      src: "/images/product/change-bg/Trang18-anh2.png",
      width: 138,
      height: 138,
    },
    srcImg: {
      src: "/images/product/sanpham/Trang18-anh2.jpg",
      width: 138,
      height: 138,
    },
    data: {
      id: "18.2",
      ingredient:
        "     <p>- K (min-max) 15.000-50.000mg</p>\n    <p>- Na (min-max) 250.000-360.000mg</p>\n    <p>- Độ ẩm (max) 3%</p>\n    <p>- Chất mang (bột talc) vừa đủ 1kg</p>",
      uses: " <p>- Xử lý và sát trùng nước trong ao nuôi tôm cá, ức chế vi sinh vật gây bệnh.</p>\n    <p>- Trị bệnh lở loét, đốm đỏ, lồi mắt, tuột nhớt, xuất huyết hậu môn...</p>\n    <p>- Khử kim loại nặng và một số khí độc trong ao.</p>\n    <p>- Kiểm soát sự phát triển của tảo, an toàn khi sử dụng, thân thiện với môi trường.</p>",
      dosage:
        "    <p>- Xử lý ao trước khi thả giống: 1kg/3.000m³ nước.</p>\n    <p>- Dùng định kỳ 1kg/10.000m³ nước, 10 ngày một lần</p>\n    <p>- Trị bệnh dùng 1kg/4.000-5.000m³ nước.</p>\n    <p>- Hòa VIRUS STOP với 20 lít nước rồi tạt đều khắp ao.</p>",
      nameProduct: "VIRUS STOP",
    },
  },
];
