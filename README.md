# SkyLarkProject
This project is made with django framework. This projects shows all satellite data in map.

## Features :
- Login page, Logout URL (Authentication)
- Status of JSON file selection in dashboard
- On "json file upload", Selects only JSON file from pc and show preview of it (first 7000 character)
- Validate pattern of selected file to standard json pattern (Checks only first index)
- If file content pattern doesn't satisfy standard pattern, It shows error and rejects file selection
- Shows progress bar during uploading
- In "select json file", we can select file by only single click. 
- We can delete uploaded file by clicking on delete
- In "view json in pagination way", We have to put number in number box and hit enter, it will list out 50 more rows
- In "Settings", We can change background colour, font colour, number of locations should be show in map and can be set default value
- first you have to click on select box, It will activate option. to remove filter, you have to select "-----".
    In map, you can filter location by selecting proper option you can filter by 
    ```sh
      i. Drone Type
     ii. Poilet ID
    iii. Last seen
    ```
- We can see satellite name by hovering on location and by clicking on location we can see whole detail of satellite
- We can adjust map focus by scrolling
