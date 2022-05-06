public with sharing class Spring2022LWCtestController {

    @AuraEnabled(Cacheable = true)
    public static List<Opportunity> getOpportunity(){
        return [
            SELECT Id, Name, StageName, CloseDate, Amount FROM Opportunity WHERE StageName != 'Closed Won' ORDER BY Amount DESC LIMIT 5 
        ];
    }
}

