function hexConversion(data){
    data = data.toString(16).toUpperCase();
    if(data.length == 1){
        data = '0'+ data;
    }
    return data
}
function hexConversionResult(data){
    if (data < 0){
        data = 0; 
        data = hexConversion(data) 
    }
    else if(data > 255){
        data = 255;
       data= hexConversion(data)
    } 
    else {
        data = hexConversion(data);
    }
    
    return data
}
function rgb(r,g,b){
    let r_copy = r;
    let g_copy= g;
    let b_copy = b;
    let result = ''
    r_hex_code = hexConversionResult(r_copy);
    g_hex_code = hexConversionResult(g_copy);
    b_hex_code = hexConversionResult(b_copy);
    
    return r_hex_code+g_hex_code+b_hex_code
}

let check = rgb(-6,189,221);
console.log(check)