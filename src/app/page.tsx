import BackgroundClassic from "@/components/background-classic/background-classic";
import ContactContent from "@/components/contact-content/contact-content";

export default function Page() {
  return (
    <div>
      {" "}
      <BackgroundClassic />
      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 mb-8 text-xl">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 ">
          Lời giới thiệu về công ty
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Lời đầu tiên công ty TNHH ĐẦU TƯ VÀ PHÁT TRIỂN MINH PHÚ xin gửi tới
          quý khách lời chào trân trọng!
        </p>
        <div className="separator separator-danger">✻</div>
        <p className="text-justify">
          Trải qua 12 năm nghiên cứu, xây dựng và phát triển, cho đến nay chúng
          tôi đã và đang gửi đến bà con nông dân những sản phẩm `&quot;`Chế phẩm
          sinh học, khoáng chất, dinh dưỡng sản phẩm cải tạo môi trường sử dụng
          trong ngành nuôi trồng thủy sản`&quot;` vượt trội về chất lượng.
        </p>
        <p className="text-justify">
          Các sản phẩm đã khẳng định được thế mạnh và chất lượng trên thị
          trường. Đến với chúng tôi, quý khách hàng sẽ luôn hài lòng bởi các lợi
          thế sau từ công ty chúng tôi.
        </p>
        <p className="text-justify">
          - Có nguồn nguyên liệu được nhập khẩu trực tiếp từ nước ngoài.
        </p>
        <p className="text-justify">- Các sản phẩm uy tín và chất lượng cao.</p>
        <p className="text-justify">
          - Sản xuất và bảo quản trong điều kiện đạt tiêu chuẩn.
        </p>
        <p className="text-justify">
          - Có đội ngũ nhân viên là những kỹ sư giàu kinh nghiệm, được đào tạo
          bài bản trong ngành nuôi thủy sản, nhiệt tình và giàu kinh nghiệm.
        </p>
        <p className="text-justify">
          - Có chính sách đãi ngộ tốt nhất đối với khách hàng.
        </p>
        <p className="text-justify">
          Với phương châm `&quot;`Sự hài lòng của quý khách là sự tồn tại của
          chúng tôi`&quot;`, công ty Minh Phú mong muốn sẽ luôn được đồng hành
          gắn bó trực tiếp với quý bà con, là thương hiệu tin cậy trong ngành
          nuôi trồng thủy sản Việt Nam. Để làm được điều đó, Minh Phú sẽ luôn
          không ngừng nghiên cứu chuyên sâu và thực nghiệm trên cơ sở khoa học,
          thật nhiều và nhiều hơn nữa, nhằm nâng cao chất lượng sản phẩm, giá cả
          hợp lý góp phần nâng cao hiệu quả và lợi nhuận cho bà con.
        </p>
        <p className="text-justify">
          Chúng tôi xin chân thành cảm ơn quý khách hàng đã, đang và sẽ sử dụng
          sản phẩm của Minh Phú trong thời gian tới. Kính chúc quý khách hàng
          sức khỏe và thịnh vượng.
        </p>
      </div>
      <ContactContent />
    </div>
  );
}
