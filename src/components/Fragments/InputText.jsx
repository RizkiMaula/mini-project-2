import Label from '../Elements/Label';
import Input from '../Elements/Input';

const InputText = (props) => {
  const { label = 'Login', textType, textPlaceholder } = props;
  return (
    <div className="flex items-center border-red-700 border-3">
      <Label text={label} />
      <Input
        type={textType}
        placeholder={textPlaceholder}
      />
    </div>
  );
};

export default InputText;
