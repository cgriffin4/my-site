import DBContext, { DataModel } from "..";

export default class Run extends DataModel {
    constructor(dbContext) {
        const model = {
            fortytwo: 42
        };
        super(dbContext, model);
    }
}

async function runLoader({ params }) {
    const dbContext = DBContext();
    const runs = await new Run(dbContext).all();

    return [{ fortytwo: 42 }];
    
    //const run = await new Run(dbContext).all();
    //return run;
}

export { runLoader };