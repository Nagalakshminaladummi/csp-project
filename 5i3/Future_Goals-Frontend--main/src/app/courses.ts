export interface Courses {
    
    course_name: string;
    course_elgibility:string;
   course_duration: string;
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
 

