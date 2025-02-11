import { Texte } from "../components/texte";

export const Container = ({ para1, para2, img, altimg, direction }) => {
  return (
    <div
      className=" lg:flex  items-center bg-bleu_fonce rounded-xl m-10"
      style={{ flexDirection: direction }}
    >
      <div className="p-10 lg:max-w-[55%]">
        <Texte tag="p" variant="p" texte={para1} />
        <Texte tag="p" variant="p" texte={para2} className="pt-6" />
      </div>
      <div>
        <img src={img} alt={altimg} className="flex m-auto pb-4 max-w-[95%]" />
      </div>
    </div>
  );
};
