
class Questions{
    constructor(q,c1,c2,c3,c4){
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

const arr = [
    new Choices("A storage with no moving parts " /*<- question */,"Magnetic storage","Optical storage","Digital versatile disc","Solid-state storage"),
    new Choices("The multimedia effect includes the following " /*<- question */," Identification, Categorization, Preservation","Input, processing, storing, output","None of the choices","compatibility, creation, distribution"),
    new Choices("Effective file maintenance involves:" /*<- question */," Input, processing, storing, output"," compatibility, creation, distribution"," None of the choices","Identification, Categorization, Preservation"),
    new Choices(". A container for binary codes" /*<- question */," File size"," Program files"," File extensions"," Digital files"),
    new Choices(" The type of files that contains executable instructions" /*<- question */," File size"," File compatibility"," File extensions"," Program files"),
    new Choices(" Process of re-encoding digital data to reduce file size is called:" /*<- question */," Sample resolution"," Sample rate"," None of the choices listed"," File compression"),
    new Choices("An encoding that displays the full range a human eye can perceive" /*<- question */," 16-bit sound"," ASCII-8"," Unicode"," 24-bit color"),
    new Choices(" ASCII-8 (8 bit code) can represent"," Over 65,000 different characters" /*<- question */," Plays the full decibel range the human ear can perceive"," 128 letters, numbers, & symbols in English language"," 256 letters, numbers, & symbols in English language"),
    new Choices("Number of bits used to represent digital sample is called:" /*<- question */," Sample Rate"," Sample formats"," Sample sound"," Sample Resolution"),
    new Choices("It is data made useful, interpreted, and applied to produce understanding"/*<- question */," Symbols"," Data "," Digital files"," Information"),
    new Choices(" A type of storage that holds data and instructions outside the system unit for long periods of time" /*<- question */," Hard drive storage"," Optical storage"," Magnetic storage"," Secondary storage"),
    new TrueAndFalse(" Series of letters to designate the file format"/*<- question */,true),
    new TrueAndFalse(" Ability to use the file in a different platform of hardware and software"/*<- question */,true),
    new TrueAndFalse("Information is the givens of experience such as, measurements, facts, observations"/*<- question */,false),
    new TrueAndFalse("Digital data consists of discrete and separate units " /*<- question */,true),
    new TrueAndFalse("Lossy is the efficient encoding reduces file size without loss of original data " /*<- question */,false),
    new TrueAndFalse("Adding 2 to the power doubles the number of distinct data items that can be encoded"/*<- question */,false),
    new TrueAndFalse("In non-linear multimedia, the user has no control over the flow of information"/*<- question */,false),
    new TrueAndFalse("Interactive multimedia is non-linear which means user is a participant in the flow of information"/*<- question */,true),
    new TrueAndFalse("Analog data is characterized by a function that varies continuously"/*<- question */,true),
    new TrueAndFalse(" Digital encoding assigns bits to data items"/*<- question */,true),
    new TrueAndFalse("Codec is a program to compress a file into a smaller size and decompress it into a usable form"/*<- question */,true),
    new TrueAndFalse("Contemporary Multimedia is the development, integration, and delivery of any combination of text, graphics, animation, sound or video through a computer or other electronic means"/*<- question */,true),
    new TrueAndFalse("the best compression strategy best suited for an important database of student names and addresses is lossy",true),
    new TrueAndFalse("Interactive multimedia enhances learning, memory & retention by 15 percent",false),
    new TrueAndFalse("Laser printer is an example of impact printers",false),
    new TrueAndFalse(`Ports that are powered through the interface port and that means no more "wall warts"`,true),
];



