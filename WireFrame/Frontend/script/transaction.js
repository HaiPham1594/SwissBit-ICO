var app = new Vue({
    el: '#app',
    computed: {
        daytime() {
            let daytime = "";
            let d = new Date();
            if (d.getHours() > 12) {
                daytime = "PM"
            } else {
                daytime = "AM"
            }
            return (d.getFullYear()) + "-" +
                (("0" + (d.getMonth() + 1)).slice(-2)) + " " + (("0" + d.getDate()).slice(-2)) + "-" +
                (("0" + d.getHours()).slice(-2)) + ":" + (("0" + d.getMinutes()).slice(-2)) + " " + daytime
        },
        daytime2() {
            let daytime = "";
            let d = new Date();
            if (d.getHours() > 12) {
                daytime = "PM"
            } else {
                daytime = "AM"
            }
            let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return (("0" + d.getDate()).slice(-2)) + " " + months[d.getMonth()] + ", " + (("0" + d.getYear()).slice(-2)) + " " + (("0" + d.getHours()).slice(-2)) + ":" + (("0" + d.getMinutes()).slice(-2)) + daytime;
        }
    }
})