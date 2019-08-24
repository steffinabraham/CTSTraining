const fs=require('fs');
const EventEmitter=require('events');
class withlog extends EventEmitter{
    execute(asyncFunc,...args){
        console.time('Execute');
        this.emit('begin');
        asyncFunc(...args,(err,data)=>{
            if(err){
                return this.emit('error',err);
            }
            this.emit('data',data);
            console.timeEnd('execute');
            this.emit('end');
        });
    }
}
const Withlog=new withlog();
Withlog.on('begin',()=>
    console.log('About to execute'));
    Withlog.on('end',()=>
    console.log('Done with execute')
    );
    Withlog.execute(()=>
    console.log('***Executing task***'));
