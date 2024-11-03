
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
 new Choices("hich type of page control in Oracle APEX allows users to select multiple values from a predefined list of options? "/*<-- Q */," Select List" ," Radio Group" ," Text Field"," Checkboxes "),
 new Choices("How can you access Oracle APEX on the Oracle Autonomous Database? "/*<-- Q */,"It can only be accessed through the command-line interface." ,"It is accessible through the Oracle Cloud Infrastructure Console." ,"It requires installation on a local machine for access. ","It is accessible through any web browser using a specific URL. "),
 new Choices("What component of Oracle APEX allows developers to create interactive reports and grids? "/*<-- Q */ ,"Apex Components" ,"Shared Components" ,"Page Designer","Application Builder"),
 new Choices("Which component of Oracle APEX allows you to define the navigational structure of your application? "/*<-- Q */,"Shared Components" ,"Application Builder"  ,"Page Designer" ,"Navigation Menu"),
 new Choices("APEX applications are primarily built using which programming language?" /*<-- Q */,"JavaScript" ,"Python" ,"Java" ,"SQL and PLSQL"),
 new Choices("Which type of process in Oracle APEX allows you to execute SQL statements on the database? "/*<-- Q */ , "Computations and Validations ", "Branch Process ", "Before Header Process ", "Page Process"),
 new Choices("What is SQL Workshop in Oracle Application Express (APEX)? "/*<-- Q */, "A tool for managing database connections in APEX. ", "A feature to design user interfaces for APEX applications." , "A component for creating web services in APEX.", "A development environment for writing SQL queries. "),
 new Choices("To implement real-time interactions with the server in Oracle APEX, what technology does it use? "/*<-- Q */," WebSocket"  ," WebRTC" ,"WebSockets"," AJAX"),
 new Choices("Which Oracle APEX component allows you to define and manage application-level computations and validations?" /*<-- Q */, "Shared Components ", "Application Items ", "Application Builder" , "Computations and Validations"),
 new Choices(" In Oracle APEX, which security feature restricts access to specific pages based on user roles? "/*<-- Q */, "SSL Encryption" , "Virtual Private Database (VPD)" , "Secure Socket Layer (SSL) ", "Page Access Protection "),
 new Choices(" Choose the statement that is Ture about Universal Theme "/*<-- Q */, "Features a responsive design and enable developer to create web application without extensive knowledge of HTML, CSS, or JavaScript" , "Universal theme is the default theme that is shipped with Oracle APEX" , "Uses a 12-column grid layout system for arranging components on a page" , "All of them"),
new Choices("You have an interactive grid component and you enabling the Save Public Report attribute. As what can end users save the report type? "/*<-- Q */, "As primary only " , "As private only  ", "As Private and public only ", "As public only  "),
new Choices(" Developers can use Template options in which of the following ways?" /*<-- Q */, "Applying different colors or accents" , "Rendering buttons in different , with without icons" ,/* "Applying different spacing and padding " ,*/ "Displaying form field with different alignments ", "All of them"),
new Choices(" I want to hide a few columns in my interactive report. To do so, which option should I choose from the Actions menu?"/*<-- Q */ , "Filter"  , "Data"  , "Format", "Columns"),
new Choices(" Which are Task definitions that exist on the application level in the Shared Components section made up of? "/*<-- Q */," Participants "," Task Settings ",/*" Parameters ",*/" Action"," All of them "),
new Choices("Which component in SQL workshop allows you to build queries graphically without manual SQL coding  "/*<-- Q */," Quick SQL "," SQL commands "," Data Workshop "," Query Builder "),
// one choice mn 3ndy
new Choices(" Which is a valid method of logging messages to the executing log in APEX automation  "/*<-- Q */,"Apex_automation.Log_info(‘SAL for”:ENAME|| increased by 18.’); ","Apex error.add error(p_message=> ‘SAL for||”ENAME|| increased by 1%’ , p_disply_location=>apex_error.c_inline_in_notification );  ","Apex_Error.info (‘SAL for’||:ENAME||’increased by 1%’); ","Apex_debug.info (‘SAL for’||:ENAME||’increased by 1%’); "),
new Choices(" You must use a Static Content region type to display messages about the employees of the month. Employee names are stored in the P1 ENAME page item \n  Which text, when placed in Source, will display the message correctly? "/*<-- Q */," Join me in congratulating &P1 ENAME, as the employee of the month! "," Join me in congratulating 'P1_ENAME' as the new employee of the month! "," Join me in congratulating: P1 ENAME as the new employee of the month! "," Join me in congratulating: P1 ENAME as the new employee of the month! "),
// Selection
new Selection(" Which two of the following capabilities are true for both Interactive Report and Interactive Grid? "/*<-- Q */," End user can rearrange the report interactively using the mouse "," End user can save the report "," End user can customize how and what data is displayed"," End user can add, modify, and refresh data directly on the report  "),
new Selection("Which two statements are true about creating and using an interactive report? "/*<-- Q */," You cannot include Form Page when creating an interactive report page using the Create Page Wizard. "," You cannot restrict users form saving private reports by using Authorization scheme "," You can specify an authorization scheme at the column level "," You cannot customize Search Button Label "),
new Selection(" In a Classic report, an end user can perform which two of the following actions? "/*<-- Q */,"Create Control Breaks in the report ","Rearrange the columns in the report ","Filter values of a column in the report ","Sort the columns of the report "),
new Selection(" Which two are true about Oracle APEX? "/*<-- Q */,"Performs the data processing in a middle-tier server "," Requires developers to be proficient in Java, Python and other programming language. "," Is declarative. It requires no code generation "," Requires no additional e=client software. A web browser is the app development IDE "),
new Selection("From SQL Workshop, you can perform which two of the following actions? "/*<-- Q */,"Create an APEX user ","Delete database ","Create and view database objects","Run SQL commands and scripts "),
];



