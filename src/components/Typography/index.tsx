type Props = {
  text?: string;
};

export default function Typography({ text = "" }: Props) {
  return <p>{text}</p>;
}
