
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
    new TrueAndFalse("the companies cant give cloud computing services example: Google Apps, Amazon, and Azure for Microsoft.",false),
    new TrueAndFalse("limited storage capacity.",false),
    new TrueAndFalse("the companies can give cloud computing services example: Google Apps, Amazon, and Azure for Microsoft.",true),
    new Choices(" the requirements for access to cloud computing:","Internet","computer","cloud service provider","all the above"),
    new TrueAndFalse("Cloud computing requires less funding.",false),
    new TrueAndFalse("Rise IT infrastructure costs for users.",true),
    new Choices("The type of cloud computing:","IAAS","SAAS","PAAS","all the above"),
    new TrueAndFalse("can be users benefit from the huge infrastructure provided by the cloud services.",true),
    new TrueAndFalse("Cloud computing : can accessed through the Internet.",true),
    new TrueAndFalse("Cloud computing cant be expanded and developed.",false),
    new TrueAndFalse("Cloud computing requires huge funding.",false),
    new Choices("the most common threats to cloud computing: -","Data theft","Staff risks","Data loss","all the above"),
    new TrueAndFalse("Reduce costs and ensure the service work 24/7.",true),
    new TrueAndFalse("Cloud computing can be expanded and developed.",true),
    new TrueAndFalse("high maintenance costs.",false),
    new TrueAndFalse(".We need to the staff in system and software maintenance",false),
    new TrueAndFalse("Cloud computing provides resources and services to users on request.",true),
    new TrueAndFalse("Cloud computing : cant accessed through the Internet.",false),
    new TrueAndFalse("We don’t need to the staff in system and software maintenance.",true),
    new TrueAndFalse("Most cloud applications have amounted the level of traditional desktop applications.",false),
    new TrueAndFalse("Better performance, because can I get all file from any PC, smart phone etc.",true),
    new TrueAndFalse("less maintenance costs.",true),
    // last 10 
    new TrueAndFalse("Data stored in the cloud can only be accessed from a single device",false),
    new TrueAndFalse("In cloud computing, you only pay for the resources you use",true),
    new TrueAndFalse("Data stored in a cloud cannot be lost or corrupted",false),
    new TrueAndFalse("The three main types of cloud computing services .are laas, Paas, and Saas",true),
    new TrueAndFalse("Hybrid cloud combines both public and private cloud models",true),
    new TrueAndFalse("Data stored in the cloud is completely immune to cyberattacks",false),
    new TrueAndFalse("Using cloud services makes businesses less flexible and more dependent on physical infrastructure",false),
    new TrueAndFalse("Public clouds are always more expensive than private clouds",false),
    new TrueAndFalse("Scalability is one of the main advantages of cloud computing",true),
    new TrueAndFalse("Once you upload data to the cloud, you cannot retrieve or download it again",false),
    // mid 2
    new TrueAndFalse("Only companies benefit from cloud services",false),
    new TrueAndFalse("The benefits of cloud services you don't have to deal with local storage for example maintain it",false),
    new TrueAndFalse("If you get file corruption the cloud services provider is responsible for it and they provide backup",true),
    new TrueAndFalse("All cloud services are completely free",false),

];



