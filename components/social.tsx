import Icon from "./icon";

function Social({
  link,
  src,
  title,
  size,
}: {
  link: string;
  src: string;
  title: string;
  size: number;
}) {
  return (
    <a title={title} href={link} className="social-icon">
      <Icon src={src} width={size} height={size} title={title} />
    </a>
  );
}

export default Social;
