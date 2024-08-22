import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { HelloWorld, IHelloWorldProps } from "./HelloWorld";
import * as React from "react";

export class CollapsibleTextControl implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private notifyOutputChanged: () => void;
    private _text:string;
    private _DefaultExpanded:boolean;
    private _required:boolean;
    private _label:string;
    private _Description:string;
    private _isDisable:boolean;
    private _ControlHeight:number;
    private _autoAdjustHeight:boolean;

    /**
     * Empty constructor.
     */
    constructor() { }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
        this._text = context.parameters.TextField.raw ?? "";
        this._autoAdjustHeight = context.parameters.autoAdjustHeight.raw;
        this._DefaultExpanded = context.parameters.DefaultExpanded.raw;
        this._ControlHeight=        context.parameters.Formfieldheight.raw  == null ? 0 
                            : context.parameters.Formfieldheight.raw < 0 ? 0 
                            : context.parameters.Formfieldheight.raw > 40 ? 40
                             : context.parameters.Formfieldheight.raw;

         /*** Attribute required level  * -1 - Unknown  * 0 - None  * 1 - SystemRequired  * 2 - ApplicationRequired  * 3 - Recommended */
        this._required =context.parameters.TextField.attributes?.RequiredLevel == 1 ? true : context.parameters.TextField.attributes?.RequiredLevel == 2 ? true : false;
        this._label = ""; //context.parameters.TextField.attributes?.DisplayName??"";
        this._Description = context.parameters.TextField.attributes?.Description??"";

         /** * Ime Mode   * 0 - Auto,  * 1 - Inactive, * 2 - Active,  * 3 - Disabled     */         
        this._isDisable = context.parameters.TextField.attributes?.ImeMode == 1 ? true : context.parameters.TextField.attributes?.ImeMode == 3 ? true : false;
        
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const props: IHelloWorldProps = {
            DefaultExpanded : this._DefaultExpanded,
            Textstring : this._text,
            onChange : this.onChange,
            required:this._required,
            label:this._label,
            Description:this._Description,
            isDisable : this._isDisable,
            ControlHeight: this._ControlHeight,
            autoAdjustHeight:this._autoAdjustHeight
        };
        return React.createElement(
            HelloWorld, props
        );
    }

    private onChange = (newValue: string) => {
        this._text = newValue;
        this.notifyOutputChanged();
    };

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return {
            TextField: this._text
        };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
