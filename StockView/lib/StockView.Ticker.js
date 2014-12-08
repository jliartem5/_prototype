/**
 * Created by jian on 08/12/2014.
 */
/**
 * CSV Data Format:
 *
 * datetime,val1,val2,val3....
 *
 * **/
var StockView_Ticker = (function(){

    /**
     * Private Functions
     *
     */
    function calculDateMapping(SVT){
        SVT.mapping = [];
        SVT.formatedCSV = '';
        for(line in SVT.arrayData){
            var data = SVT.arrayData[line];
            if(line == 0){//header
                SVT.formatedCSV += data.join()+'\n';

            }else{//data
                SVT.mapping[line] = data[0];
                data[0] = line;

                //Ensuite on doit reconstruire csv
                SVT.formatedCSV += data.join()+'\n';
            }
        }
    }
    /***************
     *
     * Class content
     *
     * ************/
    var SVT = function(csvData){
        if(csvData != undefined){
            this.arrayData = $.csv2Array(csvData);
            calculDateMapping(this);
        }
    };

    SVT.prototype.setCSVData = function(csvData){
        if(csvData != undefined){
            this.arrayData = $.csv2Array(csvData);
            calculDateMapping(this);
        }else{
            throw 'CSV data parameter is required';
        }
    }
    SVT.prototype.getFormattedCSVData = function(){
        if(this.mapping == undefined || this.arrayData == undefined || this.formatedCSV == undefined){
            throw 'CSV data must be setted';
        }
        return this.formatedCSV;
    }

    SVT.prototype.DiscontinuousDateTicker = function(min, max, pixels, opts, dygraph, vals){
        var chosen = Dygraph.pickDateTickGranularity(min, max, pixels, opts);
        console.log(chosen);
        return [{v:5,label:'-'}];
    }
    return SVT;
})();