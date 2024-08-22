/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    TextField: ComponentFramework.PropertyTypes.StringProperty;
    Formfieldheight: ComponentFramework.PropertyTypes.WholeNumberProperty;
    autoAdjustHeight: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    DefaultExpanded: ComponentFramework.PropertyTypes.TwoOptionsProperty;
}
export interface IOutputs {
    TextField?: string;
}
