/**
 * Created by jian on 07/12/2014.
 */
var StockView = (function(){
    var SV =  function(element){
        this.root = element;
        this.plotter = new StockView_Plotter();
        this.chart_ticker = new StockView_Ticker();
    };

    SV.prototype.start = function(csvData){
        var $this = this;
        this.chart_ticker.setCSVData(csvData);
        this.dygraphs = new Dygraph(
            this.root,
            csvData,
            //this.chart_ticker.getFormattedCSVData(),
            {
                //plotter:  $this.plotter.canddlePlotter,
                width: window.innerWidth * 0.9,
                height: window.innerHeight * 0.9,
                showRangeSelector:true,
                highlightCallback: function (e, x, x_obj) {

                },
                unhighlightCallback:function(e){

                },
                //ticker: $this.chart_ticker.DiscontinuousDateTicker
            });
    };

    SV.prototype.reset = function(){

    }
    return SV;
})();