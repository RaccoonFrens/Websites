import SVG from "react-inlinesvg";

function Icon({
  src,
  width,
  height,
  title,
}: {
  src: string;
  width: number;
  height: number;
  title: string;
}) {
  return (
    <SVG
      src={src}
      width={width}
      height={height}
      title={title}
      className="icon"
    />
  );
}

export default Icon;
