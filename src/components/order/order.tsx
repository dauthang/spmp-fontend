const Order = () => {
  return (
    <div className="flex w-full px-[20px] md:p-[30px] py-[40px] rounded border border-gray-300 bg-white">
      <div className="feature-block-wrapper w-full grid grid-cols-1 gap-x-[30px] gap-y-[40px] md:grid-cols-2 xl:grid-cols-4 xxl:gap-[30px]">
        <div className="feature-block flex w-full items-start flex-row feature-block">
          <span className="flex items-center justify-center w-[70px] h-[70px] rounded-full mr-[20px] flex-shrink-0 text-[24px] font-semibold bg-[#feeec8]">
            1
          </span>
          <div className="flex flex-col items-start">
            <h3 className="w-full text-[16px] font-semibold text-gray-900 mt-0 mb-2">
              Đơn đặt hàng của bạn
            </h3>
            <p className="w-full leading-6 text-[12px]">
              Thêm sản phẩm vào giỏ hàng của bạn, nhập thông tin của bạn và xác
              nhận.
            </p>
          </div>
        </div>
        <div className="feature-block flex w-full items-start flex-row feature-block">
          <span className="flex items-center justify-center w-[70px] h-[70px] rounded-full mr-[20px]  flex-shrink-0 text-[24px] font-semibold bg-[#ceeffe]">
            2
          </span>
          <div className="flex flex-col items-start">
            <h3 className="w-full text-[16px] font-semibold text-gray-900 mt-0 mb-2">
              Chọn đơn đặt hàng của bạn
            </h3>
            <p className="w-full leading-6 text-[12px]">
              Đơn đặt hàng của bạn đang được chọn và bây giờ sẽ được chuyển tiếp
              để đóng gói.
            </p>
          </div>
        </div>
        <div className="feature-block flex w-full items-start flex-row feature-block">
          <span className="flex items-center justify-center w-[70px] h-[70px] rounded-full mr-[20px] flex-shrink-0 text-[24px] font-semibold bg-[#d4f8c4]">
            3
          </span>
          <div className="flex flex-col items-start">
            <h3 className="w-full text-[16px] font-semibold text-gray-900 mt-0 mb-2">
              Đóng gói đơn đặt hàng của bạn
            </h3>
            <p className="w-full leading-6 text-[12px]">
              Chúng tôi đang đóng gói đơn đặt hàng của bạn và sẽ sớm được giao.
            </p>
          </div>
        </div>
        <div className="feature-block flex w-full items-start flex-row feature-block">
          <span className="flex items-center justify-center w-[70px] h-[70px] rounded-full mr-[20px]  flex-shrink-0 text-[24px] font-semibold bg-[#d8dafe]">
            4
          </span>
          <div className="flex flex-col items-start">
            <h3 className="w-full text-[16px] font-semibold text-gray-900 mt-0 mb-2">
              Giao
            </h3>
            <p className="w-full leading-6 text-[12px]">
              Đơn đặt hàng của bạn đã được chuẩn bị và sẵn sàng để giao hàng. Nó
              sẽ được giao sớm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
