# ConfirmBox

Its displays a beautiful confirm box with minimal code.

# How to install

`npm install bootstrap @tgawhale/confirm-box`

# Steps

1. Create a ConfirmBoxService object in constructor
2. Use method `show(title,description,(val)=>{ //your code after clicked on confirmed }`

# Example

`constructor(private cbService: ConfirmBoxService) {}`

 `openConfirmBox() {
    this.cbService.show('The item will be deleted', 'The current selected item will be deleted. The process is irreversible.', (val) => {
      alert(val);
    });
  }`
