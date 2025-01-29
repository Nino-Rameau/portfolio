export const CardRV = ({
  titleRecto,
  image,
  descriptionImage,
  date,
  titreVerso,
  descriptionVerso,
  textLien,
  lien,
}) => {
  return (
    <div className="group relative h-80 w-60 [perspective:1000px] m-4">
      <div
        className="absolute duration-1000 w-full h-full 
      [transform-style:preserve-3d] 
      group-hover:[transform:rotatey(180deg)]"
      >
        <div
          className="absolute 
        w-full h-full 
        rounded-xl 
        bg-gradient-to-r from-blue-600 to-indigo-700 text-white 
        [backface-visibility:hidden]"
        >
          <h2 className="text-center text-2xl mt-3">{titleRecto}</h2>
          <img
            src={image}
            alt={descriptionImage}
            className="w-1/2 mx-auto my-8"
          />
          <p className="text-center">{date}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-10 absolute bottom-4 right-5"
          >
            <path
              fill="currentColor"
              d="M3 12q0-3.75 2.625-6.375T12 3V2q0-.3.275-.45t.525.05l3.125 2.35q.4.3.4.8t-.4.8L12.8 7.9q-.25.2-.525.05T12 7.5v-1q-2.275 0-3.888 1.613T6.5 12q0 .825.238 1.588T7.4 15q.275.4.225.863T7.2 16.6l-.85.625q-.45.35-1 .275t-.875-.55q-.725-1.075-1.1-2.325T3 12m9 9v1q0 .3-.275.45t-.525-.05l-3.125-2.35q-.4-.3-.4-.8t.4-.8L11.2 16.1q.25-.2.525-.05t.275.45v1q2.275 0 3.888-1.613T17.5 12q0-.825-.238-1.588T16.6 9q-.275-.4-.225-.862T16.8 7.4l.85-.625q.45-.35 1-.263t.875.538q.7 1.075 1.088 2.325T21 12q0 3.75-2.625 6.375T12 21"
            />
          </svg>
        </div>

        <div
          className="absolute 
          w-full h-full 
          rounded-xl 
          bg-gradient-to-r from-blue-600 to-indigo-700  text-white
          p-6 [transform:rotatey(180deg)] [backface-visibility:hidden]"
        >
          <h3 className="text-center">{titreVerso}</h3>
          <ul>
            {descriptionVerso.map((text, index) => (
              <li key={index} className="list-disc ml-4 mt-3">
                {text}
              </li>
            ))}
          </ul>
          <a href={lien} className="underline block text-center mt-3">
            {textLien}
          </a>
        </div>
      </div>
    </div>
  );
};
