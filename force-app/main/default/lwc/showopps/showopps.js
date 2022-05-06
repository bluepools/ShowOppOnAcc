import { LightningElement, wire, track } from 'lwc';

import getOpportunity from '@salesforce/apex/Spring2022LWCtestController.getOpportunity';

export default class Spring2022LWCtest extends LightningElement {

    contlist = [];
    columns = [{
        label: 'Name',    
        fieldName: 'FirstNameUrl',
        type: 'url',
        typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'},
        sortable: "true"
    },
    {
        label: 'Stage',
        fieldName: 'StageName',
        sortable: "true"
    },
    {
        label: 'Close Date',
        fieldName: 'CloseDate',
        sortable: "true",
        type: "date"
    
    },
    {
        label: 'Amount',
        fieldName: 'Amount',
        sortable: "true",
        type: 'currency',
        cellAttributes: { alignment: 'left' },
    } ];

    @wire(getOpportunity)
    
    opportunitys({ error, data }) {

        if (data) {
            let tempConList = []; 
            
            data.forEach((record) => {
                let tempConRec = Object.assign({}, record);  
                tempConRec.FirstNameUrl = '/' + tempConRec.Id;
                tempConList.push(tempConRec);
 
            });
            
            this.contlist = tempConList;
            this.error = undefined;

            console.table(this.contlist);

        } else if (error) {
            this.error = result.error;
        }
        
    }
    
   
}

    

    

