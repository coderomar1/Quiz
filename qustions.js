
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
        this.c4 = c4 ;
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
    new Choices("When implementing an enterprise ERP, there are two options" /* <- Q */,"Change business process","System change","All of the above"),
    new Choices("The integrated ERB effects"/* <- Q */,"System change","All of the above","System cost"), 
    new Choices("Benefits System ERP : Consistencyand user interfaces give"/* <- Q */,"reducing user training","productivity improvement","All of the above"), 
    new TrueAndFalse("ERP aims to: Enhance the dynamicflow of information smoothly"/* <- Q */,true), 
    new TrueAndFalse("ERP aims to:Maximize theusefulness and value of information"/* <- Q */,true), 
    new TrueAndFalse("ERP aims to:Integration of different departments and task into one infrastructure that serves the needs of all departments"/* <- Q */,true), 
    new TrueAndFalse("ERB components: information, procedures, people, software, equipment"/* <- Q */,true), 
    new TrueAndFalse("The integrated ERB affects:System cost, maintenance cost, and system usage cost ",true),
    new TrueAndFalse("Benefits System ERP : Data and Application Integration",true),
    new TrueAndFalse("Benefits System ERP : make easy maintenance and support",true),
    new TrueAndFalse("Benefits System ERP : Consistency of user interfaces",true),
    new TrueAndFalse("Disadvantages of ERP system: It is more complex than standalone systems",true),
    new TrueAndFalse("Business Benefits of an ERP : Increase in the agility of the organization",true),
    new TrueAndFalse("Business Benefits of an ERP: Helps share data.",true),
    new TrueAndFalse("Business Benefits of an ERP: Connecting and exchanging information in real time",true),
    new TrueAndFalse("Business Benefits of an ERP: Better customer service",true),
    new TrueAndFalse("Business Benefits of an ERP : Operations are more efficient",true),
    new TrueAndFalse("One of the most important factors for the success of the implementation of ERP systems: Choosing a supplier that focuses on training employees inside and outside the organization?",false),
    new TrueAndFalse("Oracle is one of the companies that adopts virtual management on open source software",true),
    new TrueAndFalse("In the process of selecting the supplier of integrated systems for ERP, the philosophy of the supplier in implementation is taken into account",true),
    new TrueAndFalse("in the ERP Readiness Assessment process, all planned tasks and activities must be completed?",),
    new TrueAndFalse("In the process of training employees to use the ERP system, it is preferable not to use real data",true),
    new TrueAndFalse("IT infrastructure is not considered one of the essential elements in the ERP project management triangle",true),
    new TrueAndFalse("Management that focuses on the strategic aspect is change management",false),
    new TrueAndFalse("Classification of resources is one of the steps of the integration process",true),
    new TrueAndFalse("ERP servers must be multi-processing",true),
    new TrueAndFalse("Operations management systems help managers understand the operational side",true),
    new TrueAndFalse("Operations management systems do not help managers understand the operational side",false),
    new TrueAndFalse("Oracle is one of the companies that does not embrace virtualization over open source software",false),
    new TrueAndFalse("ERP servers not must be multi-processing",false),
];



