import Image from "next/image";

const Header = () => {
  return (
    <div className="header flex items-center border-b border-gray-500/30 p-7">
      <div className="col1 flex flex-1 items-center gap-3">
        <Image
          src="/assets/medias/logo.svg"
          width={100}
          height={100}
          alt="Logo"
        />
        <p className="text-sm leading-none">
          Sound <br /> Track <br /> Record
        </p>
      </div>
      <p className="col2 flex-1 text-center text-sm">
        Hover over the menu items <br />
        The movement depends on <br />
        the position of your mouse
      </p>
      <p className="col3 flex-1 text-right text-sm">
        Getdown services <br />
        Ep setlist <br />
        Greatest hits
      </p>
    </div>
  );
};

export default Header;
