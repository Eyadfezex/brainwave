interface props {
  className?: string;
  title?: string;
}
const Heading = ({ title, className }: props) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-12`}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
