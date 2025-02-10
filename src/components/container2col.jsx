export const Container = ({ para1, para2, img, altimg, direction }) => {
  return (
    <div
      className=" lg:flex m-auto items-center bg-bleu_fonce rounded-xl mb-10"
      style={{ flexDirection: direction }}
    >
      <div
        className="font-texte text-white text-s  p-10 
        lg:max-w-[55%]"
      >
        <p>{para1}</p>
        <p className="pt-6">{para2}</p>
      </div>
      <div className="">
        <img src={img} alt={altimg} className="flex m-auto pb-4 max-w-[95%]" />
      </div>
    </div>
  );
};
