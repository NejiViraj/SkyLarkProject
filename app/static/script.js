
$(function () {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(window).resize(function (e) {
        if ($(window).width() <= 768) {
            $("#wrapper").removeClass("toggled");
        } else {
            $("#wrapper").addClass("toggled");
        }
    });
});





function Map_Data_Shower(drone_name, reg_id, latitude, longitude, last_seen,
    first_launch, total_flight_time_min, drone_id, Model_name, endurance_min,
    brand, sl_no, model_year, type, piolet_id, piolet_name, address,
    experience, phone, skill, country) {
    var a_kjndkjfnjkdfnjkdnkj = '<table>' +
        '        <tbody>' +
        '            <tr>' +
        '                <td colspan="3" class="tb"></td>' +
        '                <td colspan="3" class="tb"><b>' + drone_name + '</b></td>' +
        '                <td colspan="3" class="tb"><b>Reg. id : </b>' + reg_id + '</td>' +
        '            </tr>' +
        '            <tr>' +
        '                <td colspan="3" rowspan="2"><b>Location</b></td>' +
        '                <td colspan="3" class="tb-right"><b>Latitude</b></td>' +
        '                <td colspan="3" class="tb-left">' + latitude + '</td>' +
        '            </tr>' +
        '            <tr>' +
        '                <td colspan="3" class="tb-right"><b>Longitude</b></td>' +
        '                <td colspan="3" class="tb-left">' + longitude + '</td>' +
        '            </tr>' +
        '            <tr>' +
        '                <td colspan="4" class="tb"><b>Last seen</b></td>' +
        '                <td rowspan="3" class="tb"></td>' +
        '                <td colspan="4" class="tb">' + last_seen + '</td> <!-- last_seen -->' +
        '            </tr>' +
        '            <tr>' +
        '                <td colspan="4" class="tb"><b>First launch</b></td>' +
        '                <td colspan="4" class="tb">' + first_launch + '</td> <!-- first_launch -->' +
        '            </tr>' +
        '            <tr>' +
        '                <td colspan="4" class="tb"><b>Total flight time in minutes</b></td>' +
        '                <td colspan="4" class="tb">' + total_flight_time_min + '</td> <!-- total_flight_time_min -->' +
        '            </tr>' +
        '            <tr>' +
        '                <td colspan="7" class="tb-right tb-bottom"><b>Drone type</b></td>' +
        '                <td colspan="2" class="tb-left"><b>Drone id : </b>' + drone_id + '</td> <!-- drone id -->' +
        '            </tr>' +
        '            <tr>' +
        '                <td rowspan="3" class="tb"></td>' +
        '                <td colspan="2" class="tb-right"><b>Model name</b></td>' +
        '                <td colspan="2" class="tb-left">' + Model_name + '</td> <!-- Model name -->' +
        '                <td colspan="2" class="tb-right"><b>Endurance min</b></td>' +
        '                <td colspan="2" class="tb-left">' + endurance_min + '</td> <!-- endurance_min -->' +
        '            </tr>' +
        '            <tr>' +
        '                <td colspan="2" class="tb-right"><b>Brand</b></td>' +
        '                <td colspan="2" class="tb-left">' + brand + '</td> <!-- brand -->' +
        '                <td colspan="2" class="tb-right"><b>SL. no</b></td>' +
        '                <td colspan="2" class="tb-left">' + sl_no + '</td> <!-- sl_no -->' +
        '            </tr>' +
        '            <tr>' +
        '                <td colspan="2" class="tb-right"><b>Model year</b></td>' +
        '                <td colspan="2" class="tb-left">' + model_year + '</td> <!-- model_year -->' +
        '                <td colspan="2" class="tb-right"><b>Type</b></td>' +
        '                <td colspan="2" class="tb-left">' + type + '</td> <!-- type -->' +
        '            </tr>' +
        '            <tr>' +
        '                <td colspan="7" class="tb-right tb-bottom"><b>Pilot</b></td>' +
        '                <td colspan="2" class="tb-left"><b>Piolet id : </b>' + piolet_id + '</td> <!-- piolet id -->' +
        '            </tr>' +
        '            <tr>' +
        '                <td rowspan="3" class="tb"></td>' +
        '                <td colspan="2" class="tb-right"><b>Name</b></td>' +
        '                <td colspan="2" class="tb-left">' + piolet_name + '</td> <!-- name -->' +
        '                <td colspan="2" class="tb-right"><b>Address</b></td>' +
        '                <td colspan="2" class="tb-left">' + address + '</td> <!-- address -->' +
        '            </tr>' +
        '            <tr>' +
        '                <td colspan="2" class="tb-right"><b>Experience</b></td>' +
        '                <td colspan="2" class="tb-left">' + experience + '</td> <!-- experience -->' +
        '                <td colspan="2" class="tb-right"><b>Phone</b></td>' +
        '                <td colspan="2" class="tb-left">' + phone + '</td> <!-- phone -->' +
        '            </tr>' +
        '            <tr>' +
        '                <td colspan="2" class="tb-right"><b>Skill</b></td>' +
        '                <td colspan="2" class="tb-left">' + skill + '</td> <!-- skill -->' +
        '                <td colspan="2" class="tb-right"><b>Country</b></td>' +
        '                <td colspan="2" class="tb-left">' + country + '</td> <!-- country -->' +
        '            </tr>' +
        '        </tbody>' +
        '    </table>'
    return a_kjndkjfnjkdfnjkdnkj
}









































