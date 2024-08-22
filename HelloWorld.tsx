import * as React from 'react';
import { TextField, Text, Icon, IIconStyles, IStackStyles, IStackTokens, Stack, FontWeights, IconButton } from '@fluentui/react';
import debounce from 'lodash/debounce';


const richErrorIconStyles: Partial<IIconStyles> = { root: { color: 'red' } };
const richErrorStackStyles: Partial<IStackStyles> = { root: { height: 24 } };
const richErrorStackTokens: IStackTokens = { childrenGap: 8 };

export interface IHelloWorldProps {
  DefaultExpanded: boolean;
  Textstring:string;
  onChange: (newValue: string) => void;
  required:boolean;
  label:string;
  Description:string;
  isDisable:boolean;
  ControlHeight:number;
  autoAdjustHeight:boolean;
}

interface IHelloWorldState {
  Expanded: boolean;
  Textstring:string;
}

export class HelloWorld extends React.Component<IHelloWorldProps,IHelloWorldState> {
  
  constructor(props: IHelloWorldProps) {
    super(props);
    this.state = {
      Expanded: props.DefaultExpanded,
      Textstring:this.props.Textstring
    };
  }

  private onToggle = () => {
    this.setState((prevState) => ({ Expanded: !prevState.Expanded }));
  }

  private getRichErrorMessage = (value: string) => {
    return value.length < 3 ? (
      ''
    ) : (
      <Stack styles={richErrorStackStyles} verticalAlign="center" horizontal tokens={richErrorStackTokens}>
        <Icon iconName="Error" styles={richErrorIconStyles} />
        <Text variant="smallPlus" style={ { color: 'red',fontWeight: FontWeights.semibold } }>Input value length must be less than 3. Actual length is {value.length}.</Text>
      </Stack>
    );
  };

   // Debounced function to handle changes
  private debouncedOnChange = debounce((newValue: string) => {
    this.props.onChange(newValue);
  }, 300); // Adjust delay as needed


  private onChangeEvent = (newStr:string) => {
    this.setState((prevState) => ({ Textstring: newStr }));
    this.debouncedOnChange(newStr!);
  }
  public render(): React.ReactNode {
    const { Expanded } = this.state;

    const dynamicDivStyles: React.CSSProperties = {
      maxHeight: !Expanded ? '30px' : '',
      overflowY: this.props.autoAdjustHeight ? 'hidden' : Expanded ? 'hidden' : 'hidden',
      width: '100%',
      overflowX: "hidden",
      transition: 'max-height 0.3s ease, overflow 0.3s ease'
    };
    const dynamicTextFieldStyles : React.CSSProperties = {
      overflowY: this.props.autoAdjustHeight ? 'hidden' : Expanded ? 'scroll' : 'hidden',
      width: '100%',

      fontStyle:'normal',      
    fontVariant: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
      backgroundColor:'#f5f5f5'
    };

    return (
        <Stack horizontal verticalAlign="start" styles={{ root: { width: '100%' , backgroundColor:'#f5f5f5'} }}>
        
        <IconButton
          iconProps={{ iconName: Expanded ? 'ChevronUp' : 'ChevronDown' }}
          title={Expanded ? 'Collapse' : 'Expand'}
          onClick={this.onToggle}
          ariaLabel={Expanded ? 'Collapse' : 'Expand'}
        />
        {true && (
          <div style={dynamicDivStyles}>
            <TextField
              style={dynamicTextFieldStyles}
              multiline // This enables dynamic height               
              resizable={false}              
              underlined={true}
              borderless={false} 
              onChange={(event, newValue) => {
               //this.debouncedOnChange(newValue!);
               this.onChangeEvent(newValue!);
             }}

              rows={this.props.ControlHeight} // Minimum number of rows
              label={this.props.label}              
              autoAdjustHeight={this.props.autoAdjustHeight}
              placeholder={this.props.Description}
              //value={this.props.Textstring}
              value={this.state.Textstring}
              required={this.props.required}
              disabled={this.props.isDisable}
              //onGetErrorMessage={this.getRichErrorMessage}              
            />
          </div>
        )}

        </Stack>
    );
  }
}
