export class responseModel {


    constructor(
        public status?: string,//bei result false wenn mysqli fehlschlug
        public code?: string

    ) {

    }

}