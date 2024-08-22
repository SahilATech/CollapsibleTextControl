# CollapsibleTextControl

**CollapsibleTextControl** is a flexible and user-friendly custom control designed for PowerApps Component Framework (PCF). This control simplifies the process of displaying large text fields in Dynamics 365 CRM by allowing users to expand or collapse the content dynamically. Managing large text inputs, especially in forms and dashboards, often requires careful consideration to avoid overwhelming the user interface. With **CollapsibleTextControl**, you can easily:

- Control the height of text fields
- Allow users to expand or collapse content based on their needs
- Automatically adjust the height to fit the available space

This control provides a dynamic and intuitive solution for handling large text fields, enhancing the user experience while maintaining a clean and organized UI.



https://github.com/user-attachments/assets/5094239e-5dbd-41fa-af60-38bfdc563167






[Managed Solution](https://github.com/SahilATech/CollapsibleTextControl/raw/ebcd61248dab9e4670222fea8d87ffecaed6bd5e/Solutions/Solutions_managed.zip)


## Features

- **Collapsible Content**: Users can expand or collapse the text field to view more or less content.
- **Height Configuration**: Set a default height for the text field, and allow it to expand as needed.
- **Automatic Height Adjustment**: Automatically use all available vertical space, making the control adaptable to various layouts.
- **React and Fluent UI Integration**: Built using React and Fluent UI, ensuring a modern and responsive design.

  
## Key Properties

- **`TextField`**: The bound property for synchronizing the text content with the control.
- **`Form field height (Rows)`**: Configures the height of the text field (in rows). The maximum height is 40 rows.
- **`Use all available vertical space`**: Enables automatic height adjustment to use all available vertical space.
- **`Default Expandable`**: Determines whether the text field is expanded by default on onload of the form.


![CollapsibleTextControl](https://github.com/SahilATech/CollapsibleTextControl/blob/ebcd61248dab9e4670222fea8d87ffecaed6bd5e/Images/CollapsibleTextControlProperties.png)


## Customization

**CollapsibleTextControl** can be customized using the following methods:

- **Form field height (Rows)**: Set a fixed height for the text field, with a maximum of 40 rows. This property ensures the text field does not exceed a specified height, keeping the form or dashboard layout clean.
- **Use all available vertical space**: This property allows the control to automatically adjust its height to use all available vertical space, making it responsive to different layouts.
- **Default Expandable**: This property defines whether the text field should be expanded or collapsed by default. This is particularly useful for forms with large text inputs that might overwhelm the user if fully expanded initially.

## Usage

The **CollapsibleTextControl** is ideal for scenarios where you need to manage large text fields effectively, such as in forms and dashboards. It provides users with the flexibility to control how much content they want to view, enhancing the overall user experience without compromising on functionality.

**CollapsibleTextControl Collapse**

![CollapsibleTextControl Collapse](https://github.com/SahilATech/CollapsibleTextControl/blob/ebcd61248dab9e4670222fea8d87ffecaed6bd5e/Images/CollapsibleTextControl_Collapse.png)
 
 **CollapsibleTextControl FullHeight**
 
![CollapsibleTextControl FullHeight](https://github.com/SahilATech/CollapsibleTextControl/blob/ebcd61248dab9e4670222fea8d87ffecaed6bd5e/Images/CollapsibleTextControl_FullHeight.png)

 **CollapsibleTextControl Scrollable**
 
![CollapsibleTextControl Scrollable](https://github.com/SahilATech/CollapsibleTextControl/blob/ebcd61248dab9e4670222fea8d87ffecaed6bd5e/Images/CollapsibleTextControl_Scrollable.png)


[Managed Solution](https://github.com/SahilATech/CollapsibleTextControl/raw/ebcd61248dab9e4670222fea8d87ffecaed6bd5e/Solutions/Solutions_managed.zip)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/SahilATech/CollapsibleTextControl/blob/ebcd61248dab9e4670222fea8d87ffecaed6bd5e/LICENSE) file for details.

---

You can adjust the sections and content as needed to fit your project's specifics and documentation style.

