import React,{useEffect,useState} from 'react'
import Chart from 'react-apexcharts'
import axios from 'axios'

function Cart() {
    
    const [count,setCount] = useState(1);
    const [data,setData] = useState();

    let cat = [];
    let sal = [];

    // useEffect(() => {
    //     const int = setInterval(() => {
    //         axios.get('http://localhost:1234/emp')
    //         .then(res => {
    //             setData(res.data)
                
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     },2000);
    //     return () => {
    //         window.clearInterval(int); // clear the interval in the cleanup function
    //       };
    // },[data]);

    useEffect(() => {
        axios.get('http://localhost:1234/emp')
            .then(res => {
                for(let i=0;i < res.data.length; i++){
                    cat.push(res.data[i].emp_age)
                    sal.push(res.data[i].emp_salary)
                }
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    // console.log(data)
    // for(let i=0;i < count; i++){
    //     cat.push(data[i].emp_age)
    //     sal.push(data[i].emp_salary)
    // }

    const vish = {
        options : {
            chart: {
                id: 'apexchart-example'
              },
              xaxis: {
                categories: cat
              }
        },
        series : [{
            name: 'series-1',
            data: sal
        }]
    }
    
    return (
        <div>
            <Chart options={vish.options} series={vish.series} type="bar" width={500} height={320} />
            {count}
        </div>
    )
}

export default Cart
