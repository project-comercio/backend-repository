import { Test } from '@nestjs/testing';
import { CompaniesService } from './companies.service';

describe('CompaniesService', () => {
  let companiesService: CompaniesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], 
      controllers: [], 
      providers: [], 
    }).compile();

    companiesService = moduleRef.get<CompaniesService>(CompaniesService);
  });

  it('should be defined', () => {
    expect(companiesService).toBeDefined();
  });
});
