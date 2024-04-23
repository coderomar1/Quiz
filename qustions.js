
class Questions{
    constructor(q){
        this.q = q;
    }
}
class Choices extends Questions {
    constructor(q,c1,c2,c3,c4){
        super(q)
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.c4 = c4;
    }
}

class TrueAndFalse extends Questions {
    constructor(q,c){
        super(q)
        this.c = c;
    }
}
class Selection extends Questions {
    constructor(q,c1,c2,c3,c4){
        super(q)
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.c4 = c4;
    }
}

const arr = [
 // Mid
  new TrueAndFalse("Data can be processed"/* quirstion*/,true),
  new TrueAndFalse("you are a student. it is example about an information"/* quirstion*/,true),
  new TrueAndFalse("We can make a decision based on some information"/* quirstion*/,true),
  new TrueAndFalse("We can make a decision based on enough data"/* quirstion*/,false),
  new TrueAndFalse("database can be not organized"/* quirstion*/,false),
  new TrueAndFalse("Some types of data, such as images, cannot be stored in database"/* quirstion*/,false),
  new Choices("to make ER model in a good shape and avoid any redundancy of data we have to normalize it based on "/* quirstion*/," 2NF"," Create primary and Foreign key "," Relationship"," 3NF"),
  new Choices(" an interface between the database and its programs as known "/* quirstion*/," database"," Relationship"," Database Administrator"," database management system "),
  new Choices(" determine the requirements of the database users"/* quirstion*/," Application programmer"," Database user"," Business rule"," System analyst"),
  new Choices(" anything about which data will be collected and stored"/* quirstion*/," An attribute"," A relationship"," A constraint"," An entity"),
  new Choices(" It will be considered as a column in the database"/* quirstion*/," An entity"," A relationship"," A constraint"," An attribute"),
  new Choices(" To solve Many-to-many relationship between entities, we come to use "/* quirstion*/," nothing"," create new attribute "," remove one entity"," associative entity"),
  new Choices(" Each table row represents"/* quirstion*/," two-dimensional"," single value "," same domain "," single entity "),
  new Selection(" Each entity must have at least one (select 2)"/* quirstion*/,"Foreign key ","ID ","Primary key ","Not null value "),
  //Quiz 1
  new TrueAndFalse("Omar is manager; it can be considered as example of information"/* quirstion*/,true),
  new TrueAndFalse("we can call Relational databases as NoSQL."/* quirstion*/,false),
  new TrueAndFalse("Information can be defined as a set of isolated."/* quirstion*/,false),
  new TrueAndFalse("Data is more strict."/* quirstion*/,false),
  new TrueAndFalse("Data can be processed."/* quirstion*/,true),
  new TrueAndFalse("Data is raw fact."/* quirstion*/,true),
  new TrueAndFalse("in some cases, we can call data as information."/* quirstion*/,false),
  new TrueAndFalse("from data we can make a decision."/* quirstion*/,false),
  // Quiz 2
  new Choices("A column-level constraint references:","	primary key","a multiple columns","table","a single column"),
  new Choices("choose the correct sentence:","each column must have one primary key","A table must have foreign key","A table should not have any constraint","A table must have at least one primary key"),
  new TrueAndFalse("When defining PRIMARY KEY columns, we should write name of table with constraint name as prefix.",false),
  new Choices("part of scenario to create a ER diagram , A dealer has many different cars how many entities are.","	three entities","no entity","one entity","two entities"),
  new Choices("where we can add group function (ex , sum ).","where clause","where or select clauses","select clause","having or select clauses only"),
  new Choices("College may have several school. each school belongs to one and only one college , the correct realtion between these entities will be:","(0,M) :(0,M)","(0,M): (1,0)","(0,1) : (0,M)","(1,1) : (0,M)"),
  new Choices("number data type uses to:","for first column","Not all of the above","ID","for column that contains only number value"),
 /*updated */new Choices("select the wrong sentences:","Primary key constraints can be defined at the table level","Primary key constraints can be defined at the column level","Primary key constraints can be added after create table","Primary key constraints can contain one null value"),
  new Choices("when we want to build new table , we use:","constraint","use Alter table","Add Table","Create"),
  new Choices("PRIMARY KEY should include:","primary-key value can appear in more than one row in the table","Not all of the above","primary key may have one null value","A primary key column cannot contain duplicate values"),
  new Choices("we can remove a column name by using the following statement:","We can not remove a column after created it","Alter column column1 drop column Loc","Alter Table TableName Delete Column ColumnName","Alter table table1 drop column Loc ;"),
  new Choices("The advantage of the CONCAT function is:","change a small letter to a capital letter","do nothing","A and B","similar to the concatenation operator"),
  new TrueAndFalse("We can have a column in a table and it can also appear as a column in another table:",true),
  new Choices("What is the correct order:","CONSTRAINT , clients_client_num_pk , PRIMARY KEY","CONSTRAINT1 clients_client_num_pk PRIMARY KEY","CONSTRAINT1 PRIMARY KEY , CONSTRAINT","CONSTRAINT CL2_CL1_PK PRIMARY KEY"),
  new Selection("in associative entity , the primary key will come from:","it has no primary key","Not all of the above","the primary keys of the two fundamental entities ( parent entities)","It has a new attribute as primary key"),
  new Choices("when We want to define the data type of the column as a string, We will use:","string","number","varchar","varchar2"),
  new Choices("we can change a column name by using the following statement:","Alter table emp update ( name1 varchar2(20) ) ;","Alter table emp update ( name1 VARCHAR2(10) ) ;","update column emp modify ( ID numner(10,2) ) ;","Alter table emp modify ( name1 numner(8,1) )"),
];



