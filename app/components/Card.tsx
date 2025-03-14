import Image from "next/image";

interface CardProps {
  idx: number;
  color?: string;
  title: string;
  collection?: string;
}

const Card = ({ idx, color, title, collection = "indie pop" }: CardProps) => {
  return (
    <div
      className={`card relative w-[25vw] aspect-[0.75] border-[0.5vw] border-current rounded-[2vw] overflow-hidden object-cover uppercase`}
      style={{ color: color }}
    >
      <Image
        src={`/assets/medias/${idx}.jpg`}
        alt=""
        width={100}
        height={100}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="card-content flex flex-col justify-between h-full">
        <p className="flex justify-between px-[0.5em] py-[1em]">
          <span>Collection</span> <span>{collection}</span>
        </p>
        <div className="flex flex-col justify-center items-center">
          <span className="from border-[0.2em] border-current rounded-[100%] px-[.28em] py-[.3em]">
            From
          </span>
          <h2 className="font-extrabold text-[4.5vw] leading-[0.8] text-wrap text-center px-[0.2em] py-[0.12em]">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Card;
