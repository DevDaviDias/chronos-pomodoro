import Styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export default function DefaultInput({
  id,
  type,
  labelText,
}: DefaultInputProps) {
  return (
    <>
     <label htmlFor={id}>{labelText}</label>
    
      <input className={Styles.input} type={type} id={id} />
    </>
  );
}
