import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
    private reports: any = [{id: 0, name:'Marius'}];

    findAll(){
        return this.reports;
    }

    findById(id: string){
        return this.reports.find(report => report.id == id);
    }

}
