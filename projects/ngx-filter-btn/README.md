# Ngx Filter Btn

Simple to implement filter button that filters your data.

[Demo Link](https://ngx123.web.app/)

![demo image](https://github.com/tgawhale/Angular-Libs/blob/main/src/assets/ngx-filter-btn.png?raw=true)

## Index

- [Installation Steps](#installation-steps)
- [Installation Example](#installation-example)
- [Parameters Available](#parameters-available)
- [Available Conditions](#available-conditions)
- [Styling the component](#styling-the-component)

## Installation Steps

1. Install by running `npm install ngx-table-operations`
2. Add `import { NgxFilterBtnModule } from 'ngx-filter-btn'` in your module class.
3. Add `NgxFilterBtnModule` in your module class.
4. Add `<ngx-filter-btn [data]="yourData" (filtered)="yourData = $event">Your button name</ngx-filter-btn>` in your component html.

## Installation Example

1. Install by running `npm install ngx-table-operations`
2. In `app.module.ts` file.

   ```
   import { NgxFilterBtnModule } from 'ngx-filter-btn';

   @NgModule({
   ....
   imports: [NgxFilterBtnModule, ....],
   ....
   ....
   })
   ```

3. In `app.component.html` file.
   ```
   <ngx-filter-btn
           [data]="userList"
           [numberKeys]="['empId', 'salary', 'fte']"
           [booleanKeys]="['isNewJoiner']"
           [dateKeys]="['dateOfJoining']"
           (filtered)="userList = $event"
         >
           Filter
   </ngx-filter-btn>
   ```
4. Some sample data in `app.component.ts` file.

   ```
   export class AppComponent {

   userList: SampleData[] = [];
   constructor() {
       this.userList = [
       {
           empId: 7151,
           name: 'Jarret Chesson',
           email: 'jchessona8@illinois.edu',
           gender: 'M',
           assetType: 'Desktop',
           assetDetail: 'VXYJ59531',
           dateOfJoining: '11-04-2017',
           salary: 68093,
           isNewJoiner: true,
           grade: 'A3',
           location: 'Kolkata',
           skills: 'Java',
           billablityStatus: 'DEPLOYABLE_BENCH',
           accountName: 'Hudson LLC',
           projectName: 'Span',
           fte: 75,
         },
         { ..... },
         { ..... }

       }
   }
   ```

## Parameters Available

| Type    | Name        | Description                                                                   | Data Type | Example                           |
| ------- | ----------- | ----------------------------------------------------------------------------- | --------- | --------------------------------- |
| @Input  | data        | Pass your actual data of array in it                                          | any[]     | [data]="userList"                 |
| @Input  | numberKeys  | Pass keys who has data of type number so that number filters can be applied   | string[]  | [numberKeys]="['empId','salary']" |
| @Input  | booleanKeys | Pass keys who has data of type boolean so that boolean filters can be applied | string[]  | [booleanKeys]="['isNewJoiner']"   |
| @Input  | dateKeys    | Pass keys who has data of type Date so that Date filters can be applied       | string[]  | [dateKeys]="['dateOfJoining']"    |
| @Output | filtered    | Returns the filtered array of your data in $event                             |           | (filtered)="userList = $event"    |

## Available Conditions

1. String Conditions
   - `contains`
   - `does not contain`
   - `starts with`
   - `ends with`
   - `is`
   - `is not`
   - `is empty`
   - `is not empty`
2. Number & Date Conditions
   - `=`
   - `!=`
   - `>`
   - `<`
   - `>=`
   - `<=`
   - `is empty`
   - `is not empty`
3. Boolean Conditions
   - `true`
   - `false`
   - `is empty`
   - `is not empty`

## Styling the component

- The css class names are same as bootstrap classes.
- Customizing the css is simple.
- You can find all the css classes I used [here](https://github.com/tgawhale/Angular-Libs/tree/main/projects/ngx-filter-btn/src/lib/ngx-filter-btn.component.css).
- Use the same class name in `style.css` to override according to your css.

> If you want to keep the css to component only, then use `:host ::ng-deep` before declaring the css class.

Example :

```
:host ::ng-deep .dropdown-menu{
        background-color: white
    }
```
