interface props {
  className?: string;
  title?: string;
  text?: string;
}
const Heading = ({ title, className, text }: props) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-12`}>
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className=" body-2 mt-4 text-n-4 ">{text}</p>}
    </div>
  );
};

export default Heading;
