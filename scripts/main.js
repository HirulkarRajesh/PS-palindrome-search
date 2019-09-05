var clickBtnSearch = function () {
    var str = $("#searchBox").val();
    var result = "";
    if (str) {
        result = Search_Palindrome(str);
    } else {
        result = "Please provide Input.";
    }
    $('#resultSpan').empty();
    $('#resultSpan').append(result);
}
///used this function for search for all palindroms presents in given string
var Search_Palindrome = function (str) {

    var final_arr = [];
    var str_arr = str.split(" ");
    ///generate array of palindroms in griven string
    if (str_arr) {
        for (var i = 0; i < str_arr.length; i++) {
            if (check_Palindrome(str_arr[i])) {
                final_arr.push(str_arr[i]);
            }
        }
    }

    /// check/and get second highest palindrom from array
    if (final_arr.length <= 0) {
        console.log("No Palindrome exists");
        return "No Palindrome exists";
    } else if (final_arr.length == 1) {
        console.log("No Second Palindrome exists");
        return "No Second Palindrome exists";
    } else {
        var max = 0;
        var max_index = 0;
        var min = 0
        var min_index = 0

        for (var p = 0; p < final_arr.length; p++) {

            if (max < final_arr[p].length) {
                min_index = max_index
                max = final_arr[p].length;
                max_index = p;
            } else {
                if (min < final_arr[p].length) {

                    min = final_arr[p].length;
                    min_index = p;
                }

            }
        }
        console.log("Found Palindrome: ", final_arr[max_index], final_arr[min_index]);
        return "Found Palindrome: " + final_arr[min_index];

    }
}

///used this function for check provided input string is palindrom or not.
var check_Palindrome = function (str_entry) {

    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;
    ///if string is empty
    if (cstr === "") {
        console.log("Nothing found!");
        return false;
    }
    ///logic for palindrom
    try {
        ///check if string divideby 2 then create 2 two substring.
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
            
            if (cstr.length === 1) {

                return true;
            } else {

                ccount = (cstr.length - 1) / 2;
            }
        }

        for (var x = 0; x < ccount; x++) {

            if (cstr[x] != cstr.slice(-1 - x)[0]) {

                return false;
            }
        }
    } catch (error) {
        console.log("errror in string");
        return false;
    }

    return true;
}

