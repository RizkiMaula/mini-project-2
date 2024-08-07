import Label from '../Elements/Label';
import Input from '../Elements/Input';

const InputText = (props) => {
  const { label = 'Login', textType, textPlaceholder, textSize, event } = props;
  return (
    <div className="flex items-center border-red-700 border-3">
      {/* <Label
        textSize={textSize}
        text={label}
      /> */}
      <Input
        event={event}
        type={textType}
        placeholder={textPlaceholder}
        // style={`w-full p-1 rounded`}
      />
    </div>
  );
};

export default InputText;
