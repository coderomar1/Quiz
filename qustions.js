
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
    constructor(num,q,c1,c2,c3,c4){
        super(q)
        this.num = num;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.c4 = c4;
    }
 
}

const arr = [
 new Choices("Which type of page control in Oracle APEX allows users to select multiple values from a predefined list of options? "/*<-- Q */," Select List" ," Radio Group" ," Text Field"," Checkboxes "),
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
new Choices(" You must use a Static Content region type to display messages about the employees of the month. Employee names are stored in the P1 ENAME page item \n  Which text, when placed in Source, will display the message correctly? "/*<-- Q */," Join me in congratulating &P1 ENAME, as the employee of the month! "," Join me in congratulating 'P1_ENAME' as the new employee of the month! ","Join me in congratulating v(‘P1_ENAME’) as the new employee of the month!"," Join me in congratulating: P1 ENAME as the new employee of the month! "),
new Choices("Which statement is true about crating and using an interactive grid? "/*<-- Q */,"An interactive grid support Pivot view and Group By view features.","End users cannot rearrange columns by dragging and dropping  ","You cannot restrict users form saving private reports by using Authorization scheme. ","For both editable and noneditable interactive grids, end users can change the report layout and create private report. "),
// Selection
new Selection(2," Which two of the following capabilities are true for both Interactive Report and Interactive Grid? "/*<-- Q */," End user can rearrange the report interactively using the mouse "," End user can save the report "," End user can customize how and what data is displayed"," End user can add, modify, and refresh data directly on the report  "),
new Selection(2,"Which two statements are true about creating and using an interactive report? "/*<-- Q */," You cannot include Form Page when creating an interactive report page using the Create Page Wizard. "," You cannot restrict users form saving private reports by using Authorization scheme "," You can specify an authorization scheme at the column level "," You cannot customize Search Button Label "),
new Selection(2," In a Classic report, an end user can perform which two of the following actions? "/*<-- Q */,"Create Control Breaks in the report ","Rearrange the columns in the report ","Filter values of a column in the report ","Sort the columns of the report "),
new Selection(2," Which two are true about Oracle APEX? "/*<-- Q */,"Performs the data processing in a middle-tier server "," Requires developers to be proficient in Java, Python and other programming language. "," Is declarative. It requires no code generation "," Requires no additional e=client software. A web browser is the app development IDE "),
new Selection(2,"From SQL Workshop, you can perform which two of the following actions? "/*<-- Q */,"Create an APEX user ","Delete database ","Create and view database objects","Run SQL commands and scripts "),

// q 2
new Choices("Which statement is true about creating and using a faceted search page"/*<-- Q */,"If you create a faceted search page on a view or a SQL query, the facets are auto discovered","If you create a faceted search page based on a table, the facets are not auto discovered","The search results region can be displayed as an interactive report","The search result regio can be displayed as a classic report or cards"),
new Choices("Which of the following options in the Developer Toolbar enable you to customize the look and feel of theapplication?","Quick Edit","session","Debug","Customize"),
new Choices("Plug-ins can be used declaratively in which of the following components in APEX"/*<-- Q */,"Dynamic Actions","Regions","Process Type","All of them"),
new Choices("you use the Create Page Wizard to create a faceted search page on the EMP table. \n What is the default report type generated for this page"/*<-- Q */,"Interactive Report","Column Toggle Report","Interactive Grid","Classic Report"),
new Choices("In faceted search page, facets can be displayed as different UI type. \n which two facet item types are supported in the faceted search region"/*<-- Q */,"Data Picker","Popup LOV","Range","Checkbox Group"),
new Choices("Which of the following methods is best for securing data in an Oracle APEX application"/*<-- Q */,"Using a custom encryption algorithm","Storing data in Plain text format","Storing data in a separate database with restricted access","Using oracle APEX built-in encryption functions"),
new Choices("There is a validation of type Item that is numeric on the P1_SALARY item. When the page is submitted, this or message is displayed both in the notification and below the item: \n  What will cause the validation error to appear only in the Notification area?"/*<-- Q */,"Removing P1_SALARY from the validation Associated Item","Setting Display Location to Inline in Notification","Change the P1_SALARY item Type","Setting the value Required to Yea on P1_SALARY"),
// selection
new Selection(2,"which two types of pages behave similarly in functionality"/*<-- Q */,"Map","Cards","Faceted search","Smart Filter"),
new Selection(2,"Choose the two statement that are True about the Universal Them in APEX"/*<-- Q */,"NOT designed to work on tables","The developers must have extensive knowledge about JavaScript, CSS, and HTML in order to use the Universal Theme","Responsive UI","Easy customization"),
new Selection(2,"Which two Plugin type can be created in Oracle APEX"/*<-- Q */,"Validation","Email Template","Region","Process"),
new Selection(2,"Which are two valid evaluation points for Authorization Schemes?","Never","once per user","Once per session","Once per page view"),
new Selection(2,"you added Access Control feature pages to your application Which two actions can you perform as an Administrator using the Administration page"/*<-- Q */,"Create Authorization schemes","create new application roles","Add users","Assign roles to users"),
new Selection(2,"Choose the two statement that are TRUE about an Interactive Report. As a developer:"/*<-- Q */,"You can customize the actions menu to include or exclude certain options","you cannot modify the report source query","You can modify the data in the report and after running the app","you can customize the pagination"),
new Selection(2,"Which two of the following type can an end user save the customized Interactive report as"/*<-- Q */,"Cannot save the report","Default report","A private report","A public report"),
new Selection(2,"Choose the two options provided in a Column Heading menu of an Interactive Report"/*<-- Q */,"group by","Delete","Hide","Control Break"),
new Selection(2,"Which two statements are TRUE about charts in Interactive grid?"/*<-- Q */,"you can create multiple charts at a time in an interactive grid","Once the chart is created, it cannot be reconfigured","To remove a chart, click the Remove Chart icon(X) adjacent to the chart filter","Once a chart is created, you can switch the view between Grid and Chart view"),
// three ans
new Selection(3,"What are three key features of Universal Theme?"/*<-- Q */,"Support for single theme","versatile UI components","responsive Design","easy customization"),
new Selection(3,"Can you create a report in which of the three following methods?"/*<-- Q */,"create a report from Object Browser","create a report as a new page in an application","create a report when you create a new database application","create a report region on a page in an application"),
new Selection(3,"What three are the building blocks of Approval Components"/*<-- Q */,"Automations","Task Details Page","Task Definition","Unified Task List"),
new Selection(3,"Using data Workshop, you can perform which three tasks:"/*<-- Q */,"Delete data from the database","load vast amounts of data into the database","Export vast amount of data from the database into a file","load data using various file formats such as XLSX, CSV, XML, and JSON."),
new Selection(3,"What three are the uses of Collections in APEX?"/*<-- Q */,"collections enable you to store rows and columns in the current session into database tables","you insert, update, and delete collection information using PL/SQL API APEX_COLLECTION.","Use collections to temporarily capture one or more non scalar values","Collections can be accessed, manipulated, or processed during a user's specific session"),
new Selection(3,"When you create an Access Control Page, which three of the following Access Roles get created"/*<-- Q */,"Developer","Reader","Administrator","Contributor"),
new Selection(3,"Using the App Builder component, you can perform which three tasks"/*<-- Q */,"Run SQL scripts and commands","Edit pages in the page designer","Install sample App","create a new App"),
new Selection(3,"In Apex, you can choose which three of the following Authentication methods?"/*<-- Q */,"Authorization scheme","Custom Authentication Scheme","No Authentication","Built-in Authentication Scheme"),
new Selection(3,"Which three of the following options are True about a page in an APEX application"/*<-- Q */,"An APEX application can have only one page","A page can contain button, page items and regions","To view the rendered version of the page, you run or submit it to the Orcel APEX engine","A page can be viewed and edited in the Page Designer"),
new Selection(3,"Choose the three different ways in which you can add a checkbox to a page"/*<-- Q */,"Add a checkbox from the Property Editor","Drag and drop the checkbox item into the layout pane","Right click Body in the Rendering Tree and add a new page item as checkbox Type","Use the context sensitive menu in the Gallery Pane"),
new Selection(3,"Which three of the following statements are TRUE about saved Public Interactive Grid?"/*<-- Q */,"Any user may save public interactive grids","Public reports are available to all users","To enable an end user to save a public interactive grid, the user must have the required permission","Only the user who creates a public interactive gride can save, rename, or delete it"),
];



