import {ExcelComponent} from "@core/ExcelComponent";

export class Toollbar extends ExcelComponent {
    static className = 'excel__toolbar'
    toHTML() {
        return '<h1>Toollbar</h1>'
    }
}