import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    try {
      const newCompany = await this.prisma.company.create({
        data: createCompanyDto,
      });

      if (newCompany) return newCompany;
    } catch (error) {
      console.error(error);
    }
  }

  async findAll(): Promise<Company[]> {
    try {
      const companies = await this.prisma.company.findMany();

      if (companies) return companies;
    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id: string): Promise<Company> {
    try {
      const company = await this.prisma.company.findUnique({
        where: {
          id: id,
        },
      });

      if (company) return company;
    } catch (error) {
      console.error(error);
    }
  }

  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    try {
      const updatedCompany = await this.prisma.company.update({
        where: {
          id: id,
        },
        data: updateCompanyDto,
      });

      return updatedCompany;
    } catch (error) {
      console.error(error);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await this.prisma.company.delete({
        where: {
          id: id,
        },
      });
      return;
    } catch (error) {
      console.error(error);
    }
  }
}
