import DivInput from "../../Styles/InputSearchComBotao";
import Button from "../Button/Index";
import searchIMG from "../../Assets/search.svg";

interface iProps {
  placeHolder: string;
}
const InputSearch = ({ placeHolder }: iProps) => {
  return (
    <DivInput className="divInput">
      <input placeholder={placeHolder} type="search" />
      <Button className="buttonSearch">
        <img src={searchIMG} alt="seachIMG" />
      </Button>
    </DivInput>
  );
};
export default InputSearch;
