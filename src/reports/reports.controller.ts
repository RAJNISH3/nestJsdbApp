import { Controller, Get, Param, Res } from '@nestjs/common';
import { ReportsService } from './reports.service';
import * as empData from 'src/data/sample.json';//static json file
import { Response } from 'express';

@Controller('reports')
export class ReportsController {
    constructor(private reportsService: ReportsService) { }
    @Get()
    getEmployeeReports(): any {
        // return [{id : 0}];
        return this.reportsService.findAll();
    }

    @Get(':id')
    getEmployeeReportsById(@Param('id') id: string): any {
        return this.reportsService.findById(id);
    }

    @Get('emp/:id')
    async getEmpReports(@Param('id') empId: string): Promise<Object> {
        var report = empData;
        console.log("==== DATA========", empId);
        return report;
    }

    @Get('emps/:id')
    async getEmpReportsAsTemplate(@Param('id') empId: string, @Res() res: Response) {
        var report = empData;
        console.log("==== DATA========", empId);
        return res.render(
            "report.hbs", { emp: empData.employeeDtls, dept: empData.departments },
        );
    }

}
