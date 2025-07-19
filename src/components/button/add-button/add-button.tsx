import { Button, ButtonProps } from "primereact/button";

  
const AddButtonComponent: React.FC<ButtonProps> = (props) => {
    return (
      <Button 
        label={props.label ?? "Create"} 
        className={`p-button-sm p-button-raised my-3 ${props.className}`}
        {...props} 
      />
    );
  };
  
  
  export default AddButtonComponent;
  