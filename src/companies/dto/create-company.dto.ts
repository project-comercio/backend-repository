export class CreateCompanyDto {
  ownerId: string;
  ownerName: string;
  companyName: string;
  city?: string;
  country?: string;
  state?: string;
  companyField?: string;
  address?: string;
  telephone?: string;
  cpnj?: string;
  cpf?: string;
}
