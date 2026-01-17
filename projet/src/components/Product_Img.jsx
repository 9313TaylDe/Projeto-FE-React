const Product_Img = ({ images, classname }) => {
  return (
    <div
      className={`flex w-[100%] rounded-t-xl p-1 h-fit items-center ${classname}`}
    >
      {images}
    </div>
  );
};

export default Product_Img;
