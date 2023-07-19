export default function DBContext() {
    /**
     * This is where we'd need to connect to google sheets?
     */
}

class DataModel {
    constructor(dbContext, model) {
        this.db = dbContext;
        this.model = model;
    }

    all = async () => {
        //I dunno
    }
}

export { DataModel };