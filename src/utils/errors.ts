export class ChartTypeError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "ChartTypeError";
    }
  }
  
  export class CompanyDataError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "CompanyDataError";
    }
  }
  