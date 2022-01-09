import './scss/index.scss'
import {Excel} from '@/components/excel/Excel';
import {Header} from "@/components/header/Header";
import {Toollbar} from "@/components/toolbar/Toollbar";
import {Formula} from "@/components/formula/Formula";
import {Table} from "@/components/table/Table";


const excel = new Excel('#app', {
    components: [Header, Toollbar, Formula, Table]
})
excel.render()
