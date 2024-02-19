interface RadioProps {
  text: string;
  name: string;
}

const InternalRadio = ({ text, name }: RadioProps) => {
  return (
    <div>
      <input type="radio" name={name} />
      {text}
    </div>
  );
};

export default InternalRadio;
