export interface StudentDetails {
    username: string;
    suggestion:string;
   experience: string;
   quires: string;
   rating: string;

  }

  
   

  export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
    Result: [];
  }
 