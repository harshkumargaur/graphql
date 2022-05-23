orders= [
    {
        date : '2012-03-01',
        subtotal : 2341,
        items:[
            {
                product:{
                    id:'redshoe',
                    description: 'old red shoe'
                },
                qty:2
            }
        ]
    },
  
]

const getAllOrders = function(){
    return orders;
}


module.exports = getAllOrders;