export default {
    name: 'cellRender',
    functional: true,
    props: {
        row: Object,
        renderData: {
            
        },
        index: Number,
        // column: {
        //     type: Object,
        //     default: null
        // }
        
    },
    data(){
        return{
            a: "ll"
        }
    },
    render: (h, ctx) => {
        const params = {
            row: ctx.props.row,
            index: ctx.props.index
        };
        // if (ctx.props.column) params.column = ctx.props.column;
        let indexRender=-1
        ctx.props.renderData.forEach((item,index) => {
            if(item.render){
                indexRender = index
            }
        });

        if(indexRender!==-1){
            return ctx.props.renderData[indexRender].render(h,params);
        }
        
    },
    
};