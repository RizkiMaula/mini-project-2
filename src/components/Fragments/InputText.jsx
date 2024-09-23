import Label from '../Elements/Label';
import Input from '../Elements/Input';

const InputText = (props) => {
  // eslint-disable-next-line react/prop-types
  const { label = 'Login', textType, textPlaceholder, textSize, event, style } = props;
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
        style={`w-full p-1 rounded ${style}`}
      />
    </div>
  );
};

export default InputText;