// var locations = [
//   ['Bondi Beach', -33.890542, 151.274856, 4],
//   ['Coogee Beach', -33.923036, 151.259052, 5],
//   ['Cronulla Beach', -34.028249, 151.157507, 3],
//   ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
//   ['Maroubra Beach', -33.950198, 151.259302, 1]
// ];

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(26.027207835264562, 85.05834646542837),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

// for (i = 0; i < locations.length; i++) {  
//   marker = new google.maps.Marker({
//     position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//     map: map
//   });

//   google.maps.event.addListener(marker, 'click', (function(marker, i) {
//     return function() {
//       infowindow.setContent(locations[i][0]);
//       infowindow.open(map, marker);
//     }
//   })(marker, i));
// }

function uniques(a){return a.filter((item, i, ar) => ar.indexOf(item) === i);}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


var my_marker = [];
var drone_type_ = [];
var piolet_id_ = [];
var last_seen_ = [];
var data1 = ""
readTextFile("/media/"+localStorage.getItem("json_file"), function (text) {
    data1 = JSON.parse(text);
});
var i = 0
var mm = setInterval(function () {

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(data1[i]['location']['latitude'], data1[i]['location']['longitude']),
        map: map
    });

    google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
        return function () {
            infowindow.setContent("<h5>" + data1[i]['drone_name'] + "</h5>");
            infowindow.open(map, marker);
        }
    })(marker, i));

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            var uheuhui = Map_Data_Shower(
                data1[i]["drone_name"], data1[i]["reg_id"], data1[i]["location"]['latitude'], data1[i]["location"]["longitude"], data1[i]["last_seen"],
                data1[i]["first_launch"], data1[i]["total_flight_time_min"], data1[i]["drone_type"]['id'], data1[i]["drone_type"]['model_name'],
                data1[i]["drone_type"]['endurance_min'], data1[i]["drone_type"]['brand'], data1[i]["drone_type"]['sl_no'],
                data1[i]["drone_type"]['model_year'], data1[i]["drone_type"]['type'], data1[i]["pilot"]['id'], data1[i]["pilot"]["name"],
                data1[i]["pilot"]["address"], data1[i]["pilot"]["experience"], data1[i]["pilot"]["phone"], data1[i]["pilot"]["skill"], data1[i]["pilot"]["country"]
            )
            infowindow.setContent(uheuhui);
            infowindow.open(map, marker);
        }
    })(marker, i));
    my_marker.push(marker);
    drone_type_.push(data1[i]["drone_type"]['type']);
    piolet_id_.push(data1[i]["pilot"]['id']);
    last_seen_.push(data1[i]["last_seen"]);
    i += 1;
    if (i == parseInt(localStorage.getItem('Locations_numbers',10))) {
        clearInterval(mm)
    }

}, 100);




































































function add_In_Drone_Type(){
    var uni = uniques(drone_type_);
    for(var i=0; i<uni.length; i++){
        if (!$("#Drone_Type option[value='" + uni[i] + "']").length){
            $("#Drone_Type").append('<option value="'+uni[i]+'">'+uni[i]+'</option>');
        }
    };
}
function add_In_Poilet_ID(){
    var uni = uniques(piolet_id_);
    for(var i=0; i<uni.length; i++){
        if (!$("#Poilet_ID option[value='" + uni[i] + "']").length){
            $("#Poilet_ID").append('<option value="'+uni[i]+'">'+uni[i]+'</option>');
        }
    };
}
function add_In_Last_seen(){
    var uni = uniques(last_seen_);
    for(var i=0; i<uni.length; i++){
        if (!$("#Last_seen option[value='" + uni[i] + "']").length){
            $("#Last_seen").append('<option value="'+uni[i]+'">'+uni[i]+'</option>');
        }
    };
}











































var filterMarkers_Drone_Type = function (category) {
    // console.log(category)
    if(category == ''){
        for(var i=0; i<= drone_type_.length; i++){
            my_marker[i].setVisible(true); 
        }
    }
    counter = 0;
    for(var i=0; i< drone_type_.length; i++){
        if(drone_type_[i] == category){
            console.log(counter);
            my_marker[counter].setVisible(true);            
        }else{
            my_marker[counter].setVisible(false);
        }
        counter += 1
    }
}

var filterMarkers_Poilet_ID = function (category) {
    // console.log(category)
    if(category == ''){
        for(var i=0; i<= drone_type_.length; i++){
            my_marker[i].setVisible(true); 
        }
    }
    counter = 0;
    for(var i=0; i< piolet_id_.length; i++){
        if(piolet_id_[i] == category){
            console.log(counter);
            my_marker[counter].setVisible(true);            
        }else{
            my_marker[counter].setVisible(false);
        }
        counter += 1
    }
}

var filterMarkers_Last_seen = function (category) {
    // console.log(category)
    if(category == ''){
        for(var i=0; i<= drone_type_.length; i++){
            my_marker[i].setVisible(true); 
        }
    }
    counter = 0;
    for(var i=0; i< last_seen_.length; i++){
        if(last_seen_[i] == category){
            console.log(counter);
            my_marker[counter].setVisible(true);            
        }else{
            my_marker[counter].setVisible(false);
        }
        counter += 1
    }
}