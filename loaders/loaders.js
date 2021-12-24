import expressLoader from './express';

export default async (expressApp)  => {
    try {
        await expressLoader(expressApp);
        console.log("Express is loaded");
    } catch(e){
        console.log("Error Loading Express")
    }
}   