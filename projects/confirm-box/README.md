# ConfirmBox

Its displays a beautiful confirm box with minimal code.

It's developed using Angular 10

![alt text](https://github.com/tgawhale/Angular-Libs/blob/main/src/assets/confirm-box.png?raw=true)

# How to install

`npm install @tgawhale/confirm-box`

# Steps

1. Install by running `npm install @tgawhale/confirm-box`;
2. Import  `ConfirmBoxModule` in your angular module;

```
import { ConfirmBoxModule } from 'confirm-box';

@NgModule({
  ....
  imports: [ConfirmBoxModule, ....],
  ....
  ....
})

```
3. Declare `<confirm-box></confirm-box>` at below of your root component.
4. Create a `ConfirmBoxService` object in constructor of your component.
5. Use the following method to show dailog

```
show(title , description , (val)=>{ //your code after clicked on confirm button }
```          
# Example

## 1. `app.module.ts`

```
import { ConfirmBoxModule } from 'confirm-box';

@NgModule({
  ....
  imports: [ConfirmBoxModule, ....],
  ....
  ....
})

```

## 2. `app.component.html`

```
<button (click)="openConfirmBox()">Open</button>
<confirm-box></confirm-box>
```

## 3. `app.component.ts`

```
import { ConfirmBoxService } from 'confirm-box';

constructor(private cbService: ConfirmBoxService) {}

 openConfirmBox() {
    this.cbService.show('The item will be deleted', 'The current selected item will be deleted. The process is irreversible.', (val) => {
      alert(val);
    });
  }
  
  ```
