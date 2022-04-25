export interface ProjectGet{

    projectid: Number;
    userid: Number;
    projectname: String;
    projectdescription: String;
    projectstatus: String;
    urlwebsite: String;
    urlimage: String;
    urlvideo: String;
    currentinvestment: Number;
    pendinginvestment: Number;
    totalinvestment: Number;
    nativecurrency: Number;
    blockchain: String;
    creationdate: Date;
    testingdate: Date;
    releasedate: Date;
}