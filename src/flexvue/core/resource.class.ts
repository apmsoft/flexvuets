import AsyncTask from '@flexvue/asynctask';

class R {
    static [propName: string]: any;
    static async __init(resources : {[key:string]: string}) {
        try {
            for (const [key, path] of Object.entries(resources)) {
                const resourceData = await new AsyncTask().doImport(path);
                R[key] = resourceData.default;
            }
        } catch (err) {
            throw new Error("Error loading resource: " + err);
        }
    }
}

export default R;