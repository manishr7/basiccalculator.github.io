const elements = document.getElementsByClassName("item");
const out = document.getElementById('out');
console.log(elements)




for (let i = 1; i < elements.length - 1; i++) {
    elements[i].addEventListener('click', function concat() {
        let value = elements[i].getAttribute("id");
        console.log(value);
        let newvalue = value;
        switch (value) {
            case 'one':
                newvalue = '1';
                break;
            case 'two':
                newvalue = '2';
                break;
            case 'three':
                newvalue = '3';
                break;
            case 'four':
                newvalue = '4';
                break;
            case 'five':
                newvalue = '5';
                break;
            case 'six':
                newvalue = '6';
                break;
            case 'seven':
                newvalue = '7';
                break;
            case 'eight':
                newvalue = '8';
                break;
            case 'nine':
                newvalue = '9';
                break;
            case 'add':
                newvalue = '+';
                break;
            case 'sub':
                newvalue = '-';
                break;

            default:
                break;
        }


        if (((out.innerHTML == '0') || (out.innerHTML == '+') || (out.innerHTML == '-')) && ((newvalue == '+') || (newvalue == '-'))) {
            out.innerHTML = newvalue;
        }
        else if (((out.innerHTML.charAt(out.innerHTML.length - 1) == '+') || (out.innerHTML.charAt(out.innerHTML.length - 1) == '-')) && ((newvalue == '+') || (newvalue == '-'))) {
            if ((out.innerHTML.charAt(out.innerHTML.length - 1) == '+') && (newvalue == '-')) {
                const string = out.innerHTML.substring(0, out.innerHTML.length - 1);
                out.innerHTML = string + '-';
            }
            else if ((out.innerHTML.charAt(out.innerHTML.length - 1) == '-') && (newvalue == '+')) {
                const string = out.innerHTML.substring(0, out.innerHTML.length - 1);
                out.innerHTML = string + '+';
            }
        }


        else if (out.innerHTML == '0') {
            out.innerHTML = newvalue;
        }
        else {
            out.innerHTML += newvalue;
        }
        console.log("clicked");
    })
}
elements[12].addEventListener('click', function calc() {
   console.log (out.innerHTML);
    let temp=eval(out.innerHTML);
    out.innerHTML=temp;
}
)

console.log("Deployed");