import $ from 'jquery';

export default function (options = {
    mapControl: null,
    view: null
}) {

    let addressInRiskArea = [];

    const mapControl = options.mapControl;
    const view = options.view;

    const init = () => {

        console.log('initiating app controller');

        mapControl.init();

        view.init({
            addressCardOnClickHandler: (data) => {
                mapControl.zoomToAddress(data);
            },
            searchAreaBtnOnClickHandler: () => {
                const ext = mapControl.getMapViewExtent();
                findAddressesInRiskAreas(ext);
                // console.log(ext);
            },
            downloadCsvOnClickHandler: () => {
                downloadAsCsv();
            },
            openDemoLinkOnClickHandler: () => {
                openDemoReport();
            }
        });

        // findBuildingAddresses();

        // findAddressesInRiskAreas();

        // console.log(view);


    };

    // // return all building addresses inside of the input geometry
    // const findBuildingAddresses = (geometry)=>{

    //     geometry = geometry || {"spatialReference":{"latestWkid":3857,"wkid":102100},"rings":[[[-13195122.995916035,4035604.5419347575],[-13195066.72976617,4035677.7940990073],[-13194995.600881053,4035648.06859206],[-13194932.964857338,4035518.550277944],[-13195096.455273116,4035486.7015100867],[-13195122.995916035,4035604.5419347575]]]};

    //     $.ajax({
    //         method: "GET",
    //         url: "https://hack2019.vannizhang.com/queryBuildings",
    //         data: { 
    //             geometry, 
    //         }
    //     })
    //     .done(function( res ) {
    //         console.log( "findBuildingAddresses", res);
    //         // view.cardPanel.render(res);
    //         // mapControl.showAddresses(res);
    //     });
    // };

    const findAddressesInRiskAreas = (extent) => {

        extent = extent || { "xmin": -13322883.293076182, "ymin": 4084351.745245313, "xmax": -13314704.531049678, "ymax": 4089281.9335697, "spatialReference": { "wkid": 102100, "latestWkid": 3857 } };

        $.ajax({
            method: "GET",
            url: "http://localhost:8500/queryAddressesInRiskAreas",
            data: {
                extent,
            }
        })
            .done(function (results) {
                // console.log( "findAddressesInRiskAreas results", results);

                if (results.error) {
                    console.error(results.error);
                    findAddressesInRiskAreasOnErrorHandler();
                } else {
                    findAddressesInRiskAreasOnSuccessHandler(results);
                }

            });

        view.toggleLoaderVisibility(true);

    };

    const findAddressesInRiskAreasOnSuccessHandler = (results) => {
        addressInRiskArea = removeDup(results);
        view.cardPanel.render(addressInRiskArea);
        mapControl.showAddresses(addressInRiskArea);

        view.toggleLoaderVisibility(false);
    };

    const findAddressesInRiskAreasOnErrorHandler = () => {
        addressInRiskArea = [];
        view.cardPanel.render([]);
        mapControl.showAddresses([]);

        view.toggleLoaderVisibility(false);
        view.toggleAlertVisibility(true);
    };

    const removeDup = (data) => {
        var seen = {};
        return data.filter(function (item) {
            return seen.hasOwnProperty(item.address.LongLabel) ? false : (seen[item.address.LongLabel] = true);
        });
    };

    const getAddressDataAsCsv = () => {

        const headers = ['Address', 'City', 'State', 'Zip', 'Lat', 'Lon'].join(',');

        const addressesToInclude = addressInRiskArea.filter(d=>{
            return d.address.Addr_type === 'PointAddress'
        });

        const addressesStr = addressesToInclude.map(d => {
            const rowData = `${d.address.Match_addr},${d.location.y},${d.location.x}`;
            return rowData;
        }).join('\r\n');

        const outputStr = `data:text/csv;charset=utf-8,${headers}\r\n${addressesStr}`;

        return outputStr;
    };

    const downloadAsCsv = () => {
        const csvStr = getAddressDataAsCsv();
        const encodedUri = encodeURI(csvStr);
        const link = document.createElement("a");

        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "addresses.csv");
        document.body.appendChild(link); // Required for FF
        link.click();
    };

    const openDemoReport = () => {
        const ext = mapControl.getMapViewExtent();
        console.log(ext);
        window.open("https://esribizteam.maps.arcgis.com/apps/webappviewer/index.html?id=f592f7df6e644ae6b0f73ea5e462d335");
    };

    return {
        init,
        downloadAsCsv
    };

}